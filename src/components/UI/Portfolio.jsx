import { portfolioData } from '../../constants'
import { RiGithubFill, RiArrowRightCircleLine } from 'react-icons/ri'

export default function Portfolio () {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-4xl font-[700]">
              Mis <span className="text-primaryColor">trabajos</span>.
            </h3>
          </div>
          {/* <div className="flex gap-3">
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-lg">
              All
            </button>
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-lg">
              Web Design
            </button>
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-lg">
              UX Design
            </button>
          </div> */}
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap mt-12">
          {portfolioData?.map((portfolio, index) => (
            <div
              key={portfolio.id}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              /* Por ahora las imagenes tienes longitud definida de [680-550] */
              className="h-full max-w-[500px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              {/* h-72 */}
              <img
                src={portfolio.img}
                alt={portfolio.title}
                className="max-h-[400px] w-full object-cover object-center border-b"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-base font-[700] text-smallTextColor mb-1">
                    {portfolio.title}
                  </h2>
                  {portfolio.development && (
                    <span className="bg-gray-200 py-1 px-2 rounded-md text-md leading-0 font-semibold">
                      En desarrollo
                    </span>
                  )}
                </div>
                <p className="leading-relaxed mb-3">{portfolio.description}</p>
                {/* technologies */}
                <div className="mt-5 flex items-center gap-3 flex-wrap">
                  <h4 className="text-headingColor text-lg text-[700]">
                    Tecnologias:
                  </h4>
                  {portfolio.technologies.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 py-1 px-2 rounded-md text-sm leading-0"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center flex-wrap mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={portfolio.websiteUrl}
                    className={`flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 mr-2 rounded-lg max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-200 mb-2 sm:mb-0 ${
                      portfolio.development
                        ? 'pointer-events-none opacity-40'
                        : ''
                    }`}
                  >
                    Ver Demo
                    <RiArrowRightCircleLine className="text-xl" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={portfolio.githubUrl}
                    className={`flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 mr-2 rounded-lg max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-200 mb-2 sm:mb-0 ${
                      portfolio.development
                        ? 'pointer-events-none opacity-40'
                        : ''
                    }`}
                  >
                    Ver Repositorio
                    <RiGithubFill className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
