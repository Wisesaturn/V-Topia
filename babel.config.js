// for jest
module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '2', targets: { node: 'current' } }],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@utils': './src/utils',
          '@components': './src/components',
          '@styles': './src/styles',
          '@assets': './src/assets',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@mock': './src/mock',
        },
      },
    ],
  ],
};
