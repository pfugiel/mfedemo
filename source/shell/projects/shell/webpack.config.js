const { share, shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "mfe1": "http://localhost:3000/remoteEntry.js",
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  shared: share({
    "@angular/core": { requiredVersion: 'auto', singleton: true },
    "@angular/common": { requiredVersion: 'auto', singleton: true },
    "@angular/router": { requiredVersion: 'auto', singleton: true },
    "@angular/common/http": { requiredVersion: 'auto', singleton: true },
  })

});
