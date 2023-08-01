import ContactImg from '../../assets/images/contact.svg'
export default function Contact () {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <div className='mb-6'>
          <h2 className="text-headingColor font-[700] text-[2.5rem] mb-3 text-center">
            Puede <span className="text-primaryColor">contactarme</span>
          </h2>
          <p className="lg:w-full lg:text-center text-headingColor font-[500] text-[16px] leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
            non consectetur fugit obcaecati iure voluptatibus.
          </p>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px] flex items-center">
            <img
              className="w-[600px] h-[300px]"
              src={ContactImg}
              alt="Contact Image"
            />
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Ingrese su correo"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Asunto"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  maxLength={255}
                  placeholder="Ingrese su mensaje"
                  className="w-full p-3 focus:outline-none rounded-md"
                />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-md bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
