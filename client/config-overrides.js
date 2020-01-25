const { override, fixBabelImports, useEslintRc } = require('customize-cra');

module.exports = override(
  useEslintRc('.eslintrc.json'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
);
