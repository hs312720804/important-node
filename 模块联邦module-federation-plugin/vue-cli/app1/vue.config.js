// vue.config.js
module.exports = {
  publicPath: "http://localhost:8084/",

  chainWebpack: (config) => {
    /* module federation plugin import */
    config.optimization.delete("splitChunks");
    config
      .plugin("module-federation-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          name: "home", // 向外暴露的容器名称
          filename: "remoteEntry.js", // 连接本容器的入口文件，包含暴露出去组件的信息以及他们的依赖信息
          exposes: {
            // 对外暴露的组件
            // 格式： {remote组件访问地址}: {本地文件路径}
            "./HelloWorld": "./src/components/HelloWorld.vue",
          },
        },
      ]);
  },
  

  devServer: {
    port: 8084,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
