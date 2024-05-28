
const SearchInput = ({searchValue, setSearchValue})=>{
    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchValue}
                onChange={(e)=> setSearchValue(e.target.value)}
            />
        </div>
    )
}

export default SearchInput