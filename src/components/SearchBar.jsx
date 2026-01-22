import './SearchBar.css';
export function SearchBar({ searchTerm, setSearchTerm }) {
    const handleClear = () => {
        setSearchTerm('');
    };
    return (    
    <>
    <div className='container'>
    <input type="text" placeholder="Search..." value={searchTerm} onChange={(inputValue) => setSearchTerm(inputValue.target.value)} className="input" />
    {searchTerm && <button className="cancel" onClick={handleClear}>x</button>}
    </div>
    </>
    )};
export default SearchBar;