import {Link} from "react-router-dom";




function NavBar() {
    return (
        <div id="nav-bar">
            <Link to='/MemberForm'>
                <button>Add to Familiy Tree</button>
            </Link>
            <Link to='/about'>
                <button> about</button>
            </Link>
            <Link to='/members'>
                <button> Familiy Tree </button>
            </Link>
        </div>
    )
}


NavBar.defaultProps = {
    title: 'SOMETJTIIGNGNNG',
}

export default NavBar