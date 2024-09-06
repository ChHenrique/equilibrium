export function ParticipantsCard({name, description, imageUrl}) {
  return (
    <div
      key={name}
      className="w-[22rem] h-[26rem] bg-secondary-200 flex justify-center items-center rounded-2xl p-8 transition ease-out duration-500 gap-4 card-active scale-95 opacity-70 flex-col"
      id="card1"
    >
            <img src={imageUrl} alt="" className="size-32 object-cover rounded-full flex-shrink-0" />
      <div className='flex flex-col items-center'>
      <strong className="text-base text-primary-800  text-left font-poppins mb-1">
        {name}
      </strong>
      <span className="text-sm text-slate-600  text-center">
        {description}
      </span>
      </div>

    </div>
  );

}