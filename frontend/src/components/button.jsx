export function Button({children,link, ...props}) {
  return (
    <a href={link} className="w-fit">
    <button 
      className="bg-primary-500 px-3 max-md:hidden py-2 rounded-lg text-white text-base font-bold font-poppins md:mr-8 transition hover:bg-blue-700 ease duration-300 cursor-pointer"
      draggable="false" 
      {...props}
    >
      {children}
    </button>
    </a>
  )
}