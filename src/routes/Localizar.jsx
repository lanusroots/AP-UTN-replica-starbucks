const Localizar = () => {
    return (
      <div>
        <div className="bg-sbdarkgreen">
          <div className="md:max-w-[680px] mb-4 mx-auto">
            <h1 className="text-white text-[calc(1.2125rem+2.55vw)] font-bold py-12 px-5">
              Localizar tienda
            </h1>
          </div>
        </div>
        <div className="md:max-w-[680px] px-5 mt-4 mb-12 mx-auto">
          <div className="container mx-auto">
            <p className="opacity-80 mb-4">
            En Argentina posee unas 151 sucursales, las cuales cuentan con 1700 empleados. La empresa abrió su primera tienda en Buenos Aires en mayo de 2008. Más tarde se expandió por el conurbano bonaerense, Córdoba, Rosario, Mendoza. Neuquén y La Plata.
            </p>
            <img
              src="https://www.google.com/maps/d/thumbnail?mid=17OCgMWQa-SK6n_fsGgovGzTWbE0&hl=en"
              alt="mapa-tienda"
              className="w-full h-auto my-8"
            />
            
          </div>
        </div>
      </div>
    )
  }
  
  export default Localizar
  