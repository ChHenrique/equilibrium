import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import Webcam from 'react-webcam';

const socket = io('http://localhost:5000');

export function VideoChat() {
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
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(handleUserMedia);
        }

        return () => {
            if (peerRef.current) peerRef.current.destroy();
        };
    }, []);

    return (
        <div>
            <Webcam
                audio={true}
                ref={webcamRef}
                videoConstraints={{ width: 1280, height: 720, facingMode: 'user' }}
            />
            <div>
                <h2>Sua câmera:</h2>
                <video
                    playsInline
                    autoPlay
                    ref={(ref) => {
                        if (ref && webcamRef.current && webcamRef.current.video) {
                            ref.srcObject = webcamRef.current.video.srcObject;
                        }
                    }}
                    width={400}
                    height={300}
                />
            </div>
            {peerStream && (
                <div>
                    <h2>Câmera remota:</h2>
                    <video
                        playsInline
                        autoPlay
                        ref={(ref) => {
                            if (ref) ref.srcObject = peerStream;
                        }}
                        width={400}
                        height={300}
                    />
                </div>
            )}
        </div>
    );
}
