import { SearchIcon } from "lucide-react"



const Search = () => {
  return (
    <div className="container flex-center py-8">
        <div className=" flex items-center bg-gray-100 rounded-sm p-2 w-2/4">
            <SearchIcon className="text-gray-400"/>
            <input 
                type="text" 
                placeholder="Search for Courses/Projects"
                className="py-2 px-3 w-full focus:outline-none bg-gray-100 rounded-sm "
            />
        </div>
    </div>
  )
}

export default Search