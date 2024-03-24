import { cn } from "../../lib/utils";


export default function Text({className, options}:any) {
  
  const styles = {
    fontSize: options.fontSize ? options.fontSize+'rem' : '0.875rem',
    fontFamily: options.fontFamily ? 'Arial, Helvetica, sans-serif' : 'Ubuntu, sans-serif',
    color: options.color ? options.color : 'rgb(118, 118, 118)',
    textTransform: options.textTransform ? options.textTransform : 'capitalize',
    fontWeight: options.fontWeight ? options.fontWeight : '400',

  }
  switch (options.tag) {
    case "p":
      return <p className={cn("text-sm font-ubuntu font-light text-zinc-400 opacity-0 animate-showElement max-w-[600px] max-project-lg:max-w-[400px]", className)} style={styles}>{options.text}</p>
    case "span":
      return <span className={cn("text-sm font-ubuntu font-light text-zinc-400 opacity-0 animate-showElement max-w-[600px] max-project-lg:max-w-[400px]", className)} style={styles}>{options.text}</span>
    default:
      break;
  }
}