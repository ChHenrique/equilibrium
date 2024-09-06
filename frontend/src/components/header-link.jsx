export function HeaderLink({ children, href }) {
  return (
    <a
      href={href}
      className="font-poppins text-base font-medium text-slate-600 hover:text-hover hover:font-semibold transition ease min-w-fit duration-200 cursor-pointer"
      draggable="false"
    >
      {children}
    </a>
  );
}