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
    name: 'Voiceovers',
    company: 'Scopic Software',
    description: 'Mobile application dedicated to review and rate voiceovers castings for different characters and languages for a movie.',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/scopic-logo.png',
    tags: ['React Native', 'JS', 'CSS', 'Flexbox', 'Redux'],
    sampleCodes: [
      {
        file: 'index.js',
        language: 'javascript',
        code: 'import React, {Component} from \'react\';\n' +
        'import { StatusBar, Navigator, View, Text, Platform } from \'react-native\';\n' +
        'import Castings from \'./screens/castings\';\n' +
        'import MovieLanguage from \'./screens/language\';\n' +
        'import Login from \'./screens/login\';\n' +
        'import Characters from \'./screens/characters\';\n' +
        'import Actors from \'./screens/actors\';\n' +
        'import AppStorage from \'./storage/AppStorage\';\n' +
        'import global from \'./components/styles/global\';\n' +
        'import { connect } from \'react-redux\';\n' +
        'import { mapStateToProps, mapDispatchToProps } from \'./screens/login/props\';\n' +
        '\n' +
        'import {\n' +
        '  CASTINGS,\n' +
        '  LOGIN,\n' +
        '  MOVIE_LANGUAGE,\n' +
        '  CHARACTERS,\n' +
        '  ACTORS\n' +
        '} from \'./share/constant\';\n' +
        '\n' +
        'class App extends Component {\n' +
        '\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '    this.appStorage = new AppStorage();\n' +
        '    this.renderScene = this.renderScene.bind(this);\n' +
        '    this._checkInitialScreen();\n' +
        '  }\n' +
        '\n' +
        '  _checkInitialScreen() {\n' +
        '    this.props.isLoggedUser();\n' +
        '  }\n' +
        '\n' +
        '  renderScene(route, navigator) {\n' +
        '    let ScreenComponent = null;\n' +
        '\n' +
        '    switch (route.name) {\n' +
        '      case LOGIN:\n' +
        '        ScreenComponent = Login;\n' +
        '        break;\n' +
        '      case CASTINGS:\n' +
        '        ScreenComponent = Castings;\n' +
        '        break;\n' +
        '      case MOVIE_LANGUAGE:\n' +
        '        ScreenComponent = MovieLanguage;\n' +
        '        break;\n' +
        '      case CHARACTERS:\n' +
        '        ScreenComponent = Characters;\n' +
        '        break;\n' +
        '      case ACTORS:\n' +
        '        ScreenComponent = Actors;\n' +
        '        break;\n' +
        '    }\n' +
        '\n' +
        '    if (ScreenComponent) {\n' +
        '      return <ScreenComponent navigator={navigator} onMenuItemSelected={this.onMenuItemSelected.bind(this)} {...route.passProps} />;\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  onMenuItemSelected(item) {\n' +
        '    switch (item) {\n' +
        '      case \'Logout\':\n' +
        '        this.appStorage.clearAllData();\n' +
        '        break;\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '    let content;\n' +
        '    let bgColor = (Platform.OS === \'ios\' ? \'white\' : \'#262a2e\');\n' +
        '\n' +
        '    if (this.props.screen) {\n' +
        '      content = (\n' +
        '        <View style={{ flex: 1 }}>\n' +
        '          <StatusBar backgroundColor={bgColor} barStyle="light-content" />\n' +
        '          <Navigator style={{ flex: 1 }}\n' +
        '                     initialRoute={{ name: this.props.screen }}\n' +
        '                     renderScene={this.renderScene.bind(this)} />\n' +
        '        </View>\n' +
        '      );\n' +
        '    } else {\n' +
        '      content = (<View style={global.content}>\n' +
        '                  <View style={{flex: 1, justifyContent: \'center\', alignItems: \'center\'}}>\n' +
        '                    <Text style={{fontFamily: \'OpenSans\', fontSize: 20, color: \'#FFF\'}}>Loading...</Text>\n' +
        '                    <Text style={{fontFamily: \'OpenSans\', fontSize: 20, color: \'#FFF\'}}>Please wait</Text>\n' +
        '                  </View>\n' +
        '                </View>);\n' +
        '    }\n' +
        '    return (\n' +
        '      content\n' +
        '    );\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'module.exports = connect(mapStateToProps, mapDispatchToProps)(App);'
      },
      {
        file: 'characterReducer.js',
        language: 'javascript',
        code: '\'use strict\';\n' +
        '\n' +
        'import ActionType from \'../share/actionTypes\';\n' +
        'import _ from \'lodash\';\n' +
        '\n' +
        'const INITIAL_STATE = {\n' +
        '  isLoading: false,\n' +
        '  isLoadingList: false,\n' +
        '  isLoadingFilter: false,\n' +
        '  characters: [],\n' +
        '  charactersFilter: [],\n' +
        '  movie: null,\n' +
        '  language: null\n' +
        '};\n' +
        '\n' +
        'function characters(state = INITIAL_STATE, action) {\n' +
        '  switch (action.type) {\n' +
        '    case ActionType.CHARACTER_LIST_FETCHING:\n' +
        '      return {\n' +
        '        ...state,\n' +
        '        ...action.payload\n' +
        '      };\n' +
        '    case ActionType.CHARACTER_LIST_FETCHED:\n' +
        '      return {\n' +
        '        ...state,\n' +
        '        ...action.payload\n' +
        '      };\n' +
        '    case ActionType.CHARACTER_FILTERING:\n' +
        '      return {\n' +
        '        ...state,\n' +
        '        ...action.payload\n' +
        '      };\n' +
        '    case ActionType.CHARACTER_FILTER:\n' +
        '      let filterResult = [];\n' +
        '\n' +
        '      if (action.payload.filterText.length === 0) {\n' +
        '        filterResult = state.characters;\n' +
        '      } else {\n' +
        '        filterResult = _.filter(state.characters, (item) => {\n' +
        '          return _.contains(item.characterName.toLowerCase(), action.payload.filterText.toLowerCase());\n' +
        '        });\n' +
        '      }\n' +
        '\n' +
        '      return {\n' +
        '        ...state,\n' +
        '        charactersFilter: filterResult,\n' +
        '        isLoadingFilter: action.payload.isLoadingFilter\n' +
        '      };\n' +
        '    case ActionType.VOICEOVERS_FETCHING:\n' +
        '      return {\n' +
        '        ...state,\n' +
        '        ...action.payload\n' +
        '      };\n' +
        '    case ActionType.VOICEOVERS_FETCHED:\n' +
        '      return {\n' +
        '        ...state,\n' +
        '        ...action.payload\n' +
        '      };\n' +
        '    default:\n' +
        '      return state;\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'module.exports = characters;\n'
      },
      {
        file: 'casting.js',
        language: 'javascript',
        code: '\'use strict\';\n' +
        '\n' +
        'import React, {Component} from \'react\';\n' +
        'import ListComponent from \'../../components/list\';\n' +
        'import CastingRow from \'./CastingRow\';\n' +
        'import SearchBar from \'../../components/search-bar\';\n' +
        'import Storage from \'./../../modules/storage\';\n' +
        'import Menu from \'../../components/menu\';\n' +
        'const SideMenu = require(\'react-native-side-menu\');\n' +
        'let TimerMixin = require(\'react-timer-mixin\');\n' +
        'let reactMixin = require(\'react-mixin\');\n' +
        'import { connect } from \'react-redux\';\n' +
        'import { mapStateToProps, mapDispatchToProps } from \'./props\';\n' +
        '\n' +
        'import {\n' +
        '  MOVIE_LANGUAGE,\n' +
        '  LOGIN,\n' +
        '  ORDERS_EP,\n' +
        '  LOGOUT,\n' +
        '  SEARCH_CASTINGS\n' +
        '} from \'./../../share/constant\';\n' +
        '\n' +
        'class Castings extends Component {\n' +
        '  static propTypes = {\n' +
        '    navigator: React.PropTypes.object.isRequired\n' +
        '  }\n' +
        '\n' +
        '  mixins: [TimerMixin];\n' +
        '\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '    this._onSearch = this._onSearch.bind(this);\n' +
        '  }\n' +
        '\n' +
        '  componentDidMount() {\n' +
        '    this.fetchData();\n' +
        '  }\n' +
        '\n' +
        '  fetchData() {\n' +
        '    this.props.fetchCastings();\n' +
        '  }\n' +
        '\n' +
        '  _onSearch(event) {\n' +
        '    this.props.filterCastings(event.nativeEvent.text);\n' +
        '  }\n' +
        '\n' +
        '  _renderSearchBar() {\n' +
        '    return (\n' +
        '      <SearchBar\n' +
        '        ref=\'search\'\n' +
        '        placeholder={SEARCH_CASTINGS}\n' +
        '        isLoading={this.props.isLoading}\n' +
        '        onSearch={this._onSearch}\n' +
        '      />\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  selectMediaItem(mediaItem) {\n' +
        '    this.props.onMovieSelected(mediaItem);\n' +
        '    this.props.navigator.push({\n' +
        '      name: MOVIE_LANGUAGE,\n' +
        '      passProps: {\n' +
        '        mediaItem\n' +
        '      }\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  renderRow(\n' +
        '    media: Object,\n' +
        '    sectionID: number | string,\n' +
        '    rowID: number | string,\n' +
        '    highlightRowFunction: (sectionID: ?number | string, rowID: ?number | string) => void,\n' +
        '  ) {\n' +
        '    return (\n' +
        '      <CastingRow\n' +
        '        rowID={rowID}\n' +
        '        media={media}\n' +
        '        showThumbnail\n' +
        '        endPoint={ORDERS_EP}\n' +
        '        onSelect={() => this.selectMediaItem(media)}\n' +
        '        onHighlight={() => highlightRowFunction(sectionID, rowID)}\n' +
        '        onDeHighlight={() => highlightRowFunction(null, null)}\n' +
        '      />\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  toggle() {\n' +
        '    this.props.toggleMenu(!this.props.isOpen);\n' +
        '  }\n' +
        '\n' +
        '  updateMenu(isOpen) {\n' +
        '    this.props.toggleMenu(isOpen);\n' +
        '  }\n' +
        '\n' +
        '  onMenuItemSelected(item) {\n' +
        '    this.props.onMenuItemSelected(item);\n' +
        '    this.props.toggleMenu(false);\n' +
        '\n' +
        '    if (item === LOGOUT) {\n' +
        '      Storage.clearUserData();\n' +
        '      this.props.navigator.push({\n' +
        '        name: LOGIN,\n' +
        '        passProps: {\n' +
        '          item\n' +
        '        }\n' +
        '      });\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '    const menu = <Menu onItemSelected={this.onMenuItemSelected.bind(this)} />;\n' +
        '\n' +
        '    return (\n' +
        '      <SideMenu\n' +
        '        menu={menu}\n' +
        '        isOpen={this.props.isOpen}\n' +
        '        onChange={(isOpen) => this.updateMenu(isOpen)}>\n' +
        '        <ListComponent navigator={this.props.navigator}\n' +
        '                       nextScreen={MOVIE_LANGUAGE}\n' +
        '                       searchBar={this._renderSearchBar()}\n' +
        '                       resultsData={this.props.castingsFilter}\n' +
        '                       isLoading={this.props.isLoading}\n' +
        '                       endPoint={ORDERS_EP}\n' +
        '                       renderRow={this.renderRow.bind(this)}\n' +
        '                       toggle={this.toggle.bind(this)}\n' +
        '                       includeToolbar />\n' +
        '       </SideMenu>\n' +
        '    );\n' +
        '  }\n' +
        '};\n' +
        '\n' +
        'reactMixin(Castings.prototype, TimerMixin);\n' +
        '\n' +
        'module.exports = connect(mapStateToProps, mapDispatchToProps)(Castings);\n'
      },
      {
        file: 'style.js',
        language: 'css',
        code: '\'use strict\';\n' +
        '\n' +
        'import StyleSheet from \'../../share/stylesheet\';\n' +
        '\n' +
        'module.exports = StyleSheet({\n' +
        '  actorContainer: {\n' +
        '    alignItems: \'center\',\n' +
        '    backgroundColor: \'#262a2e\'\n' +
        '  },\n' +
        '  avatarImage: {\n' +
        '    marginTop: 10,\n' +
        '    borderRadius: 48,\n' +
        '    height: 100,\n' +
        '    width: 100,\n' +
        '    backgroundColor: \'yellow\'\n' +
        '  },\n' +
        '  actorName: {\n' +
        '    fontSize: 15,\n' +
        '    fontWeight: \'bold\',\n' +
        '    textAlign: \'center\',\n' +
        '    color: \'#96a6ad\',\n' +
        '    marginTop: 10\n' +
        '  },\n' +
        '  videoControlsContainer: {\n' +
        '    backgroundColor: \'#202328\',\n' +
        '  },\n' +
        '  divider: {\n' +
        '    backgroundColor: \'#40464d\',\n' +
        '    height: 1,\n' +
        '  },\n' +
        '  topDivider: {\n' +
        '    marginTop: 10\n' +
        '  },\n' +
        '  videoControls: {\n' +
        '    flexDirection: \'row\',\n' +
        '    alignItems: \'center\',\n' +
        '    justifyContent: \'center\'\n' +
        '  },\n' +
        '  contentLength: {\n' +
        '    backgroundColor: \'#16181c\',\n' +
        '    height: 35,\n' +
        '    marginTop: 10\n' +
        '  },\n' +
        '  contentLengthFiller: {\n' +
        '    flex: 1,\n' +
        '    backgroundColor: \'#96a6ad\'\n' +
        '  },\n' +
        '  contentLengthText: {\n' +
        '    color: \'#96a6ad\',\n' +
        '    position: \'absolute\',\n' +
        '    left: 180,\n' +
        '    top: 10\n' +
        '  },\n' +
        '  videoControlButtons: {\n' +
        '    color: \'#96A6Ad\'\n' +
        '  },\n' +
        '  icon: {\n' +
        '    marginLeft: 10,\n' +
        '    marginRight: 10\n' +
        '  },\n' +
        '  stars: {\n' +
        '    marginRight: 50,\n' +
        '    flexDirection: \'row\',\n' +
        '    alignSelf: \'center\',\n' +
        '    marginBottom: 10\n' +
        '  },\n' +
        '  rating: {\n' +
        '    fontWeight: \'bold\'\n' +
        '  },\n' +
        '  starSpacing: {\n' +
        '    marginLeft: 5\n' +
        '  },\n' +
        '  internalComments: {\n' +
        '    marginLeft: 10\n' +
        '  },\n' +
        '  playContainer: {\n' +
        '    alignItems: \'center\',\n' +
        '    flexDirection: \'row\',\n' +
        '    alignSelf: \'center\',\n' +
        '    marginBottom: 10\n' +
        '  },\n' +
        '  playText: {\n' +
        '    fontSize: 14,\n' +
        '    color: \'white\',\n' +
        '    fontWeight: \'bold\',\n' +
        '    marginLeft: 8\n' +
        '  }\n' +
        '});\n'
      }
    ]
  },
  {
    id: 4,
    name: 'Canvas Handler',
    company: 'Scopic Software',
    description: 'Banner designer built with fabric JS that allow to create different shapes and add images and manipulate them.',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/scopic-logo.png',
    tags: ['React JS', 'JS', 'CSS', 'Flexbox', 'Redux'],
    sampleCodes: [
      {
        file: 'canvas.js',
        language: 'javascript',
        code: 'class Canvas extends Component {\n' +
        '\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '    this.drawingObject=null;\n' +
        '    this.lastClickOnCanvasTime=0;\n' +
        '    this.state={\n' +
        '      drawRuler: false,\n' +
        '      present: [],\n' +
        '      isFetchingUserDesign: false,\n' +
        '      isLoadingFonts: false\n' +
        '    };\n' +
        '  }\n' +
        '\n' +
        '  componentWillMount() {\n' +
        '    this.fabricCanvas=new fabric.fabric.Canvas();\n' +
        '    this.fabricCanvas.preserveObjectStacking = true;\n' +
        '    this.drawer=new Drawer(this.fabricCanvas, this.notifyCanvasObjectsChanged.bind(this));\n' +
        '  }\n' +
        '\n' +
        '    componentDidMount() {\n' +
        '    this._initCanvas(0, 0);\n' +
        '    if (isMobile.any()) {\n' +
        '      this._initMultiGestures();\n' +
        '    }\n' +
        '\n' +
        '    this.fabricCanvas.uniScaleTransform = true;\n' +
        '    this.fabricCanvas.uniScaleKey=\'\';\n' +
        '    this.fabricCanvas.centeredKey=\'\';\n' +
        '    this.fabricCanvas.renderOnAddRemove=false;\n' +
        '    this.fabricCanvas.skipOffscreen=true;\n' +
        '\n' +
        '    if(isMobile.any()){\n' +
        '      fabric.fabric.util.addListener(this.fabricCanvas.upperCanvasEl, \'touchstart\', this._onTouchStart.bind(this));\n' +
        '    }\n' +
        '\n' +
        '    this.fabricCanvas.on(\'mouse:up\', (o) => {\n' +
        '      let pointer = this.fabricCanvas.getPointer(o.e);\n' +
        '\n' +
        '      let drawParams = {\n' +
        '        //shape params\n' +
        '        canvasObject: this.drawingObject,\n' +
        '        originPoint: this.originPointer,\n' +
        '        newPoint: pointer,\n' +
        '        properties: this.props.lastShapeProperties,\n' +
        '      };\n' +
        '\n' +
        '      if(drawingTools.indexOf(this.props.selectedTool)!=-1) {\n' +
        '        if(!this.drawingObject){\n' +
        '          this.drawingObject = this.drawer.process(this.props.selectedTool, drawParams);\n' +
        '        }\n' +
        '        let width = this.props.bannerUnitSize;\n' +
        '        let height = this.props.bannerUnitSize;\n' +
        '\n' +
        '        //if the shape is below minimum size\n' +
        '        if (this.drawingObject && (this.drawingObject.height < height || this.drawingObject.width < width)) {\n' +
        '          let drawParamsWithMin = {\n' +
        '            properties: this.props.lastShapeProperties,\n' +
        '            canvasObject: this.drawingObject,\n' +
        '            originPoint: this.originPointer,\n' +
        '            newPoint: pointer\n' +
        '          };\n' +
        '          this.fabricCanvas.remove(this.drawingObject);\n' +
        '          this.fabricCanvas.renderAll();\n' +
        '          this.drawingObject = this.drawer.process(this.props.selectedTool, drawParamsWithMin);\n' +
        '        }\n' +
        '      }\n' +
        '\n' +
        '      if (this.props.selectedTool !== TOOL.PAN && this.props.selectedTool !== TOOL.TEXT) {\n' +
        '        this.props.selectTool(TOOL.SELECTION);\n' +
        '      }\n' +
        '\n' +
        '      this.notifyCanvasObjectsChanged();\n' +
        '\n' +
        '      this.drawingObject=null;\n' +
        '      this.originPointer=null;\n' +
        '    });\n' +
        '\n' +
        '    this.fabricCanvas.on(\'mouse:down\', (o) => {\n' +
        '      let pointer = this.fabricCanvas.getPointer(o.e);\n' +
        '      this.originPointer = {\n' +
        '        x: pointer.x,\n' +
        '        y: pointer.y\n' +
        '      };\n' +
        '\n' +
        '      if(this.props.selectedTool==TOOL.TEXT) {\n' +
        '        this.props.openTextModal(MODAL.MODAL_TOOL,pointer);\n' +
        '        this.props.selectTool(TOOL.SELECTION);\n' +
        '      }\n' +
        '    });\n' +
        '\n' +
        '    this.fabricCanvas.on(\'object:selected\', ()=>{\n' +
        '      let object=this.fabricCanvas.getActiveObject();\n' +
        '      if(object && object.type===\'line\' && object.propStrokeWidth==0){\n' +
        '        object.propStrokeWidth=1;\n' +
        '      }\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  componentWillUnmount(){\n' +
        '    if(isMobile.any()){\n' +
        '      fabric.fabric.util.removeListener(this.fabricCanvas.upperCanvasEl, \'touchstart\', this._onTouchStart.bind(this));\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  componentWillReceiveProps(nextProps) {\n' +
        '    this._checkChangeActiveObject(nextProps);\n' +
        '    this._checkLockLayer(nextProps);\n' +
        '    this._checkOrderLayers(nextProps);\n' +
        '    this._checkAlign(nextProps);\n' +
        '    this._checkAddClipart(nextProps);\n' +
        '    this._checkHistoryObjects(nextProps);\n' +
        '    this._checkCanvasObjects(nextProps);\n' +
        '    this._checkTemplateDesign(nextProps);\n' +
        '    this._checkSelectedLayers(nextProps);\n' +
        '  }\n' +
        '\n' +
        '  _onTouchStart(o){\n' +
        '    if (this.props.selectedTool===TOOL.SELECTION) {\n' +
        '      this._checkAndHandleDoubleClick(o);\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _initMultiGestures() {\n' +
        '    let self = this;\n' +
        '    window.document.addEventListener(\'touchstart\', (e)=>{\n' +
        '      if (e.touches.length === 3) {\n' +
        '        e.preventDefault();\n' +
        '      }\n' +
        '    });\n' +
        '    window.document.addEventListener(\'touchmove\', (e)=>{\n' +
        '      if (e.touches.length === 3) {\n' +
        '        e.preventDefault();\n' +
        '        self.moving = true;\n' +
        '      } else {\n' +
        '        self.moving = false;\n' +
        '      }\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  _checkAndHandleDoubleClick(o) {\n' +
        '    let time = (new Date()).getTime();\n' +
        '    if ((time - this.lastClickOnCanvasTime) < 300) {\n' +
        '      let target=this.fabricCanvas.findTarget(o);\n' +
        '      this.props.setPropertiesPaneVisible(target?true:false);\n' +
        '    }\n' +
        '    this.lastClickOnCanvasTime=time;\n' +
        '  }\n' +
        '\n' +
        '  _setActiveGroup(objects) {\n' +
        '    let groupObjects = [];\n' +
        '    objects.forEach((object) => {\n' +
        '      if (object) {\n' +
        '        groupObjects.push(object);\n' +
        '      }\n' +
        '    });\n' +
        '\n' +
        '    let group = new fabric.fabric.Group(groupObjects, {});\n' +
        '    this.fabricCanvas.setActiveGroup(group).renderAll();\n' +
        '  }\n' +
        '\n' +
        '  _checkSelectedLayers(nextProps) {\n' +
        '    if (nextProps.selectedLayers !== this.props.selectedLayers) {\n' +
        '      let selectedLayers = nextProps.selectedLayers;\n' +
        '      let canvas = this.fabricCanvas;\n' +
        '      let objects = [];\n' +
        '\n' +
        '      selectedLayers.forEach((layer) => {\n' +
        '        let object = this.getObjectById(layer);\n' +
        '        let isBlocked = isBlockedObject(object);\n' +
        '\n' +
        '        if (!isBlocked) {\n' +
        '          objects.push(object);\n' +
        '        }\n' +
        '      });\n' +
        '\n' +
        '      if (objects.length > 1) {\n' +
        '        canvas.deactivateAll().renderAll();\n' +
        '        this._setActiveGroup(objects);\n' +
        '      } else if (objects.length === 1) {\n' +
        '        canvas.deactivateAll().renderAll();\n' +
        '        let object = objects[0];\n' +
        '        let isBlocked = isBlockedObject(object);\n' +
        '\n' +
        '        if (!isBlocked) {\n' +
        '          canvas.setActiveObject(object);\n' +
        '        }\n' +
        '      }\n' +
        '\n' +
        '      if (selectedLayers.length === 1) {\n' +
        '        canvas.deactivateAll().renderAll();\n' +
        '\n' +
        '        let objectId = selectedLayers[0];\n' +
        '        let object = this.getObjectById(objectId);\n' +
        '        let isBlocked = isBlockedObject(object);\n' +
        '\n' +
        '        if (!isBlocked) {\n' +
        '          canvas.setActiveObject(object);\n' +
        '        }\n' +
        '      }\n' +
        '\n' +
        '      if (selectedLayers.length === 0) {\n' +
        '        canvas.deactivateAll().renderAll();\n' +
        '      }\n' +
        '\n' +
        '      this.notifyCanvasObjectsChanged();\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _checkTemplateDesign(nextProps) {\n' +
        '    if (nextProps.loadedInitialData !== this.props.loadedInitialData) {\n' +
        '      if (nextProps.loadedInitialData) {\n' +
        '        if (nextProps.templateDesign) {\n' +
        '          this.loadDesign(nextProps, nextProps.templateDesign);\n' +
        '        }\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _checkCanvasObjects(nextProps) {\n' +
        '    let objects = nextProps.objects.canvasObject.objects;\n' +
        '    let thisObjects = this.props.objects.canvasObject.objects;\n' +
        '    let equalArrays = arraysEqual(objects, thisObjects);\n' +
        '\n' +
        '    if (!equalArrays) {\n' +
        '      this.props.addHistory(objects);\n' +
        '\n' +
        '      let showAlert = false;\n' +
        '      for(let i=0; i<objects.length; i++){\n' +
        '        let object=objects[i];\n' +
        '        if (object.type === \'image\') {\n' +
        '          let isValidObject = this._isValidImagePPI(object);\n' +
        '          if (!isValidObject) {\n' +
        '            showAlert = true;\n' +
        '            break;\n' +
        '          }\n' +
        '        }\n' +
        '      }\n' +
        '\n' +
        '      if(showAlert!=this.props.showAlert){\n' +
        '        this.props.showAlertMsg(showAlert);\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _checkHistoryObjects(nextProps) {\n' +
        '    if (this.props.present !== nextProps.present) {\n' +
        '      if (nextProps.selectedTool === TOOL.UNDO || nextProps.selectedTool === TOOL.REDO) {\n' +
        '        let data = nextProps.present.data;\n' +
        '        let bannerGrade = nextProps.bannerGradeData[this.props.bannerGradeId];\n' +
        '\n' +
        '        this.undoableHandler.handleUndoRedo(data, bannerGrade);\n' +
        '        this.props.clearSelection();\n' +
        '        this.props.selectTool(TOOL.SELECTION);\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  loadDesign(nextProps, jsonData) {\n' +
        '    let objects = nextProps.objects.canvasObject.objects;\n' +
        '    this.designHandler.clearCanvas(objects);\n' +
        '\n' +
        '    let product = jsonData.product;\n' +
        '    let border = jsonData.product.border;\n' +
        '    this.props.changeBannerBackgroundColor(product.background);\n' +
        '    this.props.changeBannerOrientation(product.orientation);\n' +
        '    this.props.changeBannerGrade(product.grade);\n' +
        '    this.props.changeBannerSize(product.size.id);\n' +
        '    this.props.setBannerBorder(border);\n' +
        '\n' +
        '    if (product.size.id === this.props.bannerSizeId && product.orientation === this.props.orientation) {\n' +
        '      this.designHandler.doLoadObjects(jsonData);\n' +
        '    } else {\n' +
        '      this._isLoadingDesignObjects=true;\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  exportObjectsToJSON(exportObjects, fileName) {\n' +
        '    this.props.exportObjectsToJSON(exportObjects, fileName);\n' +
        '  }\n' +
        '\n' +
        '  getObjectById(objectId) {\n' +
        '    let selectedObject = null;\n' +
        '    if (objectId) {\n' +
        '      selectedObject = this.fabricCanvas.getObjectById(objectId);\n' +
        '    }\n' +
        '\n' +
        '    return selectedObject;\n' +
        '  }\n' +
        '\n' +
        '  notifyCanvasObjectsChanged(objectId){\n' +
        '    this.fabricCanvas.reorderSpecialObjects();\n' +
        '    this.fabricCanvas.getNormalObjects().forEach((obj)=>{\n' +
        '      obj.set({\n' +
        '        realWidth:getInchesValueFromPixel(obj.width, this.props.bannerUnitSize, obj.scaleX),\n' +
        '        realHeigh:getInchesValueFromPixel(obj.height, this.props.bannerUnitSize, obj.scaleY),\n' +
        '        realTop: getInchesValueFromPixel(obj.top-START_OFFSET, this.props.bannerUnitSize),\n' +
        '        realLeft: getInchesValueFromPixel(obj.left-START_OFFSET, this.props.bannerUnitSize),\n' +
        '      });\n' +
        '    });\n' +
        '    let canvasObject = this.fabricCanvas.toDatalessJSON([\n' +
        '      \'lockRotation\',\n' +
        '      \'lockMovementX\',\n' +
        '      \'lockMovementY\',\n' +
        '      \'hasControls\',\n' +
        '      \'hasBorders\',\n' +
        '      \'selectable\',\n' +
        '      \'lockScalingX\',\n' +
        '      \'lockScalingY\',\n' +
        '      \'objectId\',\n' +
        '      \'name\',\n' +
        '      \'effectColor\',\n' +
        '      \'imageType\',\n' +
        '      \'isVector\',\n' +
        '      \'realWidth\',\n' +
        '      \'realHeigh\',\n' +
        '      \'realTop\',\n' +
        '      \'realLeft\'\n' +
        '    ]);\n' +
        '    let selectedObject = null;\n' +
        '    let selectedObjects = [];\n' +
        '    if (typeof objectId !== \'undefined\') {\n' +
        '      selectedObject = objectId;\n' +
        '    } else {\n' +
        '      let activeObject = this.fabricCanvas.getActiveObject();\n' +
        '      selectedObject = activeObject ? activeObject.objectId : -1;\n' +
        '    }\n' +
        '\n' +
        '    let activeGroup = this.fabricCanvas.getActiveGroup();\n' +
        '    if (activeGroup) {\n' +
        '      selectedObjects = activeGroup.getObjects();\n' +
        '    }\n' +
        '\n' +
        '    this.props.notifyCanvasObjectsChanged(canvasObject, selectedObject, selectedObjects);\n' +
        '  }\n' +
        '\n' +
        '  _initCanvas(width, height) {\n' +
        '    let el = this.refs.canvasContainer.refs.objectsCanvas;\n' +
        '    this.fabricCanvas.initialize(el, {\n' +
        '      width: width,\n' +
        '      height: height\n' +
        '    });\n' +
        '\n' +
        '    this.refs.canvasContainer.loadAndRender(this.props.objects);\n' +
        '  }\n' +
        '\n' +
        '  _doReorderLayers(layersOrder) {\n' +
        '    let objects = [];\n' +
        '\n' +
        '    for (let layer of layersOrder.reverse()) {\n' +
        '      let object = this.getObjectById(layer.objectId);\n' +
        '      objects.push(object);\n' +
        '    }\n' +
        '\n' +
        '    for (let object of objects) {\n' +
        '      this.fabricCanvas.bringToFront(object);\n' +
        '    }\n' +
        '\n' +
        '    this.fabricCanvas.renderAll();\n' +
        '  }\n' +
        '\n' +
        '  _handleKeyDownEvent(e){\n' +
        '    e.preventDefault();\n' +
        '    e.stopPropagation();\n' +
        '    this._handleKeyDown(e.keyCode, e.shiftKey);\n' +
        '  }\n' +
        '\n' +
        '  _handleKeyDown(keyCode, shiftKey){\n' +
        '    let result=handleKeyDown(keyCode, shiftKey, this.fabricCanvas, this.props.bannerUnitSize);\n' +
        '    if(result){\n' +
        '      this.notifyCanvasObjectsChanged();\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _handleKeyUpEvent(e){\n' +
        '    e.preventDefault();\n' +
        '    e.stopPropagation();\n' +
        '    handleKeyUp(e.keyCode, this.fabricCanvas);\n' +
        '  }\n' +
        '\n' +
        '  _checkAlign(nextProps){\n' +
        '    if (nextProps.alignedPosition !== this.props.alignedPosition) {\n' +
        '      if (nextProps.alignedPosition !== \'\') {\n' +
        '        this.alignHandler.doAlign(nextProps.alignedPosition);\n' +
        '        this.props.alignToPage(\'\');\n' +
        '      }\n' +
        '    }\n' +
        '\n' +
        '    if (nextProps.alignedToObject !== this.props.alignedToObject) {\n' +
        '      if (nextProps.alignedToObject !== \'\') {\n' +
        '        this.alignHandler.doAlignToObject(nextProps.alignedToObject);\n' +
        '        this.props.alignToObject(\'\');\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _checkOrderLayers(nextProps){\n' +
        '    if (nextProps.layersOrder !== this.props.layersOrder) {\n' +
        '      this._doReorderLayers(nextProps.layersOrder);\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _checkLockLayer(nextProps){\n' +
        '    if ((nextProps.indexLayerLock !== this.props.indexLayerLock) ||\n' +
        '            (nextProps.locked !== this.props.locked)) {\n' +
        '      if (!nextProps.locked) {\n' +
        '        this.lockHandler.unlockCanvasObject(nextProps.indexLayerLock);\n' +
        '      } else {\n' +
        '        this.lockHandler.lockCanvasObject(nextProps.indexLayerLock);\n' +
        '      }\n' +
        '      this.notifyCanvasObjectsChanged();\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _checkChangeActiveObject(nextProps){\n' +
        '    if (nextProps.selectedObject !== this.props.selectedObject && nextProps.selectedObject !== -1) {\n' +
        '      activeObjectHanlder(this.fabricCanvas, nextProps.selectedObject);\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _checkAddClipart(nextProps){\n' +
        '    if (nextProps.clipartUrl && nextProps.clipartUrl !== this.props.clipartUrl) {\n' +
        '      let objectId = this.drawer._newObjectId();\n' +
        '      this.imageHandler.doAddImage(nextProps.clipartUrl, objectId, CLIPART, 0.5, true);\n' +
        '      this.props.addClipart(\'\');\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _onCanvasScroll(value){\n' +
        '    handleScroll(this.fabricCanvas, value);\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '    let loadingMessage=\'\';\n' +
        '    if(this.state.isFetchingUserDesign){\n' +
        '      loadingMessage=LOADING_DESIGN;\n' +
        '    }else if(this.state.isLoadingFonts){\n' +
        '      loadingMessage=LOADING_FONTS;\n' +
        '    }\n' +
        '\n' +
        '    return (\n' +
        '      <div>\n' +
        '        <CanvasContainer ref=\'canvasContainer\'\n' +
        '                  canvasObjectState={this.props.objects}\n' +
        '                  fabricInstance={this.fabricCanvas}\n' +
        '                  onKeyDown={this._handleKeyDownEvent.bind(this)}\n' +
        '                  onKeyUp={this._handleKeyUpEvent.bind(this)}\n' +
        '                  onScroll={this._onCanvasScroll.bind(this)} />\n' +
        '\n' +
        '        <Ruler canvas={this.fabricCanvas}\n' +
        '              notifyCanvasObjectsChanged={this.notifyCanvasObjectsChanged.bind(this)} />\n' +
        '\n' +
        '        <Grid canvas={this.fabricCanvas}\n' +
        '              notifyCanvasObjectsChanged={this.notifyCanvasObjectsChanged.bind(this)} />\n' +
        '\n' +
        '        <Banner canvas={this.fabricCanvas}\n' +
        '              notifyCanvasObjectsChanged={this.notifyCanvasObjectsChanged.bind(this)} />\n' +
        '\n' +
        '        <SimpleLoading message={loadingMessage}\n' +
        '            isOpen={ this.state.isFetchingUserDesign || this.state.isLoadingFonts } />\n' +
        '      </div>\n' +
        '    );\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const mapStateToProps = (state) => {\n' +
        '  return {\n' +
        '    fabricCanvas: state.fabricCanvas,\n' +
        '    objects: state.canvas,\n' +
        '    newObject: state.canvas.newObject,\n' +
        '    selectedTool : state.tools.selectedTool,\n' +
        '    selectedObject: state.canvas.selectedObject\n' +
        '  };\n' +
        '};\n' +
        '\n' +
        'const mapDispatchToProps = (dispatch) => {\n' +
        '  return {\n' +
        '    notifyCanvasObjectsChanged : (canvasObject, selectedObject, selectedGroup) => {\n' +
        '      dispatch(notifyCanvasObjectsChanged(canvasObject, selectedObject, selectedGroup));\n' +
        '    },\n' +
        '    selectTool: (toolName) => {\n' +
        '      dispatch(selectTool(toolName));\n' +
        '    }\n' +
        '  };\n' +
        '};\n' +
        '\n' +
        'export default connect(mapStateToProps, mapDispatchToProps)(Canvas);\n'
      },
      {
        file: 'align.js',
        language: 'javascript',
        code: 'import React, {Component} from \'react\';\n' +
        'import { connect } from \'react-redux\';\n' +
        'import ReactTooltip from \'react-tooltip\';\n' +
        'import ToolButton from \'../../commons/tool_button\';\n' +
        'import { alignToPage, alignToObject } from \'../../../actions\';\n' +
        'import * as TOOL from \'../../commons/alignment_constants\';\n' +
        '\n' +
        'import topIcon from \'./icons/align_top.svg\';\n' +
        'import bottomIcon from \'./icons/align_bottom.svg\';\n' +
        'import leftIcon from \'./icons/align_left.svg\';\n' +
        'import rightIcon from \'./icons/align_right.svg\';\n' +
        'import centerVIcon from \'./icons/align_center_vertical.svg\';\n' +
        'import centerHIcon from \'./icons/align_center_horizontal.svg\';\n' +
        '\n' +
        'class AlignContent extends Component {\n' +
        '  alignRelativeToPage(position) {\n' +
        '    this.props.alignToPage(position);\n' +
        '  }\n' +
        '\n' +
        '  alignRelativeToObject(position) {\n' +
        '    this.props.alignToObject(position);\n' +
        '  }\n' +
        '\n' +
        '  _relativeToObjects() {\n' +
        '    return (\n' +
        '      <div>\n' +
        '        <p className=\'iconsTitle\'>Relative to Objects</p>\n' +
        '        <div className=\'buttonsContainer\'>\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToObject(TOOL.LEFT)}\n' +
        '              tooltip={TOOL.LEFT}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={leftIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToObject(TOOL.CENTER_V)}\n' +
        '              tooltip={TOOL.CENTER_V}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={centerVIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToObject(TOOL.RIGHT)}\n' +
        '              tooltip={TOOL.RIGHT}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={rightIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToObject(TOOL.TOP)}\n' +
        '              tooltip={TOOL.TOP}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={topIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToObject(TOOL.CENTER_H)}\n' +
        '              tooltip={TOOL.CENTER_H}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={centerHIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToObject(TOOL.BOTTOM)}\n' +
        '              tooltip={TOOL.BOTTOM}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={bottomIcon} />\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  _relativeToPage() {\n' +
        '    return (\n' +
        '      <div>\n' +
        '        <p className=\'iconsTitle\'>Relative to Page</p>\n' +
        '        <div className=\'buttonsContainer\'>\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToPage(TOOL.LEFT)}\n' +
        '              tooltip={TOOL.LEFT}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={leftIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToPage(TOOL.CENTER_V)}\n' +
        '              tooltip={TOOL.CENTER_V}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={centerVIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToPage(TOOL.RIGHT)}\n' +
        '              tooltip={TOOL.RIGHT}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={rightIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToPage(TOOL.TOP)}\n' +
        '              tooltip={TOOL.TOP}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={topIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToPage(TOOL.CENTER_H)}\n' +
        '              tooltip={TOOL.CENTER_H}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={centerHIcon} />\n' +
        '          <ToolButton\n' +
        '              className=\'align-btn\'\n' +
        '              onClick={() => this.alignRelativeToPage(TOOL.BOTTOM)}\n' +
        '              tooltip={TOOL.BOTTOM}\n' +
        '              tooltipId=\'align-tooltip\'\n' +
        '              icon={bottomIcon} />\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '     return (\n' +
        '       <div className=\'alignContainer\'>\n' +
        '         {this._relativeToObjects()}\n' +
        '         {this._relativeToPage()}\n' +
        '         <ReactTooltip id=\'align-tooltip\' delayShow={200} class=\'tooltip align\' place="bottom" type="info" effect="solid" />\n' +
        '       </div>\n' +
        '     );\n' +
        '   }\n' +
        '}\n' +
        '\n' +
        'const mapStateToProps = (state) => {\n' +
        '  return {\n' +
        '    alignedPosition: state.canvas.alignedPosition,\n' +
        '    alignedToObject: state.canvas.alignedToObject\n' +
        '  };\n' +
        '};\n' +
        '\n' +
        'const mapDispatchToProps = (dispatch) => {\n' +
        '  return {\n' +
        '    alignToPage: (alignedPosition) => {\n' +
        '      dispatch(alignToPage(alignedPosition));\n' +
        '    },\n' +
        '    alignToObject: (alignedToObject) => {\n' +
        '      dispatch(alignToObject(alignedToObject));\n' +
        '    }\n' +
        '  };\n' +
        '};\n' +
        '\n' +
        'export default connect(\n' +
        '  mapStateToProps,\n' +
        '  mapDispatchToProps\n' +
        ')(AlignContent);\n'
      },
      {
        file: 'layers.js',
        language: 'javascript',
        code: 'import \'babel-polyfill\';\n' +
        'import React, {Component} from \'react\';\n' +
        'import { SortableContainer, SortableElement, arrayMove } from \'react-sortable-hoc\';\n' +
        'import {\n' +
        '  closest,\n' +
        '  events,\n' +
        '  vendorPrefix,\n' +
        '  limit,\n' +
        '  getElementMargin,\n' +
        '  provideDisplayName,\n' +
        '  omit,\n' +
        '} from \'react-sortable-hoc/dist/commonjs/utils\';\n' +
        '\n' +
        'import { connect } from \'react-redux\';\n' +
        'import { selectObject, toggleLayerLock, reorderLayers, setSelectedLayers } from \'../../../actions\';\n' +
        'import Item from \'./item\';\n' +
        'import {\n' +
        '  SPECIAL_OBJECTS\n' +
        '} from \'../../commons/object_constants\';\n' +
        'import {\n' +
        '  isBlockedObject,\n' +
        '  isFireFox\n' +
        '} from \'../../commons/helper\';\n' +
        'import { isMobile } from \'../../commons/mobile\';\n' +
        '\n' +
        'const SortableItem = SortableElement(({key, indexValue, item, value, onClickLayer, onClickLock, activeSelected, itemsSelected, onSetItemsSelected}) =>\n' +
        '        <li>\n' +
        '          <Item item={item} indexValue={indexValue} onClickLayer={onClickLayer} onClickLock={onClickLock} value={value} activeSelected={activeSelected} itemsSelected={itemsSelected} onSetItemsSelected={onSetItemsSelected} />\n' +
        '        </li>\n' +
        ');\n' +
        '\n' +
        'const SortableListLib = SortableContainer(({items, onClickLayer, onClickLock, activeSelected, itemsSelected, onSetItemsSelected}) => {\n' +
        '  return (\n' +
        '    <ul className="sortable">\n' +
        '      {items.map((item, index) =>\n' +
        '        <SortableItem\n' +
        '          key={`item${item.index}`}\n' +
        '          index={index}\n' +
        '          indexValue={index}\n' +
        '          item={item}\n' +
        '          value={item.value}\n' +
        '          onClickLayer={onClickLayer}\n' +
        '          onClickLock={onClickLock}\n' +
        '          activeSelected={activeSelected}\n' +
        '          itemsSelected={itemsSelected}\n' +
        '          onSetItemsSelected={onSetItemsSelected}\n' +
        '        />\n' +
        '      )}\n' +
        '    </ul>\n' +
        '  );\n' +
        '});\n' +
        '\n' +
        'class SortableList extends SortableListLib{\n' +
        '  constructor(props){\n' +
        '    super(props);\n' +
        '    let handlePress=this.handlePress;\n' +
        '    this.handlePress = (e)=>{\n' +
        '      if(this.props.shouldCancelStart && this.props.shouldCancelStart(e)){\n' +
        '        return;\n' +
        '      }\n' +
        '\n' +
        '      handlePress.call(this, e);\n' +
        '      let top=parseFloat(this.helper.style.top);\n' +
        '      let delta=0;\n' +
        '      if(isMobile.any() && isFireFox()){\n' +
        '        delta= -parseFloat(window.$(\'html\').css("top"));\n' +
        '      }else{\n' +
        '        delta=window.scrollY;\n' +
        '      }\n' +
        '      this.helper.style.top=(top+delta)+\'px\';\n' +
        '    };\n' +
        '  }\n' +
        '\n' +
        '  animateNodes() {\n' +
        '    let htmlTop=0;\n' +
        '    if(isMobile.any() && isFireFox()){\n' +
        '      htmlTop=parseFloat(window.$(\'html\').css("top"));\n' +
        '    }\n' +
        '\n' +
        '    const {transitionDuration, hideSortableGhost} = this.props;\n' +
        '    const nodes = this.manager.getOrderedRefs();\n' +
        '    const deltaScroll = {\n' +
        '      left: this.scrollContainer.scrollLeft - this.initialScroll.left,\n' +
        '      top: this.scrollContainer.scrollTop - this.initialScroll.top,\n' +
        '    };\n' +
        '    const sortingOffset = {\n' +
        '      left: this.offsetEdge.left + this.translate.x + deltaScroll.left,\n' +
        '      top: this.offsetEdge.top + this.translate.y + deltaScroll.top - htmlTop,\n' +
        '    };\n' +
        '    const scrollDifference = {\n' +
        '      top: (window.pageYOffset - this.initialWindowScroll.top),\n' +
        '      left: (window.pageXOffset - this.initialWindowScroll.left),\n' +
        '    };\n' +
        '    this.newIndex = null;\n' +
        '\n' +
        '    for (let i = 0, len = nodes.length; i < len; i++) {\n' +
        '      const {node} = nodes[i];\n' +
        '      const index = node.sortableInfo.index;\n' +
        '      const width = node.offsetWidth;\n' +
        '      const height = node.offsetHeight;\n' +
        '      const offset = {\n' +
        '        width: this.width > width ? width / 2 : this.width / 2,\n' +
        '        height: this.height > height ? height / 2 : this.height / 2,\n' +
        '      };\n' +
        '\n' +
        '      const translate = {\n' +
        '        x: 0,\n' +
        '        y: 0,\n' +
        '      };\n' +
        '      let {edgeOffset} = nodes[i];\n' +
        '\n' +
        '      // If we haven\'t cached the node\'s offsetTop / offsetLeft value\n' +
        '      if (!edgeOffset) {\n' +
        '        nodes[i].edgeOffset = (edgeOffset = this.getEdgeOffset(node));\n' +
        '      }\n' +
        '\n' +
        '      // Get a reference to the next and previous node\n' +
        '      const nextNode = i < nodes.length - 1 && nodes[i + 1];\n' +
        '      const prevNode = i > 0 && nodes[i - 1];\n' +
        '\n' +
        '      // Also cache the next node\'s edge offset if needed.\n' +
        '      // We need this for calculating the animation in a grid setup\n' +
        '      if (nextNode && !nextNode.edgeOffset) {\n' +
        '        nextNode.edgeOffset = this.getEdgeOffset(nextNode.node);\n' +
        '      }\n' +
        '\n' +
        '      // If the node is the one we\'re currently animating, skip it\n' +
        '      if (index === this.index) {\n' +
        '        if (hideSortableGhost) {\n' +
        '          /*\n' +
        '\t\t\t\t\t * With windowing libraries such as `react-virtualized`, the sortableGhost\n' +
        '\t\t\t\t\t * node may change while scrolling down and then back up (or vice-versa),\n' +
        '\t\t\t\t\t * so we need to update the reference to the new node just to be safe.\n' +
        '\t\t\t\t\t */\n' +
        '          this.sortableGhost = node;\n' +
        '          node.style.visibility = \'hidden\';\n' +
        '          node.style.opacity = 0;\n' +
        '        }\n' +
        '        continue;\n' +
        '      }\n' +
        '\n' +
        '      if (transitionDuration) {\n' +
        '        node.style[\n' +
        '          `${vendorPrefix}TransitionDuration`\n' +
        '        ] = `${transitionDuration}ms`;\n' +
        '      }\n' +
        '\n' +
        '      if (this.axis.x) {\n' +
        '        if (this.axis.y) {\n' +
        '          // Calculations for a grid setup\n' +
        '          if (\n' +
        '            index < this.index &&\n' +
        '            (\n' +
        '              ((sortingOffset.left + scrollDifference.left) - offset.width <= edgeOffset.left &&\n' +
        '              (sortingOffset.top + scrollDifference.top) <= edgeOffset.top + offset.height) ||\n' +
        '              (sortingOffset.top + scrollDifference.top) + offset.height <= edgeOffset.top\n' +
        '            )\n' +
        '          ) {\n' +
        '            // If the current node is to the left on the same row, or above the node that\'s being dragged\n' +
        '            // then move it to the right\n' +
        '            translate.x = this.width + this.marginOffset.x;\n' +
        '            if (\n' +
        '              edgeOffset.left + translate.x >\n' +
        '              this.containerBoundingRect.width - offset.width\n' +
        '            ) {\n' +
        '              // If it moves passed the right bounds, then animate it to the first position of the next row.\n' +
        '              // We just use the offset of the next node to calculate where to move, because that node\'s original position\n' +
        '              // is exactly where we want to go\n' +
        '              translate.x = nextNode.edgeOffset.left - edgeOffset.left;\n' +
        '              translate.y = nextNode.edgeOffset.top - edgeOffset.top;\n' +
        '            }\n' +
        '            if (this.newIndex === null) {\n' +
        '              this.newIndex = index;\n' +
        '            }\n' +
        '          } else if (\n' +
        '            index > this.index &&\n' +
        '            (\n' +
        '              ((sortingOffset.left + scrollDifference.left) + offset.width >= edgeOffset.left &&\n' +
        '              (sortingOffset.top + scrollDifference.top) + offset.height >= edgeOffset.top) ||\n' +
        '              (sortingOffset.top + scrollDifference.top) + offset.height >= edgeOffset.top + height\n' +
        '            )\n' +
        '          ) {\n' +
        '            // If the current node is to the right on the same row, or below the node that\'s being dragged\n' +
        '            // then move it to the left\n' +
        '            translate.x = -(this.width + this.marginOffset.x);\n' +
        '            if (\n' +
        '              edgeOffset.left + translate.x <\n' +
        '              this.containerBoundingRect.left + offset.width\n' +
        '            ) {\n' +
        '              // If it moves passed the left bounds, then animate it to the last position of the previous row.\n' +
        '              // We just use the offset of the previous node to calculate where to move, because that node\'s original position\n' +
        '              // is exactly where we want to go\n' +
        '              translate.x = prevNode.edgeOffset.left - edgeOffset.left;\n' +
        '              translate.y = prevNode.edgeOffset.top - edgeOffset.top;\n' +
        '            }\n' +
        '            this.newIndex = index;\n' +
        '          }\n' +
        '        } else {\n' +
        '          if (\n' +
        '            index > this.index &&\n' +
        '            (sortingOffset.left + scrollDifference.left) + offset.width >= edgeOffset.left\n' +
        '          ) {\n' +
        '            translate.x = -(this.width + this.marginOffset.x);\n' +
        '            this.newIndex = index;\n' +
        '          } else if (\n' +
        '            index < this.index &&\n' +
        '            (sortingOffset.left + scrollDifference.left) <= edgeOffset.left + offset.width\n' +
        '          ) {\n' +
        '            translate.x = this.width + this.marginOffset.x;\n' +
        '            if (this.newIndex == null) {\n' +
        '              this.newIndex = index;\n' +
        '            }\n' +
        '          }\n' +
        '        }\n' +
        '      } else if (this.axis.y) {\n' +
        '        if (\n' +
        '          index > this.index &&\n' +
        '          (sortingOffset.top + scrollDifference.top) + offset.height >= edgeOffset.top\n' +
        '        ) {\n' +
        '          translate.y = -(this.height + this.marginOffset.y);\n' +
        '          this.newIndex = index;\n' +
        '        } else if (\n' +
        '          index < this.index &&\n' +
        '          (sortingOffset.top + scrollDifference.top) <= edgeOffset.top + offset.height\n' +
        '        ) {\n' +
        '          translate.y = this.height + this.marginOffset.y;\n' +
        '          if (this.newIndex == null) {\n' +
        '            this.newIndex = index;\n' +
        '          }\n' +
        '        }\n' +
        '      }\n' +
        '      node.style[`${vendorPrefix}Transform`] = `translate3d(${translate.x}px,${translate.y}px,0)`;\n' +
        '    }\n' +
        '\n' +
        '    if (this.newIndex == null) {\n' +
        '      this.newIndex = this.index;\n' +
        '    }\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'export class LayersContent extends Component {\n' +
        '\n' +
        '  static whitelist = new Set([\'input\', \'textarea\', \'ul\', \'option\']);\n' +
        '\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '\n' +
        '    this.state = {\n' +
        '      items: [],\n' +
        '      activeSelected: -1,\n' +
        '      itemsSelected: [],\n' +
        '      layersSelected: [],\n' +
        '      indexesSelected: []\n' +
        '    };\n' +
        '\n' +
        '    this.cursorX = -1;\n' +
        '    this.cursorY = -1;\n' +
        '  }\n' +
        '\n' +
        '  componentDidMount(){\n' +
        '    let $=window.$;\n' +
        '    let endScrolling=null;\n' +
        '\n' +
        '    $(window).on(\'scroll\', this._onScrolling.bind(this));\n' +
        '\n' +
        '    $(\'#layers\').on(\'scroll\', this._onScrolling.bind(this));\n' +
        '  }\n' +
        '\n' +
        '  _onScrolling(){\n' +
        '    this.shouldCancelSorting=true;\n' +
        '    if(this._endScrolling){\n' +
        '      clearTimeout(this._endScrolling);\n' +
        '    }\n' +
        '    this._endScrolling = setTimeout(()=> {\n' +
        '      this.shouldCancelSorting = false;\n' +
        '      clearTimeout(this._endScrolling);\n' +
        '    }, 100);\n' +
        '  }\n' +
        '\n' +
        '  componentWillUnmount(){\n' +
        '    let $=window.$;\n' +
        '    $(window).off(\'scroll\', this._onScrolling.bind(this));\n' +
        '    $(\'#layers\').off(\'scroll\', this._onScrolling.bind(this));\n' +
        '  }\n' +
        '\n' +
        '  componentWillReceiveProps(nextProps) {\n' +
        '    if (this.props.present !== nextProps.present) {\n' +
        '      let objects = nextProps.present.data;\n' +
        '      this._getLayers(objects);\n' +
        '    }\n' +
        '\n' +
        '    if (nextProps.selectedObject) {\n' +
        '      if (nextProps.selectedObject !== -1) {\n' +
        '        if (this.props.selectedObject !== nextProps.selectedObject) {\n' +
        '          this.setState({activeSelected: nextProps.selectedObject});\n' +
        '        }\n' +
        '      } else {\n' +
        '        if (nextProps.selectedObject !== this.state.activeSelected) {\n' +
        '          this.setState({activeSelected: nextProps.selectedObject});\n' +
        '        }\n' +
        '      }\n' +
        '    }\n' +
        '\n' +
        '    if (nextProps.selectedGroup) {\n' +
        '      if (this.props.selectedGroup !== nextProps.selectedGroup) {\n' +
        '        let selectedGroup = nextProps.selectedGroup;\n' +
        '        let itemsSelected = [];\n' +
        '\n' +
        '        selectedGroup.forEach((object) => {\n' +
        '          itemsSelected.push(object.objectId);\n' +
        '        });\n' +
        '\n' +
        '        this.setState({ itemsSelected: itemsSelected });\n' +
        '\n' +
        '        if (itemsSelected.length > 0) {\n' +
        '          this.setState({ layersSelected: itemsSelected });\n' +
        '        }\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  componentDidUpdate(){\n' +
        '    let dom=window.$(\'#layers\');\n' +
        '    let layersHeight=dom.find(\'#layers_container\').height() + 30;\n' +
        '    let containerHeight=dom.height();\n' +
        '\n' +
        '    if(!isMobile.any()){\n' +
        '      if(layersHeight > containerHeight){\n' +
        '        dom.find(\'.tab-content-inner\').height(layersHeight);\n' +
        '        dom.find(\'.potter-copyright\').css(\'position\', \'relative\');\n' +
        '      }else{\n' +
        '        if(window.isIE){\n' +
        '          dom.find(\'.tab-content-inner\').height(containerHeight);\n' +
        '          dom.find(\'.potter-copyright\').css(\'position\', \'absolute\');\n' +
        '        }else{\n' +
        '          dom.find(\'.potter-copyright\').css(\'position\', \'absolute\');\n' +
        '          dom.find(\'.tab-content-inner\').height(\'auto\');\n' +
        '        }\n' +
        '      }\n' +
        '    }else{\n' +
        '      let height=layersHeight>containerHeight ? layersHeight : containerHeight;\n' +
        '\n' +
        '      dom.find(\'.tab-content-inner\').height(height);\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  setItemsSelected(newItemSelected, key, index) {\n' +
        '    let allLayers = this.state.items;\n' +
        '    let itemsSelected = this.state.itemsSelected;\n' +
        '    let layersSelected = (key !== \'\') ? this.state.layersSelected : [];\n' +
        '    let indexesSelected = (key !== \'\') ? this.state.indexesSelected : [];\n' +
        '    let layers = [];\n' +
        '    let indexes = [];\n' +
        '    let ignoreLayer = false;\n' +
        '\n' +
        '    layersSelected.forEach((layer) => {\n' +
        '      if (layer !== newItemSelected) {\n' +
        '        layers.push(layer);\n' +
        '      } else {\n' +
        '        ignoreLayer = true;\n' +
        '      }\n' +
        '    });\n' +
        '\n' +
        '    indexesSelected.forEach((idx) => {\n' +
        '      if (idx !== index) {\n' +
        '        indexes.push(idx);\n' +
        '      }\n' +
        '    });\n' +
        '\n' +
        '    if (!ignoreLayer) {\n' +
        '      layers.push(newItemSelected);\n' +
        '      indexes.push({item: newItemSelected, index: index});\n' +
        '    }\n' +
        '\n' +
        '    if (key === \'shiftKey\') {\n' +
        '      let idxs = [];\n' +
        '      indexes.sort().forEach((index) => {\n' +
        '        idxs.push(index.index);\n' +
        '      });\n' +
        '\n' +
        '      let orderedIdx = idxs.sort();\n' +
        '      for (let i = orderedIdx[0]; i <= orderedIdx[orderedIdx.length - 1]; i++) {\n' +
        '        let newLayer = allLayers[i];\n' +
        '        let found = false;\n' +
        '\n' +
        '        layers.sort().forEach((layer) => {\n' +
        '          if (newLayer.value === layer) {\n' +
        '            found = true;\n' +
        '          }\n' +
        '        });\n' +
        '\n' +
        '        if (!found) {\n' +
        '          layers.push(newLayer.value);\n' +
        '          indexes.push({item: newLayer.value, index: newLayer.index});\n' +
        '        }\n' +
        '      }\n' +
        '    }\n' +
        '\n' +
        '    this.setState({layersSelected: layers, indexesSelected: indexes});\n' +
        '    this.props.setSelectedLayers(layers);\n' +
        '  }\n' +
        '\n' +
        '  onSortEnd = ({oldIndex, newIndex, collection}, e) => {\n' +
        '    if(isMobile.any() && isFireFox()){\n' +
        '      let $html=window.$(\'html\');\n' +
        '      let lastScrollTop = -parseFloat($html.css(\'top\'));\n' +
        '      $html.removeClass("noscroll");\n' +
        '      $html.css("top", "0px");\n' +
        '      $html.scrollTop(lastScrollTop);\n' +
        '    }\n' +
        '\n' +
        '    let layersOrder = arrayMove(this.state.items, oldIndex, newIndex);\n' +
        '    this.props.reorderLayers(layersOrder);\n' +
        '    this.setState({\n' +
        '      items: arrayMove(this.state.items, oldIndex, newIndex)\n' +
        '    });\n' +
        '  };\n' +
        '\n' +
        '  onSortStart({node, index, collection}, e){\n' +
        '    if(isMobile.any() && isFireFox()){\n' +
        '      let $html=window.$(\'html\');\n' +
        '      let lastScrollTop = $html.scrollTop();\n' +
        '      $html.addClass("noscroll");\n' +
        '      $html.css("top", "-" + lastScrollTop + "px");\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  _getLayers(objects) {\n' +
        '    let layersArr = [];\n' +
        '\n' +
        '    if (objects) {\n' +
        '      for (let i = 0; i < objects.length; i++) {\n' +
        '        let object = objects[i];\n' +
        '        if (SPECIAL_OBJECTS.indexOf(object.objectId) === -1) {\n' +
        '          let isBlocked = isBlockedObject(object);\n' +
        '          layersArr.push({objectId: object.objectId, index: i, value: object.name, locked: isBlocked});\n' +
        '        }\n' +
        '      }\n' +
        '      layersArr.reverse();\n' +
        '    }\n' +
        '\n' +
        '    this.setState({items: layersArr});\n' +
        '  }\n' +
        '\n' +
        '  toggleLock(objectId, locked, index) {\n' +
        '    this.props.toggleLayerLock(objectId, locked);\n' +
        '    this.clickedLayer(objectId, locked, index);\n' +
        '  }\n' +
        '\n' +
        '  clickedLayer(objectId, locked, index) {\n' +
        '    this.clearLayers();\n' +
        '    this.props.selectObject(objectId);\n' +
        '    this.setState({activeSelected: objectId});\n' +
        '  }\n' +
        '\n' +
        '  clearLayers() {\n' +
        '    this.setState({layersSelected: [], indexesSelected: []});\n' +
        '    this.props.setSelectedLayers([]);\n' +
        '  }\n' +
        '\n' +
        '  _renderDesktop() {\n' +
        '    return (\n' +
        '     <div id=\'layers_container\' className=\'layers_container\'>\n' +
        '        <SortableList\n' +
        '          distance={10}\n' +
        '          items={this.state.items}\n' +
        '          activeSelected={this.state.activeSelected}\n' +
        '          itemsSelected={this.state.itemsSelected}\n' +
        '          onSetItemsSelected={(items, key, index) => this.setItemsSelected(items, key, index)}\n' +
        '          onSortEnd={this.onSortEnd}\n' +
        '          onClickLayer={(index, locked) => this.clickedLayer(index, locked)}\n' +
        '          onClickLock={(id, locked, index) => this.toggleLock(id, locked, index)}\n' +
        '          helperClass=\'sortable_helper\'\n' +
        '          lockAxis=\'y\'\n' +
        '          lockToContainerEdges={true}\n' +
        '        />\n' +
        '     </div>\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  _renderMobile() {\n' +
        '    return (\n' +
        '     <div id=\'layers_container\' ref={(container)=>this.containerDom=container} className=\'layers_container\' style={{flex: 1}}>\n' +
        '        <SortableList\n' +
        '          pressDelay={500}\n' +
        '          items={this.state.items}\n' +
        '          activeSelected={this.state.activeSelected}\n' +
        '          itemsSelected={this.state.itemsSelected}\n' +
        '          onSetItemsSelected={(items, key, index) => this.setItemsSelected(items, key, index)}\n' +
        '          onSortStart={this.onSortStart.bind(this)}\n' +
        '          onSortEnd={this.onSortEnd}\n' +
        '          onClickLayer={(index, locked) => this.clickedLayer(index, locked)}\n' +
        '          onClickLock={(id, locked, index) => this.toggleLock(id, locked, index)}\n' +
        '          helperClass=\'sortable_helper\'\n' +
        '          lockAxis=\'y\'\n' +
        '          shouldCancelStart={()=>{\n' +
        '            return this.shouldCancelSorting;\n' +
        '          }}\n' +
        '          lockToContainerEdges\n' +
        '        />\n' +
        '     </div>\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '    return isMobile.any() ? this._renderMobile() : this._renderDesktop();\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const mapStateToProps = (state) => {\n' +
        '  return {\n' +
        '    objects: state.canvas.canvasObject.objects,\n' +
        '    selectedObject: state.canvas.selectedObject,\n' +
        '    indexLayerLock: state.canvas.indexLayerLock,\n' +
        '    locked: state.canvas.locked,\n' +
        '    layersOrder: state.canvas.layersOrder,\n' +
        '    selectedGroup: state.canvas.selectedGroup,\n' +
        '    present: state.history.present,\n' +
        '    selectedLayers: state.canvas.selectedLayers\n' +
        '  };\n' +
        '};\n' +
        '\n' +
        'const mapDispatchToProps = (dispatch) => {\n' +
        '  return {\n' +
        '    selectObject: (selectedObject) => {\n' +
        '      dispatch(selectObject(selectedObject));\n' +
        '    },\n' +
        '    toggleLayerLock: (indexLayerLock, locked) => {\n' +
        '      dispatch(toggleLayerLock(indexLayerLock, locked));\n' +
        '    },\n' +
        '    reorderLayers: (layersOrder) => {\n' +
        '      dispatch(reorderLayers(layersOrder));\n' +
        '    },\n' +
        '    setSelectedLayers: (selectedLayers) => {\n' +
        '      dispatch(setSelectedLayers(selectedLayers));\n' +
        '    }\n' +
        '  };\n' +
        '};\n' +
        '\n' +
        'export default connect(\n' +
        '  mapStateToProps,\n' +
        '  mapDispatchToProps\n' +
        ')(LayersContent);\n'
      },
      {
        file: 'styles.css',
        language: 'css',
        code: '.alert.text-modal .content {\n' +
        '  padding: 20px 20px;\n' +
        '}\n' +
        '\n' +
        '.alert.text-modal .content input {\n' +
        '  margin-top: 10px;\n' +
        '}\n' +
        '\n' +
        '.canvas-tool-buttons {\n' +
        '  margin: auto;\n' +
        '}\n' +
        '\n' +
        '.prop-row.fonts .Select-control {\n' +
        '  border-radius: 4px;\n' +
        '  height: 40px;\n' +
        '}\n' +
        '\n' +
        '.prop-row.fonts .Select-control .Select-value {\n' +
        '  background: linear-gradient(#fff, #ccc);\n' +
        '  border-radius: 4px;\n' +
        '  font-weight: bold;\n' +
        '  border: 2px solid #888;\n' +
        '}\n' +
        '\n' +
        '.prop-row.fonts .Select-control .Select-arrow-zone {\n' +
        '  border-left: 2px solid #888;\n' +
        '  padding-left: 8px;\n' +
        '  padding-right: 8px;\n' +
        '}\n' +
        '\n' +
        '.prop-row.fonts .Select-control .Select-arrow-zone .Select-arrow {\n' +
        '  border-top-color: #000;\n' +
        '}\n' +
        '\n' +
        '.prop-row.fonts .is-open .Select-control .Select-arrow {\n' +
        '  border-color: transparent transparent #000;\n' +
        '}\n' +
        '\n' +
        '.prop-row.fonts .Select-option {\n' +
        '  border-top: 2px solid #000;\n' +
        '}\n' +
        '\n' +
        '.prop-row.fonts .Select-option:first-child {\n' +
        '  border-top: none;\n' +
        '}\n' +
        '\n' +
        '.prop-row.fonts .Select-control .Select-value:hover {\n' +
        '  background: linear-gradient(#ddd, #999);\n' +
        '}\n' +
        '\n' +
        '.prop-row.size input {\n' +
        '  text-align: center;\n' +
        '}\n' +
        '\n' +
        '.rc-checkbox-inner img {\n' +
        '  display: none;\n' +
        '  width: 15px;\n' +
        '  margin-top: -1px;\n' +
        '  margin-left: 2px;\n' +
        '}\n' +
        '\n' +
        '.rc-checkbox-checked .rc-checkbox-inner img {\n' +
        '  display: block;\n' +
        '}\n' +
        '\n' +
        '.prop-row.text-effects .rc-checkbox-inner {\n' +
        '  width: 20px;\n' +
        '  height: 20px;\n' +
        '  background: linear-gradient(#fff, #ccc);\n' +
        '  border: 2px solid #888;\n' +
        '  border-radius: 0;\n' +
        '  margin-left: 5px;\n' +
        '  transition: none;\n' +
        '}\n' +
        '\n' +
        '.prop-row.text-effects .rc-checkbox-inner:hover {\n' +
        '  background: linear-gradient(#ddd, #999);\n' +
        '}\n' +
        '\n' +
        '.prop-row.text-effects .rc-checkbox-checked .rc-checkbox-inner:after {\n' +
        '  display: none;\n' +
        '  transition: none;\n' +
        '  -webkit-animation-duration: 0s;\n' +
        '  animation-duration: 0s;\n' +
        '}\n' +
        '\n' +
        '.prop-row.text-effects .rc-checkbox-inner:after {\n' +
        '  border: none;\n' +
        '}\n' +
        '\n' +
        '.prop-row.text-effects .rc-checkbox:hover .rc-checkbox-inner,\n' +
        '.prop-row.text-effects .rc-checkbox-input:focus + .rc-checkbox-inner {\n' +
        '  border: 2px solid #888;\n' +
        '}\n' +
        '\n' +
        '.slide-group .rangeslider__fill {\n' +
        '  background: linear-gradient(#aaa, #ddd);\n' +
        '}\n' +
        '\n' +
        '.slide-group .rangeslider-horizontal .rangeslider__handle {\n' +
        '  top: -7px;\n' +
        '}\n' +
        '\n' +
        '.colors-pane-wrap {\n' +
        '  position: relative;\n' +
        '}\n' +
        '\n' +
        '@media (min-width: 1024px) {\n' +
        '  .shape-fill-color .colors-pane-wrap {\n' +
        '    left: -71px;\n' +
        '  }\n' +
        '\n' +
        '  .stroke-color .colors-pane-wrap {\n' +
        '    left: -93px;\n' +
        '  }\n' +
        '\n' +
        '  .text-effect-color .colors-pane-wrap {\n' +
        '    left: -89px;\n' +
        '  }\n' +
        '\n' +
        '  .text-color .colors-pane-wrap {\n' +
        '    left: -77px;\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '@media (min-width: 768px) and (orientation: landscape) {\n' +
        '  .shape-fill-color .colors-pane-wrap.mobile {\n' +
        '    left: 0;\n' +
        '  }\n' +
        '\n' +
        '  .stroke-color .colors-pane-wrap.mobile {\n' +
        '    left: 0;\n' +
        '  }\n' +
        '\n' +
        '  .text-effect-color .colors-pane-wrap.mobile {\n' +
        '    left: 0;\n' +
        '  }\n' +
        '\n' +
        '  .text-color .colors-pane-wrap.mobile {\n' +
        '    left: 0;\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '.scrollbar-container {\n' +
        '  opacity: 1 !important;\n' +
        '  background: #ddd !important;\n' +
        '}\n' +
        '\n' +
        '.scrollarea .scrollbar-container.active,\n' +
        '.scrollarea .scrollbar-container:hover {\n' +
        '  opacity: 1 !important;\n' +
        '}\n' +
        '\n' +
        '.scrollbar-container .scrollbar {\n' +
        '  background: #aaa !important;\n' +
        '}\n' +
        '\n' +
        '#alert-msg {\n' +
        '  position: absolute;\n' +
        '  z-index: 999;\n' +
        '  top: 64px;\n' +
        '  left: 203px;\n' +
        '  font-size: 21px;\n' +
        '  background-color: #fff;\n' +
        '  height: 35px !important;\n' +
        '}\n' +
        '\n' +
        '#alert-msg > img {\n' +
        '  margin-right: 5px;\n' +
        '  animation: blinker 0.6s linear infinite;\n' +
        '  margin-bottom: 5px;\n' +
        '}\n' +
        '\n' +
        '@keyframes blinker {\n' +
        '  50% {\n' +
        '    opacity: 0;\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'input.opacity {\n' +
        '  width: 110px;\n' +
        '}\n' +
        '\n' +
        '.sortable_helper, .sortable_helper span {\n' +
        '  cursor: default;\n' +
        '}\n' +
        '\n' +
        '.img-prop-warning {\n' +
        '  margin-left: 2px;\n' +
        '  width: 30px;\n' +
        '}\n' +
        '\n' +
        '.ppi-warning-text {\n' +
        '  color: red;\n' +
        '  font-weight: normal;\n' +
        '}\n' +
        '\n' +
        '.resolution > span {\n' +
        '  display: inline-block;\n' +
        '  vertical-align: top;\n' +
        '}\n' +
        '@media ( max-device-width: 1224px ) {\n' +
        '  .picker.shr-q-shr-r.picker-dialog{\n' +
        '    width: 80% !important;\n' +
        '    left: 10% !important;\n' +
        '  }\n' +
        '  .picker.shr-q-shr-r-shr-td.picker-dialog-content{\n' +
        '    width: 100% !important;\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '@media only screen and (max-device-width: 667px) {\n' +
        '  .picker.shr-q-shr-r-shr-td.picker-dialog-content {\n' +
        '    max-height: 270px !important;\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'ul.rw-list>li.rw-list-option, ul.rw-list>li.rw-list-empty, .rw-selectlist>li.rw-list-option, .rw-selectlist>li.rw-list-empty{\n' +
        '  padding-top: 5px;\n' +
        '  padding-bottom: 5px;\n' +
        '}'
      }
    ]
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
