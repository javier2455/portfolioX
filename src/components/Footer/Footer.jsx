import { RiGalleryLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'

export default function Footer () {
  const [t] = useTranslation('global')
  // const year = new Date().getFullYear()

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* footer top */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              {t('footer.h2-text')}
            </h2>
            <a
              href="#contact"
              className="bg-primaryColor w-[160px] text-white font-[500] flex items-center gap-2
              hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-lg"
            >
              <RiGalleryLine className="text-2xl" />
              {t('footer.btn-contact')}
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              {t('footer.p-text')}
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
                {t('header.navigation1')}
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-white"
                href="#services"
              >
                {t('header.navigation2')}
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-white"
                href="#portfolio"
              >
                {t('header.navigation3')}
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 font-[600] hover:text-white"
                href="#contact"
              >
                {t('header.navigation4')}
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
                    {t('footer.develop-name')}
                  </h2>
                  <p className="text-gray-400 font-[500] text-[14px]">
                    {t('footer.develop-work')}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-[14px] hover:text-white">
                {t('footer.copyright-text')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom end */}
    </footer>
  )
}
