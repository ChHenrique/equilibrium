export function HeaderLinkMobile ({ children, href }) {
  return (
    <a
      href={href}
      className=" mb-2 font-poppins text-base font-medium text-slate-600 hover:text-hover hover:font-semibold transition ease min-w-fit duration-200 cursor-pointer"
      draggable="false"
    >
      {children}
    </a>
  );
}