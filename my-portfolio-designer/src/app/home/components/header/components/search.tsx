import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  return (
    <form className="header__search-form flex relative right-0 justify-end grow w-40 lg:hidden">
      <input type="text" className="tw-search-input absolute w-36 -translate-y-1/2 top-1/2 right-14 placeholder:text-white placeholder:text-sm" placeholder="Pesquisar"/>
      <input type="text" className="tw-search-input absolute w-36 -translate-y-1/2 top-1/2 right-14 placeholder:text-white placeholder:text-sm" placeholder="Pesquisar"/>
      <button type="submit" className="bg-none border-none ml-5 w-6 hover:border-gray-300">
        <FontAwesomeIcon icon={faSearch} className="text-2xl text-green-400"></FontAwesomeIcon>
      </button>
    </form>
  )
}