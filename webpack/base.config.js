module.exports = options => {
    return {
      entry: './src/index.js',
      module: {
        rules: [{
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
          }, 
          {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'url-loader?limit=100000'
          // },
          }, {
              test: /\.css|scss$/,
              use: [
                'style-loader','css-loader','sass-loader'
              ]
            }
        ],
      },
    }
  }
 

