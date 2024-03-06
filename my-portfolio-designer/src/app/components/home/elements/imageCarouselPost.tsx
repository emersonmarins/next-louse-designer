import Image from "next/image"

export default function ImageCarousel(options: any) {
  return (
    <Image
      src={options.options.src}
      alt="Louse Soft Design Logo"
      className="dark:invert"
      width={240}
      height={240}
      priority
      style={{
        width: options.options.width,
        height: options.options.height,
      }}
    />
  )
}