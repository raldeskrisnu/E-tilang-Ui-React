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
      name: 'Police Data',
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
        }
      ],
    },
  ],
};
