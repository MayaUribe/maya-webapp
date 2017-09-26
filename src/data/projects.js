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
      {
        file: 'mainService.js',
        language: 'javascript',
        code: '/*global FormData*/\n' +
        '/*global fetch*/\n' +
        'import _ from \'lodash\';\n' +
        '\n' +
        'const baseUri = \'http://serviceapiurl.com/api/\';\n' +
        'const defaultConfig = {\n' +
        '  method: \'POST\',\n' +
        '  headers: {\n' +
        '    \'Accept\': \'application/json\',\n' +
        '    \'Content-Type\': \'application/json\',\n' +
        '    \'Referer\': \'http://serviceapiurl.com/api/url\',\n' +
        '    \'X-API-KEY\': \'g3242332j234234jk23432534534j4534534f345\'\n' +
        '    \n' +
        '  }\n' +
        '};\n' +
        '\n' +
        'class MainService {\n' +
        '\n' +
        '  static API_KEY = \'\';\n' +
        '\n' +
        '  constructor(endpoint, apiKey) {\n' +
        '    this.baseURL = baseUri;\n' +
        '    this.endPoint = endpoint;\n' +
        '    this.apiKey = apiKey;\n' +
        '  }\n' +
        '\n' +
        '  makeRequest(action, params, onSuccess, onFault, fullPath) {\n' +
        '    var completeURL = fullPath ? fullPath : this.baseURL + this.endPoint + \'/\' + action;\n' +
        '    var formData = this.toFormData(params);\n' +
        '\n' +
        '    var headers = {};\n' +
        '\n' +
        '    if (BaseService.API_KEY || this.apiKey) {\n' +
        '      headers[\'X-API-KEY\'] = this.apiKey ? this.apiKey : BaseService.API_KEY;\n' +
        '    }\n' +
        '\n' +
        '    const config = _.merge(defaultConfig, {\n' +
        '      method: \'POST\',\n' +
        '      headers: headers,\n' +
        '      body: formData\n' +
        '    });\n' +
        '\n' +
        '    var prm = fetch(completeURL, config).then(this.status).then(\n' +
        '        (ev) => ev.json(),\n' +
        '        (ev) => {\n' +
        '          var result = ev;\n' +
        '          if (ev && ev.json) {\n' +
        '            result = ev.json();\n' +
        '            result.customError = true;\n' +
        '          }\n' +
        '          return result;\n' +
        '        }\n' +
        '    );\n' +
        '    if (onSuccess) {\n' +
        '      prm = prm.then(onSuccess);\n' +
        '    }\n' +
        '    if (onFault) {\n' +
        '      prm = prm.catch(onFault);\n' +
        '    }\n' +
        '    return prm;\n' +
        '  }\n' +
        '\n' +
        '  status(response) {\n' +
        '    if (response.status >= 200 && response.status < 300) {\n' +
        '      return Promise.resolve(response);\n' +
        '    } else {\n' +
        '      return Promise.reject(response);\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  toFormData(params, form, namespace) {\n' +
        '    let formData = form || new FormData();\n' +
        '    for (var prop in params) {\n' +
        '      let key = namespace ? namespace + \'[\' + prop + \']\' : prop;\n' +
        '      if ( typeof params[prop] == \'object\') {\n' +
        '        this.toFormData(params[prop], formData, key);\n' +
        '      } else {\n' +
        '        formData.append(key, params[prop]);\n' +
        '      }\n' +
        '    }\n' +
        '    return formData;\n' +
        '  }\n' +
        '\n' +
        '}\n' +
        '\n' +
        'module.exports = MainService;\n' +
        '\n'
      },
      {
        file: 'userService.js',
        language: 'javascript',
        code: 'import MainService from \'./MainService\';\n' +
        '\n' +
        'class UserService extends MainService {\n' +
        '\n' +
        '  constructor() {\n' +
        '    super(\'member\');\n' +
        '  }\n' +
        '\n' +
        '  create(memberData, onSuccess, onFault) {\n' +
        '    return this.makeRequest(\'create\', memberData, onSuccess, onFault);\n' +
        '  }\n' +
        '\n' +
        '  update(memberData, onSuccess, onFault) {\n' +
        '    return this.makeRequest(\'update\', memberData, onSuccess, onFault);\n' +
        '  }\n' +
        '\n' +
        '  details(memberData, onSuccess) {\n' +
        '    return this.makeRequest(\'details\', memberData, onSuccess);\n' +
        '  }\n' +
        '\n' +
        '  forgotPassword(email, onSuccess, onFault) {\n' +
        '    return this.makeRequest(\'forgot-password\', {Email: email}, onSuccess, onFault);\n' +
        '  }\n' +
        '\n' +
        '  updatePassword(token, password, cfrmPasswordt, onSuccess, onFault) {\n' +
        '    return this.makeRequest(\'update-password\', {Token: token, Password: password, ConfirmPassword: cfrmPasswordt}, onSuccess, onFault);\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'module.exports = UserService;\n'
      },
      {
        file: 'devices.js',
        language: 'javascript',
        code: 'class Devices extends Component {\n' +
        '  static propTypes = {\n' +
        '    rightNav: React.PropTypes.bool,\n' +
        '    leftNav: React.PropTypes.bool\n' +
        '  };\n' +
        '\n' +
        '  static defaultProps = {\n' +
        '    rightNav: false\n' +
        '  };\n' +
        '\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '    this.state = {\n' +
        '      title: \'Device Sync\',\n' +
        '      icon: \'information-circled\',\n' +
        '      text: \'Keep your device sync so you can have all the benefits in the program.\',\n' +
        '      confirmation: \'Do you use a fitness device?\',\n' +
        '      showModal: (this.props.mode === INTRO_MODE),\n' +
        '      showOptionsModal: false,\n' +
        '      device: \'\',\n' +
        '      data: userDevices\n' +
        '    };\n' +
        '    this.handler = this.handler.bind(this);\n' +
        '    this.handleBackPress = this.handleBackPress.bind(this);\n' +
        '    this._onPressContinue = this._onPressContinue.bind(this);\n' +
        '  }\n' +
        '\n' +
        '  handler(value) {\n' +
        '    var response = DevicesService.create(value);\n' +
        '    console.log(response);\n' +
        '    userDevices.push(value);\n' +
        '    this.setState({\n' +
        '      device: value,\n' +
        '      data: userDevices\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  _removeDevice(device) {\n' +
        '    var response = DevicesService.remove(device);\n' +
        '    console.log(response);\n' +
        '    var position = userDevices.indexOf(device);\n' +
        '    userDevices.splice(position, 1);\n' +
        '\n' +
        '    this.setState({\n' +
        '      device: device,\n' +
        '      data: userDevices\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  handleBackPress() {\n' +
        '    this.props.navigator.pop();\n' +
        '  }\n' +
        '\n' +
        '  _onPressContinue() {\n' +
        '    this.props.navigator.push({id: JOURNEY, props: {mode: this.props.mode}});\n' +
        '  }\n' +
        '\n' +
        '  _onPressCloseModal() {\n' +
        '    this.setState({showModal: false});\n' +
        '  }\n' +
        '\n' +
        '  _onPressOpenOptionsModal() {\n' +
        '    this.setState({\n' +
        '      showOptionsModal: true\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  _onPressCloseOptionsModal() {\n' +
        '    this.setState({showOptionsModal: false});\n' +
        '  }\n' +
        '\n' +
        '  _renderModal() {\n' +
        '    var boundClick = this._onPressCloseModal.bind(this);\n' +
        '    return <SyncData handleClose={boundClick} title={this.state.title} text={this.state.text} confirmation={this.state.confirmation} showModal={this.state.showModal} icon={this.state.icon} mode={this.props.mode} navigator={this.props.navigator} />;\n' +
        '  }\n' +
        '\n' +
        '  _renderOptionsModal() {\n' +
        '    var boundClick = this._onPressCloseOptionsModal.bind(this);\n' +
        '    return <DevicesMenu handler={this.handler} handleCloseOptions={boundClick} showOptionsModal={this.state.showOptionsModal} deviceTitle={this.state.deviceTitle} data={this.state.data}/>;\n' +
        '  }\n' +
        '\n' +
        '  _getDeviceIcon(device) {\n' +
        '    var deviceIcon = \'\';\n' +
        '    switch (device) {\n' +
        '      case ANDROID_WEAR:\n' +
        '        deviceIcon = \'androidwearLogo\';\n' +
        '        break;\n' +
        '      case FITBIT:\n' +
        '        deviceIcon = \'fitbitLogo\';\n' +
        '        break;\n' +
        '      case JAWBONE:\n' +
        '        deviceIcon = \'jawboneLogo\';\n' +
        '        break;\n' +
        '      case MY_FITNESS_PAL:\n' +
        '        deviceIcon = \'myfitnesspalLogo\';\n' +
        '        break;\n' +
        '      case WITHINGS:\n' +
        '        deviceIcon = \'withingsLogo\';\n' +
        '        break;\n' +
        '      case UNDER_ARMOUR:\n' +
        '        deviceIcon = \'underarmourLogo\';\n' +
        '        break;\n' +
        '    }\n' +
        '    return deviceIcon;\n' +
        '  }\n' +
        '\n' +
        '  _renderDevices() {\n' +
        '    return this.state.data.map((device, index) => {\n' +
        '      var deviceIcon = this._getDeviceIcon(device);\n' +
        '      return (\n' +
        '        <View key={index}>\n' +
        '          <View style={devicesStyles.imageWrapper}>\n' +
        '            <Image\n' +
        '              source={iconsMap[deviceIcon]} style={devicesStyles.deviceImage}\n' +
        '              resizeMode={Image.resizeMode.contain}\n' +
        '            />\n' +
        '          </View>\n' +
        '          <View style={devicesStyles.close}>\n' +
        '            <IconButton name="close" style={devicesStyles.closeText}\n' +
        '                        onPress={this._removeDevice.bind(this, device)} />\n' +
        '          </View>\n' +
        '        </View>\n' +
        '      );\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  _header(iconName, title) {\n' +
        '    let rightNav = this.props.mode === INTRO_MODE ?\n' +
        '      <Icon name=\'chevron-right\' size={25} color=\'white\' onPress={this._onPressContinue}/> : null;\n' +
        '\n' +
        '    let leftNav = this.props.mode === INTRO_MODE ?\n' +
        '      <Icon name=\'chevron-left\' size={25} color=\'white\' onPress={this.handleBackPress}/> : null;\n' +
        '\n' +
        '    return (\n' +
        '      <View>\n' +
        '        <View style={devicesStyles.row}>\n' +
        '          {leftNav}\n' +
        '          <H2 labelStyles={styles.defaultHeadingTextStyle}>\n' +
        '            <Icon name={iconName} size={30} /> {title}\n' +
        '          </H2>\n' +
        '          {rightNav}\n' +
        '        </View>\n' +
        '      </View>\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  _renderInfo() {\n' +
        '    let continueButton = this.props.mode === INTRO_MODE ?\n' +
        '    <Button style={[styles.defaultBtn, devicesStyles.customButton]} labelStyle={styles.defaultBtnLabel}\n' +
        '            onPress={this._onPressContinue.bind(this)}>Continue</Button> : null;\n' +
        '\n' +
        '    return (\n' +
        '      <ScrollView contentContainerStyle={devicesStyles.contentContainerStyle}>\n' +
        '        <View>\n' +
        '          <View style={devicesStyles.header} key=\'devices\'>\n' +
        '            {this._header(\'android-watch\', \'Fitness Devices\')}\n' +
        '          </View>\n' +
        '          <View>\n' +
        '            <View>\n' +
        '              <View style={devicesStyles.devicesContainer}>\n' +
        '                {this._renderDevices()}\n' +
        '                <View style={devicesStyles.addWrapper}>\n' +
        '                  <IconButton name="ios-plus-outline" style={devicesStyles.createIcon}\n' +
        '                              onPress={this._onPressOpenOptionsModal.bind(this)} />\n' +
        '                </View>\n' +
        '              </View>\n' +
        '            </View>\n' +
        '            <View>\n' +
        '              {continueButton}\n' +
        '            </View>\n' +
        '          </View>\n' +
        '        </View>\n' +
        '      </ScrollView>\n' +
        '    );\n' +
        '  };\n' +
        '\n' +
        '  render() {\n' +
        '    let content = this.props.mode === INTRO_MODE ?\n' +
        '    <View style={devicesStyles.cont}>\n' +
        '      {this._renderInfo()}\n' +
        '    </View>\n' +
        '    :\n' +
        '    <Home navigator={this.props.navigator}>\n' +
        '      {this._renderInfo()}\n' +
        '    </Home>;\n' +
        '\n' +
        '    return (\n' +
        '      <View>\n' +
        '        {content}\n' +
        '        {this.state.showModal ? this._renderModal() : null}\n' +
        '        {this.state.showOptionsModal ? this._renderOptionsModal() : null}\n' +
        '      </View>\n' +
        '    );\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'Devices.propTypes = {\n' +
        '  navigator: React.PropTypes.instanceOf(React.Navigator),\n' +
        '  mode: React.PropTypes.string\n' +
        '};\n' +
        '\n' +
        'export default Devices;'
      }
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
