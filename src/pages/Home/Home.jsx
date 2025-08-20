import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import accommodations from '../../datas/accommodations.json'
import './Home.scss'
import HomeBanner from '../../assets/home-banner.png'

function Home() {
  return (
    <>
      <Banner
        imagesrc={HomeBanner}
        altText="Photo d'une côte entre mer et falaise"
        text="Chez vous, partout et ailleurs"
      />
      <section className="gallery">
        {accommodations.map((accommodation) => (
          <Card
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
          />
        ))}
      </section>
    </>
  )
}

export default Home
