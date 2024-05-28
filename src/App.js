import logo from './logo.svg';
import  SearchInput from './Components/SearchInput'
import { useState } from 'react';
import List from './Components/List'
import useDebounce from './Hooks/useDebounce';


function App() {
  const [searchValue, setSearchValue] = useState('')

  const debouncedSearchValue = useDebounce(searchValue);

  return (
    <div className="App">
      <SearchInput
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <List
        searchTerm={debouncedSearchValue}
      />
    </div>
  );
}

export default App;
