import { NextPage } from "next";
import Head from "next/head";

const Products: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nossos Produtos</title>
                <meta name="description" content="Conheça todos os nossos produtos" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>

            <h1>
                Nossos Produtos
            </h1>
        </>
    )
}

export default Products