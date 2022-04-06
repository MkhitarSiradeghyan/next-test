import s from '../styles/Footer.module.sass'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.top}>
            <div className={s.socials}>
              <img src={facebook.src} alt="facebook" />
              <img src={twitter.src} alt="twitter" />
              <img src={instagram.src} alt="instagram" />
            </div>
            <nav className={s.nav}>
              <div className={s.navlink}>About Us</div>
              <div className={s.navlink}>Contact Us</div>
              <div className={s.navlink}>Terms Of Use</div>
              <div className={s.navlink}>Privacy Policy</div>
            </nav>
          </div>

          <div className={s.copyright}>© 2022 All Rights Reserved</div>
        </div>
      </div>
    </div>
  )
}

export default Footer