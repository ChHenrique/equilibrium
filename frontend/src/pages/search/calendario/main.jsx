import { Psicologo } from "../componente_psicologos/info_psicologo1";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { Bolas } from "./bolas";
import calendarioMain from "../../../assets/images/calendarioMain.svg"
import seta from "../../../assets/images/seta.svg"
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import "./index.css"

export function Main() {

  // Armazena a props psicologo, entretanto, não é adequado usar isso
  const nomePsicologo = Psicologo.nome;

  // Localiza e pega os dados do calendario
  const [startDate, setStartDate] = useState(new Date());

  // Armazena o valor
  const [dataSelecionada, setDataSelecionada] = useState("");;

  const handleDateChange = (date) => {
    setStartDate(date);
    setDataSelecionada(date.toLocaleDateString());
  };
  // useState para atualizar o valor do horario
  const [horario, setHorario] = useState('');

  const handleHorarioChange = (horario) => {
    setHorario(horario);
  };

  // Atualiza o valor da etapa, saiba que Etapa começa do 1
  const [etapa, setEtapa] = useState(1);

  // Verifica o valor da data e avança para etapa 2 se não houver errors
  const SetaAvançarEtapa1 = () => {
    if (etapa === 1 && dataSelecionada !== "") {
      setEtapa(2);
    }
  };

  // Caso queira voltar da etapa 1, estando na 2
  const SetaVoltarEtapa1 = () => {
    if (etapa === 2) {
      setEtapa(1);
    }
  };

  // Verifica o valor da horário e avança para etapa 3 se não houver errors
  const SetaAvançarEtapa2 = () => {
    if (etapa === 2 && horario !== ""){
      setEtapa(3)
    }
  }

  return (

    // Div main
    <div className="flex flex-col items-center h-[70vh] w-[95vw] bg-slate-900 rounded-2xl shadow-xl">
      <h1 
      draggable='true' 
      className='mt-5 font-satoshi text-[26px] font-bold text-white'>
        Escolha o dia e horario para o Psi. Canela{nomePsicologo}
      </h1>

      {/* Div q armazena as 3 etapas*/}
      <div className="mt-7 flex items-center w-full h-[80%] space-x-14">
        
      {/* 1 Etapa, calendario*/}
        <div className={`bg-gray-100 h-full w-[30%] ml-5 p-2 flex font-satoshi text-primary-700 text-[20px] font-semibold space-y-20 flex-col items-center relative rounded-[10px] ${etapa === 1 ? '' : 'blur-sm pointer-events-none'}`}>

        <Bolas/>
        
          <h1 draggable='true' className='font-poppins text-[24px] font-medium text-slate-800 mt-5'>Escolha a data desejável</h1>
          
        {/* Blibioteca do calendario*/}
        <div className="w-full h-fit flex justify-center items-center text-slate-800">
           <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            required
            className="w-fit p-2 rounded-lg text-left m-1 border-slate-800 border-2 outline-none text-slate-800 z-10"
          />
          
           <img src={calendarioMain} alt="" className=" text-slate-800 -translate-x-10 z-0"/>
         </div>
         {/* Botão da seta, para passar a próx etapa*/}
          <button onClick={SetaAvançarEtapa1}>
          <img src={seta} alt="" className="w-16 h-16 text-slate-800 ml-1 relative transform -translate-y-1/5 transition-transform duration-300 -rotate-90"/>
          </button>

        </div>

        {/* 2 Etapa, horário */}
        <div className={`bg-gray-100 h-full w-[30%] ml-5 p-2 flex font-satoshi text-primary-700 text-[20px] font-semibold space-y-20 flex-col items-center relative rounded-[10px] ${etapa === 2 ? '' : 'blur-sm pointer-events-none'}`}>
          <Bolas/>

          <h1 draggable='true' className='font-poppins text-[24px] font-medium text-slate-800 mt-5'>Agora escolha o horário</h1>

      {/* Blibioteca horário*/}
          <TimePicker
              value={horario}
              use24Hours = {true}
              onChange={handleHorarioChange}
              format="HH:mm"
              disableClock="true"
              className="time text-slate-800"
              required={true}
          />

          <div className="w-4/5 flex justify-evenly items-center pt-5">

          {/* Button para voltar a etapa 1 */}
          <button onClick={SetaVoltarEtapa1}>
              <img src={seta} alt="" className="w-16 h-16 text-slate-800 ml-1 relative transform -translate-y-1/5 transition-transform duration-300 rotate-90"/>
          </button>

          {/* Button para avançar para à etapa 3 */}
          <button onClick={SetaAvançarEtapa2}>
             <img src={seta} alt="" className="w-16 h-16 text-slate-800 ml-1 relative transform -translate-y-1/5 transition-transform duration-300 -rotate-90"/>
          </button>
      </div>
    
        </div>

        {/* Etapa 3 */}

        <div className={`bg-gray-100 h-full w-[30%] ml-5 p-2 flex font-satoshi text-primary-700 text-[20px] font-semibold space-y-20 flex-col items-center relative rounded-[10px] ${etapa === 3 ? '' : 'blur-sm pointer-events-none'}`}>
          <Bolas/>
          <h1 draggable='true' className='font-poppins text-[24px] font-medium text-slate-800 mt-5'>Confirme suas prefêrencias!</h1>

          <div className="space-y-2 text-center">

          <p 
              draggable='true' className='font-poppins text-[22px] font-medium text-slate-800'>Dia: {dataSelecionada} 
          </p>

          <p 
              draggable='true' className='font-poppins text-[22px] font-medium text-slate-800'>Horário: {horario !== null ? horario : ''}
          </p>

          </div>

          <a href="/search">
              <button
                type="submit"
                className="bg-[#22252b] hover:bg-slate-900 text-white font-satoshi font-bold py-1 px-9 rounded-xl relative top-1 left-1"
                id="button_agendar_consulta"
              >
               Agendar
              </button>
          </a>
        </div>
      </div>
    </div>
  );
}
