// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const createHandler = <T extends Function>(fn: T) => {
  return [fn.name, fn] as [string, T];
};
