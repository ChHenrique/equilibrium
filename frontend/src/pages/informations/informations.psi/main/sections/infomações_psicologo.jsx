import React, { useState, useEffect, useRef } from 'react';
import "../sections/animate.css";

export function InfoPsi({ imagem, onChange, nome, id_pc }) {
  const idPsi = localStorage.getItem("id");

  const [TextArea, SetTextArea] = useState(""); // Valor da TextArea dos Tópicos
  const [Topicos, SetTopicos] = useState([]); // Valor dos Tópicos
  const [TextAreaFormação, SetTextAreaFormação] = useState(''); // Valor da TextArea da Formação
  const [Formação, setFormação] = useState([]); // Valor da Formação
  const [isOpen, setIsOpen] = useState(false); // Controla a visibilidade da lista
  const [Duração, setDuração] = useState('00:00'); // Armazena a duração selecionada
  const [Visible, setVisible] = useState(false)
  const [LimiteChar, SetLimiteChar] = useState(false)
  const [LimiteCharFormação, SetLimiteCharFormação] = useState(false)

  const inputRef = useRef(null); // Referência para o campo de texto

  useEffect(() => {
    // Função para obter a duração do psicólogo via API
    const fetchDuração = async () => {
      if (idPsi) {
        try {
          const response = await fetch(`http://localhost:3000/user/psicologos/${idPsi}`);
          const data = await response.json();
  
          if (response.ok) {
            // Pega a duração da API e formata para o formato 00:00
            let duracao = data.duracao || '00:00'; // Valor padrão '00:00' caso não tenha duração
            
            // Se a duração estiver no formato em minutos, converte para o formato 00:00
            const [hours, minutes] = duracao.split(':').map(Number);
            const formattedDuration = `${String(hours).padStart(2, '0')}:${String(minutes || 0).padStart(2, '0')}`;
  
            setDuração(formattedDuration); // Passa a duração formatada para o estado
          } else {
            console.error("Erro ao obter a duração");
          }
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      }
    };
  
    fetchDuração();
  }, [idPsi]); // Executa a requisição quando o idPsi mudar
  


  // Efeito para buscar a imagem do banco de dados
  useEffect(() => {
    const fetchImage = async () => {

      if (idPsi) {
        try {
          const response = await fetch(`http://localhost:3000/user/psicologos/${idPsi}/foto`);
          if (!response.ok) throw new Error("Erro ao buscar a imagem");
          const data = await response.json();
          const imageUrl = `http://localhost:3000/${data.foto.replace(/\\/g, '/')}`; // Formata a URL
          setSelectedImage(imageUrl); // Armazena a URL corretamente
        } catch (error) {
          console.error("Erro:", error);
        }
      }
    };

    fetchImage();
  }, []);

  const handleUpdateTopicosFormacao = async () => {
    const idPsi = localStorage.getItem("id"); // Obtém o id do psicólogo
  
    if (idPsi) {
      try {
        // Monta o objeto com os tópicos e formações
        const data = {
          topicos: Topicos,
          formacao: Formação
        };
  
        // Envia a requisição POST com os dados
        const response = await fetch(`http://localhost:3000/updatetopicosformacao/${idPsi}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // Envia os dados como JSON
        });
  
        if (response.ok) {
          console.log('Tópicos e formação atualizados com sucesso!');
          // Aqui você pode adicionar um feedback visual, como um alerta ou mensagem de sucesso
        } else {
          console.error('Erro ao atualizar tópicos e formação');
        }
      } catch (error) {
        console.error('Erro ao enviar dados:', error);
      }
    }
  };
  

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/updateduracaopsicologo/${idPsi}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ duracao: Duração }),
      });

      if (response.ok) {
        setVisible(true)
        setTimeout(() => {
          setVisible(false)
        }, 4000)
      } else {
        console.error("Erro ao atualizar a duração");

      }
    } catch (error) {
      console.error("Erro ao enviar a requisição", error);

    }
  };

  // Gera as opções de tempo
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        options.push(formattedTime);
      }
    }
    return options;
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const PegarValorTextArea = (e) => {
    const inputText = e.target.value;
    if (inputText.length < 32) {
      SetTextArea(inputText);
      SetLimiteChar(false)
    }else {
      SetLimiteChar(true)
    }
  };

  const ValorTopicos = () => {
    if (TextArea.trim() !== "" && Topicos.length < 12) {
      SetTopicos([...Topicos, TextArea]);
      SetTextArea(''); // Limpa a TextArea após adicionar
      inputRef.current.focus(); // Mantém o foco no campo
    } 
  };

  const ExcluirTopicos = (index) => {
    const ValorTopicosNew = Topicos.filter((_, i) => i !== index);
    SetTopicos(ValorTopicosNew);
  };

  const PegarValorTextAreaDaFormação = (e) => {
    const inputTextFormação = e.target.value

    if (inputTextFormação.length < 32) {
        SetTextAreaFormação(inputTextFormação);
        SetLimiteCharFormação(false)
    } else {
        SetLimiteCharFormação(true)
    }
};

const ValorFormação = () => {
    if (TextAreaFormação.trim() !== "" && Formação.length < 6) {
        setFormação([...Formação, TextAreaFormação])
        SetTextAreaFormação('')
        SetLimiteCharFormação(false)
    }
};
  const ExcluirFormação = (index) => {
    const ValorFormaçãoNew = Formação.filter((_, i) => i !== index);
    setFormação(ValorFormaçãoNew);
  };

  useEffect(() => {
    console.log("Tópicos atualizados:", Topicos);
  }, [Topicos]);

  const [selectedImage, setSelectedImage] = useState(imagem);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Para visualizar a imagem localmente
      onChange(e);
    }
  };


  return (
    <div className="w-[100%] h-[80vh] bg-white rounded-2xl flex items-center max-md:flex-col max-md:scrollbar-thin max-md:overflow-y-scroll max-md:overflow-x-hidden max-md:h-[100vh] max-lg:h-[50.8vh] max-xl:h-[83.9vh] ">
      <div className='w-[40%] h-full bg-white flex flex-col items-center relative rounded-bl-2xl rounded-tl-2xl border-[#6b6b6b] max-md:h-[80%]'>

        {/* Imagem e Input de Arquivo */}
        <div className='h-40 w-40 bg-[#465A7F] mt-7 rounded-full aspect-square relative max-md:h-32 max-md:w-32 max-lg:h-32 max-lg:w-32'>
          <label htmlFor="image-input" className="w-full h-full rounded-full flex justify-center items-center">
            {selectedImage ? (
              <img src={selectedImage} alt="Imagem selecionada" className="h-full w-full rounded-full object-cover" />
            ) : (
              <span className="text-5xl text-white items-center flex mb-2">+</span>
            )}
          </label>
        </div>

        <h3 className='mt-3 font-poppins text-[#465A7F] text-sm font-medium'>
          Escolher foto
        </h3>

        <h2 className="mt-1 font-poppins text-[#000000] text-xl font-medium whitespace-break-spaces break-all text-center">
          {nome}
        </h2>

        <h3 className='mt-1 font-poppins text-[#465A7F] text-sm font-medium'>
          ID: {idPsi}
        </h3>



        <h1 className='mt-5 font-poppins font-semibold text-primary-700 text-[19px] max-md:text-center max-md:text-[17px] max-lg:text-center max-xl:text-center'>
          Duração da Consulta
        </h1>

        <div className="relative font-poppins font-semibold text-primary-200 w-36">
          {/* Botão de selecionar a hora*/}
          <button onClick={toggleDropdown} className="border-b border-primary-800 p-1 w-full text-[24px] mt-2 text-left">
            {Duração}

            <svg width="22" height="22" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='translate-x-28 absolute -translate-y-6'>
              <g clip-path="url(#clip0_910_964)">
                <path d="M5.99902 3V6L7.99902 7M10.999 6C10.999 8.76142 8.76045 11 5.99902 11C3.2376 11 0.999023 8.76142 0.999023 6C0.999023 3.23858 3.2376 1 5.99902 1C8.76045 1 10.999 3.23858 10.999 6Z" stroke="#355081" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="2.64645" y1="2.85355" x2="1.64645" y2="1.85355" stroke="#355081" />
                <line x1="2.35596" y1="0.851133" x2="0.443444" y2="2.78993" stroke="#355081" />
              </g>
              <defs>
                <clipPath id="clip0_910_964">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </button>
          {isOpen && (
            <div className="absolute z-10 mt-2 border bg-white shadow-lg max-h-60 w-full overflow-y-auto rounded-2xl rounded-tr-sm rounded-br-sm scrollable">
              {generateTimeOptions().map((option) => (
                <button
                  type='submit'
                  key={option}
                  onClick={() => {
                    setDuração(option);

                    setIsOpen(false);
                  }}
                  className={`block w-full text-left p-2 text-lg transition-all duration-200 
                    hover:bg-primary-300 ${Duração === option ? 'bg-primary-500 text-white' : 'text-gray-700'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Botão Confirmar */}
        <button type='submit' className="w-36 bg-primary-200 hover:bg-[#546481] text-white font-bold py-2 px-4 rounded-md mt-5 duration-300 max-lg:w-3/4"
          onClick={handleSubmit}
        >
          Confirmar
        </button>

        <p draggable="true" className={`mt-6 font-poppins font-semibold text-primary-600 text-center duration-500 text-[18px] max-md:mt-6 max-md:text-[13px] max-md:whitespace-nowrap ${Visible ? "opacity-100" : "opacity-0"}`}>
          Duração de consulta foi <span className='break-words inline-block w-full'> definida como: {Duração}</span>
        </p>

        <div className='w-[1px] h-[87%] bg-gray-500 absolute right-0 translate-y-10 max-md:hidden'></div>

      </div>

      {/* Componente de Alterações */}
      <div className="w-full h-full flex items-center justify-center flex-col font-poppins font-medium relative rounded-tl-2xl p-6 space-y-10 max-md:p-3 max-md:space-y-5">

        <h1 className='absolute top-10 font-poppins font-semibold text-[25px] text-primary-700 max-md:text-[17px] max-md:whitespace-nowrap max-md:top-3 max-lg:text-[20px] max-lg:text-center max-lg:top-5 max-xl:text-[22px] max-xl:top-5'>Defina seus tópicos e sua formação</h1>

        {/* Tópicos */}
        <div className='flex flex-col w-[95%] h-[37%] relative max-md:h-[100%] max-md:w-[100%] max-md:translate-y-4 max-lg:w-[105%] max-xl:w-[105%] max-xl:h-[42%]'>

          <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2 max-md:text-[18px]'>Tópicos</h1>

          <div className='w-full h-full relative whitespace-normal max-md:h-[30vh] '>

            <div className='absolute top-3 left-3 flex flex-wrap space-x-2 w-full h-fit max-w-[98%] max-md:w-[98%]'>

              {Topicos.map((item, index) => (
                <div key={index} className='canela flex items-center h-fit space-x-3 bg-[#9FB9EB] pl-2 p-1 pr-2 rounded-lg mb-2 max-md:pl-1 max-md:pr-1'>

                  <h3 id='letra' className='font-poppins text-[#121926] break-words max-md:text-[12px]'>{item}</h3>
                  <div onClick={() => ExcluirTopicos(index)} className='xis h-full justify-center items-center'>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-0.5 text-[#121926] scale-125 duration-300 cursor-pointer'>
                      <path d="M1 9L9 1" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 9L1 1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>

                </div>

              ))}
            </div>

            <textarea
              ref={inputRef} // Adicionando referência aqui
              spellCheck
              className='w-full h-full rounded-2xl p-4 pl-4 outline-none resize-none bg-[#C9D4E9] max-md:text-[14px]'
              onChange={PegarValorTextArea}
              value={TextArea}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  ValorTopicos();
                  e.preventDefault(); // Impede a quebra de linha
                }
              }}
            />
            <p className={`w-full text-center text-red-600 text-[16px] font-poppins duration-500 max-xl:text-[18px] ${LimiteChar ? 'opacity-100' : 'hidden'}`}>Limite de caracteres excedido</p>

            <button className='absolute right-6 bottom-4 max-md:h-6 max-md:w-6' onClick={ValorTopicos} type='submit' >
              <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.6667 2L20.75 24.9167M43.6667 2L29.0833 43.6667L20.75 24.9167M43.6667 2L2 16.5833L20.75 24.9167" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

          </div>
        </div>

        {/* Formação */}
        <div className='flex flex-col w-[95%] h-[37%] relative max-md:w-[100%] max-lg:w-[105%] max-xl:w-[105%]'>

          <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2 max-md:text-[18px]'>Formação</h1>

          <div className='w-full h-full relative whitespace-normal max-md:h-[30vh]'>

            <div className='absolute top-3 left-3 flex flex-wrap space-x-2 w-full h-fit max-w-[98%]'>

              {Formação.map((item, index) => (

                <div key={index} className='canela flex items-center h-fit space-x-3 bg-[#9FB9EB] pl-2 p-1 pr-2 rounded-lg mb-2 max-md:pl-1 max-md:pr-1'>

                  <h3 id='letra' className='font-poppins text-[#121926] break-words'>{item}</h3>
                  <div onClick={() => ExcluirFormação(index)} className='xis h-full justify-center items-center'>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-0.5 text-[#121926] scale-125 duration-300 cursor-pointer'>
                      <path d="M1 9L9 1" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 9L1 1" stroke="currentColor" strokeWidth="2" />
                    </svg>

                  </div>

                </div>
              ))}

            </div>

            <textarea
              className='w-full h-full rounded-2xl p-4 pl-4 outline-none resize-none bg-[#C9D4E9]  max-md:text-[14px]'
              onChange={PegarValorTextAreaDaFormação}
              value={TextAreaFormação}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  ValorFormação();
                  e.preventDefault(); // Impede a quebra de linha
                }
              }}
            />

            <p className={`w-full text-center text-red-600 text-[16px] font-poppins duration-500 max-xl:text-[18px] max-xl:mb-1 ${LimiteCharFormação ? 'opacity-100' : 'hidden'}`}>Limite de caracteres excedido</p>

            <button className='absolute right-6 bottom-4' onClick={ValorFormação}>
              <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.6667 2L20.75 24.9167M43.6667 2L29.0833 43.6667L20.75 24.9167M43.6667 2L2 16.5833L20.75 24.9167" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}