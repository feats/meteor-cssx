import cssxTranspiler from 'cssx-transpiler';

export class CssxCompiler extends BabelCompiler {
  constructor(options) {
    super({
      ...Babel.getDefaultOptions(),
      react: true,
    });

    this.options = {
      sourcemap: true,
      map: { inline: false, annotation: false },
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
    } catch(e) {
      compileStep.error(e);
    }

    return super.processOneFileForTarget(file, output);
  }
}
