import { portfolioData } from '../../constants'

export default function Modal ({ activeId, setShowModal }) {
  const portfolio = portfolioData.find((portf) => portf.id === activeId)
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div
        className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-lg transform
      -translate-x-1/2 -translate-y-1/2 p-5"
      >
        <div>
          <figure className="border border-smallTextColor rounded-lg h-[300px] overflow-hidden">
            <img className="rounded-lg" src={portfolio.imgShort} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-2">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-7 text-smallTextColor">
            {portfolio.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-lg text-[700] mb-1">
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
        </div>
        <div className="flex justify-between items-center mt-6">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={portfolio.websiteUrl}
              className={`bg-primaryColor text-white py-2 px-4 my-8 rounded-lg font-[500] hover:bg-headingColor ease-in duration-300 mr-2 ${
                portfolio.development ? 'pointer-events-none opacity-40' : ''
              }`}
            >
              Ver Demo
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={portfolio.githubUrl}
              className={`bg-primaryColor text-white py-2 px-4 my-8 rounded-lg font-[500] hover:bg-headingColor ease-in duration-300 ${
                portfolio.development ? 'pointer-events-none opacity-40' : ''
              }`}
            >
              Ver Repositorio
            </a>
          </div>
          <div>
            {portfolio.development && (
              <span className="bg-gray-200 py-1 px-2 rounded-md text-lg leading-0 font-semibold">
                En desarrollo
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-gray-400 absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  )
}
