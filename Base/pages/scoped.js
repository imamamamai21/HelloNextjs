import Link from 'next/Link'

export default class extends React.Component {
    static async getInitialProps({ req }) {
        // 何でも非同期に取得できる(プレーンなObjectに限る)
        // サーバーサイドレンダリング時には getInitialProps の戻り値のデータはシリアライズされます。
        // 最初にページが読み込まれるとき、getInitialProps はサーバーサイドでのみ実行されます。
        // getInitialProps がクライアントサイドで実行されるのは、Link コンポーネントかルーティング API を用いて別のルートに移動した場合のみです。
        // 注意: getInitialProps を子コンポーネントで利用することはできません。利用できるのは pages に限られます。
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent }
    }

    render() {
        return (
            <div>
                <style jsx>{`
                    p {
                    color: darkgray;
                    }
                    div {
                    background: red;
                    }
                    @media (max-width: 600px) {
                    div {
                        background: pink;
                    }
                    }
                `}</style>
                <style global jsx>{`
                    body {
                    background: black;
                    }
                `}</style>
                <h1>This is the Scoped page</h1>
                <div>
                    <h2>組み込みのCSSサポート(scoped)</h2>
                    <p>Next.js には styled-jsx の機能が同梱されており、スコープを分離した CSS の適用が可能になっています。これは Web Components の「Shadow CSS」に似た機能を提供することを目的としています (残念ながら Shadow CSS はサーバーサイドレンダリングで利用することができません)</p>
                </div>
                <div>
                    <p> userAgent </p>
                </div>
                <div>
                    <h2>Links</h2>
                    <Link href='./index'>Index▶</Link>
                </div>
            </div>
        )
    }
}