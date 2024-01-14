const path = require('path');

module.exports = (env, { mode }) => {
  return {
    target: 'web',
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(tsx?|js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    bugfixes: true
                  }
                ],
                ['@babel/preset-typescript', { jsxPragma: 'h', jsxPragmaFrag: 'Fragment' }]
              ],
              plugins: [
                ['@babel/plugin-transform-runtime'],
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }]
              ]
            }
          }
        },
        {
          test: /\.scss/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                modules: {
                  localIdentName: '[local]',
                  namedExport: true
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: mode === 'development'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: 'playkit-plugin-example.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    externals: {
      '@playkit-js/kaltura-player-js': 'root KalturaPlayer',
      preact: 'root KalturaPlayer.ui.preact'
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'demo')
      },
      client: {
        progress: true
      }
    }
  };
};
