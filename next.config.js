/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const { withKeystone } = require("@keystone-6/core/next");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = withKeystone((phase, { defaultConfig }) => {
  // console.log("from next config", process.env.DATABASE_URL_DEV);
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      reactStrictMode: true,
    };
  }

  return {
    reactStrictMode: true,
  };
});
