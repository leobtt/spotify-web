import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LogoutIcon,
} from '@heroicons/react/outline'
import Button from './Button'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import useSpotify from '../../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../../atoms/playlistAtom'

const Sidebar = () => {
  const spotifyApi = useSpotify()

  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <>
      {/* Menu */}
      <div className="text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 space-y-4 h-screen w-72 sm:max-w-[12rem] lg:max-w-[15rem] hidden md:flex md:flex-col">
        <Button name="Sair" Icon={LogoutIcon} click={() => signOut()} />
        <Button name="Ínicio" Icon={HomeIcon} />
        <Button name="Buscar" Icon={SearchIcon} />
        <Button name="Sua Biblioteca" Icon={LibraryIcon} />
        <hr className="border-t-[1px] border-gray-900" />

        <Button name="Criar Playlist" Icon={PlusCircleIcon} />
        <Button name="Músicas Curtidas" Icon={HeartIcon} />
        <Button name="Seus Episódios" Icon={RssIcon} />
        <hr className="border-t-[1px] border-gray-900" />

        <div className="overflow-y-scroll scrollbar-hide space-y-3">
          {/* Playlist */}
          {playlists.map((playlist) => (
            <p
              key={playlist.id}
              className="cursor-pointer hover:text-white "
              onClick={() => setPlaylistId(playlist.id)}
            >
              {playlist.name}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar
