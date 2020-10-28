import { IconButton, Snackbar } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

export default function useGlobal() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const openNotification = text => {
    setOpen(true);
    setNotification(text);
  };

  return (
    <GlobalContext.Provider
      value={{
        handleDrawerToggle,
        mobileOpen,
        openNotification,
      }}
    >
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={notification}
        action={
          <IconButton
            size='small'
            aria-label='close'
            color='inherit'
            onClick={handleClose}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        }
      />
    </GlobalContext.Provider>
  );
}
