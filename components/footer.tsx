export function Footer() {
  return (
    <footer className="mt-10 flex items-center justify-center p-6">
      <div className="space-y-2 text-center">
        <p className="text-xs">
          Powered by{" "}
          <a
            href="https://www.mintbase.xyz"
            target="_blank"
            className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent"
          >
            Mintbase
          </a>{" "}
          and{" "}
          <a
            href="https://arweave.net"
            target="_blank"
            className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent"
          >
            Arweave
          </a>{" "}
          ❤️
        </p>
        <p className="text-xs">Copyright &copy; 2024 Navin Avadhani</p>
      </div>
    </footer>
  );
}
