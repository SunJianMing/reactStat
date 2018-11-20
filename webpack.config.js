var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:'./src/main.js',
  output:{
    filename:'index.js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'./'
  },
  plugins:[
    new htmlWebpackPlugin({
    filename:'index.html',
    template:'./src/index.html'
  }),
  new webpack.ProvidePlugin({
    'React':'react',
    'ReactDom':'react-dom',
    '$':'axios',
    'PT':'prop-types',
    'd3':'d3'
  })
],
  module:{
    rules:[
      {
        test:/\.js$/,
        use:['babel-loader'],
        include:[path.resolve(__dirname,'./src')]
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.scss$/,
        use:['style-loader',{
          loader:'css-loader',
          options:{
            modules:true,
            localIdentName:'[local]--[hash:base64:6]'
          }
        },'sass-loader']
      },
      {
        test:/\.(png|jpe?g|gif)$/,
        use:[{
          loader:'url-loader',
          options:{
            limit:50000,
            name:'img/[hash:8]-[name].[ext]'
          }
        }]
      }

    ]
  },
  resolve:{
    modules:[
      'node_modules',
      path.resolve(__dirname,'src'),
      path.resolve(__dirname,'src/layout'),
      path.resolve(__dirname,'src/view'),
      path.resolve(__dirname,'src/common'),
      path.resolve(__dirname,'src/components'),
    ]
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
    port:9999,
    historyApiFallback:true,
    open:true,
    contentBase:'./src',
    publicPath:'/'
  }
}
