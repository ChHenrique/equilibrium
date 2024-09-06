import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Participants } from './sections/participants';
import { Us } from './sections/us';
import { HeaderDash } from '../../components/headerDash';

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
    <section className='max-w-6xl flex flex-col items-center justify-start pt-8 mx-auto gap-16'>
      <Header />
      <Us />
      <Participants />
      <Footer />
    </section>
  );
}