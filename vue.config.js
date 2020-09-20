const px2rem = require("postcss-px2rem");
const postcss = px2rem({
  remUnit: 37.5
});

module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://ljtest11.liuziqian.top",
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "/api": "/"
        }
      }
    }
  }
  // ... 更多其他代码
};
