const path = require('path');

// Para el plugin de HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Para CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Configuramos los elementos necesarios por webpack
module.exports = {
  //   Punto de entrada de la App
  entry: './src/index.js',

  output: {
    //   Decidimos donde guardamos el compilado
    path: path.resolve(__dirname, 'dist'),

    //   Nombre del archivo resultante
    filename: 'bundle.js',
  },

  //   Extensiones que utilizamos
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  //   Reglas necesarias para la construccion de nuestros recursos
  module: {
    rules: [
      // Para archivos JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      //   Para archivos HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      //   Para CSS
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },

  //   Plugins que utilizaremos
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],

  //   Configuramos el DevServer
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
};
