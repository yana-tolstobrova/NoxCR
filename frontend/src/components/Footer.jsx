import React from "react";
import logo from "../assets/Logo-footer.svg";
import iconWhathsapp from "../assets/icon-whatsapp.webp";
import iconTikTok from "../assets/tiktok.svg";


function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-screen-xl px-4 py-14 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <img
              src={logo}
              className="mr-4 h-5 sm:h-9"
              alt="logo"
              style={{ height: "60px" }}
            />
            <p className="max-w-x mt-4 text-white" style={{ fontSize: "14px" }}>
              Nox.Cr es una tienda virtual costarricense muy querida por
              artistas de maquillaje, drags, cosplayers y modelos, quien dio sus
              inicios un Octubre del 2018. Con una gama de más de 110 modelos
              diferentes para distintos usos y necesidades. Desde estilos
              naturales para el día a día o si deseas uno más fantasioso para tu
              cosplay, halloween o presentación teatral, tenemos lo que estás
              buscando y estaremos encantados de asesorarte.
            </p>
            <div className="flex mt-2 space-x-6 text-white"></div>
          </div>

          <div className="lg:col-span-1">
            <nav className="flex flex-col mt-12 space-y-4 text-m text-white text-center">
              <a className="hover:opacity-75" href="#">
                Productos
              </a>
              <a className="hover:opacity-75" href="#">
                Cuidados
              </a>
              <a className="hover:opacity-75" href="#">
                Contacto
              </a>
              <a className="hover:opacity-75" href="#">
                FAQ
              </a>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <div className="flex mt-8 space-x-6 ml-16">
              <a
                className="text-white"
                href="https://www.facebook.com/NOXCRLentes"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="text-white"
                href="https://www.instagram.com/noxcrlentes"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="text-white"
                href="https://www.tiktok.com/@noxcrlentesdecontacto"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">TikTok</span>
                        <img
              src={iconTikTok}
              alt="icono TikTok"
              style={{ height: "35px" }}
            />
              </a>
              <a
                className="text-white"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Whathsapp</span>
                    <img
              src={iconWhathsapp}
              alt="icono Whathsapp"
              style={{ height: "38px" }}
            />

              </a>
            </div>
            <nav className="flex flex-col mt-4 space-y-4 text-m text-white ml-16">
              <p className="text-white mt-2">+506 8329 0039</p>
              <p className="text-white mt-2">noxcrlentes@gmail.com</p>
              <p className="text-white text-l mt-2">Horario:</p>
              <p className="text-white ml-6 pl-6" style={{margin:'0'}}>Lunes a Viernes 10 a 12 y de 1 a 9</p>
              <p className="text-white ml-6 pl-6" style={{margin:'0'}}>Sábados 10 a 12</p>
              <p className="text-white ml-6 pl-6" style={{margin:'0'}}>Domingos 10 a 12 y 1 a 6</p>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div
          className="container mx-auto py-4 px-5 flex flex-wrap flex-col items-center sm:flex-row"
          style={{ justifyContent: "center" }}
        >
          <p className="text-black text-m lg:text-center sm:text-center">
            © 2023 Footer —
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-black ml-1"
              target="_blank"
            >
              @noxcrlentes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
