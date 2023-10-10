// URL: http://localhost:3000/posts/1
//[id].tsx
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

//const PrimerPost: NextPage = () => {
export default function segundoPost({ data }) {
    return (
        <Layout home={false}>
            <h3>{data.id} - {data.title}</h3>
            <p>{data.body}</p>
            <div className='container'>
                <Head>
                    <title>Primer Post NextJS</title>
                    <Link rel='icon' href='/favicon.ico' />
                </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">Regresar a inicio</Link>
                </h2>

            </div>
        </Layout>
    );
}

//export default PrimerPost;

export async function getStaticPaths() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        //const paths = data.map(({ id }) => ({ params: { id: id.toString() }, }));
        const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error);
    }
}


export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const data = await res.json();
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.log(error);
    }
}

