import { useInputContext } from "~/InputContext";

export function Required() {
  const { options, updateOptions } = useInputContext();

  return (
    <div className="flex">
      <div className="flex h-5 items-center">
        <input
          onChange={({ target }) => {
            updateOptions({ required: target.checked });
          }}
          defaultChecked={options.required}
          id="required"
          aria-describedby="required-description"
          name="required"
          type="checkbox"
          className="h-6 w-6 rounded border-gray-300 text-theme-purple focus:ring-theme-purple transition cursor-pointer"
        />
      </div>
      <label
        htmlFor="required"
        className="font-medium text-gray-700 ml-3 text-sm cursor-pointer"
      >
        Required
      </label>
    </div>
  );
}
