import { useRecoilValue } from 'recoil'
import { playlistState } from '../../atoms/playlistAtom'
import { ClockIcon } from '@heroicons/react/outline'
import Song from './Song'

const Songs = () => {
  const playlist = useRecoilValue(playlistState)
  return (
    <div className="text-gray-500 w-100">
      <table className="w-full table-auto border-2 mx-5 px-1">
        <thead className="w-100">
          <tr>
            <th className="text-center">#</th>
            <th className="text-left">TÍTULO</th>
            <th className="text-left">ÁLBUM</th>
            <th className="text-center">
              <ClockIcon className="w-5 h-5" />
            </th>
          </tr>
        </thead>
        <tbody>
          {playlist?.tracks.items.map((track, i) => (
            <Song key={track.track.id} track={track} order={i} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Songs
