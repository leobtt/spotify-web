import useSpotify from '../../hooks/useSpotify'
import { millisToMinutesAndSeconds } from '../../lib/time'

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify()
  console.log(track)
  return (
    <>
      <div className="flex flex-row"></div>
      <tr className="text-sm">
        <td className="text-center p-1">{order + 1}</td>
        <td className="flex flex-row">
          <img
            src={track.track.album.images[0].url}
            alt=""
            className="w-12 h-12"
          />
          <div className="flex flex-col justify-start pl-2">
            <p className="flex items-center">{track.track.name}</p>
            <p className="text-gray-700">{track.track.artists[0].name}</p>
          </div>
        </td>
        <td className="">{track.track.album.name}</td>
        <td>{millisToMinutesAndSeconds(track.track.duration_ms)}</td>
      </tr>
    </>
  )
}

export default Song
