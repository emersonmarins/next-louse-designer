import Image from "next/image"
import louseSoftDesign from "/public/louseSoftDesign.webp"

export default function Logo(options: any) {
  return (
    <Image
      src={louseSoftDesign}
      alt="Louse Soft Design Logo"
      className="dark:invert"
      width={240}
      height={240}
      priority
      style={{
        width: options.options.width ? options.options.width : '100%',
        height: 'auto',
      }}
    />
  )
}