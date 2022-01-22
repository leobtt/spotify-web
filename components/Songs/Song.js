import useSpotify from '../../hooks/useSpotify'
import { millisToMinutesAndSeconds } from '../../lib/time'
import { PlayIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../../atoms/SongAtom'

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify()
  const [playIcon, SetPlayIcon] = useState(false)
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const nToIcon = document.getElementById(track.track.id)

  /* spotifyApi.getMyDevices().then(
    function (data) {
      let availableDevices = data.body.devices
      console.log(availableDevices)
    },
    function (err) {
      console.log('Something went wrong!', err)
    }
  ) */

  const playHover = ({ target }) => {
    //nToIcon.setAttribute('style', 'display: none;')
    SetPlayIcon(true)
  }

  const playOut = ({ target }) => {
    if (nToIcon) {
      //  nToIcon.removeAttribute('style')
      SetPlayIcon(null)
    }
  }

  const playSong = () => {
    setCurrentTrackId(track.track.id)
    setIsPlaying(true)
    spotifyApi.play({
      uris: [track.track.uri],
    })
  }

  return (
    <>
      <div
        className="w-100 ml-5 text-sm mr-[-10px] grid grid-cols-2 items-center rounded-xl hover:bg-gray-900 my-3 pr-5 cursor-pointer p-1  hover:text-gray-300"
        onMouseOver={playHover}
        onMouseOut={playOut}
        onClick={playSong}
      >
        <div className="flex items-center ml-2 space-x-3 ">
          {currentTrackId !== track.track.id && (
            <p className="ml-3 mr-4 " id={track.track.id}>
              {order + 1}
            </p>
          )}
          {currentTrackId === track.track.id && playIcon && (
            <PlayIcon className="w-7 h-7 mr-2 text-green-400" />
          )}
          <div className="flex">
            <img
              src={track.track.album.images[0].url}
              alt=""
              className="w-12 h-12 rounded-xl"
            />
            <div className="ml-2   ">
              <p className="w-36 lg:w-60 xl:w-80 truncate">
                {track.track.name}
              </p>
              <p>{track.track.artists[0].name}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center ml-auto justify-between md:ml-0">
          <p className="hidden sm:inline w-36 lg:w-64 truncate">
            {track.track.album.name}
          </p>
          <p className="w-100 flex justify-self-end">
            {millisToMinutesAndSeconds(track.track.duration_ms)}
          </p>
        </div>
        {/* <tr className="text-sm space-y-4  cursor-pointer">
            <td className="text-center p-1">{order + 1}</td>
            <td className="flex flex-row">
              <img
                src={track.track.album.images[0].url}
                alt=""
                className="w-12 h-12"
              />
              <div>
                <p className="flex items-center">{track.track.name}</p>
                <p className="text-gray-700">{track.track.artists[0].name}</p>
              </div>
            </td>
            <td className="">{track.track.album.name}</td>

            <td>{millisToMinutesAndSeconds(track.track.duration_ms)}</td>
          </tr> */}
      </div>
    </>
  )
}

export default Song
