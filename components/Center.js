import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Center = () => {
  const { data: session } = useSession()
  console.log(JSON.stringify(session?.user, null, 2))
  return (
    <div className="flex flex-grow">
      <header>
        {session?.user && (
          <Image
            src={session?.user.image}
            alt="user-profile"
            width={50}
            height={50}
            className="relative rounded-full border-8 border-green-200"
          />
        )}
      </header>
    </div>
  )
}

export default Center
