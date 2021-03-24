/*
* file: searchbar.jsx
* Description:
*   -> A simple search bar for filtering
*/

const SearchBar = ({onChange, placeholder}) => {
  return (
    <>
      <div className="search-bar">
      <i className={["iconfont", "search-bar-icon"].join(" ")}>&#xe721;</i>
      <input className={"search-input"} type="text" placeholder={placeholder} onChange={onChange}/>
    </div>
    <style jsx>{`
      .search-bar {
        border: 1px solid #E1E8EC;
        border-radius: 6px;
        overflow: hidden;
      }
      .search-bar-icon {
        display: inline-block;
        padding: 8px 11px 8px 11px;
        background-color: #EFF6FA;
        color: #B7BFC6;
      }
      .search-input {
        outline: none;
        padding: 5px 5px;
        font-size: 16px;
        color: #000;
        font-weight: 300;
        border: none;
      }
    `}</style>
    </>
  )
}

export default SearchBar;
