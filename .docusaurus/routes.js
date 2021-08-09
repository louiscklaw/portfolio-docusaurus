
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','569'),
    exact: true
  },
  {
    path: '/blog/hello-world',
    component: ComponentCreator('/blog/hello-world','07a'),
    exact: true
  },
  {
    path: '/blog/hola',
    component: ComponentCreator('/blog/hola','6e6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','738'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','2fe'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','263'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','8b3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','015'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','523'),
    routes: [
      {
        path: '/docs/about_louis',
        component: ComponentCreator('/docs/about_louis','fd6'),
        exact: true
      },
      {
        path: '/docs/allwinner_v3s_tryout',
        component: ComponentCreator('/docs/allwinner_v3s_tryout','8a9'),
        exact: true
      },
      {
        path: '/docs/appium_behave_notes',
        component: ComponentCreator('/docs/appium_behave_notes','a7c'),
        exact: true
      },
      {
        path: '/docs/credits',
        component: ComponentCreator('/docs/credits','c7e'),
        exact: true
      },
      {
        path: '/docs/daily_job_search',
        component: ComponentCreator('/docs/daily_job_search','948'),
        exact: true
      },
      {
        path: '/docs/hk_data_searcher',
        component: ComponentCreator('/docs/hk_data_searcher','3a0'),
        exact: true
      },
      {
        path: '/docs/hko_weather_bot',
        component: ComponentCreator('/docs/hko_weather_bot','736'),
        exact: true
      },
      {
        path: '/docs/m5stack_playlist',
        component: ComponentCreator('/docs/m5stack_playlist','5e9'),
        exact: true
      },
      {
        path: '/docs/mdx',
        component: ComponentCreator('/docs/mdx','9b3'),
        exact: true,
        'sidebar': "someSidebar"
      },
      {
        path: '/docs/my_linux_toolbox',
        component: ComponentCreator('/docs/my_linux_toolbox','931'),
        exact: true
      },
      {
        path: '/docs/opencv_car_counting_tryout',
        component: ComponentCreator('/docs/opencv_car_counting_tryout','cd7'),
        exact: true
      },
      {
        path: '/docs/pet_projects',
        component: ComponentCreator('/docs/pet_projects','c8e'),
        exact: true
      },
      {
        path: '/docs/portfolio_tryout',
        component: ComponentCreator('/docs/portfolio_tryout','914'),
        exact: true
      },
      {
        path: '/docs/printer_board_tryout',
        component: ComponentCreator('/docs/printer_board_tryout','788'),
        exact: true
      },
      {
        path: '/docs/rthk31_rthk32_linux_viewer',
        component: ComponentCreator('/docs/rthk31_rthk32_linux_viewer','a00'),
        exact: true
      },
      {
        path: '/docs/slic3r_tryout',
        component: ComponentCreator('/docs/slic3r_tryout','923'),
        exact: true
      },
      {
        path: '/docs/tappy_tryout',
        component: ComponentCreator('/docs/tappy_tryout','345'),
        exact: true
      },
      {
        path: '/docs/test',
        component: ComponentCreator('/docs/test','fcb'),
        exact: true,
        'sidebar': "someSidebar"
      },
      {
        path: '/docs/tradingview_dashboard',
        component: ComponentCreator('/docs/tradingview_dashboard','9c0'),
        exact: true,
        'sidebar': "someSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
