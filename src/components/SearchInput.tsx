import { MdSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <div className="sticky top-0 flex items-center w-full px-4 mb-3 bg-gray-600 rounded-full">
      <MdSearch />
      <input
        type="text"
        placeholder="Search Contacts"
        className="w-full px-5 py-1 text-gray-200 placeholder-gray-200 bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
