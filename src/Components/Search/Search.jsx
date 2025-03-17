import { useState } from "react";

export function Search() {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        event.preventDefault()
        console.log(query)
        setQuery("");
    }
  return (
    <div className="w-screen flex justify-items-end m-4">
    <form onSubmit={handleSearch} className="flex">
      <input className="bg-black p-2 text-neutral-500 focus:outline-none" type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
    </form>
    </div>
  );
}
