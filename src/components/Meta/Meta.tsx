import { ReactElement } from 'react';
import Head from 'next/head';

const Meta = () : ReactElement => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Vincent Tai</title>
    </Head>
);

export default Meta;
