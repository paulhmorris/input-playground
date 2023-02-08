export function Header() {
  return (
    <header className="pt-24 pb-12 w-full bg-theme-purple/5 border-b-2 border-theme-hot-pink/50">
      <div className="max-w-xl mx-auto">
        <h1 className="font-black text-6xl tracking-wide bg-clip-text bg-gradient-to-r from-theme-purple to-theme-hot-pink text-transparent py-1">
          Input Playground
        </h1>
        <p className="text-gray-600 mt-12 text-lg">
          The browser gives us a lot of builtin features for inputs that enhance
          the user experience and increase accessibility.
        </p>
        <p className="text-gray-600 mt-6 text-lg">
          Start by adding some text to the input, then change the attributes to
          see how it changes the UX, then watch the{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            <code className="text-base">ValidityState</code>
          </a>
          change based on your options.
        </p>
      </div>
    </header>
  );
}
