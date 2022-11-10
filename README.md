# lazy-import-with-error-boundary

### Usages

1、install
```bash
$ yarn add lazy-import-with-error-boundary
```

import lazyEntrance in your react router entrance:

2、import deps

```tsx
import { lazyEntrance  } from 'lazy-import-with-error-boundary';

export const Entrance = lazyEntrance(() =>
  import(
    /* webpackChunkName: "contact.entrance" */ /* webpackPrefetch: true */ './container/Entrance'
  ),
);
```