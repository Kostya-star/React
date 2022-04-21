import NavbarCSS from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className={NavbarCSS.nav}>
      <NavLink to='/profile' activeClassName={NavbarCSS.activeLink} className={NavbarCSS.nav__item}>Profile</NavLink>
      <NavLink to='/dialogs' activeClassName={NavbarCSS.activeLink} className={NavbarCSS.nav__item}>Messages</NavLink>
      <NavLink to='/news' activeClassName={NavbarCSS.activeLink} className={NavbarCSS.nav__item}>News</NavLink>
      <NavLink to='/music' activeClassName={NavbarCSS.activeLink} className={`${NavbarCSS.nav__item}  ${NavbarCSS.nav__item_active}`}>Music</NavLink>
      <NavLink to='/settings' activeClassName={NavbarCSS.activeLink} className={NavbarCSS.nav__item}>Settings</NavLink>
      <NavLink to='/friends' activeClassName={NavbarCSS.activeLink} className={NavbarCSS.nav__item}>Friends</NavLink>
    </nav>
  )
}
export default Navbar;