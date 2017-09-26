export const PROJECTS = [
  {
    id: 1,
    name: 'Fitness',
    company: 'Scopic Software',
    description: 'Fitness project to track daily exercises and synchronization with different fitness devices.',
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
        code: 'import React, {\n' +
        '  StyleSheet,\n' +
        '  View,\n' +
        '  ScrollView,\n' +
        '  Image,\n' +
        '  Component\n' +
        '} from \'react-native\';\n' +
        '\n' +
        'import {\n' +
        '  ANDROID_WEAR,\n' +
        '  FITBIT,\n' +
        '  JAWBONE,\n' +
        '  MY_FITNESS_PAL,\n' +
        '  WITHINGS,\n' +
        '  UNDER_ARMOUR\n' +
        '} from \'../../../constants/screens\';\n' +
        '\n' +
        'import { H2 } from \'../../common/Heading\';\n' +
        'import Home from \'../home/Home\';\n' +
        'import Dimensions from \'Dimensions\';\n' +
        'import SyncData from \'./SyncData\';\n' +
        'import DevicesMenu from \'./DevicesMenu\';\n' +
        'import Icon from \'react-native-vector-icons/Ionicons\';\n' +
        'import IconButton from \'../../common/IconButton\';\n' +
        'import Button from \'../../common/Button\';\n' +
        'import DevicesService from \'../../../services/DevicesService\';\n' +
        'import {JOURNEY} from \'../../../constants/screens\';\n' +
        'import {INTRO_MODE} from \'../../../constants/planScreenMode\';\n' +
        'var styles = require(\'./../../styles\');\n' +
        '\n' +
        'var userDevices = DevicesService.find();\n' +
        'const iconsMap = {\'androidwearLogo\': require(\'./../../img/androidwearLogo.png\'),\n' +
        '                  \'fitbitLogo\': require(\'./../../img/fitbitLogo.png\'),\n' +
        '                  \'jawboneLogo\': require(\'./../../img/jawboneLogo.png\'),\n' +
        '                  \'myfitnesspalLogo\': require(\'./../../img/myfitnesspalLogo.png\'),\n' +
        '                  \'withingsLogo\': require(\'./../../img/withingsLogo.png\'),\n' +
        '                  \'underarmourLogo\': require(\'./../../img/underarmourLogo.png\')};\n' +
        '\n' +
        'class Devices extends Component {\n' +
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
        '    return <SyncData handleClose={boundClick}\n' +
        '                     title={this.state.title}\n' +
        '                     text={this.state.text} \n' +
        '                     confirmation={this.state.confirmation}\n' +
        '                     showModal={this.state.showModal}\n' +
        '                     icon={this.state.icon}\n' +
        '                     mode={this.props.mode}\n' +
        '                     navigator={this.props.navigator} />;\n' +
        '  }\n' +
        '\n' +
        '  _renderOptionsModal() {\n' +
        '    var boundClick = this._onPressCloseOptionsModal.bind(this);\n' +
        '    return <DevicesMenu handler={this.handler}\n' +
        '                        handleCloseOptions={boundClick}\n' +
        '                        showOptionsModal={this.state.showOptionsModal}\n' +
        '                        deviceTitle={this.state.deviceTitle}\n' +
        '                        data={this.state.data} />;\n' +
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
        'export default Devices;\n'
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
        file: 'audioContainer.js',
        language: 'javascript',
        code: 'import React, { Component, PropTypes } from \'react\';\n' +
        'import { connect } from \'react-redux\';\n' +
        'import { bindActionCreators } from \'redux\';\n' +
        'import Splitter from \'react-splitter/dist/react-splitter.js\';\n' +
        'import AjaxActions from \'../actions/AjaxActions.jsx\';\n' +
        'import Actions from \'../actions/Actions.jsx\';\n' +
        'import Utils from  \'../utils/Utils.jsx\';\n' +
        'import * as settings from \'../constants/settings.jsx\';\n' +
        '\n' +
        'import Head from \'../components/Head.jsx\';\n' +
        'import Video from \'../components/Video.jsx\';\n' +
        'import SubtitleRows from \'../components/SubtitleRows.jsx\';\n' +
        'import WaveformControls from \'../components/WaveformControls.jsx\';\n' +
        'import Waveform from \'../components/Waveform.jsx\';\n' +
        'import UserWaveform from \'../components/UserWaveform.jsx\';\n' +
        'import WaveformButtons from \'../components/WaveformButtons.jsx\';\n' +
        '\n' +
        'const window_height = window.innerHeight - 29;\n' +
        '\n' +
        'class AudioDescription extends Component {\n' +
        '    constructor(props) {\n' +
        '        super(props);\n' +
        '        this.props.dispatch(AjaxActions.fetchConfig());\n' +
        '    }\n' +
        '\n' +
        '    componentDidMount() {\n' +
        '        $(window).resize(function(event) {\n' +
        '            Utils.resizeListener(event);\n' +
        '        });\n' +
        '    }\n' +
        '\n' +
        '    render() {\n' +
        '        const {videoData, audioData, subtitleData, userWaveforms, waveformsData, buttonsData, moveAudioData, videoEvent, videoEventDispatcher, userAudioChange, subtitle, dispatch} = this.props;\n' +
        '        let actions = bindActionCreators(Object.assign({}, AjaxActions, Actions), dispatch);\n' +
        '        let user_tracks = settings.USER_TRACKS;\n' +
        '        let bottom_height = 226 + (65 * user_tracks.length);\n' +
        '        let bottom_percent = bottom_height*100/window_height;\n' +
        '\n' +
        '        return (\n' +
        '            <div id="content">\n' +
        '                <Head lastUpdated={this.props.lastUpdated}/>\n' +
        '                <Splitter style={{height: window_height}} orientation=\'horizontal\' position={100-bottom_percent+\'%\'} limit={bottom_height} onDragEnd={e => Utils.resizeListener(e)}>\n' +
        '                    <Splitter orientation=\'vertical\' position=\'60%\' onDragEnd={e => Utils.resizeListener(e)}>\n' +
        '                        <Video\n' +
        '                            data={videoData}\n' +
        '                            subtitleData={subtitleData}\n' +
        '                            subtitle={subtitle}\n' +
        '                            videoEvent={videoEvent}\n' +
        '                            waveformsData={waveformsData[-1]}//sent volume data from main waveform to video\n' +
        '                            {...actions}/>\n' +
        '                        <div>\n' +
        '                            <SubtitleRows subtitle={subtitle}/>\n' +
        '                        </div>\n' +
        '                    </Splitter>\n' +
        '                    <div id="waveform_container" className="loading" data-height={bottom_height}>\n' +
        '                        <WaveformButtons\n' +
        '                            moveAudioData={moveAudioData}\n' +
        '                            buttonsData={buttonsData}\n' +
        '                            {...actions}/>\n' +
        '                        <Waveform\n' +
        '                            data={audioData}\n' +
        '                            videoData={videoData}\n' +
        '                            videoEvent={videoEvent}\n' +
        '                            subtitle={subtitle}\n' +
        '                            waveformsData={waveformsData[-1]}\n' +
        '                            buttonsData={buttonsData}\n' +
        '                            {...actions}/>\n' +
        '                        <div id="user_waveforms">\n' +
        '                            {user_tracks.map(function(user_track, track_id) {\n' +
        '                                return <div className="user_waveforms_container" key={track_id}>\n' +
        '                                    <WaveformControls\n' +
        '                                        height="64"\n' +
        '                                        color={user_track.bgColor}\n' +
        '                                        label={user_track.name}\n' +
        '                                        index={track_id}\n' +
        '                                        waveformsData={waveformsData[track_id]}\n' +
        '                                        userWaveforms={userWaveforms}\n' +
        '                                        {...actions}/>\n' +
        '                                    {userWaveforms.map(function(userWaveform, i) {\n' +
        '                                        if (userWaveform.track_id != track_id) return;\n' +
        '\n' +
        '                                        return (\n' +
        '                                            <UserWaveform\n' +
        '                                                key={i}\n' +
        '                                                index={i}\n' +
        '                                                trackId={track_id}\n' +
        '                                                userWaveformsLength={userWaveforms.length}\n' +
        '                                                background={user_track.bgColor}\n' +
        '                                                data={userWaveform}\n' +
        '                                                videoData={videoData}\n' +
        '                                                videoEvent={videoEvent}\n' +
        '                                                waveformsData={waveformsData[track_id]}\n' +
        '                                                buttonsData={buttonsData}\n' +
        '                                                {...actions}/>\n' +
        '                                        );\n' +
        '                                    })}\n' +
        '                                </div>\n' +
        '                            })}\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </Splitter>\n' +
        '            </div>\n' +
        '        );\n' +
        '    }\n' +
        '};\n' +
        '\n' +
        'AudioDescription.propTypes = {\n' +
        '    videoData: PropTypes.object.isRequired,\n' +
        '    audioData: PropTypes.object.isRequired,\n' +
        '    subtitleData: PropTypes.array.isRequired,\n' +
        '    isFetching: PropTypes.bool.isRequired,\n' +
        '    isFetched: PropTypes.bool.isRequired,\n' +
        '    lastUpdated: PropTypes.number,\n' +
        '    userWaveforms: PropTypes.array.isRequired\n' +
        '};\n' +
        '\n' +
        'function mapStateToProps(state) {\n' +
        '    const { appConfig, videoEvent, userWaveforms, subtitle, waveformsData, buttonsData, moveAudioData} = state;\n' +
        '\n' +
        '    const { isFetching,  isFetched, videoData, audioData, subtitleData, lastUpdated} = appConfig.hasOwnProperty(\'isFetching\') ? appConfig : {\n' +
        '        isFetching: true,\n' +
        '        isFetched: false,\n' +
        '        videoData: {},\n' +
        '        audioData: {},\n' +
        '        subtitleData: [],\n' +
        '        lastUpdated: 0\n' +
        '    };\n' +
        '\n' +
        '    return {\n' +
        '        videoData,\n' +
        '        audioData,\n' +
        '        waveformsData,\n' +
        '        buttonsData,\n' +
        '        moveAudioData,\n' +
        '        subtitleData,\n' +
        '        isFetching,\n' +
        '        isFetched,\n' +
        '        videoEvent,\n' +
        '        userWaveforms,\n' +
        '        subtitle,\n' +
        '        lastUpdated\n' +
        '    };\n' +
        '}\n' +
        '\n' +
        'export default connect(mapStateToProps)(AudioDescription);\n',
      },
      {
        file: 'video.js',
        language: 'javascript',
        code: 'import React from \'react\'\n' +
        'import Utils from \'../utils/Utils.jsx\'\n' +
        'import TTMLParser from \'../utils/TTMLParser.jsx\'\n' +
        'import ControlBar from \'../utils/controlbar/ControlBar.jsx\'\n' +
        'require("../utils/controlbar/controlbar.css");\n' +
        '\n' +
        'let player;\n' +
        '\n' +
        'class Video extends Component {\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '\n' +
        '    this.controlbar = null;\n' +
        '    this.state = {\n' +
        '      video_url: \'\',\n' +
        '      subtitleAdded: false,\n' +
        '      volume: 0,\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  componentDidMount() {\n' +
        '    player = dashjs.MediaPlayer().create();\n' +
        '    player.setAutoPlay(false);\n' +
        '    player.getDebug().setLogToBrowserConsole(false);\n' +
        '    \n' +
        '    this.controlbar = new ControlBar(player);\n' +
        '\n' +
        '    document.getElementById(\'main_video\').onloadedmetadata = () => {\n' +
        '      Utils.resizeVideoCaptionContainer();\n' +
        '    }\n' +
        '\n' +
        '    this.addEventListeners();\n' +
        '  }\n' +
        '  \n' +
        '  componentWillUnmount() {\n' +
        '    this.controlbar.destroy();\n' +
        '    this.removeEventListeners();\n' +
        '  }\n' +
        '\n' +
        '  addEventListeners() {\n' +
        '    player.on(\'playbackPaused\', this.dispatchVideoEvent)\n' +
        '    player.on(\'playbackSeeking\', this.dispatchVideoEvent)\n' +
        '    player.on(\'playbackSeeked\', this.dispatchVideoEvent)\n' +
        '  }\n' +
        '\n' +
        '  removeEventListeners() {\n' +
        '    player.off(\'playbackPaused\', this.dispatchVideoEvent);\n' +
        '    player.off(\'playbackSeeking\', this.dispatchVideoEvent);\n' +
        '    player.off(\'playbackSeeked\',this.dispatchVideoEvent);\n' +
        '  }\n' +
        '\n' +
        '  dispatchVideoEvent(ev){\n' +
        '    let videoEventDispatcher = this.props.videoEventDispatcher;\n' +
        '    videoEventDispatcher(ev);\n' +
        '  }\n' +
        '\n' +
        '  componentWillReceiveProps(nextProps) {\n' +
        '    if (nextProps.data.url != this.state.video_url && nextProps.data.url) {\n' +
        '      let url = nextProps.data.url;\n' +
        '      this.setState({video_url: url});\n' +
        '      player.initialize(document.querySelector("#main_video"), url, false);\n' +
        '      player.attachView(document.querySelector("#main_video"));\n' +
        '      player.attachTTMLRenderingDiv(document.querySelector("#video-caption"));\n' +
        '      \n' +
        '      player.setAutoSwitchQuality(true);\n' +
        '      player.setBandwidthSafetyFactor(0.7);\n' +
        '      player.setScheduleWhilePaused(true);\n' +
        '      \n' +
        '      this.controlbar.setFrameRate(nextProps.data.frame_rate);\n' +
        '      this.controlbar.initialize();\n' +
        '      this.controlbar.setVolume(nextProps.waveformsData.volumeData);\n' +
        '\n' +
        '      if (!nextProps.subtitle.isFetched && !nextProps.subtitle.isFetching){\n' +
        '        let sub_url = nextProps.subtitleData[0].url;\n' +
        '        nextProps.fetchSubtitle(sub_url);\n' +
        '      }\n' +
        '    }\n' +
        '    //parse subtitle\n' +
        '    if (nextProps.subtitle.isFetched && !nextProps.subtitle.isParsed) {\n' +
        '      let parser = new TTMLParser();\n' +
        '      parser.videoModel = player.getVideoModel();\n' +
        '      let subs = [];\n' +
        '      let sub = parser.parse(nextProps.subtitle.xml);\n' +
        '      for (let i in sub){\n' +
        '      let one_sub = sub[i];\n' +
        '      let cue = new VTTCue(one_sub.start, one_sub.end, one_sub.cueHTMLElement.innerHTML);\n' +
        '      cue.id = parseInt(i)+1;\n' +
        '      cue.line = 14;\n' +
        '      cue.smpt_start = this.controlbar.secondsToSMPTETimecode(cue.startTime);\n' +
        '      cue.smpt_end = this.controlbar.secondsToSMPTETimecode(cue.endTime);\n' +
        '      subs.push(cue);\n' +
        '      }\n' +
        '\n' +
        '      nextProps.parseSubtitle(subs);\n' +
        '    }\n' +
        '    //add subtitle to video\n' +
        '    if (nextProps.subtitle.isParsed && !this.state.subtitleAdded){\n' +
        '      this.setState({subtitleAdded:true});\n' +
        '\n' +
        '      let track = $(\'#main_video\')[0].addTextTrack(\'subtitles\', \'just a test\', \'en\');\n' +
        '      track.mode = \'hidden\';\n' +
        '      for (let i in nextProps.subtitle.parsed_xml){\n' +
        '        let cue = nextProps.subtitle.parsed_xml[i];\n' +
        '        let $html = $(\'<div />\', { html: cue.text});\n' +
        '        cue.text = $($html).html();\n' +
        '        track.addCue(cue);\n' +
        '      }\n' +
        '    }\n' +
        '    //update volume\n' +
        '    let volume = nextProps.waveformsData.mute ? 0 : nextProps.waveformsData.volume;\n' +
        '    if(volume != this.state.volume) {\n' +
        '      this.setState({volume: volume});\n' +
        '      this.controlbar.setVolume(volume);\n' +
        '    }\n' +
        '    //update video position based on audio seek value\n' +
        '    let type = nextProps.videoEvent.hasOwnProperty(\'type\') ? nextProps.videoEvent.type : \'\';\n' +
        '    if (type == \'audioSeek\' && nextProps.videoEvent.seekTime){\n' +
        '      this.removeEventListeners();\n' +
        '      player.seek(nextProps.videoEvent.seekTime);\n' +
        '      this.addEventListeners();\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '    _renderDuration() {\n' +
        '      return (\n' +
        '        <ul className="list-unstyled time-container col-md-3">\n' +
        '          <li>\n' +
        '            <span id="videoDuration" className="duration-display" title="smpte (hh:mm:ss:ff)">00:00:00.00</span>\n' +
        '          </li>\n' +
        '          <li>\n' +
        '            <span id="videoTime" className="time-display" title="media (hh:mm:ss.mss)">00:00:00.000</span>\n' +
        '          </li>\n' +
        '        </ul>\n' +
        '      )\n' +
        '    }\n' +
        '\n' +
        '    _renderArrowControls() {\n' +
        '      return (\n' +
        '        <div className="text-center col-md-6">\n' +
        '          <div id="previousSubtitleBtn" className="btn-player" title="Previous subtitle (Shift+F3)">\n' +
        '            <i className="glyphicon glyphicon-fast-backward"></i>\n' +
        '          </div>\n' +
        '          <div id="backwardBtn" className="btn-player" title="Backward 1s (Shift+F2)">\n' +
        '            <i className="glyphicon glyphicon-backward"></i>\n' +
        '          </div>\n' +
        '          <div id="recordBtn" className="btn-player" title="Record">\n' +
        '            <i id="iconRecord" className="glyphicon glyphicon-record"></i>\n' +
        '          </div>\n' +
        '          <div id="playPauseBtn" className="btn-player" title="Play/Pause (Ctrl+Space)">\n' +
        '            <i id="iconPlayPause" className="glyphicon glyphicon-play"></i>\n' +
        '          </div>\n' +
        '          <div id="forwardBtn" className="btn-player" title="Forward 1s (F2)">\n' +
        '            <i className="glyphicon glyphicon-forward"></i>\n' +
        '          </div>\n' +
        '          <div id="nextSubtitleBtn" className="btn-player" title="Next subtitle (F3)">\n' +
        '            <i className="glyphicon glyphicon-fast-forward"></i>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      )\n' +
        '    }\n' +
        '\n' +
        '    _renderVolumeControls() {\n' +
        '      return (\n' +
        '        <div className="col-md-3">\n' +
        '          <div id="fullscreenBtn" className="btn-fullscreen hide" title="Fullscreen">\n' +
        '            <span className="icon-fullscreen-enter"></span>\n' +
        '          </div>\n' +
        '          <input type="range" id="volumebar" className="volumebar" defaultValue="1" min="0" max="1" step=".01" />\n' +
        '\n' +
        '          <div id="muteBtn" className="btn-player" title="Mute">\n' +
        '            <span id="iconMute" className="glyphicon glyphicon-volume-up"></span>\n' +
        '          </div>\n' +
        '          <div id="captionBtn" className="btn-caption" title="Closed Caption">\n' +
        '            <i className="glyphicon glyphicon-subtitles"></i>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      )\n' +
        '    }\n' +
        '\n' +
        '    render() {\n' +
        '      return (\n' +
        '        <div id="main_video_container">\n' +
        '          <video id="main_video" controls></video>\n' +
        '          <div id="video-caption"></div>\n' +
        '          <div id="videoController" className="video-controller unselectable">\n' +
        '            <div className="seekContainer">\n' +
        '              <input type="range" id="seekbar" defaultValue="0" className="seekbar" min="0" step="0.01"/>\n' +
        '            </div>\n' +
        '            {this._renderDuration()}\n' +
        '            {this._renderArrowControls()}\n' +
        '            {this._renderVolumeControls()}\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      )\n' +
        '    }\n' +
        '});\n' +
        '\n' +
        'export default (Video);\n'
      },
      {
        file: 'styles.css',
        language: 'css',
        code: '#main_video{\n' +
        '  height: calc(100% - 45px);\n' +
        '  width: 100%;\n' +
        '}\n' +
        '#main_video_container{\n' +
        '  background: #000000;\n' +
        '}\n' +
        '#video-caption{\n' +
        '  text-shadow:\n' +
        '  -1px -1px 0 #000,\n' +
        '  1px -1px 0 #000,\n' +
        '  -1px 1px 0 #000,\n' +
        '  1px 1px 0 #000;\n' +
        '}\n' +
        '#video-caption .span_highlighted{\n' +
        '  color: #3fc2fe;\n' +
        '}\n' +
        '#recordBtn.active i{\n' +
        '  color: red;\n' +
        '}\n' +
        '#playback-position {\n' +
        '  background-color: red;\n' +
        '  position: absolute;\n' +
        '  top: 66px;\n' +
        '  width: 1px;\n' +
        '  height: 225px;\n' +
        '  z-index: 500;\n' +
        '  left: 0px;\n' +
        '  display: none;\n' +
        '  margin-left: 100px;\n' +
        '}\n' +
        '#playback-position span{\n' +
        '  margin-left: -7px;\n' +
        '  margin-top: -1px;\n' +
        '  position: absolute;\n' +
        '  color: red;\n' +
        '}\n' +
        '#progress-bar {\n' +
        '  left: 5%;\n' +
        '  margin-top: -10px;\n' +
        '  position: absolute;\n' +
        '  top: 50%;\n' +
        '  width: 90%;\n' +
        '  z-index: 10;\n' +
        '}\n' +
        '#waveform_container.loading #user_waveforms,\n' +
        '#waveform_container.loading #wave-minimap,\n' +
        '#waveform_container.loading .waveform-controls,\n' +
        '#waveform_container #progress-bar{\n' +
        '  display: none;\n' +
        '}\n' +
        '#waveform_container #user_waveforms,\n' +
        '#waveform_container #wave-minimap,\n' +
        '#waveform_container .waveform-controls,\n' +
        '#waveform_container.loading #progress-bar{\n' +
        '  display: block;\n' +
        '}\n' +
        '.wavesurfer-region{\n' +
        '  line-height: 9px;\n' +
        '  font-size: 9px;\n' +
        '  color: #ffffff;\n' +
        '  word-wrap: break-word;\n' +
        '  padding: 2px 0;\n' +
        '}\n' +
        '#waveform {\n' +
        '  background-color: #000;\n' +
        '}\n' +
        '#waveform > wave{\n' +
        '  margin-left: 100px;\n' +
        '}\n' +
        '/*.user_waveform > wave > wave,*/\n' +
        '#waveform > wave > wave,\n' +
        '#waveform-audio > wave > wave{\n' +
        '  border-right: none !important;\n' +
        '}\n' +
        '#user_waveforms{\n' +
        '  display: none;\n' +
        '  position: relative;\n' +
        '  overflow: hidden;\n' +
        '  width: 100%;\n' +
        '  position: relative;\n' +
        '  border-top: 1px solid #415163;\n' +
        '}\n' +
        '.user_waveforms_container{\n' +
        '  bottom: 0;\n' +
        '  left: 0;\n' +
        '  position: relative;\n' +
        '  top: 0;\n' +
        '  z-index: 1;\n' +
        '  height: 65px;\n' +
        '  border-bottom: 1px solid #415163;\n' +
        '}\n' +
        '.user_waveform{\n' +
        '  display: block;\n' +
        '  cursor: pointer;\n' +
        '  cursor: hand;\n' +
        '}\n' +
        '.user_waveform wave{\n' +
        '  overflow: hidden !important;\n' +
        '}\n' +
        '.user_waveform_footer{\n' +
        '  cursor: pointer;\n' +
        '  height: 28px;\n' +
        '  margin-top: -67px;\n' +
        '  position: absolute;\n' +
        '  right: 0;\n' +
        '  z-index: 2;\n' +
        '}\n' +
        '.ruler{\n' +
        '  width: 100%;\n' +
        '  height: 23px;\n' +
        '  margin-bottom: -5px;\n' +
        '}\n' +
        '.react-draggable{\n' +
        '  display: inline-block;\n' +
        '  position: absolute;\n' +
        '  margin-left: 100px;\n' +
        '}\n' +
        '#subtitle-widget{\n' +
        '  padding: 0;\n' +
        '}\n' +
        '#subtitle-widget .active:before{\n' +
        '  display: block;\n' +
        '  background: #ffffff;\n' +
        '  height: 68px;\n' +
        '  width: 1px;\n' +
        '  content: \'\';\n' +
        '  margin-top: 1px;\n' +
        '  position: absolute;\n' +
        '}\n' +
        '#subtitle-widget .active .time-picker{\n' +
        '  color: #ffffff;\n' +
        '}\n' +
        '#wave-timeline{\n' +
        '  height: 20px;\n' +
        '  display: block;\n' +
        '  margin-left: 100px;\n' +
        '}\n' +
        '#wave-minimap{\n' +
        '  border-bottom: 1px solid #415163;\n' +
        '  height: 30px;\n' +
        '  display: block;\n' +
        '}\n' +
        '#wave-minimap > wave > overview{\n' +
        '  height: 30px !important;\n' +
        '}\n' +
        '\n' +
        '.loop {\n' +
        '  position: absolute;\n' +
        '  z-index: 2;\n' +
        '  top: 0px;\n' +
        '  margin: -2px 0px 0px 1px;\n' +
        '  cursor: pointer;\n' +
        '}\n' +
        '\n' +
        '.loop-pressed {\n' +
        '  background-color: #0381A7\n' +
        '}\n'
      }
    ]
  },
  {
    id: 3,
    name: 'Casting Mobile',
    company: 'Scopic Software',
    description: 'Mobile application dedicated to review and rate voiceovers castings for different characters and languages for a movie.',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/scopic-logo.png',
    tags: ['React Native', 'JS', 'CSS', 'Flexbox', 'Redux'],
    sampleCodes: [
      {
        file: '',
        language: '',
        code: ''
      },
      {
        file: '',
        language: '',
        code: ''
      }
    ]
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
