import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Jennifer Manriquez and I am a software engineer. 
        <br/>I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the 
        exciting technological advances that I can make at Encora.</p>
        <p>
          (This is a result of following the tutorial at{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}