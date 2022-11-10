import React from 'react';
import loadable, {
  DefaultComponent,
  Options,
  LoadableComponentOptions,
} from '@loadable/component';
import withErrorBoundary from './withErrorBoundary';
import { retry, MaxRetriesError } from './retry';
import { ErrorProps } from './types';

type LoadableComponentOptions<T> = {
  timeout?: number;
  delay?: number;
  Error?: React.ComponentType<ErrorProps>;
  retries?: number;
} & Options<T>;

const RETRIES = 2;

function loadableComponent<T>(
  loadFn: (props: T) => Promise<DefaultComponent<T>>,
  options: LoadableComponentOptions<T> = {},
) {
  const { retries = RETRIES, Error } = options;
  const newLoadFn = (props: T) => retry(loadFn, retries, props);
  return withErrorBoundary(loadable(newLoadFn), {
    Error,
  });
}

export { loadableComponent, retry, MaxRetriesError };
