# Components-client-blog

Components to use in the project modsen-client-blog

## Demo

[Online demo](https://components-client-blog.vercel.app) is also available! you can run demo on your local with:

- `git clone https://github.com/denbarabraza/components-client-blog.git`
- `yarn && yarn run storybook`
- Visit http://localhost:6006/

## Getting started

### Compatibility

Your project needs to use React 16 or later. If you use older version of React.

### Installation

`npm install components-client-blog`

`yarn add components-client-blog`


## User guide

### Loader

Loader for an application with the ability to set the background color and the loader itself

Example:

``` jsx
import React from 'react';
import { Loader as RootLoader } from 'components-client-blog';

export default function Loader() {
  return (
    <RootLoader
      borderTopColor='#5a34a9'
      borderColor='#eec14a'
      backgroundColorContainer='#e5e5e5ff'
    />
  );
}
```

Props:

``` jsx
  backgroundColorContainer: string;
  borderColor: string;
  borderTopColor: string;
```

### Button

A button with the ability to transfer different props (see props)

Example:

``` jsx
...
import { Button } from 'components-client-blog';

const HomeHeader = () => {
 
  ...

  return (
    <div className={styles.wrapper} style={backgroundStyle}>
      ....
        <Link href={`/blogPost/${id}`}>
          <Button title={t('Home.aboutButton')} isValid />
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
```

Props:

``` jsx
  type?: 'submit' | 'button';
  dataCy?:string;
  title: string;
  backgroundColor: string;
  hoverColor: string;
  isValid: boolean;
  callBack?: () => void;
```

### BurgerMenu

Burger Menu with a choice of values open and closed(true/false

Example:

``` jsx
...

import { BurgerMenu } from 'components-client-blog';

export const MenuHeader: FC<IMenuHeader> = ({ locale }) => {
  ...

  return (
    <div ref={node}>
     ...
      <BurgerMenu open={open} handleMenuOpen={handleMenuOpen} />
    </div>
  );
};

```

Props:

``` jsx
 open: boolean;
  handleMenuOpen: () => void;
```


### APIs

For [Loader](https://components-client-blog.vercel.app/?path=/story/reactcomponentlibrary-loader--loader-st)
and [Button](https://components-client-blog.vercel.app/?path=/story/reactcomponentlibrary-button--button-st).
and [BurgerMenu](https://components-client-blog.vercel.app/?path=/story/reactcomponentlibrary-burgermenu--burger-menu-st&globals=backgrounds.grid:!true;backgrounds.value:!hex(333333);measureEnabled:!true).




