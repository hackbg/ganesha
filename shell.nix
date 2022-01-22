{pkgs ? import <nixpkgs> {}}: pkgs.mkShell {
  name = "ganesha";
  nativeBuildInputs = with pkgs; [
    nodejs-14_x
    nodePackages.pnpm
    vscode
  ];
}
