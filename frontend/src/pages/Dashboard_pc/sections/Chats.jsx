import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { ChatsUsers } from './Components/chat_users';

export function Chats({ pagstate, setPag }) {
  const [mensagens, setMensagens] = useState([]);
  const [value, setValue] = useState('');
  const [psicologos, setPsicologos] = useState([]);
  const [psicologoSelecionado, setPsicologoSelecionado] = useState(null); // Novo estado para armazenar o psicólogo selecionado
  const socketRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:3001');

    socketRef.current.on('receive_message', (message) => {
      setMensagens((prevMensagens) => [...prevMensagens, { text: message.text, authorId: message.authorId }]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  function Entrar() {
    if (pagstate === 0) {
      setPag(1);
    } else {
      setPag(0);
    }
  }

  useEffect(() => {
    if (x) {
      setVisible(true);
      const intervalId = setInterval(() => {
        setVisible(false);
        setX(false);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [x]);

  function pegaValor(e) {
    setValue(e.target.value);
  }

  function aplicaMensagens() {
    if (value !== '' && value.length < 2000) {
      socketRef.current.emit('message', value);
      setValue('');
    } else if (value.length >= 2000) {
      setX(true);
    }
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'auto',
      });
    }
  }, [mensagens]);

  useEffect(() => {
    const patientId = localStorage.getItem('id');

    if (patientId) {
      fetch(`http://localhost:3000/consulta/paciente/${patientId}`)
        .then((response) => response.json())
        .then((data) => {
          const psicologoIds = data.map((consulta) => consulta.id_psicologo);
          return Promise.all(
            psicologoIds.map((id) =>
              fetch(`http://localhost:3000/user/psicologos/${id}`).then((res) => res.json())
            )
          );
        })
        .then((psicologosData) => {
          setPsicologos(psicologosData);
        })
        .catch((error) => {
          console.error('Erro ao buscar psicólogos:', error);
        });
    }
  }, []);

  // Função para selecionar um psicólogo
  function selecionarPsicologo(psicologo) {
    setPsicologoSelecionado(psicologo); // Atualiza o estado com o psicólogo selecionado
    setPag(1); // Alterna para a aba de chat
  }

  return (
    <div className="bg-white h-full max-h-full max-md:bg-primary-300 w-full font-satoshi-medium flex flex-row rounded-2xl">
      <div className={`h-full ${pagstate ? 'hidden' : ''} w-1/3 max-md:w-full scrollbar-thin max-2xl:w-1/2 max-md:bg-primary-300 bg-slate-100 flex flex-col rounded-l-2xl border-r-2 border-slate-400 max-md:border-none overflow-hidden`}>
        <div className="w-full h-fit justify-between items-center flex">
          <h1 className="text-2xl max-md:text-4xl max-md:font-bold m-6 text-primary-700 font-medium">Chats</h1>
          <div className="w-full h-2/12 bg-slate-100 max-md:bg-primary-300 justify-start items-end flex rounded-tl-2xl border-b-2 border-slate-400 max-md:border-none">
            <input
              type="text"
              placeholder=" Pesquisar..."
              className="w-11/12 max-md:w-3/4 m-4 h-10  max-md:bg-[#F1F5F9] bg-gray-200 rounded-xl placeholder:text-primary-700 outline-2 outline-slate-400"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center overflow-y-scroll">
          {psicologos.map((psicologo) => (
            <div onClick={() => selecionarPsicologo(psicologo)} key={psicologo.id} className="w-full max-md:w-fit h-fit">
              <ChatsUsers
                key={psicologo.id}
                nome={psicologo.nome}
                lastmsg="Última mensagem aqui"
                foto={`http://localhost:3000/${psicologo.foto}`} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`bg-white max-md:bg-primary-300 ${pagstate ? '' : 'hidden'} h-full w-8/12 max-md:w-full flex-col flex justify-start items-center rounded-r-2xl overflow-hidden m-0`} id="chat">
        <div className="w-full h-16 bg-white items-center justify-start flex md:hidden">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={Entrar}>
            <path d="M20 24C20 24 12 18.1081 12 16C12 13.8917 20 8 20 8" stroke="#718FCD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {psicologoSelecionado && (
            <>
              <img
                src={`http://localhost:3000/${psicologoSelecionado.foto}`}
                alt={psicologoSelecionado.nome}
                className="h-[90%] aspect-square bg-blue-500 rounded-full"
              />
              <h1 className="text-xl text-primary-700 font-semibold p-2">{psicologoSelecionado.nome}</h1>
            </>
          )}
        </div>
        <div ref={chatRef} className="h-fit w-full bg-white max-md:bg-primary-300 flex flex-col items-end overflow-y-scroll overflow-x-hidden max-h-screen">
          {mensagens.map((mensagem, index) => (
            <div className={`h-fit flex items-end ${mensagem.authorId === socketRef.current.id ? 'ml-auto' : 'mr-auto'}`} key={index}>
              <div className="w-fit h-fit whitespace-wrap overflow-wrap">
                <h1 className={`text-base ${mensagem.authorId === socketRef.current.id ? 'bg-primary-500 rounded-bl-[24px]' : 'bg-slate-500 rounded-br-[24px]'} rounded-t-[24px] max-w-2xl p-2 m-2 h-max text-left break-all text-[#f0f0f0]`}>
                  {mensagem.text}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full justify-center items-center flex h-fit bg-white max-md:bg-primary-300 mt-auto m-8">
          <input
            type="text"
            className="w-9/12 h-fit p-2 wrap break-words overflow-y-auto rounded-2xl bg-secondary-100 max-md:bg-white mr-2 placeholder:text-primary-700 placeholder:p-2 border-2 border-slate-300 outline-1 outline-slate-400 m-8"
            placeholder="Mensagem"
            value={value}
            onChange={pegaValor}
            id="chatinput"
            onKeyDown={(e) => {
              if (e.key === 13 || e.key === 'Enter') {
                aplicaMensagens();
              }
            }}
          />
          <button className="h-12 w-12 rounded-2xl text-primary-700 hover:text-primary-500 transition duration-300" onClick={aplicaMensagens}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9">
              <path d="M45.8337 4.16663L22.5003 25.0001L45.8337 45.8334" stroke="#718FCD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.16699 25.0001H45.8337" stroke="#718FCD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
