
import classes from './Navbar.module.css';

const Navbar = () =>  {
    return <nav className={classes.nav}>
    <div><a>Profile</a></div>
    <div><a>Messages</a></div>
    <div><a>Mews</a></div>
    <div><a>Music</a></div>
    <div><a>settings</a></div>
  </nav>
}

export default Navbar;