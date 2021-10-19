
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
    publicPath: "./", //引入js、图片等文件中，会自动拼接path
    assetsDir: "static", // 编译后的静态资源目录
    indexPath: "index.html",
    filenameHashing: true, // 文件名hash
    outputDir: "dist",
    productionSourceMap: false, // 是否生成.map
    chainWebpack: (config) => {
      config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|fbx)(\?.*)?$/)
      .end();
    }
  };


