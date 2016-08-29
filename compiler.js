import cssxTranspiler from 'cssx-transpiler';

export class CssxCompiler {
  constructor(options) {
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

  processFilesForTarget (files) {
    files.forEach((compileStep) => {
      // skip import files
      if (compileStep.getBasename().indexOf('.import.') !=-1) {
        return;
      }

      const source = compileStep.getContentsAsString();
      const filename = compileStep.getPathInPackage();
      const options = {
        ...this.options,
        from: filename
      };

      try {
        const output = cssxTranspiler(source, options);
        console.log(output);
        // add the result to the app with sourcemaps
        compileStep.addJavaScript({
          path: filename,
          data: output,
          // sourceMap: JSON.stringify(output.map)
        });
      } catch( e ) {
        compileStep.error(e);
      }
    })
  }
}
