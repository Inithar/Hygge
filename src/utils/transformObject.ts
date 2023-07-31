type GenericObject = {
  [key: string]: string | GenericObject;
};

type ObjectKeys<T extends GenericObject> = keyof T extends infer K
  ? K extends string
    ? T[K] extends GenericObject
      ? `${K}${Capitalize<ObjectKeys<T[K]>>}`
      : K
    : never
  : never;

export const transformObject = <T extends GenericObject>(obj: T, prefix: string = "") => {
  const object: Record<ObjectKeys<T>, string> = {};

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "string") {
      const newKey = prefix ? prefix + key.charAt(0).toUpperCase() + key.slice(1) : key;
      object[newKey as ObjectKeys<T>] = value;
    }

    if (typeof value === "object") {
      const nestedObject = transformObject(value, key);
      Object.assign(object, nestedObject);
    }
  }

  return object;
};
