const { permissionNames } = require('../config/constants');

module.exports = [
  {
    method: 'POST',
    path: '/periods',
    handler: 'periods.add',
    authenticated: true,
    allowedPermissions: {
      [permissionNames.periods]: {
        actions: ['create', 'admin'],
      },
    },
  },
  {
    method: 'GET',
    path: '/periods',
    handler: 'periods.list',
    authenticated: true,
    allowedPermissions: {
      [permissionNames.periods]: {
        actions: ['view', 'admin'],
      },
    },
  },
  {
    method: 'DELETE',
    path: '/periods/:id',
    handler: 'periods.remove',
    authenticated: true,
    allowedPermissions: {
      [permissionNames.periods]: {
        actions: ['delete', 'admin'],
      },
    },
  },
];
