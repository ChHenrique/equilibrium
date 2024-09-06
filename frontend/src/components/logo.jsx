import logo from '../assets/images/logo.svg'

export function Logo() {
  return (
    <a
      id="Logo"
      className="font-satoshi-bold relative h-20 w-80 items-center justify-center flex"
      draggable="false"
      href="/"
    >
      <img
        src={logo}
        alt="Logo Equilibrium"
        className="h-9 w-80"
        draggable="false"
      />
    </a>
  )
}