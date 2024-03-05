export default function Button(options: any) {
  return (
    <span className="
      presentation__left-button opacity-0 w-44 my-5 py-4 px-5 text-white bg-gray-800 rounded-[2rem]
      uppercase cursor-pointer relative text-center animate-jelloHorizontal hover:bg-gradient-linear 
      transition-colors hover:transition-colors
      "
    >{options.options.text}</span>
  )
}