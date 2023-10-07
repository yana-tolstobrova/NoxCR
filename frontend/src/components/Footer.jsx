import React from "react";
import logo from "../assets/Logo-footer.svg";
import iconWhathsapp from "../assets/WPP.svg";
import iconTikTok from "../assets/tiktok.svg";
import iconFacebook from "../assets/facebook.svg";
import iconInstagram from "../assets/instagram.svg";

function Footer() {
  return (
    <footer className="bg-black" id="contacto" data-testid="footer">
        <div className="py-16 px-10 xl:px-28 flex md:px-10 flex-col md:flex-row items-center">
          <div className="md:w-1/3 w-full flex justify-center mb-4">
            <div className="xl:w-[75%] md:w-full">
                <img
                src={logo}
                className="h-16"
                alt="logo"
              />
            <p className="mt-8 hidden font-light md:block md:text-base text-[#A2A2A2] block ">
            "Nox.Cr es una tienda virtual costarricense muy querida por artistas de maquillaje, drags , cosplayers y modelos, quien dio sus inicios un Octubre del 2018.  </p>
            </div>
          </div>
          <div className="w-1/3 flex justify-center hidden md:flex">
            <nav className="text-[#A2A2A2]">
              <ul>
                <li className="pb-4">
                  <a className="hover:text-white text-base" href="#productos">
                    Productos
                  </a>
                </li>
                <li className="pb-4">
                  <a className="hover:text-white text-center text-base" href="#cuidados">
                    Cuidados
                  </a>
                </li>
                <li className="pb-4">
                  <a className="hover:text-white text-center text-base" href="#">
                    Contacto
                  </a>
                </li>
                <li className="pb-4">
                  <a className="hover:text-white text-center text-base" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-1/3 flex flex-col items-center">
            <div>
              <div className="flex space-x-6 md:space-x-2">
              <a
                href="https://www.facebook.com/NOXCRLentes"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <img
                  src={iconFacebook}
                  alt="icono Facebook"
                  className="h-14 md:h-10"
                />
              </a>
              <a
                className="text-white"
                href="https://www.instagram.com/noxcrlentes"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <img
                  src={iconInstagram}
                  alt="icono Instagram"
                  className="h-14 md:h-10"
                />
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
                  className="h-14 md:h-10"
                />
              </a>
              <a
                className="text-white"
                href="https://wa.me/50684993726"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Whatsapp</span>
                <img
                  src={iconWhathsapp}
                  alt="icono Whatsapp"
                  className="h-14 md:h-10"
                />
              </a>
            </div>
      

            <div className="flex flex-col mt-6 space-y-2 text-[#A2A2A2]">
              <ul className="py-2 flex flex-col gap-2">
                <li>
                  <a className="font-light text-xl md:text-sm hover:text-white" href="tel:+50683290039">+506 8329 0039</a>
                </li>
                <li>
                  <a className="font-light text-xl md:text-sm hover:text-white" href="mailto:noxcrlentes@gmail.com">noxcrlentes@gmail.com</a>
                </li>
                <li>
                  <p className="text-xl xl:text-base text-white">Horario:</p>
                </li>
                <li>
                  <p
                    className="font-light text-lg md:text-sm"
                  >
                    Lunes a Viernes: 10:00 - 12:00 y 13:00 - 21:00
                  </p>
                </li>
                <li>
                  <p
                    className="font-light text-lg md:text-sm"
                  >
                    Sábados: 10:00 - 12:00
                  </p>
                </li>
                <li>
                  <p
                    className="font-light text-lg md:text-sm"
                  >
                    Domingos: 10:00 - 12:00 y 13:00 - 18:00
                  </p>
                </li>
              </ul>
            </div>
            </div>        
            </div>
            
        </div>
        <div className="bg-white">
          <div
            className="mx-auto py-2 px-5 items-center"
          >
            <p className="text-black text-sm text-center">
              Copyright© Druzi All Rights Reserved. —
              <a
                href="https://www.instagram.com/noxcrlentes"
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