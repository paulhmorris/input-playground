import type { ComponentPropsWithoutRef } from "react";

type Props = {
  name: string;
  label: string;
  props: ComponentPropsWithoutRef<"input">;
};

export function Input({ label, name, props }: Props) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        id={name}
        type="text"
        onClick={() => console.log("clicked")}
        className="p-2 transition rounded-sm border-pink-500/50 border-4 focus:border-pink-500 focus:ring-0 w-full text-base"
      />
    </div>
  );
}
