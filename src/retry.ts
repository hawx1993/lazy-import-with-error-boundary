export class MaxRetriesError {
  readonly name = 'MaxRetriesError';

  readonly stack?: string;

  readonly message: string;

  constructor(message?: string) {
    const error = new Error(message);
    this.stack = error.stack;
    this.message = error.message;
  }
}

export async function retry<T, P>(
  fn: (props?: P) => Promise<T>,
  retriesLeft: number = 2,
  props?: P,
  interval: number = 500,
  exponential: boolean = true
): Promise<T> {
  try {
    const val = await fn(props);
    return val;
  } catch (error) {
    if (retriesLeft) {
      await new Promise(r => setTimeout(r, interval));
      return retry(
        fn,
        retriesLeft - 1,
        props,
        exponential ? interval * 2 : interval,
        exponential
      );
    }
    throw new MaxRetriesError();
  }
}
