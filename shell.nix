{pkgs ? import <nixpkgs> {}}: pkgs.mkShell {
  name = "youknow";
  nativeBuildInputs = with pkgs; [
    nodejs-14_x
    nodePackages.pnpm
    vscode
  ];
}
