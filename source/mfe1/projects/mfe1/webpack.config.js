const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require('@angular-architects/module-federation/webpack');
const share = mf.share;

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
          './web-components': './projects/mfe1/src/bootstrap.ts',
        },
        shared: share({
          "@angular/core": { requiredVersion: 'auto' },
          "@angular/common": { requiredVersion: 'auto' },
          "@angular/common/http": { requiredVersion: 'auto' },
          "@angular/router": { requiredVersion: 'auto' },
        })
      }
    )
  ],
};
