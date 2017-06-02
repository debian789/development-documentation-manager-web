import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin'
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';


injectTapEventPlugin();


class Login extends Component {
  static muiName = 'FlatButton'

  render () {
    return (<FlatButton {...this.props} label="Login"/>)
  }
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {this.setState({open: !this.state.open})
    debugger
  };

  render () {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<IconButton><NavigationMenu  onTouchTap={this.handleToggle} />

            </IconButton>}
          iconElementRight={<Login />}
        />

        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
          <List>
            <ListItem primaryText="Codigos" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Comandos" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Proyectos" leftIcon={<ContentSend />}  />
            <ListItem
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<ContentSend />}
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
              ]}
            />
          </List>
        </Drawer>
      </div>
    )
  }
}

export default Menu