export default function Text(options: object | any) {
  
  const styles = {
    fontSize: options.options.fontSize ? options.options.fontSize+'rem' : '0.875rem',
    fontFamily: options.options.fontFamily ? 'Arial, Helvetica, sans-serif' : 'Ubuntu, sans-serif',
    color: options.options.color ? options.options.color : 'rgb(118, 118, 118)',
    textTransform: options.options.textTransform ? options.options.textTransform : 'capitalize',
    fontWeight: options.options.fontWeight ? options.options.fontWeight : '400',

  }
  switch (options.options.tag) {
    case "p":
      return <p className="text-sm font-ubuntu font-light text-zinc-400 opacity-0 animate-showElement max-w-[600px] max-project-lg:max-w-[400px]" style={styles}>{options.options.text}</p>
    case "span":
      return <span className="text-sm font-ubuntu font-light text-zinc-400 opacity-0 animate-showElement max-w-[600px] max-project-lg:max-w-[400px]" style={styles}>{options.options.text}</span>
    default:
      break;
  }
}