export type InputOptions = {
  disabled?: boolean;
  required?: boolean;
  type?: "text" | "number" | "email" | "password" | "tel" | "url";
  minLength?: number;
  maxLength?: number;
  min?: string;
  max?: number;
  pattern?: string;
  autocomplete?: AutocompleteOptions;
};

export type AutocompleteOptions =
  | "on"
  | "name"
  | "email"
  | "username"
  | "new-password"
  | "current-password"
  | "one-time-code"
  | "tel"
  | "url";
