import { RiGalleryLine } from 'react-icons/ri'

export default function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* footer top */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              ¿Te gustaría hacer tus proyectos realidad?
            </h2>
            <a
              href="#contact"
              className="bg-primaryColor w-[160px] text-white font-[500] flex items-center gap-2
              hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-lg"
            >
              <RiGalleryLine className="text-2xl" />
              Contáctame
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              excepturi fuga nesciunt ducimus esse distinctio maiores
              laudantium, vitae tempora eaque!
            </p>
            {/* <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Sigueme:
              </span>
            </div> */}
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-10 mt-10">
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-white"
                href="#about"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-white"
                href="#services"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-white"
                href="#portfolio"
              >
                Trabajos
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-white"
                href="#contact"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* footer top end */}
      {/* footer bottom */}
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  J
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Javier Aleaga García
                  </h2>
                  <p className="text-gray-400 font-[500] text-[14px]">
                    Portfolio personal
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-gray-400 text-[14px] hover:text-white'>Copyright {year} desarrollado por Javier Aleaga García - Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom end */}
    </footer>
  )
}
