const { override, fixBabelImports, useEslintRc } = require('customize-cra');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = override(
  useEslintRc('.eslintrc.json'),
  useStylelintRc('.stylelintrc.json'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
);

function useStylelintRc(configFile) {
  return (config, env) => {
    config.plugins.push(
      new StylelintPlugin({
        configFile,
        files: ['**/*.css', '**/*.sass', '**/*.scss', '**/*.less'],
      })
    );
    return config;
  };
}
