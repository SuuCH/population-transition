module.exports = {
  staticDirs: ["../public"],
  stories: ["../components/*/*.stories.tsx"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
    "storybook-addon-next-router",
    "storybook-addon-outline",
    "storybook-addon-pseudo-states",
  ],
  framwork: "@storybook/react",
  webpackFinal: async (baseConfig) => {
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1, modules: true } },
        "sass-loader",
      ],
    });
    return baseConfig;
  },
};
