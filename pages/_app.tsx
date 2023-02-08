import MyLayout from '@/components/layouts';
import '@/styles/globals.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import theme from '../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <DefaultSeo
        title={`MasterClass`}
        description={`MasterClass Online Classes Web Application`}
        openGraph={{
          title: 'MasterClass',
          description: 'MasterClass Online Classes Web Application',
          images: [{ url: `` }],
          site_name: 'masterclass.com',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MyLayout>
            <CssBaseline />
            <Component {...pageProps} />
          </MyLayout>
        </ThemeProvider>
      </Provider>
    </>
  );
}
