import React, {useState} from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import Logo from '../images/logo.svg'
import {NavLink} from 'react-router-dom'
import '../../src/styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //handelMenuClick
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1, my:2}}>
        <img src={Logo} alt='logo' height='70px' width='200px'></img>
        </Typography>
        <Divider></Divider>
          <ul className='mobile_navigation'>
            <li>
              <NavLink activeClassName='active' to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
    </Box>
  )
  return (
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:'black'}}>
        <Toolbar>
          <IconButton color='inherit'aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:'none'}}} onClick={handleDrawerToggle}>
            <MenuIcon></MenuIcon>
          </IconButton>
        <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1}}>
          <img src={Logo} alt='logo' height='70px' width='250px'></img>
        </Typography>
        <Box sx={{display:{xs:'none', sm:'block'}}}>
          <ul className='navigation_menu'>
            <li>
              <NavLink activeClassName='active' to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block', sm:'none'}, '& .MuiDrawer-paper': {boxSizing:'border-box', width:'240px'}}}>
          {drawer}
        </Drawer>
      </Box>
      <Box>
      <Toolbar></Toolbar>
      </Box>
    </Box>
  )
}

export default Header