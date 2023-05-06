import React, { useState, useEffect } from 'react'
import '@/styles/globals.css'
import '@/styles/calendar.css';
import { AuthContextProvider } from '@/context/AuthContext'
import Head from 'next/head';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setProgress(40))
    router.events.on('routeChangeComplete', () => setProgress(100))
    
  }, [router.query, router.events])

  return <React.Fragment>
    <Head>
      <title>Student Management System</title>
      <link rel="icon" href='/logo/dashboard.png' />
    </Head>
    <AuthContextProvider>
      <LoadingBar
        color='#23b6ed'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  </React.Fragment>
}