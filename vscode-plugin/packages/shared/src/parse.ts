/* eslint-disable no-plusplus */
import { Language } from './interface';

export interface Position { offset: number; line: number; column: number; }
export interface Location { start?: Position; end?: Position; }
export interface SourceLocation { locations: Location[]; contents: string[]; }
export interface ParsedMarkdown { location: Location; content: string; language: Language; }

function isCode<T extends Language>(source: string, lang: T, start: number,): T | false {
  return source.slice(start, start + lang.length) === lang && lang;
}

function isBlock(source: string, cursor: number) {
  return source.slice(cursor, cursor + 3) === '```';
}

/** Extract embedded code blocks from Markdown file. */
export function parse (source: string, singleFile = false): ParsedMarkdown[] {

  // This is our final result: a collection of the extracted code blocks.
  // Each block is annotated with its language, and its start and end locations.
  // A "virtual file" is created out of each code block.
  let codeBlocks: ParsedMarkdown[] = [];

  // This is the result buffer. It is an array of characters, which
  // corresponds to the source string, but only contains the characters
  // from the current code block; the rest are replaced with spaces.
  let codeBlockContent: string[] = [];

  let charIndex = 0;
  let line      = 0;
  let column    = 0;
  let shouldReplace = true;
  let location: Location | undefined = {};
  let lang:     Language | false     = false;

  // Iterate over the source string, character by character,
  // identifying and extracting code blocks.
  while (charIndex < source.length) {

    // Copy the current character of the source code to the result buffer.
    // We need to ignore the plaintext outside the code blocks, so if we're
    // currently outside a code block, we just copy a space instead.
    const isLineBreak = source[charIndex] === '\n';
    if (shouldReplace && !isLineBreak) {
      codeBlockContent[charIndex] = ' '
    } else {
      codeBlockContent[charIndex] = source[charIndex]
    }

    // Progress forward, incrementing the current character, column, and line numbers.
    charIndex++;
    column++;
    if (isLineBreak) {
      line++;
      column = 0;
    }

    // Identify start of code block:
    // If there are 3 backticks starting from the current character,
    // then a source code block begins at this index.
    // FIXME: Shouldn't this also check if column === 0?
    if (isBlock(source, charIndex)) {

      // Determine the language based on the string
      // that immediately follows the three backticks.
      // If it isn't one of the supported languages, carry on.
      lang =
        isCode(source, 'typescript', charIndex + 3) ||
        isCode(source, 'javascript', charIndex + 3) ||
        isCode(source, 'tsx',        charIndex + 3) ||
        isCode(source, 'jsx',        charIndex + 3) ||
        isCode(source, 'js',         charIndex + 3) ||
        isCode(source, 'ts',         charIndex + 3);
      if (!lang) continue

      // ```tsx live=true - what is this?
      // Replace the line that opens the code block with spaces.
      while (charIndex < source.length && source[charIndex] !== '\n') {
        codeBlockContent[charIndex] = ' ';
        charIndex++;
      }

      // Set shouldReplace to false, so that the code in the block
      // isn't replaced by spaces by the code around line 30
      shouldReplace = false;

      // Set the beginning of the current code block.
      location = { start: { line: line + 1, column, offset: charIndex + 1 } };

      continue

    }

    // Identify end of code block:
    // If a code block is already open,
    // and there are three backticks at the current index,
    // then this is the end of the block.
    if (location?.start?.line && isBlock(source, charIndex + 3)) {

      // Replace closing line with spaces.
      while (charIndex < source.length && source[charIndex] !== '\n') {
        codeBlockContent[charIndex] = source[charIndex];
        charIndex++;
      }

      // Store the end of the block.
      location.end = { line, column, offset: charIndex };

      // Since we're out of a block, resume replacing characters with spaces.
      shouldReplace = true;

      // Collect the code block.
      // FIXME: This is where single-file mode goes.
      codeBlocks.push({
        location,
        content: codeBlockContent.join(''),
        language: lang as Language,
      });

      // Clear the result buffer by replacing all characters in it with spaces.
      for (const index in codeBlockContent) {
        if (codeBlockContent[index] !== '\n') {
          codeBlockContent[index] = ' ';
        }
      }

      // Reset the language and location.
      lang     = false;
      location = undefined;

      continue

    }
  }

  // Tacked-on single-file mode.
  // If enabled, the extracted code blocks are replaced with one single code block,
  // which has the start location and language of the first extracted code block,
  // the end location of the last one, and the combined content of all.
  // This would be more performant belongs in the main algorithm.
  if (singleFile && codeBlocks.length > 0) {

    // Take the start and language of the first code block, the end of the last one,
    // and the content of the source code with all non-newline characters replaced by spaces.
    const mergedContent: string[] = [...source].map(x=>x === '\n'?x:' ');
    const mergedCodeBlock: ParsedMarkdown = {
      content: '',
      language: codeBlocks[0].language,
      location: {
        start: codeBlocks[0].location.start,
        end:   codeBlocks[codeBlocks.length-1].location.end
      },
    };


    // Copy the content of each extracted code block into the merged code block.
    for (const {content} of codeBlocks) {
      for (let charIndex = 0; charIndex < content.length; charIndex++) {
        // Since the result buffer is cleared between code blocks,
        // each individual code block has spaces in the place of the
        // content of the other code blocks.
        // Checking that the current position of the merged code block contains a space
        // makes sure that  subsequent code blocks don't overwrite the content of
        // previous ones with spaces.
        // The number of words needed to explain this is a direct result of the overall
        // "upside-down-ness" of implementing this in a the current non-optimal way,
        // i.e. by merging code blocks at the end instead of directly
        // generating the merged code block in the first iteration.
        if (mergedContent[charIndex] === ' ') {
          mergedContent[charIndex] = content[charIndex]
        }
      }
    }

    mergedCodeBlock.content = mergedContent.join('')

    return [mergedCodeBlock]
  }

  return codeBlocks;
}
