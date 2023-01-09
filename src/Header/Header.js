import { Link } from 'react-router-dom'

import './Header.css'
const header = () => {
  return (
    <div className='wa2'>    <header>
        <div class="nav container">
            <input type="checkbox" name="" id="menu"/>
            <label for="menu" class="bx bx-menu" id="menu-icon"></label>
            <ul class="navbar">
                <li><img src="erentilog3.png" alt="" id="photonav"></img></li>

                <li><a href="/">Home</a></li>
                <li><a href="/#">features</a></li><a href="#features">
                </a><li><a href="/#"></a><a href="#sales">Properties</a></li>
                <li><a href="/#*">about us</a></li>
            </ul>
            <Link to="/Login" class="btn">Log In</Link>
           </div>

    </header>
    </div>
  )
}

export default header