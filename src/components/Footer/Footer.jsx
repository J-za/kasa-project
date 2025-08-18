import FooterNavLogo from '../../assets/dark-logo.png'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <img src={FooterNavLogo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer
