import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../../../components/card';
import { Autoplay, Navigation } from 'swiper/modules';

import Card1 from '../../../assets/images/cards/card1.png';
import Card2 from '../../../assets/images/cards/card2.png';
import Card3 from '../../../assets/images/cards/card3.png';

export function Services() {
  const cards = [
    {
      id: 1,
      title: 'Agende Facilmente',
      img: Card1,
      text: 'Escolha entre consultas online ou presenciais e agende no horário que for mais conveniente para você, tudo em poucos cliques.',
    },
    {
      id: 2,
      title: 'Encontre Seu Psicólogo Ideal',
      img: Card2,
      text: 'Navegue por perfis de psicólogos especializados, leia avaliações de outros clientes e escolha o profissional perfeito para suas necessidades.',
    },
    {
      id: 3,
      title: 'Segurança e Privacidade',
      img: Card3,
      text: 'Realize pagamentos de forma segura diretamente pela plataforma e tenha a certeza de que suas informações são protegidas.',
    },
  ]


  return (
    <section className='w-full h-[36rem] bg-primary-700 rounded-xl'>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        modules={[Autoplay, Navigation]}
      >
        {cards.map((card) =>
         <SwiperSlide className='group'>
             <Card
               key={card.id}
               title={card.title}
               text={card.text}
               imageUrl={card.img}
             />
           </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}