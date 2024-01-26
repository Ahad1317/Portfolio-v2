import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Abdul Ahad</span>
            <div className="links">
                <a href="#">About</a>
                <a href="#">Experience</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar