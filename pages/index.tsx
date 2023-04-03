import Head from 'next/head'
import { useRouter } from 'next/router'
import Profile from '@/components/user-profile/Profile'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute flex flex-col items-center justify-center w-full">
        <Profile />
        <div>
          <h2>Your NFTs:</h2>
        </div>
      </div>
    </>
  )
}
