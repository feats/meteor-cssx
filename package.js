Package.describe({
  name: 'quadric:cssx',
  version: '1.0.0',
  summary: 'Transpile CSSX',
  git: 'https://github.com/quadric/meteor-cssx',
  documentation: 'README.md'
});

const npmDependencies = {
  'cssx-transpiler': '5.2.0',
}

Npm.depends(npmDependencies);

Package.registerBuildPlugin({
  npmDependencies,
  name: 'cssx',
  use: ['babel-compiler', 'ecmascript'],
  sources: [
    'compiler.js',
    'plugin.js'
  ],
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1');
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use(['babel-compiler', 'ecmascript'], ['server']);

  api.addFiles('compiler.js', 'server');
  api.export('CssxCompiler', 'server');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'underscore']);
  api.use(['es5-shim', 'ecmascript', 'babel-compiler']);
  api.addFiles('tests/runtime-tests.js');
  api.addFiles('tests/transpilation-tests.js', 'server');

  api.addFiles('tests/bare-test.js');
  api.addFiles('tests/bare-test-file.js', ['client', 'server'], {
    bare: true
  });
});
