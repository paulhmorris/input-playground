import { useInputContext } from "~/InputContext";

export function ValidityState() {
  const { validity } = useInputContext();

  return (
    <div className="px-8">
      <h2 className="font-bold text-lg tracking-wide mb-8 w-full bg-theme-purple/10 rounded p-2">
        ValidityState
      </h2>
      <pre className="text-left">
        <code>{validity}</code>
      </pre>
    </div>
  );
}
