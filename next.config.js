const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  
  fs: false,
  path: false
,
  eslint: {
    ignoreDuringBuilds: false,
  },
};
