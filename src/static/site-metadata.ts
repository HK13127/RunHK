interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Run.HK',
  siteUrl: 'https://github.com/HK13127/RunHK',
  logo: 'https://free.boltp.com/2026/05/05/69fa07cccbf05.webp',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: '统计',
      url: `${getBasePath()}/summary`,
      style: { color: '#D93025'}
    },
    {
      name: '主页',
      url: 'https://github.com/HK13127/RunHK',
    },
    {
      name: '关于',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
