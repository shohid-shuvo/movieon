import React, {useState} from 'react'


const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const searchValueCng = (e) => {setSearchValue(e.target.value)}

  return (
    <>
      <form>   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>

            <input  type="search" value={searchValue} onChange={searchValueCng} id="default-search" class="block h-[45px] w-full py-4 pl-9 pr-[100px] text-sm text-white-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your favorite movie..." required />

            <button type="submit" class="text-gray-800 absolute end-2.5 top-[50%] translate-y-[-50%] bg-amber-500 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:shadow font-medium rounded-sm text-sm px-4 py-2 dark:bg-amber-300 dark:hover:bg-amber-400 ">Search</button>
        </div>

    </form>

    <Search />
    </>
  )
}

export default Search
