export default function Title(options: object | any) {
  switch (options.options.tag) {
    case "h1":
      return <h1 className="inline text-5xl max-sm:text-4xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h1>
    case "h1-span":
      return <h1 className="inline text-5xl max-sm:text-4xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h1>
    case "h2":
      return <h2 className="inline text-4xl max-sm:text-3xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h2>
    case "h2-span":
      return <h2 className="inline text-4xl max-sm:text-3xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h2>
    case "h3":
      return <h3 className="inline text-3xl max-sm:text-3xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h3>
    case "h3-span":
      return <h3 className="inline text-3xl max-sm:text-3xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h3>
    case "h4":
      return <h4 className="inline text-2xl max-sm:text-2xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h4>
    case "h4-span":
      return <h4 className="inline text-2xl max-sm:text-2xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h4>
    case "h5":
      return <h5 className="inline text-2xl max-sm:text-2xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h5>
    case "h5-span":
      return <h5 className="inline text-2xl max-sm:text-2xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h5>
    case "h6":
      return <h6 className="inline text-1xl max-sm:text-1xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h6>
    case "h6-span":
      return <h6 className="inline text-1xl max-sm:text-1xl text-slate-800 font-quicksand font-extrabold leading-tight tracking-normal capitalize">{options.options.text}&nbsp;<span className=" max-sm:text-[2.0rem] text-[2.7rem] text-[#00d9a6] font-black font-quicksand capitalize">{options.options.textSpan}</span></h6>

    default:
      break;
  }
}