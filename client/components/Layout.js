import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useTransition, animated } from 'react-spring';
import Meta from '../components/meta';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const useStyles = ({ flex, flexColumn }) => {
  return makeStyles(theme => ({
    root: {
      flex: 1,
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
    },
    renderArea: {
      display: flex && 'flex',
      minHeight: '100vh',
      flexDirection: flexColumn && 'column',
      alignItems: flexColumn && 'center',
    },
  }));
};

export default function Layout({ children, flex, flexColumn, noFooter }) {
  const router = useRouter();
  const transitions = useTransition(router.pathname, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: 'none' },
  });

  const classes = useStyles({ flex, flexColumn })();

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <CssBaseline />
        <Meta />
        <Navbar />
        {transitions.map(({ key, props }) => (
          <animated.div style={props} key={key} className={classes.renderArea}>
            {children}
          </animated.div>
        ))}
        {/* <div className={classes.renderArea}>{children}</div> */}
      </div>
      {!noFooter && <Footer />}
    </div>
  );
}
