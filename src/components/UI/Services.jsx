import { servicesData } from '../../constants'
import { useTranslation } from 'react-i18next'
// import { RiComputerLine } from 'react-icons/ri'
// import { RiComputerLine, RiServerLine, RiImageLine } from 'react-icons/ri'

export default function Services () {
  const [t] = useTranslation('global')
  return (
    <section className="" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-4xl mb-5">
            {t('services.h2-text')} <span className="text-primaryColor">{t('services.p-text')}</span>?
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            {t('services.description')}
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* vertical line running through the middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/* left card */}
              {servicesData().map((serv, index) => (
                <div key={serv.id} className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    {/* justify-start - justify-end */}
                    <div
                      className={`flex ${serv.cardLeft ? 'justify-start' : 'justify-end'} w-full mx-auto items-center`}
                    >
                      {/* pr-8 - pl-8 */}
                      <div className={`w-full pt-8 sm:pt-0 sm:w-1/2 ${serv.cardLeft ? 'pr-8' : 'pl-8'}`}>
                        <div
                          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            {serv.title}
                          </h3>
                          <p
                            className="text-[15px] text-smallTextColor group-hover:text-white
                        group-hover:font-[500] leading-7"
                          >
                            {serv.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Icon in line */}
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      {serv.icon}
                      {/* <RiComputerLine /> */}
                    </div>
                  </div>
                </div>
              ))}
              {/* right card */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
