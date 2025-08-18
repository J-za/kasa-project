import HomeBanner from '../../assets/home-banner.png'
import './banner.scss'

function Banner() {
  return (
    <section>
      <img src={HomeBanner} alt="Photo d'une cote entre mer et falaise" />
      <p>Chez vous, partout et ailleurs</p>
    </section>
  )
}

export default Banner
