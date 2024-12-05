module.exports = {
  // ... other config
  customFields: {
    // Add any custom fields you need
  },
  stylesheets: [
    // Add any additional stylesheets
  ],
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
}; 