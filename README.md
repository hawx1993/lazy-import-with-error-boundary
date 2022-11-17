# lazy-import-with-error-boundary

### Usages

1、install
```bash
$ yarn add lazy-import-with-error-boundary
```

import lazyEntrance in your react router entrance:

2、Usage

```tsx
import { lazyEntrance  } from 'lazy-import-with-error-boundary';

export const Entrance = lazyEntrance(() =>
  import(
    /* webpackChunkName: "contact.entrance" */ /* webpackPrefetch: true */ './container/Entrance'
  ),
);
```

3、custom error component

```tsx
import { CustomError } from './error';

const CustomErrorComponent = ({ retry }: any) => (
  <CustomError onReload={retry} />
);

const CustomErrorPage = lazyEntrance(
  () =>
    import(
      /* webpackChunkName: "page.onlineScripting" */
      /* webpackPrefetch: true */
      /* webpackPreload: true */ './app'
    ),
  CustomErrorComponent,
);
```
more details: run demo, open: http://localhost:5173/custom-error-component
### Demo

```bash
$ yarn run dev
```

<img src="./demo/WechatIMG591.png" />