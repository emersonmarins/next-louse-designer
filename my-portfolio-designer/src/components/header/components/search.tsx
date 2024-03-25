import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Search() {
  return (
    <div className="flex justify-end items-center grow max-lg:hidden">
      <ul>
        <li className="flex gap-7">
          <FaFacebook className="text-zinc-600 text-3xl" />
          <FaInstagram className="text-zinc-600 text-3xl" />
          <FaWhatsapp className="text-zinc-600 text-3xl" />
        </li>
      </ul>
    </div>
  )
}