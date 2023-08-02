import HeroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'
// import { socialNetworks } from '../../constants'

import { RiFileDownloadLine, RiGalleryLine } from 'react-icons/ri'
import { technologiesBackend, technologiesFrontend } from '../../constants'

export default function Hero () {
  const [t] = useTranslation('global')
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            {/* <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hola
            </h5> */}
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-3xl sm:text-3xl leading-[35px] sm:leading-[46px] mt-4"
            >
              {t('hero.h1-text')} <br />{' '}
              <span className="text-primaryColor">{t('hero.p-text')}</span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a
                href="./cv.pdf"
                target="_blank"
                download
                className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-lg"
              >
                <RiFileDownloadLine className="text-2xl" />{' '}
                {t('hero.download-btn')}
              </a>
              <a
                href="#portfolio"
                className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-lg"
              >
                <RiGalleryLine className="text-2xl" />
                {t('hero.works-btn')}
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex items-center gap-2 text-headingColor mt-6 font-[500] text-sm leading-7"
            >
              {t('hero.description')}
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex items-center gap-2 text-headingColor mt-4 font-[600] text-lg leading-7"
            >
              {t('hero.p-technologies')}
            </p>
            <div className="w-[380px] overflow-hidden overflow-x-scroll sm:overflow-auto sm:w-full">
              <div
                data-aos="fade-right"
                className="flex items-center gap-9 mt-4"
              >
                <span className="text-smallTextColor text-sm font-[600]">
                  Frontend:
                </span>
                {technologiesFrontend.map((tec, index) => (
                  <span
                    key={index}
                    className="text-xl text-primaryColor hover:text-headingColor"
                  >
                    {tec}
                  </span>
                ))}
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center gap-9 mt-4"
              >
                <span className="text-smallTextColor text-sm font-[600]">
                  Backend:
                </span>
                {technologiesBackend.map((tec, index) => (
                  <span
                    key={index}
                    className="text-xl text-primaryColor hover:text-headingColor"
                  >
                    {tec}
                  </span>
                ))}
              </div>
            </div>
            {/* <div className="flex items-center gap-9 mt-4">
              <span className="text-smallTextColor text-sm font-[600]">
                Sígueme en:
              </span>
              {socialNetworks.map((soc) => (
                <span key={soc.id}>
                  <a
                    href={soc.url}
                    className="text-smallTextColor text-2xl font-[600]"
                  >
                    {soc.icon}
                  </a>
                </span>
              ))}
            </div> */}
          </div>
          {/* hero left end */}
          {/* hero img */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={HeroImg} alt="Hero Image" />
            </figure>
          </div>
          {/* hero img end */}
          {/* hero content right */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[26px]">
                <CountUp start={0} end={2} duration={3} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[14px]">
                {t('hero.h4-experienceYears')}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[26px]">
                <CountUp start={0} end={5} duration={3} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[14px]">
                {t('hero.h4-projectsCompleted')}
              </h4>
            </div>
          </div>
          {/* hero content right end */}
        </div>
      </div>
    </section>
  )
}
