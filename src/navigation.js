import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Partners and Friends',
      href: getPermalink('/partners'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Donate', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url('~/assets/images/strawberry.png')]"></span>
    Copyright &#169 2024 by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://www.creecyouth.org/"> Carquinez Regional Environmental Education Center</a> · All rights reserved.
  `,
};
