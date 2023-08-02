export default function DropdownBtn ({ display, translateFn, t }) {
  return (
    /* quitar fixed cuando termine desarrollo */
    <div
      className={`z-10 ${display} absolute top-20 right-10 bg-white divide-y divide-gray-100 rounded-lg
      shadow w-44 border border-smallTextColor`}
    >
      <ul className="py-2 text-sm text-gray-700 cursor-pointer">
        <li>
          <p
            onClick={() => translateFn.changeLanguage('es')}
            className="block px-4 py-2 hover:bg-smallTextColor hover:text-white ease-in duration-150"
          >
            {t('header.btn-translateEs')}
          </p>
        </li>
        <li>
          <p
            onClick={() => translateFn.changeLanguage('en')}
            className="block px-4 py-2 hover:bg-smallTextColor hover:text-white ease-in duration-150"
          >
            {t('header.btn-translateEn')}
          </p>
        </li>
      </ul>
    </div>
  )
}
