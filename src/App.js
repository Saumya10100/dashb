import React, { useState } from 'react';
import { CssBaseline, Box, useMediaQuery } from '@mui/material';
import NavigationBar from './NavigationBar';
import SideDrawer from './SideDrawer';
import MainContent from './MainContent';
import { ThemeProviderComponent } from './ThemeContext';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <ThemeProviderComponent>
      <CssBaseline />
      <NavigationBar toggleDrawer={toggleDrawer} />

      <Box display="flex">
        <SideDrawer
          open={!isSmallScreen || drawerOpen}
          onToggleDrawer={toggleDrawer}
          variant={isSmallScreen ? 'temporary' : 'persistent'}
        />

        <Box
          component="main"
          style={{
            flexGrow: 1,
            marginTop: '64px',
            marginLeft: isSmallScreen ? 0 : '240px',
          }}
        >
          <MainContent />
        </Box>
      </Box>
    </ThemeProviderComponent>
  );
};

export default App;
