export default function TextSpecial(options: any) {
  const paragraf = <p className="text-base text-[#00d9a6] font-quicksand font-medium leading-loose tracking-widest uppercase animate-bounceIn">{options.options.text}</p>
  return (
    <>
      {options.options.overflow ?  <div className="overflow-hidden">{paragraf}</div> : <div>{paragraf}</div>}
    </>
  )
}