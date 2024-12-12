// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const createHandler = <T extends Function>(fn: T) => {
  return (...args: unknown[]) => {
    return [fn.name + JSON.stringify(args), fn] as [string, T];
  };
};
