import Head from 'next/head';
import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <Layout home>
      <div className='container'>
        <Head>
          <title>NextJS</title>
          <Link rel='icon' href='/favicon.ico' />
        </Head>
        <main>

          <h1 className="title">
            Ir siguiente pagina: <Link href="/posts/primer-post">this page!</Link>
          </h1>
        </main>
        <Image
          src="/img/kotlin.png" // Route of the image file
          height={344} // Desired size with correct aspect ratio
          width={344} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
    </Layout>
  );
}
