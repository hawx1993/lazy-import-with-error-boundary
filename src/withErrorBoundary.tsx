import React from 'react';
import { LoadableComponent } from '@loadable/component';
import { MaxRetriesError } from './retry';
import { State, Options } from './types';

export async function retry<T, P>(
  fn: (props?: P) => Promise<T>,
  retriesLeft: number = 2,
  props?: P,
  interval: number = 500,
  exponential: boolean = true,
): Promise<T> {
  try {
    const val = await fn(props);
    return val;
  } catch (error) {
    if (retriesLeft) {
      await new Promise((r) => setTimeout(r, interval));
      return retry(
        fn,
        retriesLeft - 1,
        props,
        exponential ? interval * 2 : interval,
        exponential,
      );
    }
    throw new MaxRetriesError();
  }
}

export default function withErrorBoundary<P>(
  Loadable: LoadableComponent<P>,
  options: Options,
) {
  return class ErrorBoundary extends React.PureComponent<P, State> {
    state = {
      hasError: false,
    };

    retry = () => {
      this.setState({ hasError: false });
      Loadable.load(this.props);
    };

    componentDidCatch(error: Error) {
      if (error) {
        this.setState({
          hasError: true,
        });
      }
    }

    render() {
      if (this.state.hasError) {
        const { Error } = options;
        return <Error retry={this.retry} />;
      }

      return <Loadable {...this.props} />;
    }
  };
}
