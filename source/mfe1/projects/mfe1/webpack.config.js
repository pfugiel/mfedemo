const { share, shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './Module': './projects/mfe1/src/app/flights/flights.module.ts',
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  shared: share({
    "@angular/core": { requiredVersion: 'auto', singleton: true },
    "@angular/common": { requiredVersion: 'auto', singleton: true },
    "@angular/router": { requiredVersion: 'auto', singleton: true },
    "@angular/common/http": { requiredVersion: 'auto', singleton: true },
  }),

});
