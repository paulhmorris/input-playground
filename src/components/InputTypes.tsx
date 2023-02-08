import { RadioGroup } from "@headlessui/react";
import { useInputContext } from "~/InputContext";
import type { InputOptions } from "~/types";
import { classNames } from "~/utils/helpers";

type InputTypeOption = {
  id: InputOptions["type"];
  label: string;
  defaultChecked?: boolean;
};

const data: Array<InputTypeOption> = [
  { id: "text", label: "text", defaultChecked: true },
  { id: "number", label: "number", defaultChecked: false },
  { id: "email", label: "email", defaultChecked: false },
  { id: "password", label: "password", defaultChecked: false },
  { id: "tel", label: "tel", defaultChecked: false },
  { id: "url", label: "url", defaultChecked: false },
];

export function InputTypes() {
  const { updateOptions } = useInputContext();
  return (
    <RadioGroup
      name="inputType"
      defaultValue="text"
      onChange={(value: InputOptions["type"]) => updateOptions({ type: value })}
    >
      <RadioGroup.Label>Choose an input type</RadioGroup.Label>
      <div className="flex flex-wrap gap-2 mt-2">
        {data.map((element) => {
          return (
            <RadioGroup.Option
              key={element.id}
              value={element.id}
              className={({ active, checked }) =>
                classNames(
                  active ? "ring-2 ring-offset-2 ring-theme-purple" : "",
                  checked
                    ? "bg-theme-purple border-transparent text-white"
                    : "bg-white border-theme-purple/50 text-gray-900 hover:bg-gray-50",
                  "border rounded-md p-2 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none"
                )
              }
            >
              <RadioGroup.Label as="span">{element.label}</RadioGroup.Label>
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
}
