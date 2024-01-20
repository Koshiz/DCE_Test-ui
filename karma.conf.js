module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage/simulation-app"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    restartOnFileChange: true,
    files: [
      // Add your source files and spec files for both components here
      "src/**/*.ts",
      "spec/**/*.spec.ts",
    ],
    preprocessors: {
      "src/**/*.ts": ["typescript"],
      "spec/**/*.spec.ts": ["typescript"],
    },
    typescriptPreprocessor: {
      options: {
        sourceMap: true,
        target: "ES6",
        module: "commonjs",
        strict: true,
      },
      transformPath: function (path) {
        return path.replace(/\.ts$/, ".js");
      },
    },
  });
};
