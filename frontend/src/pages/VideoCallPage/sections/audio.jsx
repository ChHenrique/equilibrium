import {useRef, useEffect} from 'react'

export function MicrophoneAccess  (){
    const audioRef = useRef(null);
  
    useEffect(() => {
      const getMicrophoneAccess = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          if (audioRef.current) {
            audioRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error("Erro ao acessar o microfone: ", error);
        }
      };
  
      getMicrophoneAccess();
    }, []);
      return <audio  ref={audioRef} autoPlay className="hidden"></audio>


 }