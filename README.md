Meteor package to preprocess [CSSX syntax](https://github.com/krasimir/cssx)

## Install
```
meteor add quadric:cssx
```

## Usage

First, create `*.cssx` files in your codebase like that:

```js
// myComponent.cssx

export default ({ margin= 0 }) => (
  <style>
    div {
      margin: {{ margin }}px;
      background-color: #F9F9F9;
    }

    div span {
      font-weight: bold;
    }

    div:hover {
      background-color: red;
    }
  </style>
);
```

Then, choose one of the following options:

#### * Inline Usage

Consume it as a styling object, applying the styles on each element.
```js
// myComponent.jsx
import rules from './myComponent.cssx';

const style = rules({ margin: 10});

export default = () => (
  <div style={style.div}>
    <span style={style['div span']}>Hello World!</span>
  </div>
);
```

#### * React wrapper

Install the [CSSX wrapper](https://github.com/krasimir/react-cssx) and let it apply the rules in the tree for you.
```js
// myComponent.jsx
import CSSX from 'react-cssx';
import style from './myComponent.cssx';

const style = rules({ margin: 10});

export default = () => (
  <CSSX style={style}>
    <div>
      <span>Hello World!</span>
    </div>
  </CSSX>
);
```


## Extending it

This package exports a global `CssxCompiler` class which enables you to build extension packages that depend on this package. You can use it to register more file extensions.

```js
// Meteor 1.4.x

/**
 * Transpile CSSX syntax to JSX with cssx-transpiler
 * @param  {Object}  [cssxOptions] cssx-transpile options object
 */
 Plugin.registerCompiler({
   filenames: ['js', 'jsx', 'css'],
 }, () => (
   new CssxCompiler(cssxOptions)
 ));
```


---

### Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

[MIT license](http://opensource.org/licenses/MIT)
