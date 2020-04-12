module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader")
        }
      ]
    });
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"]
    });
    // storybook have default config for svg files, that need to be ovveride
    config.module.rules = config.module.rules.map(data => {
      if (/svg\|/.test(String(data.test)))
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

      return data;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
