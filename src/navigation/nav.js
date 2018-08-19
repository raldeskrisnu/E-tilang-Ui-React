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
      icon: 'icon-anchor',
      children: [
        {
          name: 'Data pelanggar',
          url: '/pelanggar/datapelanggar',
          icon: 'icon-people',
        },
        {
          name: 'Tambah Pelanggar',
          url: '/pelanggar/tambah',
          icon: 'icon-note'
        }
      ],
    },
    {
      name: 'Data Polisi',
      url: '/police',
      icon: 'icon-shield',
      children: [
        {
          name: 'Data polisi',
          url: '/police/allpolice',
          icon: 'icon-people',
        },
        {
          name: 'Polisi Aktif',
          url: '/police/active',
          icon: 'icon-screen-smartphone',
        },
        {
          name: 'Tambah Data Polisi',
          url: '/police/active',
          icon: 'icon-user',
        },
        {
          name: 'Location Police',
          url: '/police/location',
          icon: 'icon-location-pin',
        }
      ],
    },
  ],
};
