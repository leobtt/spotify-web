import { useRecoilValue } from 'recoil'
import { playlistState } from '../../atoms/playlistAtom'
import { ClockIcon } from '@heroicons/react/outline'
import Song from './Song'

const Songs = () => {
  const playlist = useRecoilValue(playlistState)
  return (
    <div className="text-gray-500 w-100 mr-10">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  )
}

export default Songs
