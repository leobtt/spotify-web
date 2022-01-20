import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'
import logo from '../public/logo.png'
import React from 'react'
import { useSession } from 'next-auth/react'

const Login = ({ providers }) => {
  const { session } = useSession()
  console.log(session)
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black to-gray-900">
      <Image
        src={logo}
        alt="Spotify"
        width={250}
        height={250}
        layout="intrinsic"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="hover:text-gray-700 mt-5 font-bold p-5 rounded-full bg-gradient-to-r from-[#18D860] to-green-500"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export const getServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
