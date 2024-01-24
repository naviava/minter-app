interface IProps {}

export function Footer({}: IProps) {
  return (
    <footer className="mt-10 flex items-center justify-center p-6 text-sm">
      <div className="space-y-2 text-center">
        <p>
          Powered by{" "}
          <a
            href="https://www.mintbase.xyz"
            target="_blank"
            className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text font-semibold text-transparent"
          >
            Mintbase
          </a>{" "}
          and{" "}
          <a
            href="https://near.org/"
            target="_blank"
            className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text font-semibold text-transparent"
          >
            NEAR
          </a>{" "}
          ❤️
        </p>
        <p className="text-xs">Copyright &copy; 2024 Navin Avadhani</p>
      </div>
    </footer>
  );
}
