import Banner from "../components/Banner"

const Home = () => {
  const banners = [
    {
      title: "¡La magia llegó a nuestras tiendas!",
      bgColor: "bg-sbpink",
      textColor: "text-white",
      image: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-11%2FBANNER-WEB_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max",
      paragraph:
        "Sentí el cariño de esta temporada con tus favoritos y llena de sabor cada momento.",
      hasHashtag: true,
      hashtag: "#LlevemosLaMagia",
      isFlipped: false,
      hasButton: false,
      buttonText: "",
      buttonBorder: "",
    },
    {
      title: "Unite a algo más grande",
      bgColor: "bg-sblightblue",
      textColor: "text-sbgreen",
      image: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2F5%20Banner%20Reclutamiento%20704x600%20copy_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max",
      paragraph: "Revisá las oportunidades que tenemos para vos",
      hasHashtag: false,
      hashtag: "",
      isFlipped: true,
      hasButton: true,
      buttonText: "Postular acá",
      buttonBorder: "border-sbgreen",
    },
  ]

  return (
    <main>
      <section id="hero">
        <div className="wrapper">
          {banners.map((banner) => (
            <Banner
              key={banner.title}
              title={banner.title}
              bgColor={banner.bgColor}
              textColor={banner.textColor}
              image={banner.image}
              paragraph={banner.paragraph}
              hasHashtag={banner.hasHashtag}
              hashtag={banner.hashtag}
              isFlipped={banner.isFlipped}
              hasButton={banner.hasButton}
              buttonText={banner.buttonText}
              buttonBorder={banner.buttonBorder}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
