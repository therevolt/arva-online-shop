const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  env: {
    api: "https://be.arva-shop.xyz",
    // api_img: 'https://be.arva-shop.xyz',
  },
});
