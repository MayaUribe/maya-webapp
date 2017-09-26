export const PROJECTS = [
  {
    id: 1,
    name: 'Fitness',
    company: 'Scopic Software',
    description: 'This is the project description',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/react-logo.png',
    logo: 'img/logos/scopic-logo.png.no',
    tags: ['React Native', 'JS', 'CSS', 'Flexbox'],
    sampleCodes: [
      {
        file: 'appStorage.js',
        language: 'javascript',
        code: 'import Model from \'react-native-db-models\';\n' +
        '\n' +
        'const USER_DATA_KEY = \'userData\';\n' +
        'const RISKS_DATA_KEY = \'risksData\';\n' +
        'const TIMELINE_DATA_KEY = \'timelineData\';\n' +
        'const PROFILE_DATA_KEY = \'profileData\';\n' +
        '\n' +
        'const DB = {\n' +
        '  app: new Model.create_db(\'app\'),\n' +
        '  users: new Model.create_db(\'users\'),\n' +
        '  configs: new Model.create_db(\'configs\'),\n' +
        '  risks: new Model.create_db(\'risks\'),\n' +
        '  timeline: new Model.create_db(\'timeline\'),\n' +
        '  profile: new Model.create_db(\'profile\')\n' +
        '};\n' +
        '\n' +
        'class AppStorage {\n' +
        '\n' +
        '  constructor() {\n' +
        '    this.getUserData().then((results) => {\n' +
        '      if (!results || results.length === 0) {\n' +
        '        DB.users.add({key: USER_DATA_KEY});\n' +
        '      }\n' +
        '    });\n' +
        '\n' +
        '    this.getTimelineData().then((results) => {\n' +
        '      if (!results || results.length === 0) {\n' +
        '        DB.timeline.add({key: TIMELINE_DATA_KEY});\n' +
        '      }\n' +
        '    });\n' +
        '\n' +
        '    this.getRisksData().then((results) => {\n' +
        '      if (!results || results.length === 0) {\n' +
        '        DB.risks.add({key: RISKS_DATA_KEY});\n' +
        '      }\n' +
        '    });\n' +
        '\n' +
        '    this.getProfileData().then((results) => {\n' +
        '      if (!results || results.length === 0) {\n' +
        '        DB.profile.add({key: PROFILE_DATA_KEY});\n' +
        '      }\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  clearAllData() {\n' +
        '    DB.users.erase_db();\n' +
        '    DB.timeline.erase_db();\n' +
        '    DB.risks.erase_db();\n' +
        '  }\n' +
        '\n' +
        '  getUserData() {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.users.get({key: USER_DATA_KEY}, (results) => {\n' +
        '        resolve(results[0]);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  setUserData(value) {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.users.update({ key: USER_DATA_KEY }, value, (data) => {\n' +
        '        resolve(data);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  clearUserData() {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.users.remove({ key: USER_DATA_KEY }, (data) => {\n' +
        '        DB.users.add({key: USER_DATA_KEY});\n' +
        '        resolve(data);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  clearAll() {\n' +
        '    DB.users.remove({ key: USER_DATA_KEY });\n' +
        '    DB.risks.remove({ key: RISKS_DATA_KEY });\n' +
        '    DB.timeline.remove( { key: TIMELINE_DATA_KEY });\n' +
        '    DB.profile.remove( { key: PROFILE_DATA_KEY });\n' +
        '  }\n' +
        '  \n' +
        '  getRisksData() {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.risks.get({key: RISKS_DATA_KEY}, (results) => {\n' +
        '        resolve(results[0]);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  setRisksData(value) {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.risks.update({ key: RISKS_DATA_KEY }, value, (data) => {\n' +
        '        resolve(data);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  getTimelineData() {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.timeline.get({key: TIMELINE_DATA_KEY}, (results) => {\n' +
        '        resolve(results[0]);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  setTimelineData(value) {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.timeline.update({ key: TIMELINE_DATA_KEY }, value, (data) => {\n' +
        '        resolve(data);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  getProfileData() {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.profile.get({key: PROFILE_DATA_KEY}, (results) => {\n' +
        '        resolve(results[0]);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  setProfileData(value) {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.profile.update({ key: PROFILE_DATA_KEY }, value, (data) => {\n' +
        '        resolve(data);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '}\n' +
        '\n' +
        'export default AppStorage;\n'
      },
      {
        file: 'storage.js',
        language: 'javascript',
        code: 'import {\n' +
        '    AsyncStorage\n' +
        '} from \'react-native\';\n' +
        '\n' +
        'export default class Storage {\n' +
        '\n' +
        '  constructor(storageName) {\n' +
        '    if (!storageName) {\n' +
        '      storageName = \'\';\n' +
        '    }\n' +
        '    this.storageName = storageName;\n' +
        '  }\n' +
        '\n' +
        '  async _set(name, value) {\n' +
        '    var result = true;\n' +
        '    var key = \'@\' + this.storageName + \':\' + name;\n' +
        '    try {\n' +
        '      var type = typeof value;\n' +
        '      var storeObj = { type: type, data: value };\n' +
        '      var valueStr = JSON.stringify(storeObj);\n' +
        '      await AsyncStorage.setItem(key, valueStr);\n' +
        '    } catch (error) {\n' +
        '      result = false;\n' +
        '    }\n' +
        '    return result;\n' +
        '  }\n' +
        '\n' +
        '  async _get(name, defaultValue) {\n' +
        '    var result = defaultValue;\n' +
        '    var key = \'@\' + this.storageName + \':\' + name;\n' +
        '    try {\n' +
        '      let storageResultRaw = await AsyncStorage.getItem(key);\n' +
        '      if (!storageResultRaw) {\n' +
        '        return result;\n' +
        '      }\n' +
        '      let rootData = JSON.parse(storageResultRaw);\n' +
        '      result = rootData.data;\n' +
        '    } catch (error) {\n' +
        '\n' +
        '    }\n' +
        '\n' +
        '    return result;\n' +
        '  }\n' +
        '\n' +
        '  async _remove(name) {\n' +
        '    var result = true;\n' +
        '    var key = \'@\' + this.storageName + \':\' + name;\n' +
        '    try {\n' +
        '      await AsyncStorage.removeItem(key);\n' +
        '    } catch (error) {\n' +
        '      result = false;\n' +
        '    }\n' +
        '\n' +
        '    return result;\n' +
        '  }\n' +
        '}\n'
      },
    ]
  },
  {
    id: 2,
    name: 'Audio Description',
    company: 'Scopic Software',
    description: 'Audio manipulation and edition with React JS and HTML5.',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/scopic-logo.png',
    tags: ['React JS', 'JS', 'HTML', 'HTML5', 'CSS'],
    sampleCodes: [
      {
        file: 'index.js',
        language: 'javascript',
        code: '',
      }
    ]
  },
  {
    id: 3,
    name: 'Casting Mobile',
    company: 'Scopic Software',
    description: 'This is the project description',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/scopic-logo.png',
    tags: ['React Native', 'JS', 'CSS', 'Flexbox', 'Redux']
  },
  {
    id: 4,
    name: 'Rocket Banner',
    company: 'Scopic Software',
    description: 'This is the project description',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/scopic-logo.png',
    tags: ['React JS', 'JS', 'CSS', 'Flexbox', 'Redux']
  },
  {
    id: 5,
    name: 'Built',
    company: 'Scopic Software',
    description: 'This is the project description',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/scopic-logo.png',
    tags: ['React Native', 'JS', 'CSS', 'Flexbox']
  },
  {
    id: 6,
    name: 'Universoideas',
    company: 'Freelance Project',
    description: 'This is the project description',
    thumbnail: '/img/portfolio/cake-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/logo-130.png',
    tags: ['PHP', 'CakePHP', 'JS', 'CSS']
  }
];
