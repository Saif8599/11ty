module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

eleventyConfig.addPassthroughCopy("./src/css");