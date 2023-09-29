import styles from "./style.module.css"
import logo from "../../assets/logo/logo.png"
import { Menu } from "@mui/icons-material"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from "react-router-dom";

export default function Header() {


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // --- mobile dropdown list items
  const ListItemS = ({ textP }) => {
    return (
      <div key={textP} text={textP}>
        <Divider className={styles.divider} />
        <ListItem disablePadding>
          <ListItemButton>

            <ListItemText primary={textP} />
          </ListItemButton>
        </ListItem>
      </div>
    )
  }

  const lists = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 270 }}
      className={styles.dropdownContainer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      key={anchor}
    >
      <Divider />
      <List>
        {/* {['Home ','Press', 'Gallery', 'Discography', 'About Me', 'Contact'].map((text, index) => (
          <div key={text}>
        <Divider className={styles.divider}/>
          <ListItem disablePadding>
          <ListItemButton>
            
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
          </div>
          
          
        ))} */}
        {/* ------ mobile dropdown */}
        <NavLink  to={"/"}><ListItemS textP={"Home"} /></NavLink>
        <NavLink  to={"/press"}><ListItemS textP={"Press"} /></NavLink>
        {/* <ListItemS textP={"Press"} /> */}
        <NavLink  to={"/gallery"}><ListItemS textP={"Gallery"} /></NavLink>
        {/* <ListItemS textP={"Gallery"} /> */}
        <ListItemS textP={"Discography"} />
        <ListItemS textP={"About Me"} />
        <NavLink to={"/contact"}> <ListItemS textP={"Contact"} /> </NavLink>


        <Divider className={styles.divider} />
      </List>
    </Box>
  );

  const SideBar = () => {
    return (
      <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {lists(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    )
  }


  return (
    <>
    {/* <NavLink to={"/"}><div className={styles.logoContainer}>
          <div>Weiser</div>
        </div></NavLink> */}
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <NavLink to={"/"}><div>Weiser</div></NavLink>
          
        </div>
        <div className={styles.linkContainer}>
          <div><NavLink to="/" >Home</NavLink></div>
          <div><NavLink to="/press" >Press</NavLink></div>
          {/* <div>Press</div> */}
          <div><NavLink to="/gallery" >Gallery</NavLink></div>
          {/* <div>Gallery</div> */}
          <div>Discography</div>
          <div>About Me</div>
          <div><NavLink to="/contact" >Contact</NavLink></div>
        </div>
        <div className={styles.hambuger} onClick={toggleDrawer("left", true)}>
          <Menu style={{ fontSize: "2em" }} />
        </div>
        <SideBar />
      </div>

    </>
  )
}