import { Header } from "~/components/Header";
import { InputTypes } from "~/components/InputTypes";
import { PrimaryInput } from "~/components/PrimaryInput";
import { Required } from "~/components/Required";
import { ValidityState } from "~/components/ValidityState";
import { InputContextProvider } from "~/InputContext";

function App() {
  return (
    <InputContextProvider>
      <Header />
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="mt-12 flex flex-col items-center max-w-md mx-auto">
          <p className="text-gray-500 text-sm mb-1 self-start ml-1">
            Tip! Hover over the input to see the browser&apos;s native tooltip
          </p>
          <PrimaryInput placeholder="heyooooo" />
        </div>
        <section className="mt-12 grid grid-cols-7 divide-x-2 divide-theme-purple max-w-screen-lg mx-auto">
          {/* Options */}
          <div className="space-y-8 col-span-4 px-8 flex flex-col">
            <h2 className="font-bold text-lg tracking-wide w-full bg-theme-purple/10 rounded p-2">
              Input Options
            </h2>
            <InputTypes />
            <Required />
          </div>
          <div className="col-span-3">
            <ValidityState />
          </div>
        </section>
      </div>
    </InputContextProvider>
  );
}

export default App;
