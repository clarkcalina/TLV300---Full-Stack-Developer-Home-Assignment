import { useState } from "react";

interface SearchBarProps {
  onSearch: (domain: string, type: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [domain, setDomain] = useState("");
  const [type, setType] = useState("domain");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(domain, type);
    console.log(domain, type);
  };

  return (
    <div className="max-w-5xl mx-auto flex mb-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center gap-6"
      >
        <div className="flex  w-full">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded-full p-3  w-3/4 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded-full p-3 ml-2 w-1/4"
          >
            <option value="domain">Domain Information</option>
            <option value="contact">Contact Information</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-1/4 ml-2 text-white rounded-full p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 mr-auto"
        >
          Submit
        </button>
      </form>
   
    </div>
  );
};

export default SearchBar;
