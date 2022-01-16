import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline'
import Button from './Button'

const Sidebar = () => {
  return (
    <>
      {/* Menu */}
      <div className="text-gray-500 p-5 text-sm border-r border-gray-900 space-y-4">
        <Button name="Ínicio" Icon={HomeIcon} />
        <Button name="Buscar" Icon={SearchIcon} />
        <Button name="Sua Biblioteca" Icon={LibraryIcon} />
        <hr className="border-t-[1px] border-gray-900" />

        <Button name="Criar Playlist" Icon={PlusCircleIcon} />
        <Button name="Músicas Curtidas" Icon={HeartIcon} />
        <Button name="Seus Episódios" Icon={RssIcon} />
        <hr className="border-t-[1px] border-gray-900" />

        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>
      {/* Playlist */}
    </>
  )
}

export default Sidebar