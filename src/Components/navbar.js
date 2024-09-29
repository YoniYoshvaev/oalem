import React, { useState } from 'react';
import Logo from '../Assets/LogoOalem.png';
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const phoneNumber = '+972525845067';
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: 'דף הבית', icon: <HomeIcon />, sectionId: 'home' },
    { text: 'אודות', icon: <InfoIcon />, sectionId: 'about' },
    { text: 'צור קשר', icon: <PhoneRoundedIcon />, sectionId: 'contact' },
  ];

  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={Logo} alt='Logo' />
      </div>

      <div className='navbar-links-container'>
        <a href={`tel:${phoneNumber}`} className="no-underline">
          <button className='primary-button'>להזמנות התקשרו</button>
        </a>
        {menuOptions.map((item) => (
          <a key={item.text} href={`#${item.sectionId}`}>{item.text}</a>
        ))}
        <a
          href="https://wa.me/+972525845067"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className="text-green-500 hover:text-green-600 transition-colors duration-300"
          />
        </a>
      </div>

      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor='right'>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start', 
                  }}
                  onClick={() => {
                    setOpenMenu(false); 
                    document.getElementById(item.sectionId).scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '40px' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ textAlign: 'right' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
