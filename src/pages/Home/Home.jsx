import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import accommodations from '../../datas/accommodations.json'
import './Home.scss'

function Home() {
  return (
    <>
      <Banner />
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
