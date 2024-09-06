export function Card({ title, text, imageUrl }) {
  return (
    <div
      key={title}
      className="w-72 h-[24rem] bg-white flex justify-center items-center flex-col rounded-2xl p-4 transition ease-out duration-500 card-active scale-95 opacity-70"
      id="card1"
    >
      <img src={imageUrl} alt="" className="w-44 m-4" />
      <strong className="text-base text-primary-800 flex justify-center items-center text-center font-poppins mb-1">
        {title}
      </strong>
      <h2 className="text-base text-slate-600 flex justify-center items-center text-center">
        {text}
      </h2>
    </div>
  );
}