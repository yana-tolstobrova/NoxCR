import search from "../assets/search.svg"
import { Link } from "react-router-dom"

function Search() {
    return (
        <Link to="/">
            <img src={search} alt="icon-search" /> 
        </Link>
    )
}

export default Search