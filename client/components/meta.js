import Head from 'next/head';
import theme from './theme';

export default function Meta() {
  return (
    <Head>
      <title key='title'>BullyShoo</title>
      <meta name='theme-color' content={theme.palette.primary.main} />
      <meta name='title' content='BullyShoo' />
      <meta name='description' content='BullyShoo' />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
    </Head>
  );
}
