//index.tsx
import Head from 'next/head';
import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import { title } from 'process';


export default function Home({ data }) {
  return (
    <Layout home >
      <div className='container'>
        <Head>
          <title>NextJS: Consumiendo Api</title>
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
        {
          data.map(({ id, title, body }) => (
            <div key={id}>
              <h3>
                <Link href={`/posts/${id}`}>
                  {id} - {title}
                </Link>
              </h3>

              <p>{body}</p>
            </div>
          ))
        }
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error);
  }
}
