import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Pathname() {
  const router = useRouter();
  const { pathname } = router.query
  console.log('router', router.query)

  return (
    <div>
      <Head>
        <title>URL App - Pathname</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>This is your URL path: {pathname || 'ENOTFOUND'}</p>
    </div>
  )
}
