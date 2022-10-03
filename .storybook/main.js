const envConfig = {
  REACT_APP_USE_HASH_ROUTER: "true"
};

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    const cssRule = config.module.rules
      .filter((r) => r.oneOf)
      .map((r) =>
        r.oneOf.find((ru) => ru.test instanceof RegExp && ru.test.test(".css"))
      )
      .find((r) => r);
    cssRule.use[1].options.url = false;

    // set env vars
    const plugin = config.plugins.find(plugin => (plugin.definitions));
    Object.keys(envConfig).forEach(key => {
      (plugin.definitions || {})[`process.env.${key}`] = String(envConfig[key]);
    });
    console.log(plugin.definitions);

    config.resolve = {
      fallback: {
        browser: false,
        https: false,
        http: false,
        zlib: false,
        fs: false,
      },
    };

    return config;
  },
};
