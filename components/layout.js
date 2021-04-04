import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Jacob Marshall'
export const siteTitle = 'Blog | JacobHQ'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="https://avatars.githubusercontent.com/u/29145479"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle} ${utilStyles.noLine}`}
              alt={name}
            />
            <h1 className={`${utilStyles.heading2Xl} ${utilStyles.noLine}`}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/" className={utilStyles.noLine}>
              <a className={utilStyles.noLine}>
                <img
                  src="https://avatars.githubusercontent.com/u/29145479"
                  className={`${styles.headerImage} ${utilStyles.borderCircle} ${utilStyles.noLine}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={`${utilStyles.colorInherit} ${utilStyles.noLine}`}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={`${styles.backToHome} ${utilStyles.noLine}`}>
          <Link href="/" className={utilStyles.noLine}>
            <a className={utilStyles.noLine}>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
