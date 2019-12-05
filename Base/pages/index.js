import Head from 'next/head'
import Link from 'next/link'

export default () => (
    <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <h1>this is the Index page</h1>
        <div>
            <h2>Links</h2>
            <Link href='./scoped'><a>Scoped▶</a></Link>
        </div>
    </div>
)