import Banner from '../../components/Banner/Banner'
import AboutBanner from '../../assets/about-banner.png'
import Collapse from '../../components/Collapse/Collapse'
import aboutContent from '../../datas/about-content.json'
import './about.scss'

function About() {
  return (
    <>
      <Banner
        imagesrc={AboutBanner}
        altText="Photo d'une fôret avec des montagnes enneigées en arrière plan"
      />
      {aboutContent.map((item) => (
        <Collapse key={item.id} title={item.title} className="collapse-about">
          <p>{item.text}</p>
        </Collapse>
      ))}
    </>
  )
}

export default About
