import React from 'react';

type State = {
  hasError: boolean;
};

type ErrorProps = {
  retry: () => void;
};

type Options = {
  Error?: React.ComponentType<ErrorProps>;
};

export { State, ErrorProps, Options };
