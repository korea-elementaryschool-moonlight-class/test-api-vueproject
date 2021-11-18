module.exports = {
  devServer: {
    proxy: {
      "/api/": {
        target: "http://ec2-3-34-140-140.ap-northeast-2.compute.amazonaws.com",
        pathRewrite: { "^/api/": "/" },
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
};
