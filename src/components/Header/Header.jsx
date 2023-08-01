import { useRef } from 'react'
import { RiSendPlaneFill, RiMenuFill } from 'react-icons/ri'

export default function Header () {
  const menuRef = useRef(null)

  const toogleMenu = () => menuRef.current.classList.toggle('show_menu')
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
                Portfolio
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
          </div>
          {/* logo end */}
          {/* menu start */}
          <div className="menu" ref={menuRef} onClick={toogleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  Acerca de
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#services">
                  Servicios
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#portfolio">
                  Trabajos
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          {/* menu end */}
          {/* menu right */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-lg max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-200">
              <RiSendPlaneFill />
              Contactame
            </button>

            <span onClick={toogleMenu} className="text-2xl text-smallTextColor cursor-pointer md:hidden">
              <RiMenuFill />
            </span>
          </div>
          {/* menu end */}
        </div>
      </div>
    </header>
  )
}
