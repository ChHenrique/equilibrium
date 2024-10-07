import React, { useRef, useState, useEffect } from 'react';
import io from 'socket.io-client';


export function Chats() {
    const [mensagens, setmensagens] = useState([]);
    const [value, setvalue] = useState('');
    const socketRef = useRef(null);

    const [visible, setVisible] = useState(false);
    const [x, setX] = useState(false);
    const textRef = useRef(null)
    const chatRef = useRef(null)
    



    useEffect(() => {
        //conexao como oservidor
        socketRef.current = io.connect('http://localhost:3001');

        //recebe de volta a mensagem do back
        socketRef.current.on('receive_message', (message) => {
            setmensagens(prevMensagens => [...prevMensagens, { text: message.text, authorId: message.authorId }]);
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
        setvalue(e.target.value);
    }




    //envia a mensagem pro back pela funcao
    function aplicaMensagens() {
        if (value !== '' && value.length < 2000) {

            socketRef.current.emit('message', value);
            //limpa o input dps de enviar
            setvalue(''); 



            
        }else if(value.length >= 2000){
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
        <div className="bg-white h-full max-h-full w-full font-satoshi-medium flex flex-row rounded-2xl">

            {/* Aba dos conversantes */}
            <div className="h-full w-4/12 bg-slate-100 flex flex-col rounded-l-2xl border-r-2 border-slate-400">
                <h1 className="text-2xl m-6 text-primary-700 font-medium">Chats</h1>
                <div className="w-full h-2/12 bg-slate-100 justify-start items-end flex rounded-tl-2xl border-b-2 border-slate-400">
                    <input type="text"run placeholder=" Pesquisar..." className="w-11/12 m-4 h-9 bg-gray-200 rounded-xl placeholder:text-primary-700 outline-2 outline-slate-400" />
                </div>
           {/* Chats.map((nome,foto)=>{
            <ChatUsers nome={nome} foto={foto}/>
            
            })*/}

            </div>

            {/* Aba do chat */}
            <div   className="bg-white h-full w-8/12 flex-col flex justify-start items-center rounded-r-2xl overflow-hidden m-0" id='chat'>
                {/* Chat */}
                <div ref={chatRef} className="h-fit w-full bg-white flex flex-col items-end overflow-y-scroll overflow-x-hidden max-h-screen">
                    {mensagens.map((mensagem, index) => (
                        <div className={`h-fit flex items-end ${mensagem.authorId === socketRef.current.id ? 'ml-auto' : 'mr-auto'}`} key={index}>
                            <div className="w-fit h-fit whitespace-wrap overflow-wrap">
                                <h1  ref={textRef} className={`text-base ${mensagem.authorId === socketRef.current.id ? 'bg-[#8095AB] rounded-bl-[24px]' : 'bg-[#A3D1D1] rounded-br-[24px]'} rounded-t-[24px] max-w-2xl p-2 m-2 h-max text-left break-all text-[#f0f0f0]`}>
                                    {mensagem.text}
                                </h1>
                            </div>

                        </div>
                    ))}





                </div>

                <div className="w-full justify-center items-center flex h-fit bg-white mt-auto m-8" >
                     {/* Input do chat */}
                    <input type="text" className=" w-9/12 h-fit p-2 wrap break-words overflow-y-auto rounded-2xl bg-secondary-100 mr-2 placeholder:text-primary-700 placeholder:p-2 border-2 border-slate-300 outline-1 outline-slate-400  m-8" placeholder="Mensagem" value={value} onChange={pegavalor} id='chatinput' onKeyDown={(e=>{
                        if(e.key == 13 ||e.key == "Enter" ){
                            aplicaMensagens();
                        }
                    })}/>

                    {/* Botão de enviar do chat */}
                    <button className="h-12 w-12 rounded-2xl text-primary-700 hover:text-primary-500 transition duration-300" onClick={aplicaMensagens}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9">
                            <path d="M45.8337 4.16663L22.917 27.0833M45.8337 4.16663L31.2503 45.8333L22.917 27.0833M45.8337 4.16663L4.16699 18.75L22.917 27.0833" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {/*aviso de limite*/}
                    <h1 className = {`absolute text-bs bg-red-400 text-white p-2 translate-y-14 rounded-xl transition- ease duration-300  ${visible ? 'opacity-100' : 'opacity-0'}`}> O limite maximo de caracteres é 2000!!</h1>
                      

                </div>
            </div>
        </div>
    );
}
