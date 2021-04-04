import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Icon from '@mdi/react'
import { mdiOpenInNew, mdiTwitter, mdiGithub } from '@mdi/js'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Greetings, I’m <strong>Jacob</strong>. I’m a developer, creating open source software. Talk with me on{' '}
          <a href="https://twitter.com/yes_jacob_">Twitter</a>, and code with me on <a href="https://github.com/jacobhq">GitHub</a>.{' '}
          I’m coffee powered, so why not <a href="https://buymeacoffee.com/jem">buy me a coffee</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.contact}>
          <li className={utilStyles.channel}>
            <a href="https://github.com/jacobhq" target="_blank">
              <Icon path={mdiGithub} size={1} />
            </a>
          </li>
          <li className={utilStyles.channel}>
            <a href="https://twitter.com/yes_jacob_" target="_blank">
              <Icon path={mdiTwitter} size={1} />
            </a>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>
            <a href="https://desica.uk/" target="_blank">
              Desica <Icon path={mdiOpenInNew} size={1 + 'rem'} className={utilStyles.externalLink} />
            </a>
            <br />
            <small className={utilStyles.lightText}>
              Ongoing
            </small>
          </li>
          <li className={utilStyles.listItem}>
            <a href="https://mac.now.sh/" target="_blank">
              MacOS Website Clone <Icon path={mdiOpenInNew} size={1 + 'rem'} className={utilStyles.externalLink} />
            </a>
            <br />
            <small className={utilStyles.lightText}>
              2021
            </small>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
