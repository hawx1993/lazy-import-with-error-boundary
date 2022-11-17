# lazy-import-with-error-boundary

<p align="center">
  <img src="https://img.shields.io/github/license/hawx1993/lazy-import-with-error-boundary" />
  <img src="https://img.shields.io/github/stars/hawx1993/lazy-import-with-error-boundary" /> 
  <img src="https://img.shields.io/github/forks/hawx1993/lazy-import-with-error-boundary" /> 
  <img src="https://img.shields.io/github/issues/hawx1993/lazy-import-with-error-boundary" />
</p>


Support code splitting, support load on-demand , support hooks component error boundary.

If your page crashed , there will be a bottom page that supports refresh function
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