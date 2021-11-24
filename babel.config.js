const presets = ['babel-preset-expo']
const plugins = []

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
    },
  },
])

module.exports = function(api) {
  api.cache(true);
  return {
    presets,
    plugins,
  };
};
