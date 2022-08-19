const { override } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');
const addLessLoader = require('customize-cra-less-loader');

module.exports = override(
  alias({
    ...configPaths('tsconfig.paths.json'),
  }),
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          '@primary-color': '#8CD4B4', // primary color for all components
          '@secondary-color': '#9A9A9A',
          '@link-color': '#02192d', // link color
          '@success-color': '#52c41a', // success state color
          '@warning-color': '#faad14', // warning state color
          '@error-color': '#f5222d', // error state color
          '@font-size-base': '16px', // major text font size
          '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
          '@text-color': '#333', // major text color
          '@text-color-secondary': '#333', // secondary text color
          '@disabled-color': '#D1D1D1', // disable state color
          '@border-radius-base': '8px', // major border radius
          '@border-color-base': '#d9d9d9', // major border color
          '@border-width-base': '1px', // width of the border for a component
          '@box-shadow-base':
            '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
        },
        javascriptEnabled: true,
      },
    },
  })
);
