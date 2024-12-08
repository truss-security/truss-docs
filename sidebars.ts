import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  dashboardSidebar: [
    {
      type: 'category',
      label: 'Dashboard',
      items: [{type: 'autogenerated', dirName: 'dashboard'}],
    },
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'API',
      items: [{type: 'autogenerated', dirName: 'data'}],
    },
  ],
  accountSidebar: [
    {
      type: 'category',
      label: 'Account',
      items: [{type: 'autogenerated', dirName: 'account'}],
    },
  ],
};

export default sidebars;
