/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //This part is added to avoid file system Node.js module error - 14.02.2023 - BEGINNING -- BY DEVELOPER GULSAH
  webpack(config, { nextRuntime }) {
    // as of Next.js latest versions, the nextRuntime is preferred over `isServer`, because of edge-runtime
    if (typeof nextRuntime === "undefined") {
      const { IgnorePlugin } = require("webpack");
      const ignoreFs = new IgnorePlugin({ resourceRegExp: /fs/ });
      config.plugins.push(ignoreFs);
    }

    return config;
  },
  //This part is added to avoid file system Node.js module error - 14.02.2023 - END -- BY DEVELOPER GULSAH

}

module.exports = nextConfig
