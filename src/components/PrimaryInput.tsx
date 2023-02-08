import type { ChangeEvent, ComponentPropsWithRef } from "react";
import { useEffect, useRef, useState } from "react";
import { useInputContext } from "~/InputContext";

export const PrimaryInput = (props: ComponentPropsWithRef<"input">) => {
  const { options, updateValidity } = useInputContext();
  const primaryRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    if (primaryRef.current) {
      updateValidity(primaryRef.current.validity);
    }
  }, [value, options]);

  return (
    <div className="p-1 rounded w-full bg-gradient-to-r from-theme-purple to-theme-hot-pink">
      <label htmlFor="primaryInput" className="sr-only">
        Primary Input
      </label>
      <input
        {...props}
        {...options}
        onChange={handleChange}
        id="primaryInput"
        ref={primaryRef}
        className="p-4 text-xl transition rounded-sm focus:ring-0 w-full border-0 focus:shadow-inner focus:shadow-theme-pink/25"
      />
      <p className="text-white text-left">
        Type: {options.type}, Required: {`${options.required}`}
      </p>
    </div>
  );
};
