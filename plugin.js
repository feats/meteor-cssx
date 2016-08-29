import { CssxCompiler } from './compiler';

Plugin.registerCompiler({
  extensions: ['cssx'],
}, () => (new CssxCompiler()));
