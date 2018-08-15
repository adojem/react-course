const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: {
      proxy: {
         '/api': {
            target: 'http://localhost:3000'
         }
      },
      contentBase: path.join(__dirname, 'public')
   }
};
