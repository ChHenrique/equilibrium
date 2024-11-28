import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import dhamyla from '../../../assets/images/participants/Dhamyla.jpeg'
import ricardo from '../../../assets/images/participants/ricardo.jpeg';
import claudio from '../../../assets/images/participants/claudio.jpeg';
import pedro from '../../../assets/images/participants/pedro.jpg';
import stefany from '../../../assets/images/participants/Stefany.jpeg'
import hellen from '../../../assets/images/participants/hellen.jpeg'
import isabele from '../../../assets/images/participants/isabele.jpeg'
import juan from '../../../assets/images/participants/juan.jpeg'

import { ParticipantsCard } from '../../../components/participant-card';

export function Participants() {
  const participants = [
    {
      id:3,
      name: 'Dhamyla Ivina',
      imageUrl: dhamyla,
      description:'Olá, meu nome é Dhamyla Ivina, sou estudante do 2° ano de Desenvolvimento de Sistemas. Minha área de especialização é back-end, onde me dedico a criar e otimizar a lógica por trás dos sistemas. Estou empolgada para explorar novas tecnologias e aprimorar minhas habilidades na programação.'
    },
    {
      id: 0,
      name: 'Paulo Ricardo',
      imageUrl: ricardo,
      description: 'Olá, sou Ricardo, desenvolvedor front-end na startup Equilibrium. Tenho experiência com React, Tailwind, JavaScript, HTML e CSS. Minha especialidade é criar interfaces modernas e responsivas, focadas em oferecer uma excelente experiência para o usuário. Estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos inovadores.',
    },
    {
      id: 1,
      name: 'Claudio Henrique',
      imageUrl: claudio,
      description: 'Sou Claudio, sou um estudante de Desenvolvimento de Sistemas, focado em back-end. Ele se especializa em criar e otimizar APIs com Node.js e trabalhar com bancos de dados para garantir eficiência e segurança. Claudio é apaixonado por resolver desafios complexos e explorar novas tecnologias. Na Equilibrium, ele contribui para o desenvolvimento de soluções robustas que melhoram a experiência dos usuários.',
    },
    {
      id: 2,
      name: 'Pedro Henrique',
      imageUrl: pedro,
      description: 'Me chamo Pedro Henrique, sou um estudante de Desenvolvimento de Sistemas e Front-End Developer na startup Equilibrium. Com habilidades avançadas em HTML, CSS, JavaScript e React, ele se especializa na criação e otimização de interfaces web para oferecer experiências de usuário eficientes e intuitivas. Pedro é comprometido com a excelência e a inovação, sempre buscando aprimorar suas competências e contribuir para o sucesso dos projetos.',
    },{
      id:3,
      name: "Estefany Ágata",
      imageUrl: stefany,
      description:"Meu nome é Estefany Ágata, tenho 17 anos e sou designer. Atualmente, estudo na Escola Francisca Nelita, onde estou no 2º ano do ensino médio. Estou fazendo um curso de desenvolvimento de sistemas, que complementa minha paixão pelo design. Adoro criar e explorar novas ideias visuais, e me considero boa nisso! Estou sempre em busca de aprender mais e aprimorar minhas habilidades para melhorar tornar uma profissional ainda melhor na área."
    },{
      id:4,
      name: "Hellen Kethili",
      imageUrl: hellen,
      description: " Sou a Hellen Kethili, tenho 17 anos , sou estudante do curso 2° Desenvolvimento de Sistemas e atuo como designer da startup Equilíbrium.Sou uma pessoa bastante criativa , Tenho uma abordagem criativa Para resolver problemas  sempre buscando soluções inovadoras e originais;me considero uma pessoa bastante curiosa, pois busco explorar novas técnicas , estilos e abordagens no design e sou muito detalhista também , prezo pela precisão e atenção nos detalhes em todos os aspectos. "
    },{
      id:5,
      name: "Isabelle Brito",
      imageUrl: isabele,
      description: "Meu nome é Isabelle Brito, tenho 16 anos e sou designer. Estou no 2º ano do ensino médio e faço um curso de desenvolvimento de sistemas, que complementa minha paixão pelo design. Adoro criar e explorar novas ideias visuais, e estou sempre buscando aprender mais e aprimorar minhas habilidades para me tornar uma profissional ainda melhor na área"
    },{
      id: 6,
      name: "Juan Carlos",
      imageUrl : juan,
      description : "Meu nome é Juan Carlos, tenho 16 anos e sou desenvolvedor Frontend. Estou no 2º ano do ensino médio e tenho paixão por criar interfaces interativas e dinâmicas. Sempre me atualizo sobre as tecnologias modernas para melhorar minhas habilidades no desenvolvimento Frontend e oferecer experiências incríveis aos usuários."
    }

  ]
  return (
    <section className='w-full h-[40rem] bg-white rounded-xl flex flex-col items-center py-8'>
     <h2 className='text-primary-700 font-satoshi-bold text-4xl'>Nosso Time</h2>
     <span className='text-primary-700 text-sm mt-2'>Desenvolvedores e colaboradores do Equilibrium</span>
     <div className='h-full w-full'>
        <Swiper
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 8000, disableOnInteraction: true }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        modules={[Autoplay, Navigation]}
      >
         {participants.map((participant) => (
          <SwiperSlide>
          <ParticipantsCard key={participant.id} name={participant.name} description={participant.description} imageUrl={participant.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </section>
  );
}