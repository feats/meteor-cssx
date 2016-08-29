# cssx for Meteor

Preprocess [CSSX syntax](https://github.com/krasimir/cssx)

# Building a cssx extension package

`quadric:cssx` exports a global `CssxCompiler` class which enables you to build extension packages that depend on this package.

## Install
```
meteor add quadric:cssx
```

## Usage

Just create `*.cssx` files in your codebase and import them whenever you need it.

```js
// myComponent.cssx

export default ({ margin }) => (
  <style>
    div {
      margin: {{ margin }}px;
      background-color: #F9F9F9;
    }
  </style>
);
```

```js
// myComponent.jsx
import style from './myComponent.cssx';

export default = () => (
  <div style={style({ margin: 10}).div}>
    Hello World!
  </div>
);
```


## Extending it

```
// Meteor 1.4.x

/**
 * Transpile CSSX syntax to JSX with cssx-transpiler
 * @param  {Object}  [cssxOptions] cssx-transpile options object
 */
 Plugin.registerCompiler({
   filenames: ['cssx'],
 }, function () { return new CssxCompiler(cssxOptions) } );
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
