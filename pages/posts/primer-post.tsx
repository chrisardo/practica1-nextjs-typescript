import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function PrimerPost({ data }) {
    return (
        <Layout home={false}>
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
