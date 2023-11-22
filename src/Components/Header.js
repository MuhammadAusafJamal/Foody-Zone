import { NavScrollExample, Offcanvas } from "./Navbar";
import AlignmentExample from "./Nav"

function Header() {

    return (
        <header>
            <div className="logo pt-4">
                {window.innerWidth > "900" ? <NavScrollExample /> : <Offcanvas />}
            </div>
            {window.innerWidth > "900" ? <AlignmentExample /> : ""}
        </header>
    )

}


export default Header;