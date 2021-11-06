//import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

import { Menu } from "antd";
function Header() {
  return (
    <Menu mode="horizontal">
        <Menu.Item><Link to="/posts">Posts 🈯</Link></Menu.Item>
        <Menu.Item><Link to="/fun">Fun 🅰️</Link></Menu.Item>
        <Menu.Item><Link to="/login">Login 🚾</Link></Menu.Item>
    </Menu>
  );
}
export default Header;