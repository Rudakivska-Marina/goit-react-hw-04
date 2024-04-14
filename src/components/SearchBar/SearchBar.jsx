import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

function SearchBar({onSubmit, setSearchValue}){

  function Submit(evt){
    setSearchValue("")
    evt.preventDefault();
    const form = evt.target;
		const value = form.elements.input.value;
		if(form.elements.input.value.trim() === "") {
			toast("Please enter search term!")
			return;
		}
    
		onSubmit(value);
    
    setSearchValue(value)
    
    form.reset();
};
  

    return (
        <header>
  <form onSubmit={Submit}>
    <input
    name="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images"
      className={css.input}
    />
    <button className={css.btn} type="submit">Search</button>
  </form>
</header>

    )
}

export default SearchBar;