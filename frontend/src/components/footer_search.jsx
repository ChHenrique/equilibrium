import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/images/logo-title.svg';
import { FooterLink } from './footer-link';
import { LuMail } from 'react-icons/lu';

export function Footer_Search() {
  return (
    <footer className='w-full h-16 hidden bg-white  flex-col justify-center items-center rounded-t-xl py-2 gap-6 max-sm:hidden absolute bottom-0'>
      <img src={logo} alt="Logo Equilibrium" className='h-16 w-auto' />
      <div className='flex justify-center items-center gap-4'>
        <FooterLink href='#'>
          <FaWhatsapp size={20} />
        </FooterLink>
        <FooterLink href='https://www.instagram.com/equilibrium_web_/' >
          <FaInstagram size={20} />
        </FooterLink>
        <FooterLink href='#'>
          <LuMail size={20} />
        </FooterLink>
      </div>
      <span className='text-primary-600 font-satoshi-Regular text-sm'>
        © 2024 Equilibrium
      </span>
    </footer>
  )
}