import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Typography } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js & Material UI v5 Starter Template</title>
        <meta name="description" content="Next.js & Material UI v5 Starter Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h6" component="h6" fontWeight="bold">
          Next.js & Material UI v5 Starter Template
        </Typography>
        <Typography variant="p" component="p" fontWeight="initial" color="gray" fontSize="12px">
          &copy; 2022 - Made with ❤️ by {" "}
          <a href="https://twitter.com/boularbahsmail" title="Twitter" target="_blank">
            Ismailium
          </a>
        </Typography>
      </main>
    </div>
  )
}
