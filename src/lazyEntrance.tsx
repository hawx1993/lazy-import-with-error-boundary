import React from 'react';
import { loadableComponent } from './loadable';
import { TryAgainPage } from './component/TryAgainPage';
import { ErrorProps } from './types';

interface DefaultImportedComponent<P> {
  default: React.ComponentType<P>;
}
type DefaultComponent<P> = React.ComponentType<P> | DefaultImportedComponent<P>;

const ErrorComponent = ({ retry }: ErrorProps) => (
  <TryAgainPage onReload={retry} />
);

export function lazyEntrance<T>(
  loadFn: (props: T) => Promise<DefaultComponent<T>>,
  customErrorComponent?: React.ComponentType<ErrorProps>,
) {
  return loadableComponent(loadFn, {
    Loading: null,
    Error: customErrorComponent || ErrorComponent,
  });
}
export { ErrorComponent };
