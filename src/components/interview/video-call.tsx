import { useEffect, useRef } from "react"
import { usePeer } from "@/hooks/use-peer"
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Camera, CameraOff } from "lucide-react"

export function VideoCall({ roomId, userId }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { stream, toggleAudio, toggleVideo, isAudioEnabled, isVideoEnabled } = usePeer(roomId, userId)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  return (
    <div className="relative">
      <video ref={videoRef} autoPlay playsInline className="w-full rounded-lg" />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        <Button 
          variant="secondary" 
          size="icon"
          onClick={toggleAudio}
        >
          {isAudioEnabled ? <Mic /> : <MicOff />}
        </Button>
        <Button 
          variant="secondary" 
          size="icon"
          onClick={toggleVideo}
        >
          {isVideoEnabled ? <Camera /> : <CameraOff />}
        </Button>
      </div>
    </div>
  )
}