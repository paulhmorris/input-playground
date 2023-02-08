export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function objectify(data: any) {
  const object: Record<string, unknown> = {};
  for (const key in data) {
    object[key] = data[key];
  }
  return object;
}
