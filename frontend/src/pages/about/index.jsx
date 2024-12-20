import { Footer } from '../../components/footer_nasomemob';
import { Header } from '../../components/header';
import { Participants } from './sections/participants';
import { Us } from './sections/us';


export function About() {

  /*if(logged == true ){
    return (
    <section className='max-w-6xl flex flex-col items-center justify-start pt-8 mx-auto gap-16'>
      <HeaderDash />
      <Us />
      <Participants />
      <Footer />
    </section>
  );}else{*/
  return (
    <section className='max-w-6xl flex flex-col items-center justify-start pt-8 mx-auto gap-16 lg:px-6'>
      <Header />
      <Us />
      <Participants />
      
      <Footer />
    </section>
  );
}