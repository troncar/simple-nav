export const ITEMS = [{
    type: 'first',
    label: 'About us',
    position: 'right',
    handler:()=>{},
    name:'about-us',
    action:'redirect',
    url:'https://www.youtube.com.mx/'
    },
    {
      type: 'first',
      label: 'Login',
      position: 'right',
      handler:()=>{},
      name:'login',
      action:'redirect',
      url:'/login'
    },
    {
      type: 'secondary',
      label: 'Contact us',
      position: 'right',
      handler:()=>{},
      name:'contact-us',
      action:'redirect',
      url:'/contact'
    }
  ];

export const ITEMS_MOBILE = [{
  type: 'first',
  label: 'About us',
  position: 'right',
  handler:()=>{},
  name:'about-us',
  action:'redirect',
  url:'https://www.youtube.com.mx/' ,
  customClass: 'item--mobile'
  },
  {
    type: 'first',
    label: 'Login',
    position: 'right',
    handler:()=>{},
    name:'login',
    action:'redirect',
    url:'/login',
    customClass: 'item--mobile'
  },
  {
    type: 'secondary',
    label: 'Contact us',
    position: 'right',
    handler:()=>{},
    name:'contact-us',
    action:'redirect',
    url:'/contact' ,
    customClass: 'item--mobile'
  }
];

