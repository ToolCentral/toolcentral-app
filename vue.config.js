module.exports = {
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    },
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: []
    },
    "vue-cli-plugin-auto-alias": {
      rootDirName: "src",
      case: "pascalCase",
      alias: {}
    }
  }
};
