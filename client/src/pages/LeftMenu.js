import React, { Fragment } from 'react'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class LeftMenu extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
            <Icon type="home" />
              <span>Home</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Pages">
            <Menu.Item key="1"><Icon type="unordered-list" />Listing Page</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default LeftMenu;