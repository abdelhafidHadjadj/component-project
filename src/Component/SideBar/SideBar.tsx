import { Link } from "react-router-dom"


function SideBar() {
    return(
        <aside>
            <Link to="#">item 1</Link>
            <Link to="#">item 2</Link>
            <Link to="#">item 3</Link>
            <Link to="#">item 4</Link>
        </aside>
    )
}

export default SideBar