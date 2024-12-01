import React, { useRef, useState, useEffect } from 'react';
import io from 'socket.io-client';

const CHAT_ROUTE = 'algumacoisaseilaoq'; // A mesma rota definida no backend

export function Chats({chat , setChat}) {
    const [mensagens, setMensagens] = useState([]);
    const [value, setValue] = useState('');
    const socketRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [x, setX] = useState(false);
    const textRef = useRef(null);
    const chatRef = useRef(null);

    useEffect(() => {
        // Conexão com o servidor
        socketRef.current = io.connect('http://localhost:3001');

        // Envia a rota para o servidor após a conexão
        socketRef.current.on('connect', () => {
            socketRef.current.emit('joinChat', CHAT_ROUTE);
        });

        // Recebe mensagens do backend
        socketRef.current.on('receive_message', (message) => {
            setMensagens(prevMensagens => [...prevMensagens, { text: message.text, authorId: message.authorId }]);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    useEffect(() => {
        if (x) {
            setVisible(true);
            const intervalId = setInterval(() => {
                setVisible(false);
                setX(false);
            }, 3000); // 3000ms = 3 segundos
            return () => clearInterval(intervalId);
        }
    }, [x]);

    function pegavalor(e) {
        setValue(e.target.value);
    }

    // Envia a mensagem para o backend
    function aplicaMensagens() {
        if (value !== '' && value.length < 2000) {
            socketRef.current.emit('message', value);
            setValue(''); // Limpa o input depois de enviar
        } else if (value.length >= 2000) {
            setX(true);
        }
    }

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTo({
                top: chatRef.current.scrollHeight,
                behavior: "auto"
            });
        }
    }, [mensagens]);

    return (
        <div className="bg-white h-full max-h-full w-full font-satoshi-medium flex flex-row rounded-2xl max-md:relative max-md:pt-8 ">
<svg className='w-8 h-8 md:hidden absolute left-2 top-2 text-primary-700 bg-white ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() =>{
    if(chat){setChat(0)}else{setChat(1)}
}}>
<g clip-path="url(#clip0_1272_2274)">
<path d="M12 8L8 12M8 12L12 16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1272_2274">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


            <div className="bg-white h-full w-full flex-col flex justify-start items-center rounded-2xl overflow-hidden m-0" id='chat'>
                <div ref={chatRef} className="h-fit w-full bg-white flex flex-col items-end overflow-y-scroll overflow-x-hidden max-h-screen">
                    {mensagens.map((mensagem, index) => (
                        <div className={`h-fit flex items-end ${mensagem.authorId === socketRef.current.id ? 'ml-auto' : 'mr-auto'}`} key={index}>
                            <div className="w-fit h-fit whitespace-wrap overflow-wrap">
                                <h1 ref={textRef} className={`text-base ${mensagem.authorId === socketRef.current.id ? 'bg-[#8095AB] rounded-bl-[24px]' : 'bg-[#A3D1D1] rounded-br-[24px]'} rounded-t-[24px] max-w-2xl p-2 m-2 h-max text-left break-all text-[#f0f0f0]`}>
                                    {mensagem.text}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full justify-center items-center flex h-fit bg-white mt-auto m-8">
                    <input type="text" className="w-9/12 h-fit p-2 wrap break-words overflow-y-auto rounded-2xl bg-secondary-100 mr-2 placeholder:text-primary-700 placeholder:p-2 border-2 border-slate-300 outline-1 outline-slate-400 m-8" placeholder="Mensagem" value={value} onChange={pegavalor} id='chatinput' onKeyDown={(e) => {
                        if (e.key === 13 || e.key === "Enter") {
                            aplicaMensagens();
                        }
                    }} />

                    <button className="h-12 w-12 rounded-2xl text-primary-700 hover:text-primary-500 transition duration-300" onClick={aplicaMensagens}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9">
                            <path d="M45.8337 4.16663L22.917 27.0833M45.8337 4.16663L31.2503 45.8333L22.917 27.0833M45.8337 4.16663L4.16699 18.75L22.917 27.0833" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <h1 className={`absolute text-bs bg-red-400 text-white p-2 translate-y-14 rounded-xl transition-ease duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}> O limite máximo de caracteres é 2000!!</h1>
                </div>
            </div>
        </div>
    );
}
