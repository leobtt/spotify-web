import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { shuffle } from 'lodash'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playlistIdState, playlistState } from '../atoms/playlistAtom'
import useSpotify from '../hooks/useSpotify'
import Songs from './Songs/Songs'

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
  const spotifyApi = useSpotify()
  const { data: session } = useSession()
  const [color, setColor] = useState(null)
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [playlistId])

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body)
      })
      .catch((err) => console.log('err', err))
  }, [spotifyApi, playlistId])

  return (
    <div className="flex-grow">
      <header className="absolute top-3 right-4">
        <div className="flex items-center space-x-3 rounded-full p-[2px] pr-3 bg-black opacity-90 hover:opacity-80 cursor-pointer">
          {/* too many domains for next/image */}
          <div className=" border-2 border-gray-900 rounded-full w-[40px] h-[40px]">
            {session?.user && (
              <Image
                src={session?.user?.image}
                alt={session.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </div>

          {/* <img
            src={session?.user?.image}
            alt=""
            className="rounded-full w-9 h-9 border-2 border-black"
          /> */}

          <h2 className="text-white">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5 text-white pr-1" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        {/* I use the tag <img> cause there are too many image domains on spotify  */}
        <img
          src={playlist?.images?.[0]?.url}
          alt=""
          className="h-44 w-44 shadow-2xl"
        />
        <div>
          <p className="pl-[2px] text-xs">PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {playlist?.name}
          </h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  )
}

export default Center
