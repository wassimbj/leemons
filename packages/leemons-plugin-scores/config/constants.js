const pluginName = 'plugins.scores';

const permissionNames = {
  periods: `${pluginName}.periods`,
  noteBook: `${pluginName}.notebook`,
  scores: `${pluginName}.scores`,
  scoresMenu: `${pluginName}.scoresMenu`,
};

const permissions = [
  {
    permissionName: permissionNames.periods,
    actions: ['view', 'create', 'update', 'delete', 'admin'],
    localizationName: {
      es: 'Periodos',
      en: 'Periods',
    },
  },
  {
    permissionName: permissionNames.noteBook,
    actions: ['view', 'create', 'update', 'delete', 'admin'],
    localizationName: {
      es: 'Cuaderno de evaluación',
      en: 'Evaluation notebook',
    },
  },
  {
    permissionName: permissionNames.scores,
    actions: ['view'],
    localizationName: {
      es: 'Evaluaciones',
      en: 'Scores',
    },
  },
  {
    permissionName: permissionNames.scoresMenu,
    actions: ['view'],
    localizationName: {
      es: 'Evaluaciones (menú)',
      en: 'Scores (menu)',
    },
  },
];

/*
  --- Menu-Builder ---
*/
const menuItems = [
  {
    item: {
      key: 'scores',
      order: 10,
      iconSvg: '/public/scores/menu-icon.svg',
      activeIconSvg: '/public/scores/menu-icon.svg',
      label: {
        en: 'Scores',
        es: 'Evaluaciones',
      },
    },
    permissions: [
      {
        permissionName: permissionNames.scoresMenu,
        actionNames: ['view'],
      },
    ],
  },
  {
    item: {
      key: 'scores.periods',
      order: 1,
      parentKey: 'scores',
      url: '/private/scores/periods',
      label: {
        en: 'Periods',
        es: 'Periodos',
      },
    },
    permissions: [
      {
        permissionName: permissionNames.periods,
        actionNames: ['create', 'update', 'delete', 'admin'],
      },
    ],
  },
  {
    item: {
      key: 'scores.notebook',
      order: 2,
      parentKey: 'scores',
      url: '/private/scores/notebook',
      label: {
        en: 'Evaluation Notebook',
        es: 'Cuaderno de notas',
      },
    },
    permissions: [
      {
        permissionName: permissionNames.noteBook,
        actionNames: ['view', 'admin'],
      },
    ],
  },
  {
    item: {
      key: 'scores.scores',
      order: 3,
      parentKey: 'scores',
      url: '/private/scores/scores',
      label: {
        en: 'Scores',
        es: 'Notas',
      },
    },
    permissions: [
      {
        permissionName: permissionNames.scores,
        actionNames: ['view'],
      },
    ],
  },
];

module.exports = {
  pluginName,

  permissionNames,
  permissions,

  menuItems,
};
