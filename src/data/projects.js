export const PROJECTS = [
  {
    id: 1,
    name: 'Online Store',
    company: 'Scopic Software',
    description: 'Site to buy and sell items online.',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/react-logo.png',
    logo: 'img/logos/scopic-logo.png.no',
    tags: ['React JS', 'Redux', 'Electron', 'HTML', 'JS', 'SCSS'],
    sampleCodes: [
      {
        file: 'home/settings/index.js',
        language: 'JSX',
        code: 'import React, { Component } from \'react\';\n' +
        'import { bindActionCreators } from \'redux\';\n' +
        'import { connect } from \'react-redux\';\n' +
        'import { Modal, Tab, Image } from \'semantic-ui-react\';\n' +
        'import { defineMessages, injectIntl } from \'react-intl\';\n' +
        'import classNames from \'classnames\';\n' +
        'import PropTypes from \'prop-types\';\n' +
        '\n' +
        'import UserIcon from \'../../images/th-user-white.svg\';\n' +
        'import OmniIcon from \'../../images/th-omnicoin.svg\';\n' +
        'import PublicData from \'./scenes/PublicData/PublicData\';\n' +
        'import PrivateData from \'./scenes/PrivateData/PrivateData\';\n' +
        'import RecentTransactions from \'./scenes/RecentTransactions/RecentTransactions\';\n' +
        'import TransactionDetails from \'./scenes/RecentTransactions/components/TransactionDetails\';\n' +
        'import Keys from \'./scenes/Keys/Keys\';\n' +
        'import Vote from \'./scenes/Vote/Vote\';\n' +
        '\n' +
        'import { getCurrentUser } from \'../../../../services/blockchain/auth/authActions\';\n' +
        'import { showDetailsModal } from \'../../../../services/accountSettings/accountActions\';\n' +
        'import { getAccountBalance } from \'../../../../services/blockchain/wallet/walletActions\';\n' +
        '\n' +
        'import \'./settings.scss\';\n' +
        '\n' +
        'const iconSize = 20;\n' +
        '\n' +
        'const messages = defineMessages({\n' +
        '  account: {\n' +
        '    id: \'Settings.account\',\n' +
        '    defaultMessage: \'Account\'\n' +
        '  },\n' +
        '  registered: {\n' +
        '    id: \'Settings.registered\',\n' +
        '    defaultMessage: \'REGISTERED\'\n' +
        '  },\n' +
        '  xom: {\n' +
        '    id: \'Settings.xom\',\n' +
        '    defaultMessage: \'XOM\'\n' +
        '  },\n' +
        '  accountId: {\n' +
        '    id: \'Settings.accountId\',\n' +
        '    defaultMessage: \'Account ID\'\n' +
        '  },\n' +
        '  currentBalance: {\n' +
        '    id: \'Settings.currentBalance\',\n' +
        '    defaultMessage: \'Current Balance\'\n' +
        '  },\n' +
        '  publicData: {\n' +
        '    id: \'Settings.publicData\',\n' +
        '    defaultMessage: \'Public Data\'\n' +
        '  },\n' +
        '  privateData: {\n' +
        '    id: \'Settings.privateData\',\n' +
        '    defaultMessage: \'Private Data\'\n' +
        '  },\n' +
        '  recentTransactions: {\n' +
        '    id: \'Settings.recentTransactions\',\n' +
        '    defaultMessage: \'Recent Transactions\'\n' +
        '  }\n' +
        '});\n' +
        '\n' +
        'class Settings extends Component {\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '\n' +
        '    this.onCloseDetails = this.onCloseDetails.bind(this);\n' +
        '    this.getBalance = this.getBalance.bind(this);\n' +
        '  }\n' +
        '\n' +
        '  componentDidMount() {\n' +
        '    this.props.walletActions.getAccountBalance(this.props.auth.account);\n' +
        '  }\n' +
        '\n' +
        '  close = () => {\n' +
        '    if (this.props.onClose) {\n' +
        '      this.props.onClose();\n' +
        '    }\n' +
        '  };\n' +
        '\n' +
        '  onCloseDetails() {\n' +
        '    this.props.accountSettingsActions.showDetailsModal();\n' +
        '  }\n' +
        '\n' +
        '  getBalance() {\n' +
        '    const { balance } = this.props.blockchainWallet;\n' +
        '    if (balance && balance.balance) {\n' +
        '      return balance.balance / 100000;\n' +
        '    }\n' +
        '    return 0;\n' +
        '  }\n' +
        '\n' +
        '  sideMenu() {\n' +
        '    const { formatMessage } = this.props.intl;\n' +
        '    const { username } = this.props.auth.currentUser;\n' +
        '    const { account } = this.props.auth;\n' +
        '    return (\n' +
        '      <div>\n' +
        '        <div className="info">\n' +
        '          <Image src={UserIcon} width={iconSize} height={iconSize} />\n' +
        '          <div className="top-detail">\n' +
        '            <div className="title">\n' +
        '              <span>{formatMessage(messages.account)}</span>\n' +
        '              <div className="badge-tag">{formatMessage(messages.registered)}</div>\n' +
        '            </div>\n' +
        '            <span className="username">{username || \'Username\'}</span>\n' +
        '            <span className="accountId">{formatMessage(messages.accountId)}: {account.get(\'id\')}</span>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <div className="info">\n' +
        '          <Image src={OmniIcon} width={iconSize} height={iconSize} />\n' +
        '          <div className="top-detail">\n' +
        '            <div className="title">\n' +
        '              <span>{formatMessage(messages.currentBalance)}</span>\n' +
        '            </div>\n' +
        '            <span className="balance">\n' +
        '              {this.getBalance()} {formatMessage(messages.xom)}\n' +
        '            </span>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '    const { props } = this;\n' +
        '    const { formatMessage } = this.props.intl;\n' +
        '    const containerClass = classNames({\n' +
        '      overlay: true,\n' +
        '      \'details-visible\': props.account.showDetails,\n' +
        '    });\n' +
        '\n' +
        '    return (\n' +
        '      <Modal size="fullscreen" open={props.menu.showSettings} onClose={this.close}>\n' +
        '        <Modal.Content>\n' +
        '          <div className="modal-container settings-container">\n' +
        '            <div className="sidebar settings visible">{this.sideMenu()}</div>\n' +
        '            <div className="modal-content side-menu">\n' +
        '              <Tab\n' +
        '                className="tabs"\n' +
        '                menu={{ secondary: true, pointing: true }}\n' +
        '                panes={[\n' +
        '                 {\n' +
        '                   menuItem: formatMessage(messages.publicData),\n' +
        '                   render: () => <Tab.Pane><PublicData /></Tab.Pane>,\n' +
        '                 },\n' +
        '                 {\n' +
        '                   menuItem: formatMessage(messages.privateData),\n' +
        '                   render: () => <Tab.Pane><PrivateData /></Tab.Pane>,\n' +
        '                 },\n' +
        '                 {\n' +
        '                   menuItem: formatMessage(messages.recentTransactions),\n' +
        '                   render: () => (\n' +
        '                     <Tab.Pane>\n' +
        '                       <RecentTransactions\n' +
        '                         rowsPerPage={5}\n' +
        '                         tableProps={{\n' +
        '                           sortable: true,\n' +
        '                           compact: true,\n' +
        '                           basic: \'very\',\n' +
        '                           striped: true,\n' +
        '                           size: \'small\'\n' +
        '                         }}\n' +
        '                       />\n' +
        '                     </Tab.Pane>),\n' +
        '                 },\n' +
        '                 {\n' +
        '                   menuItem: \'Keys\',\n' +
        '                   render: () => <Tab.Pane className="keys-tab"><Keys /></Tab.Pane>,\n' +
        '                 },\n' +
        '                 {\n' +
        '                   menuItem: \'Vote\',\n' +
        '                   render: () => (\n' +
        '                     <Tab.Pane>\n' +
        '                       <Vote\n' +
        '                         rowsPerPage={5}\n' +
        '                         tableProps={{\n' +
        '                           sortable: true,\n' +
        '                           compact: true,\n' +
        '                           basic: \'very\',\n' +
        '                           striped: true,\n' +
        '                           size: \'small\'\n' +
        '                         }}\n' +
        '                       />\n' +
        '                     </Tab.Pane>\n' +
        '                   ),\n' +
        '                 },\n' +
        '                ]}\n' +
        '              />\n' +
        '              <div\n' +
        '                className={containerClass}\n' +
        '                onClick={this.onCloseDetails}\n' +
        '                onKeyDown={this.onCloseDetails}\n' +
        '                role="link"\n' +
        '                tabIndex={0}\n' +
        '              />\n' +
        '              <TransactionDetails\n' +
        '                showCompose={props.account.showDetails}\n' +
        '                onClose={this.onCloseDetails}\n' +
        '              />\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </Modal.Content>\n' +
        '      </Modal>\n' +
        '    );\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'Settings.propTypes = {\n' +
        '  accountSettingsActions: PropTypes.shape({\n' +
        '    showDetailsModal: PropTypes.func,\n' +
        '  }),\n' +
        '  walletActions: PropTypes.shape({\n' +
        '    getAccountBalance: PropTypes.func\n' +
        '  }),\n' +
        '  onClose: PropTypes.func,\n' +
        '  auth: PropTypes.shape({\n' +
        '    currentUser: PropTypes.shape({\n' +
        '      username: PropTypes.string,\n' +
        '    }),\n' +
        '    account: PropTypes.shape({})\n' +
        '  }),\n' +
        '  blockchainWallet: PropTypes.shape({\n' +
        '    balance: PropTypes.shape({})\n' +
        '  }),\n' +
        '  intl: PropTypes.shape({\n' +
        '    formatMessage: PropTypes.func,\n' +
        '  }),\n' +
        '};\n' +
        '\n' +
        'Settings.defaultProps = {\n' +
        '  accountSettingsActions: {},\n' +
        '  onClose: () => {},\n' +
        '  auth: {},\n' +
        '  intl: {},\n' +
        '};\n' +
        '\n' +
        'export default connect(\n' +
        '  state => ({ ...state.default }),\n' +
        '  (dispatch) => ({\n' +
        '    accountSettingsActions: bindActionCreators({\n' +
        '      getCurrentUser,\n' +
        '      showDetailsModal\n' +
        '    }, dispatch),\n' +
        '    walletActions: bindActionCreators({\n' +
        '      getAccountBalance\n' +
        '    }, dispatch),\n' +
        '  }),\n' +
        ')(injectIntl(Settings));\n'
      },
      {
        file: 'home/settings/settings.scss',
        language: 'SCSS',
        code: '@import \'../../../../styles/index\';\n' +
        '\n' +
        '$sidebar-size: 250px;\n' +
        '\n' +
        '.ui.modal {\n' +
        '  border-top-left-radius: 0.4rem;\n' +
        '  border-bottom-left-radius: 0.4rem;\n' +
        '\n' +
        '  .from-to {\n' +
        '    display: flex;\n' +
        '    align-items: center;\n' +
        '  }\n' +
        '\n' +
        '  .content {\n' +
        '    border-top-left-radius: 0.4rem!important;\n' +
        '    border-bottom-left-radius: 0.4rem!important;\n' +
        '    padding: 0 !important;\n' +
        '    height: 100%;\n' +
        '\n' +
        '    .modal-container {\n' +
        '      height: 100%;\n' +
        '\n' +
        '      .tabs {\n' +
        '        border-bottom: none;\n' +
        '        display: flex;\n' +
        '        flex-direction: column;\n' +
        '        height: 100%;\n' +
        '\n' +
        '        .segment.active {\n' +
        '          height: 100%;\n' +
        '          overflow-y: auto;\n' +
        '        }\n' +
        '      }\n' +
        '\n' +
        '      .bottom-detail {\n' +
        '        display: flex;\n' +
        '\n' +
        '        .labels {\n' +
        '          margin-left: 20px;\n' +
        '          align-self: center;\n' +
        '        }\n' +
        '\n' +
        '        .amount {\n' +
        '          font-weight: bold;\n' +
        '        }\n' +
        '      }\n' +
        '\n' +
        '      .modal-content.side-menu {\n' +
        '        height: 100%;\n' +
        '        display: flex;\n' +
        '        border-radius: 0.28rem;\n' +
        '        margin-left: $sidebar-size;\n' +
        '        transition: margin 0.5s ease;\n' +
        '        background-color: $lighter-gray;\n' +
        '      }\n' +
        '\n' +
        '      .info {\n' +
        '        display: flex;\n' +
        '        flex-direction: column;\n' +
        '\n' +
        '        img {\n' +
        '          margin-right: 10px;\n' +
        '        }\n' +
        '\n' +
        '        .top-detail {\n' +
        '          display: flex;\n' +
        '          flex-direction: column;\n' +
        '          flex: 1;\n' +
        '          color: $lightest-gray;\n' +
        '\n' +
        '          .title {\n' +
        '            display: flex;\n' +
        '            flex: 1;\n' +
        '            justify-content: space-between;\n' +
        '            align-items: center;\n' +
        '            margin-bottom: 5px;\n' +
        '\n' +
        '            span {\n' +
        '              font-weight: lighter;\n' +
        '            }\n' +
        '          }\n' +
        '\n' +
        '          .badge-tag {\n' +
        '            color: $secondary-gray;\n' +
        '            border-color: $secondary-gray;\n' +
        '            padding: 2px 5px;\n' +
        '          }\n' +
        '\n' +
        '          .username, .balance {\n' +
        '            font-weight: bold;\n' +
        '            margin-bottom: 5px;\n' +
        '          }\n' +
        '\n' +
        '          .accountId {\n' +
        '            color: $secondary-gray;\n' +
        '            font-size: 10px;\n' +
        '          }\n' +
        '        }\n' +
        '      }\n' +
        '\n' +
        '      .sidebar {\n' +
        '        .info {\n' +
        '          margin-bottom: 35px;\n' +
        '          flex-direction: row;\n' +
        '        }\n' +
        '      }\n' +
        '\n' +
        '      .separator {\n' +
        '        width: 100%;\n' +
        '        height: 1px;\n' +
        '        background-color: lighten($primary-gray, 20%);\n' +
        '        margin-top: 20px;\n' +
        '        margin-bottom: 20px;\n' +
        '      }\n' +
        '\n' +
        '      .details {\n' +
        '        .top-detail {\n' +
        '          display: flex;\n' +
        '          flex-direction: row;\n' +
        '          justify-content: space-between;\n' +
        '          align-items: center;\n' +
        '          margin-left: 15px;\n' +
        '          margin-right: 15px;\n' +
        '\n' +
        '          .button {\n' +
        '            padding: 0.5em 1.5em 0.5em;\n' +
        '          }\n' +
        '        }\n' +
        '\n' +
        '        .code {\n' +
        '          font-size: 17px;\n' +
        '\n' +
        '          &.main {\n' +
        '            margin-bottom: 20px;\n' +
        '          }\n' +
        '        }\n' +
        '\n' +
        '        .top-container {\n' +
        '          display: flex;\n' +
        '          margin-bottom: 20px;\n' +
        '        }\n' +
        '\n' +
        '        .info {\n' +
        '          margin-left: 15px;\n' +
        '          margin-right: 15px;\n' +
        '\n' +
        '          .item {\n' +
        '            flex: 1;\n' +
        '            display: flex;\n' +
        '            flex-direction: column;\n' +
        '\n' +
        '            .time-zone {\n' +
        '              color: $primary-gray;\n' +
        '              font-size: 10px;\n' +
        '            }\n' +
        '\n' +
        '            .date {\n' +
        '              margin-top: 5px;\n' +
        '            }\n' +
        '          }\n' +
        '        }\n' +
        '\n' +
        '        .operations {\n' +
        '          margin-left: 15px;\n' +
        '          margin-right: 15px;\n' +
        '\n' +
        '          .withdraw {\n' +
        '            background-color: lighten($error, 27%);\n' +
        '          }\n' +
        '\n' +
        '          .deposit {\n' +
        '            background-color: lighten($success, 33%);\n' +
        '          }\n' +
        '\n' +
        '          .withdraw, .deposit {\n' +
        '            padding: 8px;\n' +
        '            border-radius: 3px;\n' +
        '            margin-bottom: 10px;\n' +
        '          }\n' +
        '        }\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  .data-table .top-detail {\n' +
        '    flex-direction: row !important;\n' +
        '  }\n' +
        '\n' +
        '  .data-table {\n' +
        '    td.balance {\n' +
        '      .link {\n' +
        '        margin-left: 15px;\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  .from-icon {\n' +
        '    margin-right: 5px\n' +
        '  }\n' +
        '\n' +
        '  .to-icon {\n' +
        '    margin-left: 15px;\n' +
        '    margin-right: 5px\n' +
        '  }\n' +
        '\n' +
        '  .sidebar {\n' +
        '    &.settings {\n' +
        '      background-color: $gray;\n' +
        '      position: fixed;\n' +
        '      top: 0;\n' +
        '      bottom: 0;\n' +
        '      width: $sidebar-size;\n' +
        '      border-top-left-radius: 0.28571429rem;\n' +
        '      border-bottom-left-radius: 0.28571429rem;\n' +
        '      padding: 20px 15px;\n' +
        '    }\n' +
        '  }\n' +
        '}\n' +
        '\n',
      },
      {
        file: 'home/servers/index.js',
        language: 'JSX',
        code: 'import React, { Component } from \'react\';\n' +
        'import { connect } from \'react-redux\';\n' +
        '\n' +
        'import { Tab } from \'semantic-ui-react\';\n' +
        'import Header from \'../../../../components/Header\';\n' +
        'import TopServers from \'./component/TopServers\';\n' +
        'import StandByServers from \'./component/StandByServers\';\n' +
        'import Badge from \'./component/Badge\';\n' +
        '\n' +
        'import \'./servers.scss\';\n' +
        '\n' +
        'class Servers extends Component {\n' +
        '  static renderBadges() {\n' +
        '    return (\n' +
        '      <div className="badges">\n' +
        '        <Badge title="Maximum server pay per block" value="50.00 XOM" />\n' +
        '        <Badge title="Average active server pay rate" value="100%" />\n' +
        '        <Badge title="Number of positive votes selected" value="0" />\n' +
        '        <Badge title="Number of neutral votes selected" value="0" />\n' +
        '        <Badge title="Number of negative votes selected" value="0" />\n' +
        '      </div>\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  static renderVotes() {\n' +
        '    return (\n' +
        '      <div className="badges">\n' +
        '        <Badge title="Number of positive votes selected" value="0" />\n' +
        '        <Badge title="Number of neutral votes selected" value="0" />\n' +
        '        <Badge title="Number of negative votes selected" value="0" />\n' +
        '      </div>\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  static topServers() {\n' +
        '    return (\n' +
        '      <TopServers\n' +
        '        rowsPerPage={5}\n' +
        '        tableProps={{\n' +
        '          sortable: true,\n' +
        '          compact: true,\n' +
        '          basic: \'very\',\n' +
        '          striped: true,\n' +
        '          size: \'small\'\n' +
        '        }}\n' +
        '      />\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  static standbyServers() {\n' +
        '    return (\n' +
        '      <StandByServers\n' +
        '        rowsPerPage={4}\n' +
        '        tableProps={{\n' +
        '          sortable: true,\n' +
        '          compact: true,\n' +
        '          basic: \'very\',\n' +
        '          striped: true,\n' +
        '          size: \'small\'\n' +
        '        }}\n' +
        '      />\n' +
        '    );\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '    return (\n' +
        '      <div ref={container => { this.container = container; }} className="container servers">\n' +
        '        <Header className="button--green-bg" title="Servers" />\n' +
        '        <div className="body">\n' +
        '          <Tab\n' +
        '            className="tabs"\n' +
        '            menu={{ secondary: true, pointing: true }}\n' +
        '            panes={[\n' +
        '              {\n' +
        '                menuItem: \'All Servers\',\n' +
        '                render: () => <Tab.Pane>{Servers.renderBadges()}</Tab.Pane>,\n' +
        '              },\n' +
        '              {\n' +
        '                menuItem: \'Votes\',\n' +
        '                render: () => <Tab.Pane>{Servers.renderVotes()}</Tab.Pane>,\n' +
        '              },\n' +
        '            ]}\n' +
        '          />\n' +
        '          <Tab\n' +
        '            className="tabs"\n' +
        '            menu={{ secondary: true, pointing: true }}\n' +
        '            panes={[\n' +
        '              {\n' +
        '                menuItem: \'Top Servers\',\n' +
        '                render: () => <Tab.Pane>{Servers.topServers()}</Tab.Pane>\n' +
        '              },\n' +
        '              {\n' +
        '                menuItem: \'Standby Servers\',\n' +
        '                render: () => <Tab.Pane>{Servers.standbyServers()}</Tab.Pane>,\n' +
        '              },\n' +
        '            ]}\n' +
        '          />\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    );\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'export default connect(state => ({ ...state.default }))(Servers);\n'
      },
      {
        file: 'services/servers/serversActions.js',
        language: 'JS',
        code: 'import { createActions } from \'redux-actions\';\n' +
        '\n' +
        'const {\n' +
        '  getTopServers,\n' +
        '  sortDataTop,\n' +
        '  filterDataTop,\n' +
        '  setActivePageTop,\n' +
        '  setPaginationTop\n' +
        '} = createActions({\n' +
        '  GET_TOP_SERVERS: (topServers) => ({ topServers }),\n' +
        '  SORT_DATA_TOP: (sortColumnTop) => ({ sortColumnTop }),\n' +
        '  FILTER_DATA_TOP: (filterTextTop) => ({ filterTextTop }),\n' +
        '  SET_ACTIVE_PAGE_TOP: (activePageTop) => ({ activePageTop }),\n' +
        '  SET_PAGINATION_TOP: (rowsPerPageTop) => ({ rowsPerPageTop }),\n' +
        '});\n' +
        '\n' +
        'export {\n' +
        '  getTopServers,\n' +
        '  sortDataTop,\n' +
        '  filterDataTop,\n' +
        '  setActivePageTop,\n' +
        '  setPaginationTop,\n' +
        '};\n'
      },
      {
        file: 'services/servers/serversReducer.js',
        language: 'JS',
        code: 'import { handleActions } from \'redux-actions\';\n' +
        'import _ from \'lodash\';\n' +
        '\n' +
        'import {\n' +
        '  getTopServers,\n' +
        '  sortDataTop,\n' +
        '  filterDataTop,\n' +
        '  setActivePageTop,\n' +
        '  setPaginationTop,\n' +
        '} from \'./serversTopActions\';\n' +
        '\n' +
        'const defaultState = {\n' +
        '  topServers: [],\n' +
        '  topServersFiltered: [],\n' +
        '  activePageTop: 1,\n' +
        '  sortDirectionTop: \'descending\',\n' +
        '  sortColumnTop: \'rank\',\n' +
        '  totalPagesTop: 1,\n' +
        '  rowsPerPageTop: 10,\n' +
        '  filterTextTop: \'\',\n' +
        '};\n' +
        '\n' +
        'const sliceData = (data, activePage, rowsPerPage) => (\n' +
        '  data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage)\n' +
        ');\n' +
        '\n' +
        'const getTotalPages = (data, rowsPerPage) => (\n' +
        '  Math.ceil(data.length / rowsPerPage)\n' +
        ');\n' +
        '\n' +
        'const reducer = handleActions({\n' +
        '  [getTopServers](state, { payload: { topServers } }) {\n' +
        '    return {\n' +
        '      ...state,\n' +
        '      topServers,\n' +
        '      topServersFiltered: topServers,\n' +
        '    };\n' +
        '  },\n' +
        '  [filterDataTop](state, { payload: { filterTextTop } }) {\n' +
        '    const data = state.topServers;\n' +
        '    const activePageTop = 1;\n' +
        '    const { rowsPerPageTop, totalPagesTop } = state;\n' +
        '    let totalPages = totalPagesTop;\n' +
        '    let currentData = [];\n' +
        '\n' +
        '    if (filterTextTop !== \'\') {\n' +
        '      let filteredData = _.map(data, (o) => {\n' +
        '        const values = Object.values(o);\n' +
        '        const result = _.map(values, (val) => {\n' +
        '          if (val) {\n' +
        '            if (val.toString().indexOf(filterTextTop) !== -1) return o;\n' +
        '          }\n' +
        '        });\n' +
        '        return _.without(result, undefined)[0];\n' +
        '      });\n' +
        '\n' +
        '      filteredData = _.without(filteredData, undefined);\n' +
        '      totalPages = getTotalPages(filteredData, rowsPerPageTop);\n' +
        '      currentData = sliceData(filteredData, activePageTop, rowsPerPageTop);\n' +
        '    } else {\n' +
        '      currentData = data;\n' +
        '      totalPages = getTotalPages(currentData, rowsPerPageTop);\n' +
        '      currentData = sliceData(currentData, activePageTop, rowsPerPageTop);\n' +
        '    }\n' +
        '\n' +
        '    return {\n' +
        '      ...state,\n' +
        '      filterTextTop,\n' +
        '      activePageTop,\n' +
        '      totalPagesTop: totalPages,\n' +
        '      topServersFiltered: currentData,\n' +
        '    };\n' +
        '  },\n' +
        '  [setPaginationTop](state, { payload: { rowsPerPageTop } }) {\n' +
        '    const data = state.topServers;\n' +
        '    const { activePageTop } = state;\n' +
        '    const totalPagesTop = getTotalPages(data, rowsPerPageTop);\n' +
        '    const currentData = sliceData(data, activePageTop, rowsPerPageTop);\n' +
        '\n' +
        '    return {\n' +
        '      ...state,\n' +
        '      totalPagesTop,\n' +
        '      rowsPerPageTop,\n' +
        '      topServersFiltered: currentData,\n' +
        '    };\n' +
        '  },\n' +
        '  [setActivePageTop](state, { payload: { activePageTop } }) {\n' +
        '    const data = state.topServers;\n' +
        '    if (activePageTop !== state.activePageTop) {\n' +
        '      const { rowsPerPageTop } = state;\n' +
        '      const currentData = sliceData(data, activePageTop, rowsPerPageTop);\n' +
        '\n' +
        '      return {\n' +
        '        ...state,\n' +
        '        activePageTop,\n' +
        '        topServersFiltered: currentData,\n' +
        '      };\n' +
        '    }\n' +
        '\n' +
        '    return {\n' +
        '      ...state,\n' +
        '    };\n' +
        '  },\n' +
        '  [sortDataTop](state, { payload: { sortColumnTop } }) {\n' +
        '    const { filterTextTop } = state;\n' +
        '    let sortDirectionTop = state.sortDirectionTop === \'ascending\' ? \'descending\' : \'ascending\';\n' +
        '    const sortByFilter = _.sortBy(state.topServersFiltered, [sortColumnTop]);\n' +
        '    const sortByData = _.sortBy(state.topServers, [sortColumnTop]);\n' +
        '    const sortBy = filterTextTop !== \'\' ? sortByFilter : sortByData;\n' +
        '    let sortedData = [];\n' +
        '\n' +
        '    if (state.sortColumnTop !== sortColumnTop) {\n' +
        '      sortedData = sortBy.reverse();\n' +
        '      sortDirectionTop = \'ascending\';\n' +
        '    } else {\n' +
        '      sortedData = sortDirectionTop === \'ascending\' ? sortBy.reverse() : sortBy;\n' +
        '    }\n' +
        '\n' +
        '    const { activePageTop, rowsPerPageTop } = state;\n' +
        '    const currentData = sliceData(sortedData, activePageTop, rowsPerPageTop);\n' +
        '\n' +
        '    return {\n' +
        '      ...state,\n' +
        '      topServersFiltered: currentData,\n' +
        '      sortDirectionTop,\n' +
        '      sortColumnTop,\n' +
        '    };\n' +
        '  },\n' +
        '}, defaultState);\n' +
        '\n' +
        'export default reducer;\n'
      },
      {
        file: 'services/servers/servers.scss',
        language: 'JS',
        code: '@import \'../../../../styles/index\';\n' +
        '@import \'../../../../styles/datatable\';\n' +
        '\n' +
        '.servers {\n' +
        '  background-color: $lighter-gray;\n' +
        '\n' +
        '  .tabs {\n' +
        '    border-bottom: none;\n' +
        '  }\n' +
        '\n' +
        '  .badges {\n' +
        '    display: flex;\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '.votes {\n' +
        '  display: flex;\n' +
        '\n' +
        '  &.voted {\n' +
        '    opacity: 0.5;\n' +
        '  }\n' +
        '\n' +
        '  span {\n' +
        '    margin-right: 22px;\n' +
        '  }\n' +
        '\n' +
        '  img {\n' +
        '    margin-right: 10px;\n' +
        '  }\n' +
        '}\n'
      }
    ]
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    name: 'Canvas Handler',
    company: 'Scopic Software',
    description: 'Banner designer built with fabric JS that allow to create different shapes and add images and manipulate them.',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/scopic-logo.png',
    tags: ['React JS', 'JS', 'CSS', 'Flexbox', 'Fabric JS', 'Redux'],
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
    id: 6,
    name: 'Cookbook App',
    company: 'Freelance Project',
    description: 'Mobile application to create and view recipes both on Android and iOS.',
    thumbnail: '/img/portfolio/react-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/logo-130.png',
    tags: ['React Native', 'JS', 'CSS', 'Flexbox', 'Firebase'],
    sampleCodes: [
      {
        file: 'App.js',
        language: 'javascript',
        code: 'import React, {Component} from \'react\';\n' +
        'import {\n' +
        '  StatusBar,\n' +
        '  Navigator,\n' +
        '  View,\n' +
        '  Text,\n' +
        '  Image,\n' +
        '  Dimensions,\n' +
        '  StyleSheet\n' +
        '} from \'react-native\';\n' +
        '\n' +
        'import * as firebase from \'firebase\';\n' +
        'import Login from \'./screens/login\';\n' +
        'import Recipes from \'./screens/recipes\';\n' +
        'import Signup from \'./screens/signup\';\n' +
        'import Firebase from \'./modules/firebase/firebase\';\n' +
        '\n' +
        'import {\n' +
        '  LOGIN,\n' +
        '  LOGOUT,\n' +
        '  RECIPES,\n' +
        '  APP_NAME,\n' +
        '  LOADING,\n' +
        '  SIGNUP\n' +
        '} from \'./shared/constant\';\n' +
        '\n' +
        'var deviceWidth = Dimensions.get(\'window\').width;\n' +
        '\n' +
        'class App extends Component {\n' +
        '\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '\n' +
        '    Firebase.initialise();\n' +
        '    this.getInitialView();\n' +
        '    this.navigator = null;\n' +
        '\n' +
        '    this.state = {\n' +
        '      userLoaded: false,\n' +
        '      initialView: null\n' +
        '    };\n' +
        '\n' +
        '    this.renderScene = this.renderScene.bind(this);\n' +
        '    this.getInitialView = this.getInitialView.bind(this);\n' +
        '  }\n' +
        '\n' +
        '  getInitialView() {\n' +
        '    firebase.auth().onAuthStateChanged((user) => {\n' +
        '      let initialView = user ? RECIPES : LOGIN;\n' +
        '\n' +
        '      this.setState({\n' +
        '        userLoaded: true,\n' +
        '        initialView: initialView\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  renderScene(route, navigator) {\n' +
        '    let ScreenComponent = null;\n' +
        '    this.navigator = navigator;\n' +
        '\n' +
        '    switch (route.name) {\n' +
        '      case LOGIN:\n' +
        '        ScreenComponent = Login;\n' +
        '        break;\n' +
        '      case RECIPES:\n' +
        '        ScreenComponent = Recipes;\n' +
        '        break;\n' +
        '      case SIGNUP:\n' +
        '        ScreenComponent = Signup;\n' +
        '        break;\n' +
        '    }\n' +
        '\n' +
        '    if (ScreenComponent) {\n' +
        '      return <ScreenComponent navigator={navigator} onMenuItemSelected={this.onMenuItemSelected.bind(this)} {...route.passProps} />;\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  async logout() {\n' +
        '    try {\n' +
        '      await firebase.auth().signOut();\n' +
        '\n' +
        '      // Navigate to login view\n' +
        '      this.navigator.push({\n' +
        '        name: LOGIN\n' +
        '      });\n' +
        '    } catch (error) {\n' +
        '      console.log(error);\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  onMenuItemSelected(item) {\n' +
        '    switch (item) {\n' +
        '      case LOGOUT:\n' +
        '        this.logout();\n' +
        '        break;\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '    let content;\n' +
        '\n' +
        '    if (this.state.initialView) {\n' +
        '      content = (\n' +
        '        <View style={{ flex: 1 }}>\n' +
        '          <StatusBar backgroundColor="#262a2e" barStyle="light-content" />\n' +
        '          <Navigator style={{ flex: 1 }}\n' +
        '                     initialRoute={{ name: this.state.initialView }}\n' +
        '                     renderScene={this.renderScene.bind(this)} />\n' +
        '        </View>\n' +
        '      );\n' +
        '    } else {\n' +
        '      content = (<View style={styles.container}>\n' +
        '                   <View style={styles.content}>\n' +
        '                     <Image source={require(\'./assets/img/cookbook_512.png\')}\n' +
        '                            style={styles.logo} />\n' +
        '                     <Text style={styles.appText}>{APP_NAME}</Text>\n' +
        '                     <Text style={styles.loadingText}>{LOADING}</Text>\n' +
        '                   </View>\n' +
        '                 </View>);\n' +
        '    }\n' +
        '    return (\n' +
        '      content\n' +
        '    );\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'var styles = StyleSheet.create({\n' +
        '  container: {\n' +
        '    flex: 1,\n' +
        '    backgroundColor: \'#8E6C88\'\n' +
        '  },\n' +
        '  content: {\n' +
        '    flex: 1,\n' +
        '    justifyContent: \'center\',\n' +
        '    alignItems: \'center\'\n' +
        '  },\n' +
        '  logo: {\n' +
        '    resizeMode: \'contain\',\n' +
        '    width: deviceWidth / 2,\n' +
        '    height: deviceWidth / 2\n' +
        '  },\n' +
        '  appText: {\n' +
        '    fontFamily: \'OpenSans\',\n' +
        '    fontSize: 24,\n' +
        '    color: \'#FFF\',\n' +
        '    marginTop: 15\n' +
        '  },\n' +
        '  loadingText: {\n' +
        '    fontFamily: \'OpenSans\',\n' +
        '    fontSize: 16,\n' +
        '    color: \'#FFF\'\n' +
        '  }\n' +
        '});\n' +
        '\n' +
        'export default App;'
      },
      {
        file: 'AppStorage.js',
        language: 'javascript',
        code: '/*eslint new-cap:0 */\n' +
        'import Model from \'react-native-db-models\';\n' +
        '\n' +
        'const USER_DATA_KEY = \'userData\';\n' +
        '\n' +
        'const DB = {\n' +
        '  app: new Model.create_db(\'app\'),\n' +
        '  users: new Model.create_db(\'users\')\n' +
        '};\n' +
        '\n' +
        'class AppStorage {\n' +
        '\n' +
        '  addUserData(username) {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.users.add({key: USER_DATA_KEY, username: username}, function(addedData) {\n' +
        '        resolve(addedData);\n' +
        '      });\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  clearAllData() {\n' +
        '    DB.users.erase_db(function(removedData) {\n' +
        '      console.log(removedData);\n' +
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
        '  getUserData() {\n' +
        '    return new Promise((resolve, reject) => {\n' +
        '      DB.users.get({key: USER_DATA_KEY}, (results) => {\n' +
        '        resolve(results[0]);\n' +
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
        '}\n' +
        '\n' +
        'export default AppStorage;\n'
      },
      {
        file: 'recipes/index.js',
        language: 'javascript',
        code: '\'use strict\';\n' +
        '\n' +
        'import React, {Component} from \'react\';\n' +
        'import { Text, View, StyleSheet } from \'react-native\';\n' +
        'import ScreenTitle from \'../../components/screen-title\';\n' +
        'const SideMenu = require(\'react-native-side-menu\');\n' +
        'import Menu from \'../../components/menu\';\n' +
        '\n' +
        'import {\n' +
        '  RECIPES,\n' +
        '  MY_RECIPES\n' +
        '} from \'../../shared/constant\';\n' +
        '\n' +
        'class Recipes extends Component {\n' +
        '\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '\n' +
        '    this.state = {\n' +
        '      isOpen: false\n' +
        '    };\n' +
        '  }\n' +
        '\n' +
        '  _navigate(name) {\n' +
        '    this.props.navigator.pop({\n' +
        '      name: RECIPES,\n' +
        '      passProps: {\n' +
        '        name: name\n' +
        '      }\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  updateMenu(isOpen) {\n' +
        '    this.setState({isOpen: isOpen});\n' +
        '  }\n' +
        '\n' +
        '  toggleMenu() {\n' +
        '    this.setState({isOpen: !this.state.isOpen});\n' +
        '  }\n' +
        '\n' +
        '  onMenuItemSelected(item) {\n' +
        '    this.props.onMenuItemSelected(item);\n' +
        '    this.updateMenu(false);\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '    const menu = <Menu onItemSelected={this.onMenuItemSelected.bind(this)} />;\n' +
        '\n' +
        '    return (\n' +
        '      <SideMenu\n' +
        '        menu={menu}\n' +
        '        isOpen={this.state.isOpen}\n' +
        '        onChange={(isOpen) => this.updateMenu(isOpen)}>\n' +
        '        <View style={styles.container}>\n' +
        '          <ScreenTitle style={styles.toolbar}\n' +
        '                       title={MY_RECIPES}\n' +
        '                       icon="md-menu"\n' +
        '                       onPress={() => this.toggleMenu()}/>\n' +
        '          <View style={styles.containers}>\n' +
        '            <Text>Welcome!, here are my recipes!</Text>\n' +
        '          </View>\n' +
        '        </View>\n' +
        '      </SideMenu>\n' +
        '    );\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const styles = StyleSheet.create({\n' +
        '  toolbar: {\n' +
        '    flex: 70\n' +
        '  },\n' +
        '  container: {\n' +
        '    flex: 1,\n' +
        '    backgroundColor: \'#E8E3E3\'\n' +
        '  },\n' +
        '  containers: {\n' +
        '    flex: 1,\n' +
        '    justifyContent: \'center\'\n' +
        '  }\n' +
        '});\n' +
        '\n' +
        'export default Recipes;\n'
      },
      {
        file: 'constants.js',
        language: 'javascript',
        code: 'module.exports = {\n' +
        '  // API_HOST: \'https://some.example.com/webservice/\',\n' +
        '  // General\n' +
        '  APP_NAME: \'My Cookbook\',\n' +
        '  LOADING: \'Loading...\',\n' +
        '  LOGIN: \'Login\',\n' +
        '  LOGOUT: \'Logout\',\n' +
        '  SIGNUP: \'Signup\',\n' +
        '\n' +
        '  // Recipes\n' +
        '  RECIPES: \'Recipes\',\n' +
        '  MY_RECIPES: \'My Recipes\',\n' +
        '  HOME: \'Home\'\n' +
        '};\n'
      },
      {
        file: 'login/index.js',
        language: 'javascript',
        code: '\'use strict\';\n' +
        '\n' +
        'import React, {Component} from \'react\';\n' +
        'import { Text, View, StyleSheet, TextInput, TouchableHighlight, Image, Dimensions } from \'react-native\';\n' +
        'import Icon from \'react-native-vector-icons/Ionicons\';\n' +
        'import Constant from \'./constants\';\n' +
        'import * as firebase from \'firebase\';\n' +
        'import styles from \'./style\';\n' +
        '\n' +
        'import {\n' +
        '  APP_NAME,\n' +
        '  LOGIN,\n' +
        '  RECIPES,\n' +
        '  SIGNUP\n' +
        '} from \'../../shared/constant\';\n' +
        '\n' +
        'var deviceWidth = Dimensions.get(\'window\').width;\n' +
        '\n' +
        'class Login extends Component {\n' +
        '\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '    this.inputedEmail = \'\';\n' +
        '    this.inputedPassword = \'\';\n' +
        '  }\n' +
        '\n' +
        '  _navigate(screen) {\n' +
        '    this.props.navigator.push({\n' +
        '      name: screen\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  async login(email, pass) {\n' +
        '    try {\n' +
        '      await firebase.auth()\n' +
        '        .signInWithEmailAndPassword(email, pass);\n' +
        '\n' +
        '      this._navigate(RECIPES);\n' +
        '    } catch (error) {\n' +
        '      console.log(error.toString());\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  onLoginPressed() {\n' +
        '    this.login(this.inputedEmail, this.inputedPassword);\n' +
        '  }\n' +
        '\n' +
        '  onSignupPressed() {\n' +
        '    this._navigate(SIGNUP);\n' +
        '  }\n' +
        '\n' +
        '  render() {\n' +
        '    return (\n' +
        '      <View style={styles.container}>\n' +
        '        <View style={styles.containers}>\n' +
        '          <View style={styles.titleContainer}>\n' +
        '            <Image source={require(\'../../assets/img/cookbook_128.png\')}\n' +
        '                   style={styles.logo} />\n' +
        '            <Text style={styles.title}>{APP_NAME}</Text>\n' +
        '          </View>\n' +
        '          <View style={styles.inputsContainer}>\n' +
        '            <View>\n' +
        '              <View style={styles.inputContainer}>\n' +
        '                <Icon\n' +
        '                  name="ios-person"\n' +
        '                  size={Constant.ICON_SIZE}\n' +
        '                  color="#2B2E33"\n' +
        '                />\n' +
        '                <TextInput\n' +
        '                  style={styles.input}\n' +
        '                  ref=\'email\'\n' +
        '                  autoCapitalize="none"\n' +
        '                  autoCorrect={false}\n' +
        '                  placeholder=\'Email\'\n' +
        '                  underlineColorAndroid={\'rgba(0,0,0,0.0)\'}\n' +
        '                  placeholderTextColor="#2B2E33"\n' +
        '                  onChangeText={(text) => { this.inputedEmail = text; }}\n' +
        '                />\n' +
        '              </View>\n' +
        '              <View style={styles.inputContainer}>\n' +
        '                <Icon\n' +
        '                  name="ios-key"\n' +
        '                  size={Constant.ICON_SIZE}\n' +
        '                  color="#2B2E33"\n' +
        '                />\n' +
        '                <TextInput\n' +
        '                  style={styles.input}\n' +
        '                  ref=\'password\'\n' +
        '                  autoCapitalize=\'none\'\n' +
        '                  autoCorrect={false}\n' +
        '                  placeholder=\'Password\'\n' +
        '                  underlineColorAndroid={\'rgba(0,0,0,0.0)\'}\n' +
        '                  placeholderTextColor="#2B2E33"\n' +
        '                  secureTextEntry\n' +
        '                  onChangeText={(text) => { this.inputedPassword = text; }}\n' +
        '                />\n' +
        '              </View>\n' +
        '              <TouchableHighlight\n' +
        '                style={styles.button}\n' +
        '                underlayColor=\'#000000\'\n' +
        '                onPress={this.onLoginPressed.bind(this)}\n' +
        '              >\n' +
        '                <Text style={styles.btnText}>{LOGIN}</Text>\n' +
        '              </TouchableHighlight>\n' +
        '              <Text style={styles.hiperlink}>Forgot password</Text>\n' +
        '              <TouchableHighlight\n' +
        '                underlayColor=\'rgba(0,0,0,0.0)\'\n' +
        '                onPress={this.onSignupPressed.bind(this)}>\n' +
        '                <Text style={styles.hiperlink}>Sign up</Text>\n' +
        '              </TouchableHighlight>\n' +
        '            </View>\n' +
        '          </View>\n' +
        '        </View>\n' +
        '      </View>\n' +
        '    );\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'export default Login;\n'
      },
      {
        file: 'styles.js',
        language: 'javascript',
        code: '\'use strict\';\n' +
        '\n' +
        'import StyleSheet from \'../../share/stylesheet\';\n' +
        '\n' +
        'module.exports = StyleSheet({\n' +
        '  container: {\n' +
        '    flex: 1,\n' +
        '    backgroundColor: \'#E8E3E3\'\n' +
        '  },\n' +
        '  containers: {\n' +
        '    flex: 1,\n' +
        '    justifyContent: \'center\'\n' +
        '  },\n' +
        '  titleContainer: {\n' +
        '    flex: 2,\n' +
        '    justifyContent: \'center\',\n' +
        '    alignItems: \'center\',\n' +
        '    flexDirection: \'column\'\n' +
        '  },\n' +
        '  title: {\n' +
        '    fontFamily: \'OpenSans\',\n' +
        '    fontSize: 35,\n' +
        '    color: \'#2B2E33\'\n' +
        '  },\n' +
        '  inputsContainer: {\n' +
        '    flex: 3\n' +
        '  },\n' +
        '  inputContainer: {\n' +
        '    marginLeft: 20,\n' +
        '    marginRight: 20,\n' +
        '    marginBottom: 15,\n' +
        '    padding: 0,\n' +
        '    paddingLeft: 8,\n' +
        '    flexDirection: \'row\',\n' +
        '    alignItems: \'center\',\n' +
        '    backgroundColor: \'#fff\'\n' +
        '  },\n' +
        '  input: {\n' +
        '    fontFamily: \'Open Sans\',\n' +
        '    fontSize: 13,\n' +
        '    flex: 1,\n' +
        '    height: 40,\n' +
        '    paddingTop: 0,\n' +
        '    paddingBottom: 0,\n' +
        '    marginLeft: 10,\n' +
        '    borderWidth: 0\n' +
        '  },\n' +
        '  button: {\n' +
        '    marginLeft: 20,\n' +
        '    marginRight: 20,\n' +
        '    marginTop: 10,\n' +
        '    marginBottom: 15,\n' +
        '    padding: 12,\n' +
        '    justifyContent: \'center\',\n' +
        '    alignItems: \'center\',\n' +
        '    backgroundColor: \'#009999\'\n' +
        '  },\n' +
        '  btnText: {\n' +
        '    fontFamily: \'Open Sans\',\n' +
        '    color: \'#fff\',\n' +
        '    fontWeight: \'bold\'\n' +
        '  },\n' +
        '  logo: {\n' +
        '    resizeMode: \'contain\',\n' +
        '    width: deviceWidth / 4,\n' +
        '    height: deviceWidth / 4\n' +
        '  },\n' +
        '  hiperlink: {\n' +
        '    fontSize: 14,\n' +
        '    marginBottom: 5,\n' +
        '    alignSelf: \'center\',\n' +
        '    color: \'#0A2239\'\n' +
        '  }\n' +
        '});'
      },
      {
        file: 'database.js',
        language: 'javascript',
        code: 'import * as firebase from \'firebase\';\n' +
        '\n' +
        'class Database {\n' +
        '\n' +
        '  /**\n' +
        '   * Sets a users mobile number\n' +
        '   * @param userId\n' +
        '   * @param name\n' +
        '   * @param lastname\n' +
        '   * @returns {firebase.Promise<any>|!firebase.Promise.<void>}\n' +
        '   */\n' +
        '  static setUserName(userId, name, lastname) {\n' +
        '    let userPath = \'/user/\' + userId + \'/details\';\n' +
        '\n' +
        '    return firebase.database().ref(userPath).set({\n' +
        '      name: name,\n' +
        '      lastname: lastname\n' +
        '    });\n' +
        '  }\n' +
        '\n' +
        '  /**\n' +
        '   * Listen for changes to a users mobile number\n' +
        '   * @param userId\n' +
        '   * @param callback Users mobile number\n' +
        '   */\n' +
        '  static listenUserData(userId, callback) {\n' +
        '    let userPath = \'/user/\' + userId + \'/details\';\n' +
        '\n' +
        '    firebase.database().ref(userPath).on(\'value\', (snapshot) => {\n' +
        '      var name = \'\';\n' +
        '      var lastname = \'\';\n' +
        '\n' +
        '      if (snapshot.val()) {\n' +
        '        name = snapshot.val().name;\n' +
        '        lastname = snapshot.val().lastname;\n' +
        '      }\n' +
        '\n' +
        '      callback(name, lastname);\n' +
        '    });\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'module.exports = Database;\n'
      }
    ]
  },
  {
    id: 7,
    name: 'Chat App',
    company: 'Scopic Software',
    description: 'Small node js application for chatting.',
    thumbnail: '/img/portfolio/nodejs-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/scopic-logo.png',
    tags: ['Node JS', 'pug', 'JS', 'CSS'],
    sampleCodes: [
      {
        file: 'app.js',
        language: 'node',
        code: 'let express = require(\'express\');\n' +
        'let app = express();\n' +
        'let http = require(\'http\').createServer(app);\n' +
        'let io = require(\'socket.io\')(http);\n' +
        'let bodyParser = require(\'body-parser\');\n' +
        'let messages = [];\n' +
        'let users = [];\n' +
        '\n' +
        '// parse incoming requests\n' +
        'app.use(bodyParser.json());\n' +
        'app.use(bodyParser.urlencoded({ extended: false }));\n' +
        '\n' +
        'app.use("/public", express.static(__dirname + \'/public\'));\n' +
        'app.use("/src", express.static(__dirname + \'/src\'));\n' +
        'app.use(express.static(__dirname + \'/node_modules\'));\n' +
        '\n' +
        '// view engine setup\n' +
        'app.set(\'view engine\', \'pug\');\n' +
        'app.set(\'views\', __dirname + \'/views\');\n' +
        '\n' +
        '// include routes\n' +
        'let routes = require(\'./routes/index\');\n' +
        'app.use(\'/\', routes);\n' +
        '\n' +
        'let setUserLogged = (users, user, isLogged) => {\n' +
        '  for (let i in users) {\n' +
        '    if (user === users[i].username) {\n' +
        '      users[i].logged = isLogged;\n' +
        '      break;\n' +
        '    }\n' +
        '  }\n' +
        '};\n' +
        '\n' +
        'io.on(\'connection\', (socket) => {\n' +
        '  socket.on(\'join\', (data) => {\n' +
        '    let username = data.username;\n' +
        '    let user = users.filter(user => user.username === username);\n' +
        '\n' +
        '    if (user.length > 0) {\n' +
        '      io.emit(\'already logged\', user);\n' +
        '      if (!user.logged) { // the user logged back in\n' +
        '        setUserLogged(users, data.username, true);\n' +
        '      }\n' +
        '    } else { // the user logged in\n' +
        '      let user = {\n' +
        '        logged: true,\n' +
        '        username,\n' +
        '        color: \'#000000\'\n' +
        '      };\n' +
        '      users.push(user);\n' +
        '      socket.join(user);\n' +
        '      io.emit(\'user joined\', messages, user, users);\n' +
        '    }\n' +
        '  });\n' +
        '\n' +
        '  socket.on(\'get messages\', (messages) => {\n' +
        '    io.emit(\'get messages\', messages, users);\n' +
        '  });\n' +
        '\n' +
        '  socket.on(\'init\', (init) => {\n' +
        '    io.emit(\'init\', init);\n' +
        '    io.emit(\'get messages\', messages, users);\n' +
        '  });\n' +
        '\n' +
        '  socket.on(\'leave\', (username) => {\n' +
        '    setUserLogged(users, username, false);\n' +
        '    io.emit(\'leave\', username);\n' +
        '  });\n' +
        '\n' +
        '  socket.on(\'chat message\', (message) => {\n' +
        '    messages.push(message);\n' +
        '    io.emit(\'chat message\', message, users);\n' +
        '  });\n' +
        '\n' +
        '  socket.on(\'already logged\', (user) => {\n' +
        '    io.emit(\'already logged\', user);\n' +
        '  });\n' +
        '\n' +
        '  socket.on(\'change color\', (username, color) => {\n' +
        '    for (let i in users) {\n' +
        '      if (users[i].username === username) {\n' +
        '        users[i].color = color;\n' +
        '        break;\n' +
        '      }\n' +
        '    }\n' +
        '    socket.emit(\'change color\', username, color);\n' +
        '  });\n' +
        '\n' +
        '  socket.on(\'delete message\', (message) => {\n' +
        '    let index = messages.findIndex(msg => msg.id === parseInt(message));\n' +
        '\n' +
        '    if (index !== -1) {\n' +
        '      messages.splice(index, 1);\n' +
        '      io.emit(\'delete message\', message);\n' +
        '      io.emit(\'get messages\', messages, users);\n' +
        '    }\n' +
        '  });\n' +
        '});\n' +
        '\n' +
        'http.listen(process.env.PORT || 3000, () => {\n' +
        '  console.log(\'listening on *:3000\');\n' +
        '});\n'
      },
      {
        file: 'chatroom.pug',
        language: 'pug',
        code: 'extends layout\n' +
        '\n' +
        'block content\n' +
        '  .main-chat.container\n' +
        '    .row\n' +
        '      .row\n' +
        '        .col-md-12\n' +
        '          h1.chat-title.display-5 Happy Chatting #{username} :)\n' +
        '          .btn-toolbar.btn-logout\n' +
        '            form(action="/logout" method="POST")\n' +
        '              a#logout-btn.btn.btn-gray Logout\n' +
        '      .row.color-container\n' +
        '        .col-md-12\n' +
        '          label.submenu Choose your color:\n' +
        '          button#colorpicker\n' +
        '      ul#messages\n' +
        '      form(id="messaging-form" action="" class="form-horizontal")\n' +
        '        div.col-md-12\n' +
        '          div.input-group\n' +
        '            input#message.form-control(type="text" autocomplete="off" required autofocus placeholder="Your message here" name="message")\n' +
        '            input#username(type="hidden" value=username name="username")\n' +
        '            span.input-group-btn\n' +
        '              button#send-btn.btn.btn-red(type="submit") Send\n' +
        '\n' +
        'block append scripts\n' +
        '  script(src=\'/src/chatroom.js\', type=\'text/javascript\')\n'
      },
      {
        file: 'index.pug',
        language: 'pug',
        code: 'extends layout\n' +
        '\n' +
        'block content\n' +
        '  .main.container.text-xs-center\n' +
        '    h1.display-3 Welcome to ChatApp!\n' +
        '    p.lead Have a nice talk with your friends and family in ChatApp\n' +
        '\n' +
        '    form#login-form(method=\'POST\' action=\'/login\')\n' +
        '      .col-md-6.offset-md-3\n' +
        '        .col-md-12.form-group\n' +
        '          label.col-md-2.col-form-label.col-form-label-md.label(for="username") Username\n' +
        '          .col-md-8.form-group\n' +
        '            input.form-control(type="text" autofocus required id="username" placeholder="username" name="username")\n' +
        '          button#login-btn.btn.btn-red.col-md-2(type=\'submit\') Login\n' +
        '        #error-msg.col-md-12.alert.alert-danger(style="display: none")\n' +
        '          div Error! The username selected is already in use, please choose a different one.\n' +
        '\n' +
        'append scripts\n' +
        '  script(src=\'/src/login.js\', type=\'text/javascript\')\n'
      },
      {
        file: 'layout.pug',
        language: 'pug',
        code: 'doctype html(lang=\'en\')\n' +
        'head\n' +
        '    meta(charset=\'utf-8\')\n' +
        '    meta(name=\'viewport\', content=\'width=device-width, initial-scale=1, shrink-to-fit=no\')\n' +
        '    meta(http-equiv=\'x-ua-compatible\', content=\'ie=edge\')\n' +
        '    title Chat App | #{title}\n' +
        '    link(rel=\'shortcut icon\' href=\'/public/images/favicon.png\' type=\'image/png\')\n' +
        '    link(rel=\'stylesheet\', href=\'/bootstrap/dist/css/bootstrap.min.css\')\n' +
        '    link(rel=\'stylesheet\' href=\'/jquery-colpick/css/colpick.css\' type=\'text/css\')\n' +
        '    link(rel=\'stylesheet\' href=\'https://fonts.googleapis.com/icon?family=Material+Icons\')\n' +
        '    link(rel=\'stylesheet\', href=\'/public/stylesheets/styles.css\')\n' +
        '\n' +
        '    body\n' +
        '        // load navbar.pug\n' +
        '        // include navbar\n' +
        '\n' +
        '        // content block\n' +
        '        block content\n' +
        '\n' +
        '        // footer\n' +
        '        p.foot.text-xs-center Chat Application\n' +
        '\n' +
        '    block scripts\n' +
        '        script(src=\'/jquery/dist/jquery.min.js\', type=\'text/javascript\')\n' +
        '        script(src=\'/jquery-colpick/js/colpick.js\' type=\'text/javascript\')\n' +
        '        script(src=\'/tether/dist/js/tether.min.js\', type=\'text/javascript\')\n' +
        '        script(src=\'/bootstrap/dist/js/bootstrap.min.js\', type=\'text/javascript\')\n' +
        '        script(src=\'/moment/moment.js\', type=\'text/javascript\')\n' +
        '        script(src=\'/socket.io/socket.io.js\', type=\'text/javascript\')\n' +
        '        script(src=\'/src/utils.js\', type=\'text/javascript\')\n'
      },
      {
        file: 'routes.js',
        language: 'javascript',
        code: 'let express = require(\'express\');\n' +
        'let router = express.Router();\n' +
        '\n' +
        '// GET /\n' +
        'router.get(\'/\', (req, res, next) => {\n' +
        '  return res.render(\'index\', { title: \'Home\' });\n' +
        '});\n' +
        '\n' +
        '// POST /login\n' +
        'router.post(\'/login\', (req, res, next) => {\n' +
        '  if (req.body.username) {\n' +
        '    return res.redirect(\'/chatroom/\' + req.body.username);\n' +
        '  } else {\n' +
        '    console.log("An error occurred");\n' +
        '  }\n' +
        '});\n' +
        '\n' +
        '// GET /logout\n' +
        'router.get(\'/logout\', (req, res, next) => {\n' +
        '  return res.redirect(\'/\');\n' +
        '});\n' +
        '\n' +
        '// GET /chatroom/:username\n' +
        'router.get(\'/chatroom/:username\', (req, res, next) => {\n' +
        '  let username = req.params.username;\n' +
        '  return res.render(\'chatroom\', { title: \'Chat Room\', username: username });\n' +
        '});\n' +
        '\n' +
        '// GET /chatroom/\n' +
        'router.get(\'/chatroom\', (req, res, next) => {\n' +
        '  return res.render(\'chatroom\', { title: \'Chat Room\' });\n' +
        '});\n' +
        '\n' +
        'module.exports = router;\n'
      }
    ]
  },
  {
    id: 8,
    name: 'Universoideas',
    company: 'Freelance Project',
    description: 'News site that includes an internal administration to add, edit and publish articles.',
    thumbnail: '/img/portfolio/cake-logo.png',
    image: 'img/portfolio/fit.png',
    logo: 'img/logos/logo-130.png',
    tags: ['PHP', 'CakePHP', 'JS', 'CSS'],
    sampleCodes: [
      {
        file: 'Model/Article.php',
        language: 'PHP',
        code: '<?php\n' +
        'App::uses(\'AppModel\', \'Model\');\n' +
        '/**\n' +
        ' * Article Model\n' +
        ' *\n' +
        ' * @property RelatedImage $RelatedImage\n' +
        ' * @property RelatedVideo $RelatedVideo\n' +
        ' * @property User $User\n' +
        ' */\n' +
        'class Article extends AppModel {\n' +
        '\n' +
        '/**\n' +
        ' * Validation rules\n' +
        ' *\n' +
        ' * @var array\n' +
        ' */\n' +
        '\tpublic $validate = array(\n' +
        '\t\t\'title\' => array(\n' +
        '\t\t\t\'notempty\' => array(\n' +
        '\t\t\t\t\'rule\' => array(\'notempty\')\n' +
        '\t\t\t),\n' +
        '\t\t),\n' +
        '\t\t\'summary\' => array(\n' +
        '\t\t\t\'notempty\' => array(\n' +
        '\t\t\t\t\'rule\' => array(\'notempty\')\n' +
        '\t\t\t),\n' +
        '\t\t),\n' +
        '\t\t\'body\' => array(\n' +
        '\t\t\t\'notempty\' => array(\n' +
        '\t\t\t\t\'rule\' => array(\'notempty\')\n' +
        '\t\t\t),\n' +
        '\t\t),\n' +
        '\t\t\'channel\' => array(\n' +
        '\t\t\t\'notempty\' => array(\n' +
        '\t\t\t\t\'rule\' => array(\'notempty\')\n' +
        '\t\t\t),\n' +
        '\t\t),\n' +
        '\t\t\'enabled\' => array(\n' +
        '\t\t\t\'boolean\' => array(\n' +
        '\t\t\t\t\'rule\' => array(\'boolean\')\n' +
        '\t\t\t),\n' +
        '\t\t),\n' +
        '\t\t\'highlight\' => array(\n' +
        '\t\t\t\'boolean\' => array(\n' +
        '\t\t\t\t\'rule\' => array(\'boolean\')\n' +
        '\t\t\t),\n' +
        '\t\t),\n' +
        '\t);\n' +
        '\n' +
        '\t//The Associations below have been created with all possible keys, those that are not needed can be removed\n' +
        '\n' +
        '/**\n' +
        ' * hasMany associations\n' +
        ' *\n' +
        ' * @var array\n' +
        ' */\n' +
        '\tpublic $hasMany = array(\n' +
        '\t\t\'RelatedImage\' => array(\n' +
        '\t\t\t\'className\' => \'RelatedImage\',\n' +
        '\t\t\t\'foreignKey\' => \'article_id\',\n' +
        '\t\t\t\'dependent\' => false,\n' +
        '\t\t\t\'conditions\' => \'\',\n' +
        '\t\t\t\'fields\' => \'\',\n' +
        '\t\t\t\'order\' => \'\',\n' +
        '\t\t\t\'limit\' => \'\',\n' +
        '\t\t\t\'offset\' => \'\',\n' +
        '\t\t\t\'exclusive\' => \'\',\n' +
        '\t\t\t\'finderQuery\' => \'\',\n' +
        '\t\t\t\'counterQuery\' => \'\'\n' +
        '\t\t),\n' +
        '\t\t\'RelatedVideo\' => array(\n' +
        '\t\t\t\'className\' => \'RelatedVideo\',\n' +
        '\t\t\t\'foreignKey\' => \'article_id\',\n' +
        '\t\t\t\'dependent\' => false,\n' +
        '\t\t\t\'conditions\' => \'\',\n' +
        '\t\t\t\'fields\' => \'\',\n' +
        '\t\t\t\'order\' => \'\',\n' +
        '\t\t\t\'limit\' => \'\',\n' +
        '\t\t\t\'offset\' => \'\',\n' +
        '\t\t\t\'exclusive\' => \'\',\n' +
        '\t\t\t\'finderQuery\' => \'\',\n' +
        '\t\t\t\'counterQuery\' => \'\'\n' +
        '\t\t)\n' +
        '\t);\n' +
        '\n' +
        '\n' +
        '/**\n' +
        ' * hasAndBelongsToMany associations\n' +
        ' *\n' +
        ' * @var array\n' +
        ' */\n' +
        '\tpublic $hasAndBelongsToMany = array(\n' +
        '\t\t\'User\' => array(\n' +
        '\t\t\t\'className\' => \'User\',\n' +
        '\t\t\t\'joinTable\' => \'users_articles\',\n' +
        '\t\t\t\'foreignKey\' => \'article_id\',\n' +
        '\t\t\t\'associationForeignKey\' => \'user_id\',\n' +
        '\t\t\t\'unique\' => \'keepExisting\',\n' +
        '\t\t\t\'conditions\' => \'\',\n' +
        '\t\t\t\'fields\' => \'\',\n' +
        '\t\t\t\'order\' => \'\',\n' +
        '\t\t\t\'limit\' => \'\',\n' +
        '\t\t\t\'offset\' => \'\',\n' +
        '\t\t\t\'finderQuery\' => \'\',\n' +
        '\t\t\t\'deleteQuery\' => \'\',\n' +
        '\t\t\t\'insertQuery\' => \'\'\n' +
        '\t\t)\n' +
        '\t);\n' +
        '\n' +
        '}\n'
      },
      {
        file: 'ArticlesController.php',
        language: 'PHP',
        code: '<?php\n' +
        'App::uses(\'AppController\', \'Controller\', \'RelatedImagesController\');\n' +
        'App::import(\'Controller\', \'RelatedImagesController\');\n' +
        'App::import(\'Model\', \'RelatedImage\', \'RelatedVideo\');\n' +
        '//App::import(\'Time\');\n' +
        '//App::uses(\'CakeTime\', \'Utility\');\n' +
        '\n' +
        'include("Component/resize-class.php");\n' +
        '\n' +
        '/**\n' +
        ' * Articles Controller\n' +
        ' *\n' +
        ' * @property Article $Article\n' +
        ' */\n' +
        'class ArticlesController extends AppController {\n' +
        '\n' +
        '    public function beforeFilter() {\n' +
        '        parent::beforeFilter();\n' +
        '        $user = $this->Auth->user();\n' +
        '        \n' +
        '        if(!empty($user)) {\n' +
        '            if($user[\'role_id\'] === \'1\') {\n' +
        '                $this->Auth->allow(array(\'index\', \'view\', \'add\', \'edit\', \'delete\'));\n' +
        '            } else {\n' +
        '                $this->Auth->deny(array(\'index\', \'view\', \'add\', \'edit\', \'delete\'));\n' +
        '            }\n' +
        '        } else {\n' +
        '            $this->Auth->deny(array(\'index\', \'view\', \'add\', \'edit\', \'delete\'));\n' +
        '        }\n' +
        '    }\n' +
        '    \n' +
        '    public function isAuthorized($user) {\n' +
        '        \n' +
        '        if($user[\'role_id\'] === \'1\') {\n' +
        '            if ($this->action === \'add\' || $this->action === \'edit\' ||\n' +
        '                $this->action === \'view\' || $this->action === \'index\' || $this->action === \'delete\') {\n' +
        '                return true;\n' +
        '            } else {\n' +
        '                return false;\n' +
        '            }\n' +
        '        }\n' +
        '        \n' +
        '        return parent::isAuthorized($user);\n' +
        '    }\n' +
        '    \n' +
        '    /**\n' +
        '    * index method\n' +
        '    *\n' +
        '    * @return void\n' +
        '    */\n' +
        '    public function index() {\n' +
        '        $user_id = $this->Auth->user(\'id\');\n' +
        '        \n' +
        '        $this->Article->recursive = 0;\n' +
        '        $articles = $this->Article->find(\'all\');\n' +
        '        \n' +
        '        $this->set(\'articles\', $articles);\n' +
        '        $this->set(\'user_id\', $user_id);\n' +
        '    }\n' +
        '\n' +
        '    /**\n' +
        '    * view method\n' +
        '    *\n' +
        '    * @throws NotFoundException\n' +
        '    * @param string $id\n' +
        '    * @return void\n' +
        '    */\n' +
        '    public function view($id = null) {\n' +
        '        if (!$this->Article->exists($id)) {\n' +
        '            throw new NotFoundException(__(\'Invalid article\'));\n' +
        '        }\n' +
        '        $options = array(\'conditions\' => array(\'Article.\' . $this->Article->primaryKey => $id));\n' +
        '        $this->set(\'article\', $this->Article->find(\'first\', $options));\n' +
        '    }\n' +
        '\n' +
        '    /**\n' +
        '    * add method\n' +
        '    *\n' +
        '    * @return void\n' +
        '    */\n' +
        '    public function add() {\n' +
        '        if ($this->request->is(\'post\')) {\n' +
        '            $this->loadModel(\'RelatedImage\');\n' +
        '            $this->loadModel(\'RelatedVideo\');\n' +
        '\n' +
        '            $this->Article->create();\n' +
        '            if ($this->Article->save($this->request->data)) {\n' +
        '                $article_id = $this->Article->getLastInsertId();\n' +
        '\n' +
        '                $selectedMedia = $this->request->data[\'Article\'][\'media\'];\n' +
        '                \n' +
        '                if($selectedMedia == \'imagen\') {\n' +
        '                    $this->request->data[\'RelatedImage\'][\'article_id\'] = $article_id;\n' +
        '                    \n' +
        '                    if(!empty($this->request->data[\'RelatedImage\'][\'upload\'])) {\n' +
        '                        $this->manageImage($article_id);\n' +
        '                    }\n' +
        '\n' +
        '                    if($this->RelatedImage->save($this->request->data)){\n' +
        '                        $this->Session->setFlash(\'El artículo fue guardado exitosamente.\', \'flash_success\');\n' +
        '                        $this->publishAll();\n' +
        '                        $this->publishArticle($article_id);\n' +
        '                        $this->redirect(array(\'action\' => \'index\'));\n' +
        '                    } else {\n' +
        '                        $this->Session->setFlash(\'La imagen no pudo ser guardada.\', \'flash_error\');\n' +
        '                        $this->redirect(array(\'action\' => \'index\'));\n' +
        '                    }\n' +
        '                    \n' +
        '                } else if($selectedMedia == \'video\') {\n' +
        '                    $this->request->data[\'RelatedVideo\'][\'article_id\'] = $article_id;\n' +
        '                    $this->request->data[\'RelatedVideo\'][\'name\'] = \'video\';\n' +
        '                    \n' +
        '                    if($this->RelatedVideo->save($this->request->data)) {\n' +
        '                        $this->Session->setFlash(\'El artículo fue guardado exitosamente.\', \'flash_success\');\n' +
        '                        $this->publishAll();\n' +
        '                        $this->publishArticle($article_id);\n' +
        '                        $this->redirect(array(\'action\' => \'index\'));\n' +
        '                    } else {\n' +
        '                        $this->Session->setFlash(\'El video no pudo ser guardado.\', \'flash_error\');\n' +
        '                        $this->redirect(array(\'action\' => \'index\'));\n' +
        '                    }\n' +
        '                } else { \n' +
        '                    $this->Session->setFlash(\'El artículo fue guardado exitosamente.\', \'flash_success\');\n' +
        '                    $this->publishAll();\n' +
        '                    $this->publishArticle($article_id);\n' +
        '                    $this->redirect(array(\'action\' => \'index\'));\n' +
        '                }\n' +
        '            } else {\n' +
        '                $this->Session->setFlash(__(\'El artículo no pudo ser guardado. Intente de nuevo.\'));\n' +
        '            }\n' +
        '        }\n' +
        '        \n' +
        '        $users = $this->Article->User->find(\'list\');\n' +
        '        $channels = array("principal" => "Principal", \n' +
        '                          "encuentrame" => "Encuéntrame", \n' +
        '                          "rumba" => "Rumba", \n' +
        '                          "arte" => "Arte y Cultura", \n' +
        '                          "ciencia" => "Ciencia y Tecnología", \n' +
        '                          "sexualidad" => "Sexualidad al día", \n' +
        '                          "moda" => "Moda"\n' +
        '                         );\n' +
        '        \n' +
        '        $this->set(compact(\'users\', \'channels\'));\n' +
        '    }\n' +
        '    \n' +
        '    /**\n' +
        '    * edit method\n' +
        '    *\n' +
        '    * @throws NotFoundException\n' +
        '    * @param string $id\n' +
        '    * @return void\n' +
        '    */\n' +
        '    public function edit($id = null) {\n' +
        '        $this->loadModel(\'RelatedImage\');\n' +
        '        $this->loadModel(\'RelatedVideo\');\n' +
        '        \n' +
        '        if (!$this->Article->exists($id)) {\n' +
        '            throw new NotFoundException(__(\'Invalid article\'));\n' +
        '        }\n' +
        '        if ($this->request->is(\'post\') || $this->request->is(\'put\')) {\n' +
        '            if ($this->Article->save($this->request->data)) {\n' +
        '                \n' +
        '                $selectedMedia = $this->request->data[\'Article\'][\'media\'];\n' +
        '                $image_id = $this->request->data[\'RelatedImage\'][\'id\'];\n' +
        '                $video_id = $this->request->data[\'RelatedVideo\'][\'id\'];\n' +
        '                \n' +
        '                if($selectedMedia == \'imagen\') {\n' +
        '                    $this->request->data[\'RelatedImage\'][\'article_id\'] = $id;\n' +
        '                    \n' +
        '                    if(!empty($this->request->data[\'RelatedImage\'][\'upload\'])) {\n' +
        '                        $this->manageImage($id);\n' +
        '                    }\n' +
        '                    \n' +
        '                    if($image_id != null)\n' +
        '                        $result_img = $this->editRelatedImage($image_id);\n' +
        '                    else {\n' +
        '                        if($this->RelatedImage->save($this->request->data)){\n' +
        '                            $this->Session->setFlash(\'El artículo fue guardado exitosamente.\', \'flash_success\');\n' +
        '                            $this->publishArticle($id);\n' +
        '                            $this->publishAll();\n' +
        '                            $this->redirect(array(\'action\' => \'edit\', $id));\n' +
        '                        } else {\n' +
        '                            $this->Session->setFlash(\'La imagen no pudo ser guardada.\', \'flash_error\');\n' +
        '                            $this->redirect(array(\'action\' => \'edit\', $id));\n' +
        '                        }\n' +
        '                    }\n' +
        '                    \n' +
        '                    if($video_id != null && $video_id > 0)\n' +
        '                        $this->deleteRelatedVideo($video_id);\n' +
        '                    \n' +
        '                    if($result_img == 1) {\n' +
        '                        $this->Session->setFlash(\'El artículo fue guardado exitosamente.\', \'flash_success\');\n' +
        '                        $this->publishArticle($id);\n' +
        '                        $this->publishAll();\n' +
        '                        $this->redirect(array(\'action\' => \'edit\', $id));\n' +
        '                    } else {\n' +
        '                        $this->Session->setFlash(\'La imagen no pudo ser guardada.\', \'flash_error\');\n' +
        '                        $this->redirect(array(\'action\' => \'edit\', $id));\n' +
        '                    }\n' +
        '                    \n' +
        '                } else if($selectedMedia == \'video\') {\n' +
        '                    $this->request->data[\'RelatedVideo\'][\'article_id\'] = $id;\n' +
        '                    $this->request->data[\'RelatedVideo\'][\'name\'] = \'video\';\n' +
        '                    $result_vid = 0;\n' +
        '                    \n' +
        '                    if($video_id != null)\n' +
        '                        $result_vid = $this->editRelatedVideo($video_id);\n' +
        '                    else {\n' +
        '                        if($this->RelatedVideo->save($this->request->data)) {\n' +
        '                            $this->Session->setFlash(\'El artículo fue guardado exitosamente.\', \'flash_success\');\n' +
        '                            $this->publishArticle($id);\n' +
        '                            $this->publishAll();\n' +
        '                            $this->redirect(array(\'action\' => \'edit\', $id));\n' +
        '                        } else {\n' +
        '                            $this->Session->setFlash(\'El video no pudo ser guardado.\', \'flash_error\');\n' +
        '                            $this->redirect(array(\'action\' => \'edit\', $id));\n' +
        '                        }\n' +
        '                    }\n' +
        '                    \n' +
        '                    if($image_id != null && $image_id > 0)\n' +
        '                        $this->deleteRelatedImage($image_id);\n' +
        '                        \n' +
        '                    if($result_vid == 1) {\n' +
        '                        $this->Session->setFlash(\'El artículo fue guardado exitosamente.\', \'flash_success\');\n' +
        '                        $this->publishArticle($id);\n' +
        '                        $this->publishAll();\n' +
        '                        $this->redirect(array(\'action\' => \'edit\', $id));\n' +
        '                    } else {\n' +
        '                        $this->Session->setFlash(\'El video no pudo ser guardado.\', \'flash_error\');\n' +
        '                        $this->redirect(array(\'action\' => \'edit\', $id));\n' +
        '                    }\n' +
        '                } else {\n' +
        '                    if($image_id != null && $image_id > 0)\n' +
        '                        $this->deleteRelatedImage($image_id);\n' +
        '                    \n' +
        '                    if($video_id != null && $video_id > 0)\n' +
        '                        $this->deleteRelatedVideo($video_id);\n' +
        '                    \n' +
        '                    $this->Session->setFlash(\'El artículo fue guardado exitosamente.\', \'flash_success\');\n' +
        '                    $this->publishArticle($id);\n' +
        '                    $this->publishAll();\n' +
        '                    $this->redirect(array(\'action\' => \'edit\', $id));\n' +
        '                }\n' +
        '            } else {\n' +
        '                $this->Session->setFlash(\'El artículo no pudo ser guardado. Intente de nuevo.\', \'flash_error\');\n' +
        '            }\n' +
        '        } else {\n' +
        '            $options = array(\'conditions\' => array(\'Article.\' . $this->Article->primaryKey => $id));\n' +
        '            $this->request->data = $this->Article->find(\'first\', $options);\n' +
        '        }\n' +
        '        \n' +
        '        $relatedImage = $this->RelatedImage->find(\'first\', array(\'conditions\' => array(\'RelatedImage.article_id\' => $id)));\n' +
        '        $relatedVideo = $this->RelatedVideo->find(\'first\', array(\'conditions\' => array(\'RelatedVideo.article_id\' => $id)));\n' +
        '        $channels = array("principal" => "Principal", \n' +
        '                          "encuentrame" => "Encuéntrame", \n' +
        '                          "rumba" => "Rumba", \n' +
        '                          "arte" => "Arte y Cultura", \n' +
        '                          "ciencia" => "Ciencia y Tecnología", \n' +
        '                          "sexualidad" => "Sexualidad al día", \n' +
        '                          "moda" => "Moda"\n' +
        '                         );\n' +
        '        $this->set(compact(\'relatedImage\', \'relatedVideo\', \'channels\'));\n' +
        '    }\n' +
        '\n' +
        '    /**\n' +
        '    * delete method\n' +
        '    *\n' +
        '    * @throws NotFoundException\n' +
        '    * @param string $id\n' +
        '    * @return void\n' +
        '    */\n' +
        '    public function delete($id = null) {\n' +
        '        $this->Article->id = $id;\n' +
        '        if (!$this->Article->exists()) {\n' +
        '            throw new NotFoundException(__(\'Invalid article\'));\n' +
        '        }\n' +
        '        $this->request->onlyAllow(\'post\', \'delete\');\n' +
        '        if ($this->Article->delete()) {\n' +
        '            $this->Session->setFlash(\'El artículo fue eliminado.\', \'flash_success\');\n' +
        '            $this->publishAll();\n' +
        '            $this->redirect(array(\'action\' => \'index\'));\n' +
        '        }\n' +
        '        $this->Session->setFlash(\'El artículo no pudo ser eliminado. Intente de nuevo.\', \'flash_error\');\n' +
        '        \n' +
        '        $this->redirect(array(\'action\' => \'index\'));\n' +
        '    }\n' +
        '    \n' +
        '    /**\n' +
        '    * editRelatedImage method\n' +
        '    *\n' +
        '    * @throws NotFoundException\n' +
        '    * @param string $id\n' +
        '    * @return int\n' +
        '    */\n' +
        '    public function editRelatedImage($id = null) {\n' +
        '        $result = 0;\n' +
        '        if (!$this->RelatedImage->exists($id)) {\n' +
        '            throw new NotFoundException(__(\'Imagen relacionada inválida\'));\n' +
        '        }\n' +
        '        if ($this->request->is(\'post\') || $this->request->is(\'put\')) {\n' +
        '            if ($this->RelatedImage->save($this->request->data)) {\n' +
        '                $result = 1;\n' +
        '            } else {\n' +
        '                $result = 0;\n' +
        '            }\n' +
        '        } else {\n' +
        '            $options = array(\'conditions\' => array(\'RelatedImage.\' . $this->RelatedImage->primaryKey => $id));\n' +
        '            $this->request->data = $this->RelatedImage->find(\'first\', $options);\n' +
        '        }\n' +
        '        return $result;\n' +
        '    }\n' +
        '    \n' +
        '    /**\n' +
        '    * deleteRelatedImage method\n' +
        '    *\n' +
        '    * @throws NotFoundException\n' +
        '    * @param string $id\n' +
        '    * @return int\n' +
        '    */\n' +
        '    public function deleteRelatedImage($id = null) {\n' +
        '        $result = 0;\n' +
        '        $this->RelatedImage->id = $id;\n' +
        '        if (!$this->RelatedImage->exists()) {\n' +
        '            throw new NotFoundException(__(\'Imagen relacionada inválida\'));\n' +
        '        }\n' +
        '        if ($this->RelatedImage->delete()) {\n' +
        '            $result = 1;\n' +
        '        }\n' +
        '        return $result;\n' +
        '    }\n' +
        '    \n' +
        '    /**\n' +
        '    * editRelatedVideo method\n' +
        '    *\n' +
        '    * @throws NotFoundException\n' +
        '    * @param string $id\n' +
        '    * @return int\n' +
        '    */\n' +
        '    public function editRelatedVideo($id = null) {\n' +
        '        $result = 0;\n' +
        '        if (!$this->RelatedVideo->exists($id)) {\n' +
        '            throw new NotFoundException(__(\'Video relacionado inválido\'));\n' +
        '        }\n' +
        '        if ($this->request->is(\'post\') || $this->request->is(\'put\')) {\n' +
        '            if ($this->RelatedVideo->save($this->request->data)) {\n' +
        '                $result = 1;\n' +
        '            } else {\n' +
        '                $result = 0;\n' +
        '            }\n' +
        '        } else {\n' +
        '            $options = array(\'conditions\' => array(\'RelatedVideo.\' . $this->RelatedVideo->primaryKey => $id));\n' +
        '            $this->request->data = $this->RelatedVideo->find(\'first\', $options);\n' +
        '        }\n' +
        '        return $result;\n' +
        '    }\n' +
        '    \n' +
        '    /**\n' +
        '    * deleteRelatedVideo method\n' +
        '    *\n' +
        '    * @throws NotFoundException\n' +
        '    * @param string $id\n' +
        '    * @return void\n' +
        '    */\n' +
        '    public function deleteRelatedVideo($id = null) {\n' +
        '        $result = 0;\n' +
        '        $this->RelatedVideo->id = $id;\n' +
        '        if (!$this->RelatedVideo->exists()) {\n' +
        '            throw new NotFoundException(__(\'Video relacionado inválido\'));\n' +
        '        }\n' +
        '        if ($this->RelatedVideo->delete()) {\n' +
        '            $result = 1;\n' +
        '        }\n' +
        '        return $result;\n' +
        '    }\n' +
        '    \n' +
        '    /**\n' +
        '    * manageImage method\n' +
        '    *\n' +
        '    * @return void\n' +
        '    */\n' +
        '    public function manageImage($article_id) {\n' +
        '        $file = $this->request->data[\'RelatedImage\'][\'upload\']; //put the data into a var for easy use\n' +
        '\n' +
        '        $ext = substr(strtolower(strrchr($file[\'name\'], \'.\')), 1); //get the extension\n' +
        '        $title = strstr($file[\'name\'], \'.\', true);  //get the name alone\n' +
        '\n' +
        '\n' +
        '        $arr_ext = array(\'jpg\', \'jpeg\', \'gif\', \'png\'); //set allowed extensions\n' +
        '        $width_thumb = 200;\n' +
        '\n' +
        '        //only process if the extension is valid\n' +
        '        if(in_array($ext, $arr_ext)) {\n' +
        '            $img_path = WWW_ROOT . \'img/uploads/\' . $title . \'_\' . $article_id . \'.\' . $ext;\n' +
        '            move_uploaded_file($file["tmp_name"], $img_path);\n' +
        '\n' +
        '            list($width, $height) = getimagesize($img_path);\n' +
        '\n' +
        '            // *** 1) Initialise / load image\n' +
        '            $resizeObj = new resize($img_path);\n' +
        '            $height_thumb = $resizeObj -> getSizeByFixedWidth($width_thumb);\n' +
        '\n' +
        '            // *** 2) Resize image (options: exact, portrait, landscape, auto, crop)\n' +
        '            $resizeObj -> resizeImage($width_thumb, $height_thumb, \'crop\');\n' +
        '            $thumb = WWW_ROOT . \'img/uploads/\' . $title . \'_\' . $article_id . \'_thumb.\' . $ext;\n' +
        '            $uri_thumb = \'/app/webroot/img/uploads/\' . $title . \'_\' . $article_id .\'_thumb.\' . $ext;\n' +
        '            $uri_img = \'/app/webroot/img/uploads/\' . $title . \'_\' . $article_id . \'.\' . $ext;\n' +
        '\n' +
        '            // *** 3) Save image\n' +
        '            $resizeObj -> saveImage($thumb, 100);\n' +
        '\n' +
        '            //prepare the filename for database entry\n' +
        '            $this->request->data[\'RelatedImage\'][\'uri\'] = $uri_img;\n' +
        '            $this->request->data[\'RelatedImage\'][\'name\'] = $title . \'_\' . $article_id . \'.\' . $ext;\n' +
        '            $this->request->data[\'RelatedImage\'][\'title\'] = $title . \'_\' . $article_id;\n' +
        '            $this->request->data[\'RelatedImage\'][\'width\'] = $width;\n' +
        '            $this->request->data[\'RelatedImage\'][\'height\'] = $height;\n' +
        '            $this->request->data[\'RelatedImage\'][\'uri_thumb\'] = $uri_thumb;\n' +
        '            $this->request->data[\'RelatedImage\'][\'width_thumb\'] = $width_thumb;\n' +
        '            $this->request->data[\'RelatedImage\'][\'height_thumb\'] = $height_thumb;\n' +
        '        }\n' +
        '    }\n' +
        '    \n' +
        '    public function getArticles($limit, $channel) {\n' +
        '        $join = "";\n' +
        '        \n' +
        '        if($channel != "" && $channel != null) {\n' +
        '            $join = "AND art.channel = \'" . $channel . "\'";\n' +
        '        }\n' +
        '        \n' +
        '        $sql = "SELECT art.id, art.channel, art.title, art.summary, art.enabled, art.created, art.modified, \n' +
        '                       img.id as image_id, img.uri, img.uri_thumb, img.title, img.article_id as img_article_id, \n' +
        '                       vid.id as video_id, vid.name as video_name, vid.source, vid.article_id as vid_article_id \n' +
        '                FROM articles art \n' +
        '                LEFT JOIN related_images img on art.id = img.article_id \n' +
        '                LEFT JOIN related_videos vid on art.id = vid.article_id \n' +
        '                WHERE art.enabled = 1 \n' +
        '                AND art.highlight = 0 " \n' +
        '                . $join .\n' +
        '               "ORDER BY art.modified desc, art.id asc \n' +
        '                LIMIT " . $limit . ""; \n' +
        '        \n' +
        '        $articles = $this->Article->query($sql);\n' +
        '        \n' +
        '        return $articles;\n' +
        '    }\n' +
        '    \n' +
        '    public function writeFile($data, $file_name) {\n' +
        '        $file = WWW_ROOT . \'includes/published/\' . $file_name . \'.htm\';\n' +
        '        $handle = fopen($file, \'w\') or die(\'Cannot open file:  \'.$file);\n' +
        '        \n' +
        '        fwrite($handle, $data);\n' +
        '    }\n' +
        '    \n' +
        '    public function publishView($view, $file_name) {\n' +
        '        $result = $this->requestAction(\'/pages/\' . $view, array(\'return\')); \n' +
        '        \n' +
        '        $this->writeFile($result, $file_name);\n' +
        '    }\n' +
        '    \n' +
        '    public function publishAll() {\n' +
        '        /* PUBLICAR RIOS */\n' +
        '        $this->publishView("rio", "rios/rio");\n' +
        '        $this->publishView("rio/encuentrame", "rios/rio-encuentrame");\n' +
        '        $this->publishView("rio/arte", "rios/rio-arte");\n' +
        '        $this->publishView("rio/ciencia", "rios/rio-ciencia");\n' +
        '        $this->publishView("rio/moda", "rios/rio-moda");\n' +
        '        $this->publishView("rio/rumba", "rios/rio-rumba");\n' +
        '        $this->publishView("rio/sexualidad", "rios/rio-sexualidad");\n' +
        '        \n' +
        '        /* PUBLICAR GALERIAS */\n' +
        '        $this->publishView("galeria", "galleries/galeria");\n' +
        '        $this->publishView("galeria/encuentrame", "galleries/galeria-encuentrame");\n' +
        '        $this->publishView("galeria/arte", "galleries/galeria-arte");\n' +
        '        $this->publishView("galeria/ciencia", "galleries/galeria-ciencia");\n' +
        '        $this->publishView("galeria/moda", "galleries/galeria-moda");\n' +
        '        $this->publishView("galeria/rumba", "galleries/galeria-rumba");\n' +
        '        $this->publishView("galeria/sexualidad", "galleries/galeria-sexualidad");\n' +
        '        \n' +
        '        /* PUBLICAR MODULO DE NOTICIAS DESTACADAS */\n' +
        '        $this->publishView("noticias_destacadas", "noticias_destacadas");\n' +
        '    }\n' +
        '    \n' +
        '    public function publishArticle($id) {\n' +
        '        $this->publishView("article_detail?id=" . $id, "articles/article-" . $id);\n' +
        '    }\n' +
        '}\n'
      },
      {
        file: 'Articles/index.ctp',
        language: 'ctp',
        code: '<link rel="stylesheet" type="text/css" href="/css/jquery.dataTablesAdmin.css">\n' +
        '<script type="text/javascript" src="/js/jquery.dataTables.js"></script>\n' +
        '<script type="text/javascript" charset="utf-8">\n' +
        '    function fnShowHide( iCol ) {\n' +
        '        var oTable = $(\'#table-forums\').dataTable();\n' +
        '        var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;\n' +
        '        oTable.fnSetColumnVis( iCol, bVis ? false : true );\n' +
        '    }\n' +
        '    \n' +
        '    $(document).ready(function() {\n' +
        '        $(\'#table-forums\').dataTable({\n' +
        '            "sPaginationType": "full_numbers",\n' +
        '            "aoColumnDefs": [{ "bVisible": false, "aTargets": [7] }],\n' +
        '            "aaSorting": [[7,\'desc\']]\n' +
        '        });\n' +
        '    });\n' +
        '</script>\n' +
        '\n' +
        '<div class="articles index">\n' +
        '    <h2><?php echo __(\'Artículos\'); ?></h2>\n' +
        '    <table id="table-forums" class="pt15" cellpadding="0" cellspacing="0">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th class="w50"><?php echo \'ID\'; ?></th>\n' +
        '                <th class="w150"><?php echo \'Canal\'; ?></th>\n' +
        '                <th class="w400"><?php echo \'Título\'; ?></th>\n' +
        '                <th><?php echo \'Habilitado\'; ?></th>\n' +
        '                <th><?php echo \'Destacada\'; ?></th>\n' +
        '                <th class="w130"><?php echo \'Creado\'; ?></th>\n' +
        '                <th class="w130"><?php echo \'Modificado\'; ?></th>\n' +
        '                <th class="w130"><?php echo \'Modificado\'; ?></th>\n' +
        '                <th class="actions tac"><?php echo __(\'Acciones\'); ?></th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '                         \n' +
        '     <?php foreach ($articles as $article): ?>\n' +
        '        <?php \n' +
        '            $canal = $article[\'Article\'][\'channel\']; \n' +
        '            $new_channel = $canal;\n' +
        '            \n' +
        '            if($canal == "principal") {\n' +
        '                $new_channel = "Principal";\n' +
        '            } else if($canal == "encuentrame") {\n' +
        '                $new_channel = "Encuéntrame";\n' +
        '            } else if($canal == "rumba") {\n' +
        '                $new_channel = "Rumba";\n' +
        '            } else if($canal == "arte") {\n' +
        '                $new_channel = "Arte y Cultura";\n' +
        '            } else if($canal == "ciencia") {\n' +
        '                $new_channel = "Ciencia y Tecnología";\n' +
        '            } else if($canal == "sexualidad") {\n' +
        '                $new_channel = "Sexualidad al día";\n' +
        '            } else if($canal == "moda") {\n' +
        '                $new_channel = "Moda";\n' +
        '            }\n' +
        '        ?>\n' +
        '        <?php \n' +
        '            $date_created = $this->Time->format(\'D-F-j-Y-h:i A\', $article[\'Article\'][\'created\']);\n' +
        '            list($dia_sem_crea, $mes_crea, $dia_crea, $ano_crea, $hora_crea) = explode(\'-\', $date_created);\n' +
        '            \n' +
        '            $date_modified = $this->Time->format(\'D-F-j-Y-h:i A\', $article[\'Article\'][\'modified\']);\n' +
        '            list($dia_sem_mod, $mes_mod, $dia_mod, $ano_mod, $hora_mod) = explode(\'-\', $date_modified);\n' +
        '        ?>\n' +
        '      \t<tr>\n' +
        '            <td class="vam"><?php echo h($article[\'Article\'][\'id\']); ?>&nbsp;</td>\n' +
        '            <td class="vam"><?php echo $new_channel; ?>&nbsp;</td>\n' +
        '            <td class="vam"><?php echo h($article[\'Article\'][\'title\']); ?>&nbsp;</td>\n' +
        '            <td class="tac vam"><?php echo h(($article[\'Article\'][\'enabled\']==1?"SI":"NO")); ?>&nbsp;</td>\n' +
        '            <td class="tac vam"><?php echo h(($article[\'Article\'][\'highlight\']==1?"SI":"NO")); ?>&nbsp;</td>\n' +
        '            <td class="vam"><?php echo __($dia_sem_crea) . " " . __($mes_crea) . " " . __($dia_crea) . ", " . __($ano_crea) .  " " . $hora_crea ?>&nbsp;</td>\n' +
        '            <td class="vam"><?php echo __($dia_sem_mod) . " " . __($mes_mod) . " " . __($dia_mod) . ", " . __($ano_mod) .  " " . $hora_mod ?>&nbsp;</td>\n' +
        '            <td class="vam"><?php echo __($ano_mod) . "-" . __($mes_mod) . "-" . __($dia_mod) . " " . $hora_mod ?>&nbsp;</td>\n' +
        '            <td class="actions tac vam">\n' +
        '                <?php echo \'<a href="/pages/article?id=\' . $article[\'Article\'][\'id\'] . \'">Ver</a>\'; ?>\n' +
        '                <?php echo \'<a href="/articles/edit/\' . $article[\'Article\'][\'id\'] . \'">Editar</a>\'; ?>\n' +
        '                <?php echo $this->Form->postLink(__(\'Eliminar\'), array(\'action\' => \'delete\', $article[\'Article\'][\'id\']), null, __(\'¿Estás seguro que deseas eliminar el artículo # %s?\', $article[\'Article\'][\'id\'])); ?>\n' +
        '            </td>\n' +
        '      \t</tr>\n' +
        '      <?php endforeach; ?>\n' +
        '    </table>\n' +
        '</div>'
      },
      {
        file: 'Articles/add.ctp',
        language: 'ctp',
        code: '<div class="articles border">\n' +
        '<?php echo $this->Form->create(\'Article\', array(\'enctype\' => \'multipart/form-data\')); ?>\n' +
        '    <fieldset>\n' +
        '        <legend><?php echo __(\'Crear Artículo\'); ?></legend>\n' +
        '        <?php\n' +
        '            echo $this->Form->input(\'Article.channel\', array(\'label\' => \'Canal\'));\n' +
        '            echo $this->Form->input(\'Article.title\', array(\'label\' => \'Título\', \'maxlength\' => \'150\'));\n' +
        '            echo $this->Form->input(\'Article.summary\', array(\'label\' => \'Sumario\', \'type\' => \'textarea\', \'class\' => \'ckeditor\'));\n' +
        '            echo $this->Form->input(\'Article.body\', array(\'label\' => \'Cuerpo\', \'type\' => \'textarea\', \'rows\' => \'10\', \'class\' => \'ckeditor\'));\n' +
        '            echo $this->Form->input(\'Article.enabled\', array(\'label\' => \'Habilitado\'));\n' +
        '            echo $this->Form->input(\'Article.highlight\', array(\'label\' => \'Destacada\'));\n' +
        '        ?>\n' +
        '        <br>\n' +
        '\n' +
        '        <h3><?php echo __(\'Relacionar Multimedia\'); ?></h3>\n' +
        '\n' +
        '        <div>\n' +
        '            <input type="radio" name="tipo_media" value="img" id="radio_img" onchange="selectMedia(this.value)" checked>\n' +
        '            <label for="radio_img" class="ml22 mt5">Imagen</label>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '            <input type="radio" name="tipo_media" value="vid" id="radio_vid" onchange="selectMedia(this.value)">\n' +
        '            <label for="radio_vid" class="ml22 mt5">Video</label>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '            <input type="radio" name="tipo_media" value="" id="radio_ninguno" onchange="selectMedia(this.value)">\n' +
        '            <label for="radio_ninguno" class="ml22 mt5">Ninguno</label>\n' +
        '        </div>\n' +
        '        \n' +
        '        <?php echo $this->Form->input(\'Article.media\', array(\'type\' => \'hidden\', \'value\' => \'imagen\')); ?>\n' +
        '\n' +
        '        <div id="related_img">\n' +
        '            <h3><?php echo __(\'Imagen\'); ?></h3>\n' +
        '            <?php \n' +
        '                echo $this->Form->input(\'RelatedImage.upload\', array(\'type\' => \'file\', \'required\' => \'true\', \'label\' => \'Seleccione Imagen\', \'class\' => \'related_img\', \'div\' => \'input file required\', \'onchange\' => \'validateInputFile(this)\'));\n' +
        '            ?>\n' +
        '        </div>\n' +
        '        \n' +
        '        <div id="related_vid" style="display: none">\n' +
        '            <h3><?php echo __(\'Seleccionar Video\'); ?></h3>\n' +
        '            <?php \n' +
        '                echo $this->Form->input(\'RelatedVideo.source\', array(\'label\' => \'Source\', \'required\' => \'false\', \'class\' => \'related_vid\'));\n' +
        '            ?>\n' +
        '        </div>\n' +
        '    </fieldset>\n' +
        '<?php echo $this->Form->end(__(\'Guardar\')); ?>\n' +
        '</div>\n'
      },
      {
        file: 'style.css',
        language: 'css',
        code: '/* =============================================================\n' +
        '   GENERAL STYLES\n' +
        ' ============================================================ */\n' +
        '\n' +
        '@import url(http://fonts.googleapis.com/css?family=Roboto); /* FREE GOOGLE FONT */\n' +
        '@import url("http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,400italic");\n' +
        '@import url("//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css");\n' +
        '    \n' +
        'body {\n' +
        '    font-family: \'Roboto\', sans-serif;\n' +
        '    line-height: 30px;\n' +
        '}\n' +
        '\n' +
        '.set-radius-zero {\n' +
        '    border-radius: 0px;\n' +
        '    -moz-border-radius: 0px;\n' +
        '    -webkit-border-radius: 0px;\n' +
        '}\n' +
        '\n' +
        '.content-wrapper {\n' +
        '    margin-top: 40px;\n' +
        '    min-height: 600px;\n' +
        '    padding-bottom: 60px;\n' +
        '}\n' +
        '\n' +
        '.page-head-line {\n' +
        '    font-weight: 900;\n' +
        '    padding-bottom: 20px;\n' +
        '    border-bottom: 2px solid #6F5BA0;\n' +
        '    text-transform: uppercase;\n' +
        '    color: #6F5BA0;\n' +
        '    font-size: 20px;\n' +
        '    margin-bottom: 40px;\n' +
        '}\n' +
        '\n' +
        '.progress {\n' +
        '    height: 8px;\n' +
        '    border-radius: 0px;\n' +
        '    -webkit-border-radius: 0px;\n' +
        '    -moz-border-radius: 0px;\n' +
        '}\n' +
        '\n' +
        '.login-icon {\n' +
        '    height: 60px;\n' +
        '    width: 60px;\n' +
        '    padding: 13px;\n' +
        '    border-radius: 50%;\n' +
        '    font-size: 30px;\n' +
        '    margin-bottom: 20px;\n' +
        '    color: #fff;\n' +
        '    text-align: center;\n' +
        '    cursor:pointer;\n' +
        '    background-color:#6F5BA0;\n' +
        '    -webkit-border-radius:50%;\n' +
        '    -moz-border-radius:50%;\n' +
        '}\n' +
        '\n' +
        '/* =============================================================\n' +
        '   HEADER SECTION STYLES\n' +
        ' ============================================================ */\n' +
        'header {\n' +
        '    background-color: #6F5BA0;\n' +
        '    color: #fff;\n' +
        '    padding: 10px;\n' +
        '    text-align: right;\n' +
        '}\n' +
        '\n' +
        '\n' +
        '/* =============================================================\n' +
        '   LOGO SECTION STYLES\n' +
        ' ============================================================ */\n' +
        '.left-div {\n' +
        '    //padding-left: 30px;\n' +
        '    margin-top: 10px;\n' +
        '    margin-bottom: 10px;\n' +
        '    float: right;\n' +
        '}\n' +
        '\n' +
        '.navbar-brand {\n' +
        '    width: 250px;\n' +
        '    padding-top: 30px;\n' +
        '}\n' +
        '\n' +
        '/* USER SETTINGS DIV */\n' +
        '.user-settings-wrapper .nav > li > a {\n' +
        '    position: relative;\n' +
        '    display: block;\n' +
        '    padding: 15px 18px;\n' +
        '    border-radius: 50%;\n' +
        '    -webkit-border-radius: 50%;\n' +
        '    -moz-border-radius: 50%;\n' +
        '    height: 60px;\n' +
        '    width: 60px;\n' +
        '    background-color: #F7941E;\n' +
        '    color: #fff;\n' +
        '}\n' +
        '\n' +
        '.user-settings-wrapper {\n' +
        '    margin-top: 10px;\n' +
        '}\n' +
        '\n' +
        '.user-settings-wrapper li {\n' +
        '    display: inline-block;\n' +
        '}\n' +
        '\n' +
        '.user-settings-wrapper .dropdown-settings {\n' +
        '    width: 200px;\n' +
        '    padding: 10px;\n' +
        '}\n' +
        '\n' +
        '.user-settings-wrapper .nav > li > a:hover,.user-settings-wrapper .nav > li > a:focus {\n' +
        '    text-decoration: none;\n' +
        '    background-color: #ED8100!important;\n' +
        '}\n' +
        '\n' +
        '.user-settings-wrapper img {\n' +
        '    height: 64px;\n' +
        '    width: 64px;\n' +
        '    border: 1px solid #000000;\n' +
        '}\n' +
        '\n' +
        '.user-settings-wrapper .dropdown-menu {\n' +
        '    margin: 0px;\n' +
        '    border-radius: 0px!important;\n' +
        '    -moz-border-radius: 0px!important;\n' +
        '    -webkit-border-radius: 0px!important;\n' +
        '}\n' +
        '\n' +
        '.user-settings-wrapper .btn {\n' +
        '    border-radius: 0px!important;\n' +
        '    -moz-border-radius: 0px!important;\n' +
        '    -webkit-border-radius: 0px!important;\n' +
        '}\n' +
        '\n' +
        '.user-settings-wrapper .media-heading {\n' +
        '    padding-top: 10px;\n' +
        '}\n' +
        '\n' +
        '/* MENU LINKS SECTION*/\n' +
        '.menu-section {\n' +
        '    background-color: #323131;\n' +
        '}\n' +
        '\n' +
        '#menu-top a {\n' +
        '    color: #FFF;\n' +
        '    text-decoration: none;\n' +
        '    font-weight: 500;\n' +
        '    padding: 10px 10px 10px 10px;\n' +
        '    text-transform: uppercase;\n' +
        '}\n' +
        '\n' +
        '.menu-top-active {\n' +
        '    background-color: #6F5BA0;\n' +
        '}\n' +
        '\n' +
        '.menu-section .nav > li > a:hover,.menu-section .nav > li > a:focus {\n' +
        '    background-color: #6F5BA0!important;\n' +
        '}\n' +
        '\n' +
        '.menu-section .dropdown-menu > li > a:hover,.menu-section .dropdown-menu > li > a:focus {\n' +
        '    background-color: #8474AB!important;\n' +
        '}\n' +
        '\n' +
        '.submenu-option > a:hover {\n' +
        '    background-color: #EDEDED!important;\n' +
        '}\n' +
        '\n' +
        '.navbar-inverse {\n' +
        '    background-color: #3D3D3D;\n' +
        '    border-color: transparent;\n' +
        '}\n' +
        '\n' +
        '.navbar-toggle {\n' +
        '    background-color: #6F5BA0;\n' +
        '    border: 1px solid #fff;\n' +
        '}\n' +
        '\n' +
        '.navbar {\n' +
        '    margin-bottom: 0px;\n' +
        '}\n' +
        '\n' +
        '/* =============================================================\n' +
        '   FOOTER SECTION STYLES\n' +
        ' ============================================================ */\n' +
        'footer {\n' +
        '    padding: 10px;\n' +
        '    color: #fff;\n' +
        '    font-size: 12px;\n' +
        '    background-color: #3D3D3D;\n' +
        '}\n' +
        '\n' +
        'footer a, footer a:hover {\n' +
        '    color: #fff;\n' +
        '    text-decoration: none;\n' +
        '}\n'
      }
    ]
  }
];
