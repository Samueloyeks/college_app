
import React, { Component, useEffect, useState } from "react";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import menuItems from './menuItems'
import styled from 'styled-components'
import './index.css';



const styles = {
  list: {
    width: 300,
  },
  links: {
    textDecoration: 'none',
  },
  menuHeader: {
    paddingLeft: '15px'
  },
  menu: {
    paddingLeft: '30px'
  }
};

function Sidebar(props, { defaultActiveSub }) {
  const location = props.history.location;
  const lastActiveSubIndexString = localStorage.getItem("lastActiveSubIndex");

  const lastActiveSubIndex = Number(lastActiveSubIndexString);

  const [activeSubIndex, setActiveSubIndex] = useState(13 || defaultActiveSub);

  const [menu1, setMenu1] = useState(false)
  const [menu2, setMenu2] = useState(false)
  const [menu3, setMenu3] = useState(false)



  function handleClick(item) {
    switch (item) {
      case 'menu1':
        return setMenu1(!menu1)
      case 'menu2':
        return setMenu2(!menu2)
      case 'menu3':
        return setMenu3(!menu3)
    }
  }

  function getState(tag) {
    switch (tag) {
      case 'menu1':
        return menu1
      case 'menu2':
        return menu2
      case 'menu3':
        return menu3
    }
  }


  function changeActiveSubIndex(newIndex) {
    localStorage.setItem("lastActiveSubIndex", newIndex)
    setActiveSubIndex(newIndex)
  }

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    let activeItem = menuItems.findIndex((item, index) => getPath(item.url) === getPath(location.pathname))
    if (activeItem == -1) {
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].children) {
          let activeSubItem = menuItems[i].children.findIndex((item, index) => getPath(item.url) === getPath(location.pathname))
          if (activeSubItem !== -1) {
            changeActiveSubIndex(i + '' + activeSubItem);
            return;
          }
        }
      }
    }
    changeActiveSubIndex(activeItem + '' + 0);
  }, [location])


  function handler(children, x) {
    return children.map((subOption, index) => {

      if (!subOption.children) {
        return (
          <Link to={subOption.url} key={index}>
            <SidebarItem key={subOption.name}
              style={{ padding: '10px 20px' }}
              active={x + '' + index === activeSubIndex}
            >
              {subOption.icon}
              <p style={{ fontSize: '12px' }}>{subOption.name}</p>
            </SidebarItem>
          </Link>
        );
      }

      return (
        <div key={subOption.name}>
          <ListItem
            button
            onClick={() => handleClick(subOption.tag)}>
            <SidebarItem key={subOption.name}
            >
              <p>{subOption.name}</p>
              <p className="header-sub">{subOption.subTitle}</p>
              {getState(subOption.tag) ?
                <ExpandLess /> :
                <ExpandMore />
              }
            </SidebarItem>
          </ListItem>

          <Collapse
            in={getState(subOption.tag)}
            timeout="auto"
            unmountOnExit
            style={{ backgroundColor: '#a7a7a74a' }}
          >
            {handler(subOption.children, index)}
          </Collapse>
        </div>
      )
    })
  }


  return (
    <div className={props.classes.list}>
      <SidebarParent>
        <div style={{ position: 'fixed' }}>
          <List>
            {handler(menuItems, -1)}
          </List>
        </div>
        <div className="behind-the-scenes" />
      </SidebarParent>
    </div>
  )

}
export default withStyles(styles)(Sidebar)

const SidebarParent = styled.div`
  background: #4D4D4D;
  padding-top:10px;
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 300px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 300px;
    
  }
`;

const SidebarItem = styled.div`
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#A7A7A7" : ""};
  border-radius: 4px;
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor:pointer;
  }

  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;