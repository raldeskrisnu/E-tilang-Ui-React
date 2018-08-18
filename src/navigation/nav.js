export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info'
      },
    },
    {
      title: true,
      name: 'Menu',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Data Pelanggar',
      url: '/pelanggar',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Data pelanggar',
          url: '/pelanggar/datapelanggar',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'Data Polisi',
      url: '/police',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'All Police',
          url: '/police/allpolice',
          icon: 'icon-puzzle',
        },
        {
          name: 'Active Police',
          url: '/police/active',
          icon: 'icon-puzzle',
        },
        {
          name: 'Location Police',
          url: '/police/location',
          icon: 'icon-puzzle',
        }
      ],
    },
  ],
};
