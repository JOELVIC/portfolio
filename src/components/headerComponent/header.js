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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      className={styles.dropdownContainer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      key={anchor}
    >
      <Divider />
      <List>
        {['Home ','Press', 'Photos', 'Music', 'About Me', 'Contact'].map((text, index) => (
          <div key={text}>
        <Divider className={styles.divider}/>
          <ListItem disablePadding>
          <ListItemButton>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
          </div>
          
          
        ))}
        <Divider className={styles.divider} />
      </List>
    </Box>
  );

  const SideBar = ()=>{
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
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )}


      return (
            <>
                  <div className={styles.container}>
                        <div className={styles.logoContainer}>
                              <img src={logo} alt="logo" />
                        </div>
                        <div className={styles.linkContainer}>
                              <div>Home</div>
                              <div>Press</div>
                              <div>Photos</div>
                              <div>Music</div>
                              <div>About Me</div>
                              <div>Contact</div>
                        </div>
                        <div className={styles.hambuger} onClick={toggleDrawer("left",true)}>
                              <Menu style={{ fontSize: "2em" }} />
                        </div>
                        <SideBar />
                  </div>

            </>
      )
}