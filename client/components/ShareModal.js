import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Box,
  Button,
} from '@material-ui/core';
import useGlobal from 'context/GlobalProvider';

export default function ShareModal({ url, open, handleClose }) {
  const { openNotification } = useGlobal();

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      openNotification('Link copied to clipboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Share this with your friends</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Box p={1} bgcolor='#212121' color='#fff'>
            {url}
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='secondary'>
          Close
        </Button>
        <Button onClick={copyLink} color='secondary'>
          Copy
        </Button>
      </DialogActions>
    </Dialog>
  );
}
