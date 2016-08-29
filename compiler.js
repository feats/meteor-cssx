import cssxTranspiler from 'cssx-transpiler';

export class CssxCompiler extends BabelCompiler {
  constructor(options) {
    super({
      ...Babel.getDefaultOptions(),
      react: true,
    });

    this.options = {
      minified: false,
      compact: false,
      concise: false,
      quotes: false,
    };

    if (options) {
      this.options = {
        ...this.options,
        ...options
      };
    }
  }

  processOneFileForTarget (file, source) {
    let output;

    if (typeof source !== "string") {
      source = file.getContentsAsString();
    }

    try {
      output = cssxTranspiler(source, this.options);

      return super.processOneFileForTarget(file, output);
    } catch(e) {
      file.error(e);
    }
  }
}
