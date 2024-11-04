import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import Webcam from 'react-webcam';

const socket = io('http://localhost:5000');

export function VideoChat() {
    const [renderUser, setRenderuser] = useState(1)


   
    const webcamRef = useRef(null);
    const peerRef = useRef(null);
    const [peerStream, setPeerStream] = useState(null);

    useEffect(() => {
        const handleUserMedia = (stream) => {
            peerRef.current = new SimplePeer({
                initiator: window.location.href.includes('peer1'),
                trickle: false,
                stream: stream,
            });

            peerRef.current.on('signal', (data) => {
                socket.emit('signal', data);
            });

            peerRef.current.on('stream', (stream) => {
                setPeerStream(stream);
            });

            socket.on('signal', (data) => {
                peerRef.current.signal(data);
            });
        };

        if (webcamRef.current && webcamRef.current.video) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(handleUserMedia).catch(error => {
                console.error("erro ao tentar acessar microfone e camera", error);
                alert("nao da pra acessar microfone e camera");
            });
        }

        return () => {
            socket.off('signal');
            if (peerRef.current) {
                peerRef.current.destroy();
            peerRef.current = null;}
        };
    }, []);

    useEffect(() => {
        if (peerStream && videoRef.current) {
            console.log("esta streamando")
            videoRef.current.srcObject = peerStream;
        }
    }, [peerStream]);

    const videoRef = useRef(null)


    function RenderUserCam(){
        if(renderUser == 1){
            return(
            <div className='h-fit w-full relative mb-4 mt-4'>
                <Webcam
                    className="rounded-[20px] w-full  bg-slate-800 max-w-[80%] flex justify-center items-center"
                    style={{aspectRatio: "16 / 9",}}
                    audio={true}
                    ref={webcamRef}
                    videoConstraints={{ width: 1280, height: 720, facingMode: 'user' }}
                />
                <h1 className='absolute bottom-[5%] left-4 text-white font-poppins font-normal'>Você:</h1>
            </div>)
        }else{
            return(
            <div className='h-fit w-full relative mb-4 mt-4'>
                <div id="ex" className="rounded-[20px] w-full  bg-slate-800 max-w-[80%] flex justify-center items-center"
                    style={{
                        aspectRatio: "16 / 9",
                    }}
                >

                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_865_941)">
                            <path d="M46 14L32 24L46 34V14Z" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28 10H6C3.79086 10 2 11.7909 2 14V34C2 36.2091 3.79086 38 6 38H28C30.2091 38 32 36.2091 32 34V14C32 11.7909 30.2091 10 28 10Z" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <line x1="1.58579" y1="46.5858" x2="46.5858" y2="1.58579" stroke="#FFFFFF" stroke-width="4" />
                        </g>
                        <defs>
                            <clipPath id="clip0_865_941">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

            </div>)
        }
    }
    function RenderOtherCam(){
        if(peerStream != null){
            return(
            <div className='h-fit w-full relative mb-4 mt-4'>
                <video
                className=' rounded-[20px] w-full  bg-slate-800 max-w-[80%] flex justify-center items-center aspect-video'
                    playsInline
                    autoPlay
                    ref={videoRef}
                />
                <h1 className='absolute bottom-[5%] left-4 text-white font-poppins font-normal'>Outro:</h1>
            </div>)
        }else{
            
                return(
                <div className='h-fit w-full relative mb-4 mt-4'>
                    <div id="ex" className="rounded-[20px] w-full  bg-slate-800 max-w-[80%] flex justify-center items-center"
                        style={{
                            aspectRatio: "16 / 9",
                        }}
                    >
    
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_865_941)">
                                <path d="M46 14L32 24L46 34V14Z" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28 10H6C3.79086 10 2 11.7909 2 14V34C2 36.2091 3.79086 38 6 38H28C30.2091 38 32 36.2091 32 34V14C32 11.7909 30.2091 10 28 10Z" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <line x1="1.58579" y1="46.5858" x2="46.5858" y2="1.58579" stroke="#FFFFFF" stroke-width="4" />
                            </g>
                            <defs>
                                <clipPath id="clip0_865_941">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h1 className='absolute bottom-[5%] left-4 text-white font-poppins font-normal'>Outro:</h1>
    
                </div>)
            }

        }

    

    return (
        <div className='h-full w-full flex justify-center items-center flex-col'>


            {RenderUserCam()}

            {RenderOtherCam()}
        </div>
    );
}
