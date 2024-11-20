import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Banner } from './sections/banner';
import { Services } from './sections/services';

export function Home() {
  return (
    <div className='px-12 max-md:px-6'>
    <section className='max-w-6xl flex flex-col items-center justify-start  mx-auto gap-16'>
      <Header />
      <Banner />
      <Services />
      <Footer />
    </section>
    </div>
  );
}