import NavbarCSS from './Navbar.module.css'


const Navbar = () => {
  return <nav className={NavbarCSS.nav}>
  <a href='#' className={NavbarCSS.nav__item}>Profile</a>
  <a href='#' className={NavbarCSS.nav__item}>Messages</a>
  <a href='#' className={NavbarCSS.nav__item}>News</a>
  <a href='#' className={`${NavbarCSS.nav__item}  ${NavbarCSS.nav__item_active}`}>Music</a>
  <a href='#' className={NavbarCSS.nav__item}>Settings</a>
</nav>
}
export default Navbar;