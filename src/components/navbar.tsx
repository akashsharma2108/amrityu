import * as React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Menu,
  useMediaQuery,
  useTheme,
    Box,
  SvgIcon
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import icon from "../assets/icon.png"
//import nail from "../assets/nail.svg"



export const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 960px)");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "#about" , hash: true},
    { label: "Services", link: "#services" , hash: true},
    { label: "Contact", link: "#contact", hash: true },
  ];

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.label} onClick={handleMenuClose}>
          <Button color="inherit" href={item.link} sx={{ fontFamily: "'Lora', serif",}}>
            {item.label}
          </Button>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#38162F" }}>
    <Toolbar sx={{ justifyContent: "center", textAlign: "center" }}>
      {isMobile ?( <img src={icon} alt="logo" style={{ height : 99, width: 111 }} />) :(  <img src={icon} alt="logo" style={{ height : 120, width: 200 , marginLeft: 9}} /> ) }
      {isMobile ? (
        <Box sx={{mt: '1rem', }} >
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
              sx={{ ml: '12rem' }}
          >
            <MenuIcon />
          </IconButton>
          {renderMenu}
        </Box>
      ) : (
        <Box sx={{ mt: '1rem', flexGrow : 0.2}} >
          {menuItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              href={item.link}
              sx={{ textTransform: "capitalize", marginRight : isMobile ? "0" : "3rem", fontSize: "1.2rem", fontFamily: "'Lora', serif" }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      )}
    </Toolbar>
  </AppBar>
  );
};
