import FooterLinks from "../components/FooterLinks"

const Footer = () => {
  const footerLinks = {
    about: [
      {
        title: "Nuestra historia",
        to: "",
      },
      {
        title: "Nuestra misión",
        to: "",
      },
      {
        title: "Nuestra cultura inclusiva y valores",
        to: "",
      },
      {
        title: "Nuestro café",
        to: "",
      },
      {
        title: "Historias y novedades",
        to: "",
      },
      {
        title: "Trabaja con nosotros",
        to: "",
      },
      {
        title: "Comunicados oficiales",
        to: "",
      },
    ],
    social: [
      {
        title: "Planeta",
        to: "",
      },
      {
        title: "Personas",
        to: "",
      },
    ],
    client: [
      {
        title: "Contacto",
        to: "",
      },
      {
        title: "Medios de pago",
        to: "",
      },
      {
        title: "Defensa de las y los consumidores",
        to: "",
      },
    ],
    experience: [
      {
        title: "Formas de comprar",
        to: "",
      },
      {
        title: "Delivery",
        to: "",
      },
    ],
    general: [
      {
        title: "Accesibilidad web",
        to: "",
      },
      {
        title: "Aviso de privacidad",
        to: "",
      },
      {
        title: "Condiciones de uso",
        to: "",
      },
      {
        title: "Mapa del sitio",
        to: "",
      },
    ],
  }

  return (
    <footer className="border border-t-gray-300 mt-8">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row my-4">
          <div className="lg:flex lg:justify-between leading-5">
            <div className="mx-4">
              <h6 className="my-4">Sobre nosotros</h6>
              <ul className="list-none space-y-4">
                {footerLinks.about?.map((link) => (
                  <FooterLinks
                    key={link.title}
                    title={link.title}
                    to={link.to}
                  />
                ))}
              </ul>
            </div>

            <div className="mx-4">
              <h6 className="my-4">Impacto social</h6>
              <ul className="list-none space-y-4">
                {footerLinks.social?.map((link) => (
                  <FooterLinks
                    key={link.title}
                    title={link.title}
                    to={link.to}
                  />
                ))}
              </ul>
            </div>

            <div className="mx-4">
              <h6 className="my-4">Atención al cliente</h6>
              <ul className="list-none space-y-4">
                {footerLinks.client?.map((link) => (
                  <FooterLinks
                    key={link.title}
                    title={link.title}
                    to={link.to}
                  />
                ))}
              </ul>
            </div>

            <div className="mx-4">
              <h6 className="my-4">Experiencia Starbucks</h6>
              <ul className="list-none space-y-4">
                {footerLinks.experience?.map((link) => (
                  <FooterLinks
                    key={link.title}
                    title={link.title}
                    to={link.to}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="px-3 lg:ml-auto my-4">
            <img
              className="h-20"
              src="https://www.starbucks.com.ar/static/images/footer-argentina.jpg"
              alt="data-fiscal"
            />
          </div>
        </div>

        <div className="block sm:flex flex-col items-center shadow shadow-slate-200 mt-4 px-4">
          <div className="my-4">
            <i className="text-3xl bi bi-facebook mx-2"></i>
            <i className="text-3xl bi bi-instagram mx-2"></i>
            <i className="text-3xl bi bi-linkedin mx-2"></i>
          </div>
          <ul className="list-none my-2 max-w-1/2 sm:flex justify-between sm:space-x-6 mb-4">
            {footerLinks.general?.map((link) => (
              <FooterLinks key={link.title} title={link.title} to={link.to} />
            ))}
          </ul>
          <h6 className="text-gray-400 no-underline mt-3 mb-0">
            &#169 2023. Starbucks Coffee Company. Reservados todos los derechos
          </h6>
          <small className="text-gray-400 no-underline break-words break-all pb-3">
            ar | prod | 64c8baae1500e545b61c4b253ff7112e0390c7a1 | 02/11/2023-05:16:51:712
          </small>
          <small className="text-gray-500 no-underline mb-0">
            Desarrollado por MAXIMILIANO FERNÁNDEZ
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
