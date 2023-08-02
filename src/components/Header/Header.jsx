import { useRef, useState } from 'react'
import { RiArrowDownLine, RiMenuFill, RiTranslate2 } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'
import DropdownBtn from '../per_comp/DropdownBtn'

export default function Header () {
  const menuRef = useRef(null)
  const [translateMenu, setTranslateMenu] = useState('hidden')
  const [t, i18n] = useTranslation('global')

  const toogleMenu = () => menuRef.current.classList.toggle('show_menu')
  const toogleTranslateMenu = () => {
    if (translateMenu === 'hidden') {
      setTranslateMenu('block')
    } else {
      setTranslateMenu('hidden')
    }
  }
  /* Mas adelante hacer la barra de navegacion fija */
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-[10px]">
            <span
              className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
            rounded-full flex items-center justify-center"
            >
              J
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                {t('header.h2-text')}
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                {t('header.p-text')}
              </p>
            </div>
          </div>
          {/* logo end */}
          {/* menu start */}
          <div className="menu" ref={menuRef} onClick={toogleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  {t('header.navigation1')}
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#services">
                  {t('header.navigation2')}
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#portfolio">
                  {t('header.navigation3')}
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  {t('header.navigation4')}
                </a>
              </li>
            </ul>
          </div>
          {/* menu end */}
          {/* menu right */}
          <div className="flex items-center gap-4">
            <button
              onClick={toogleTranslateMenu}
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-lg max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-200"
            >
              <RiTranslate2 />
              <RiArrowDownLine />
            </button>

            <DropdownBtn display={translateMenu} translateFn={i18n} t={t}/>

            <span
              onClick={toogleMenu}
              className="text-2xl text-smallTextColor cursor-pointer md:hidden"
            >
              <RiMenuFill />
            </span>
          </div>
          {/* menu end */}
        </div>
      </div>
    </header>
  )
}
