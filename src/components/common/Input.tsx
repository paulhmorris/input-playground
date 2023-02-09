import type { ChangeEvent, ComponentPropsWithoutRef } from "react";
import { useInputContext } from "~/InputContext";
import type { InputOptions } from "~/types";

type Props = {
  name: `${keyof InputOptions}`;
  label: string;
  props?: ComponentPropsWithoutRef<"input">;
};

export function Input({ label, name, props }: Props) {
  const { options, updateOptions } = useInputContext();

  const textOnlyAttributes = ["minLength", "maxLength", "pattern"];
  const numberOnlyAttributes = ["min", "max"];
  const isDisabled =
    props?.disabled ||
    (options.type === "number" && textOnlyAttributes.includes(name)) ||
    (options.type === "text" && numberOnlyAttributes.includes(name));

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value: inputValue } = e.target;
    const updatedOptions = { ...options, [name]: inputValue };
    updateOptions(updatedOptions);
  }

  return (
    <div className="flex flex-col text-left">
      <label
        htmlFor={name}
        className={`font-medium mb-1 transition ${isDisabled && "opacity-50"}`}
      >
        {label}
      </label>
      <input
        {...props}
        id={name}
        type="text"
        title={
          isDisabled
            ? `This attribute has no effect on input type ${options.type}`
            : undefined
        }
        onChange={handleChange}
        className="p-2 transition rounded-sm border-pink-500/50 border-4 focus:border-pink-500 focus:ring-0 w-full text-base disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isDisabled}
      />
    </div>
  );
}
