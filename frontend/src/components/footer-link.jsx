export function FooterLink({ children, href }) {
  return (
    <a
      href={href}
      className="rounded-md bg-primary-300 size-8 flex justify-center items-center hover:brightness-105 transition-colors text-primary-800"
      draggable="false"
    >
      {children}
    </a>
  );
}
