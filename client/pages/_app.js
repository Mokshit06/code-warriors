import theme from 'components/theme';
import { ThemeProvider } from '@material-ui/core/styles';

import '../styles/globals.css';
import { GlobalProvider } from 'context/GlobalProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
