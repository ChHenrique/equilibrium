import React, { useEffect, useRef, useState, createContext } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import Webcam from 'react-webcam';


const socket = io('https://localhost:5000');



export function VideoChat({setChat , chat}) {
    const [Cam, setCam] = useState(1)

    const [audio,setAudio] = useState(1)
    const [call,setCall] = useState(0)


   
    const webcamRef = useRef(null);
    const peerRef = useRef(null);
    const [peerStream, setPeerStream] = useState(null); 

    useEffect(() => {
        const handleUserMedia = (stream) => {
            console.log("Fluxo de mídia do usuário local recebido:", stream);
            
            // Cria o peer apenas uma vez
            if (!peerRef.current) {
                peerRef.current = new SimplePeer({
                    initiator: window.location.href.includes('peer1'),
                    trickle: false,
                    stream: stream,
                });
    
            // Evento de sinal para enviar
            peerRef.current.on('signal', (data) => {
                socket.emit('signal', data);
            });
    
            // Quando receber stream do outro peer
            peerRef.current.on('stream', (stream) => {
                console.log('Stream recebido do outro usuário:', stream);
                setPeerStream(stream);
            });
    
            // Tratamento de erro no peer
            peerRef.current.on('error', (err) => {
                console.error('Erro no peer:', err);
            });
        };
        }
        // Função para lidar com sinal recebido
        const handleSignal = (data) => {
            console.log("Sinal recebido do outro usuário:", data);
            
            if (peerRef.current && !peerRef.current.destroyed) {
                peerRef.current.signal(data);
            } else {
                console.warn('Peer foi destruído. Não é possível sinalizar.');
            }
        };
    
        // Adiciona listener de sinal
        socket.on('signal', handleSignal);
    
        // Solicitar permissão de mídia
        if (webcamRef.current && webcamRef.current.video) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then(handleUserMedia)
                .catch(error => {
                    console.error("Erro ao tentar acessar microfone e camera", error);
                    alert("Não foi possível acessar microfone e camera");
                });
        }
    
        // Função de limpeza
        return () => {
            // Remove o listener de sinal
            socket.off('signal', handleSignal);
    
            // Destruir peer se existir
            if (peerRef.current) {
                peerRef.current.destroy();
                peerRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (peerStream && videoRef.current) {
            console.log("Está streamando");
            videoRef.current.srcObject = peerStream;
        } else {
            console.log("peerStream ou videoRef.current é null");
            console.log("peerStream:", peerStream);
            console.log("videoRef.current:", videoRef.current);
        }
    }, [peerStream]);
    
    

    const videoRef = useRef(null)


    function CamCam(){
        if(Cam == 1){
            return(
            <div className='h-fit w-full   relative mb-4 mt-4 flex justify-center items-center '>
                <Webcam
                    className="rounded-[20px] w-full  bg-slate-800 max-w-[80%] flex justify-center items-center"
                    style={{aspectRatio: "16 / 9",}}
                    audio={audio ? true : false}
                    ref={webcamRef}
                    videoConstraints={{ width: 1280, height: 720, facingMode: 'user' }}
                />
                <h1 className='absolute bottom-[5%]  text-white font-poppins font-normal left-[12%]'>Você:</h1>
            </div>)
        }else{
            return(
            <div className='h-fit w-full   relative mb-4 mt-4 flex justify-center items-center '>
                <div id="ex" className="rounded-[20px] w-full h-full bg-slate-800 aspect-video  max-w-[80%] flex justify-center items-center"

                > <h1 className='absolute bottom-[5%]  text-white font-poppins font-normal left-[12%]'>Você:</h1>

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
    function RenderOtherCam() {
        console.log("Verificando peerStream:", peerStream); // Log para verificar o estado de peerStream
        if (peerStream != null) {
            return (
                <div className='h-fit w-full relative   mb-4 mt-4 flex justify-center items-center '>
                    <video
                        className='rounded-[20px] max-w-[80%] w-full    bg-slate-800  flex justify-center items-center aspect-video'
                        playsInline
                        autoPlay
                        ref={videoRef}
                    />
                    <h1 className='absolute bottom-[5%]   text-white font-poppins font-normal left-[12%]'>Outro:</h1>
                </div>
            );
        } else {
            console.log("peerStream é null, renderizando estado alternativo");
            
            return (
                <div className='h-fit w-full relative    mb-4 mt-4 flex justify-center items-center max-w-[80%]'>
                    {/* Renderiza o conteúdo quando não há stream */}
                    <div className="rounded-[20px] w-full bg-slate-800 aspect-video    flex justify-center items-center" >
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_865_941)">
                                <path d="M46 14L32 24L46 34V14Z" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28 10H6C3.79086 10 2 11.7909 2 14V34C2 36.2091 3.79086 38 6 38H28C30.2091 38 32 36.2091 32 34V14C32 11.7909 30.2091 10 28 10Z" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="1.58579" y1="46.5858" x2="46.5858" y2="1.58579" stroke="#FFFFFF" strokeWidth="4" />
                            </g>
                            <defs>
                                <clipPath id="clip0_865_941">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h1 className='absolute bottom-[5%] left-[12%] text-white font-poppins font-normal'>Outro:</h1>
                </div>
            );
        }
    }
    

    

    return (
        <div className='h-full w-full flex justify-center items-center flex-col max-md:h-2/3'>
            <div className='h-0 hidden'>

            </div>

            {RenderOtherCam()}
            {chat ? <div></div> :CamCam()}

            


            <div className={`w-full h-[15%] max-md:h-[40%]  justify-center items-center flex ${chat ? "hidden" : ""}`}>
              {/*Botao de microfone */}
               <button className=" h-1/2 bg-white rounded-full flex justify-center items-center p-4 m-2 aspect-square" 
               
               onClick={() => {
                if(audio == 0){setAudio(1)}
                else if(audio == 1){setAudio(0)}
               }}
               >


                {
                audio == 1 ?
               <svg className=" w-full h-full" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M30 20V24C30 27.713 28.525 31.274 25.8995 33.8995C23.274 36.525 19.713 38 16 38M16 38C12.287 38 8.72601 36.525 6.1005 33.8995C3.475 31.274 2 27.713 2 24V20M16 38V46M8 46H24M16 2C14.4087 2 12.8826 2.63214 11.7574 3.75736C10.6321 4.88258 10 6.4087 10 8V24C10 25.5913 10.6321 27.1174 11.7574 28.2426C12.8826 29.3679 14.4087 30 16 30C17.5913 30 19.1174 29.3679 20.2426 28.2426C21.3679 27.1174 22 25.5913 22 24V8C22 6.4087 21.3679 4.88258 20.2426 3.75736C19.1174 2.63214 17.5913 2 16 2Z" stroke="#355081" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                     :
                     <svg className=" w-full h-full"  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_864_932)">
<path d="M38 20V24C38 27.713 36.525 31.274 33.8995 33.8995C31.274 36.525 27.713 38 24 38M24 38C20.287 38 16.726 36.525 14.1005 33.8995C11.475 31.274 10 27.713 10 24V20M24 38V46M16 46H32M24 2C22.4087 2 20.8826 2.63214 19.7574 3.75736C18.6321 4.88258 18 6.4087 18 8V24C18 25.5913 18.6321 27.1174 19.7574 28.2426C20.8826 29.3679 22.4087 30 24 30C25.5913 30 27.1174 29.3679 28.2426 28.2426C29.3679 27.1174 30 25.5913 30 24V8C30 6.4087 29.3679 4.88258 28.2426 3.75736C27.1174 2.63214 25.5913 2 24 2Z" stroke="#355081" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="1.58579" y1="46.5858" x2="46.5858" y2="1.58579" stroke="#FD8686" stroke-width="4"/>
</g>
<defs>
<clipPath id="clip0_864_932">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>

                   }


               </button>
               
               {/*Botao da camera */}
               <button className=" h-1/2 bg-white rounded-full flex justify-center items-center p-4 m-2" style={{aspectRatio: "4/4"}}
               
               onClick={() => {

                
                  if(Cam == 0){setCam(1)}
                  else if(Cam == 1){setCam(0)}
                 }
               }
               >
                {Cam == 1?
               <svg className=" w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46 14L32 24L46 34V14Z" stroke="#355081" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 10H6C3.79086 10 2 11.7909 2 14V34C2 36.2091 3.79086 38 6 38H28C30.2091 38 32 36.2091 32 34V14C32 11.7909 30.2091 10 28 10Z" stroke="#355081" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

: 

<svg className=" w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_865_941)">
<path d="M46 14L32 24L46 34V14Z" stroke="#355081" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 10H6C3.79086 10 2 11.7909 2 14V34C2 36.2091 3.79086 38 6 38H28C30.2091 38 32 36.2091 32 34V14C32 11.7909 30.2091 10 28 10Z" stroke="#355081" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="1.58579" y1="46.5858" x2="46.5858" y2="1.58579" stroke="#FD8686" stroke-width="4"/>
</g>
<defs>
<clipPath id="clip0_865_941">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
}
</button>
{/*Botao de desligar */}

<button
  className=" h-1/2 bg-primary-900 rounded-full flex justify-center items-center p-4 m-2"
  style={{ aspectRatio: "4/4" }}
  onClick={() => {
    // Exibe a mensagem de confirmação
    const confirmEndCall = window.confirm("Tem certeza que deseja encerrar a chamada?");
    
    if (confirmEndCall) {
      // Pega o ID do localStorage
      const id = localStorage.getItem("id");

      if (id) {
        // Faz a requisição para atualizar o status da consulta
        fetch(`http://localhost:3000/consultas/atualizarstatus/${id}`, {
          method: "PUT", // Ajuste para o método apropriado (POST ou PUT)
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "realizada" }), // Envia o status no corpo da requisição
        })
          .then((response) => {
            if (response.ok) {
              alert("Chamada encerrada com sucesso!");
              // Redirecionar ou fazer algo após encerrar
              // Exemplo: Redirecionar para outra página
              
            } else {
              alert("Erro ao encerrar a chamada. Tente novamente.");
            }
          })
          .catch((error) => {
            console.error("Erro ao enviar a requisição:", error);
            alert("Erro ao encerrar a chamada. Verifique sua conexão.");
          });
      } else {
        alert("ID da consulta não encontrado no localStorage.");
      }
    }
  }}
>
  <svg
    className="w-full h-full"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.0999 10C32.0533 10.3811 33.8486 11.3365 35.256 12.7439C36.6634 14.1512 37.6187 15.9465 37.9999 17.9M30.0999 2C34.1584 2.45087 37.943 4.26835 40.8323 7.15402C43.7216 10.0397 45.5439 13.822 45.9999 17.88M43.9999 33.84V39.84C44.0021 40.397 43.888 40.9483 43.6649 41.4587C43.4417 41.9691 43.1145 42.4272 42.704 42.8037C42.2936 43.1803 41.809 43.467 41.2814 43.6454C40.7537 43.8239 40.1946 43.8901 39.6399 43.84C33.4855 43.1713 27.5739 41.0683 22.3799 37.7C17.5475 34.6293 13.4505 30.5323 10.3799 25.7C6.99982 20.4824 4.89635 14.542 4.23987 8.36C4.18989 7.80693 4.25562 7.24952 4.43287 6.72325C4.61012 6.19698 4.89501 5.71338 5.2694 5.30324C5.64379 4.89311 6.09948 4.56542 6.60745 4.34104C7.11542 4.11667 7.66455 4.00052 8.21987 4H14.2199C15.1905 3.99045 16.1314 4.33416 16.8674 4.96707C17.6033 5.59997 18.084 6.47889 18.2199 7.44C18.4731 9.36013 18.9428 11.2455 19.6199 13.06C19.889 13.7758 19.9472 14.5538 19.7877 15.3018C19.6282 16.0497 19.2576 16.7362 18.7199 17.28L16.1799 19.82C19.027 24.8271 23.1728 28.9729 28.1799 31.82L30.7199 29.28C31.2636 28.7423 31.9502 28.3717 32.6981 28.2122C33.446 28.0527 34.224 28.1109 34.9399 28.38C36.7544 29.0571 38.6397 29.5268 40.5599 29.78C41.5314 29.9171 42.4187 30.4064 43.0529 31.155C43.6872 31.9036 44.0242 32.8592 43.9999 33.84Z"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>
<button className=" h-1/2 bg-white rounded-full flex justify-center items-center p-4 m-2 text-primary-700 md:hidden" style={{aspectRatio: "4/4"}} 
onClick={() =>{
    if(chat){setChat(0)}else{setChat(1)}
}}
>
 <svg className='h-full aspect-square ' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.13159 25.333C6.3981 25.1625 5.0995 24.6418 4.2286 23.7709C2.6665 22.2089 2.6665 19.6946 2.6665 14.6663V13.9997C2.6665 8.97135 2.6665 6.45721 4.2286 4.8951C5.7907 3.33301 8.30485 3.33301 13.3332 3.33301H18.6665C23.6948 3.33301 26.209 3.33301 27.771 4.8951C29.3332 6.45721 29.3332 8.97135 29.3332 13.9997V14.6663C29.3332 19.6946 29.3332 22.2089 27.771 23.7709C26.209 25.333 23.6948 25.333 18.6665 25.333C17.9192 25.3497 17.324 25.4065 16.7393 25.5397C15.1414 25.9075 13.6618 26.7251 12.1997 27.4382C10.1162 28.4541 9.07451 28.9621 8.42076 28.4865C7.17009 27.555 8.39256 24.6689 8.66651 23.333" fill="currentColor"/>
</svg>


 </button>
 


</div>

        </div>
    );
}
