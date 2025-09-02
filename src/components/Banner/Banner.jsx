import './banner.scss'

function Banner({ imagesrc, altText, text }) {
  return (
    <section className="banner">
      <img
        src={imagesrc}
        alt={altText}
        className={text ? 'banner-img text' : 'banner-img'}
      />
      {text && <p>{text}</p>}
    </section>
  )
}

export default Banner
