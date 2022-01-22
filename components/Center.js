import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { shuffle } from 'lodash'

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
]

const Center = () => {
  const { data: session } = useSession()
  const [color, setColor] = useState(null)

  console.log(session)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [])
  return (
    <div className="flex-grow">
      <header className="absolute top-3 right-4">
        <div className="flex items-center space-x-3 rounded-full p-[2px] pr-2 bg-red-200 opacity-90 hover:opacity-80 cursor-pointer">
          <div className=" rounded-full w-[40px] h-[40px]">
            {session?.user && (
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </div>
          <h2 className="text-white">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5 tex" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <h1>hello</h1>
      </section>
    </div>
  )
}

export default Center
