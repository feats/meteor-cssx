# cssx for Meteor

Preprocess [CSSX syntax](https://github.com/krasimir/cssx)

# Building a cssx extension package

`quadric:cssx` exports a global `CssxCompiler` class which enables you to build extension packages that depend on this package.

## Example Usage

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

#### Install
```
meteor add quadric:cssx
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