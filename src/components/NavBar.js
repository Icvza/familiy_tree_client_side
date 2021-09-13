import {Link} from "react-router-dom";




function NavBar() {
    return (
        <div class='nav-bar-master'>
            <div id="nav-bar">
                <Link to='/MemberForm'>
                    <button class="Nav__button" >Add to Familiy Tree</button>
                </Link>
                <Link to='/about'>
                    <button class="Nav__button" > about</button>
                </Link>
                <Link to='/members'>
                    <button class="Nav__button" > Familiy Tree </button>
                </Link>
            </div>
        </div>
    )
}


NavBar.defaultProps = {
    title: 'SOMETJTIIGNGNNG',
}

export default NavBar