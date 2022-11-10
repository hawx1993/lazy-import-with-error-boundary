import React from 'react';
import { loadableComponent } from './loadable';
import { TryAgainPage } from './component/TryAgainPage';
import { ErrorProps } from './types';

interface DefaultImportedComponent<P> {
  default: React.ComponentType<P>;
}
type DefaultComponent<P> = React.ComponentType<P> | DefaultImportedComponent<P>;

const Error = ({ retry }: ErrorProps) => <TryAgainPage onReload={retry} />;

export function lazyEntrance<T>(
  loadFn: (props: T) => Promise<DefaultComponent<T>>
) {
  return loadableComponent(loadFn, {
    Loading: null,
    Error,
  });
}
