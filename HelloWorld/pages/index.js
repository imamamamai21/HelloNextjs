import Link from 'next/Link';

const Index = () => (
    <div>
        <h1>This page is Index Page.</h1>
        <Link href='/about'><a>Go to the About Page.</a></Link>
    </div>
);

export default Index;