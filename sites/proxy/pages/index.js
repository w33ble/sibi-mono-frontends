import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Proxy Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Proxy site main page</p>
      <ul>
        <li><a href="/echo">Echo Test Site</a></li>
        <li><a href="/url">URL Test Site</a></li>
        <li><a href="/url/hello-world">URL Param Test Site</a></li>
      </ul>
    </div>
  )
}
