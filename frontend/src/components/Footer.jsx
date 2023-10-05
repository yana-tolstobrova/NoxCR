import React from "react";
import logo from "../assets/Logo-footer.svg";
import iconWhathsapp from "../assets/WPP.svg";
import iconTikTok from "../assets/tiktok.svg";
import iconFacebook from "../assets/facebook.svg";
import iconInstagram from "../assets/instagram.svg";

function Footer() {
  return (
    <footer className="bg-black" id="contacto">
        <div className="w-[90%] py-14 mx-auto flex justify-between">
          <div className="flex flex-column justify-between align-items-start md:flex-col md:justify-start md:w-[900px]">
            <div>
              <img
                src={logo}
                className="absolute h-20 md:h-20 2xl:h-32"
          
                alt="logo"
              />
            </div>
            <p className="w-full mt-4 text-lg hidden md:block md:w-[60%] md:text-sm 2xl:text-2xl" style={{ color: "#A2A2A2" }}>
            "Nox.Cr es una tienda virtual costarricense muy querida por artistas de maquillaje, drags , cosplayers y modelos, quien dio sus inicios un Octubre del 2018.  </p>

              


            
          </div>


          <div className="mt-36 mr-32 md:mt-20">
            <nav className="text-white">
              <ul className="mx-auto">
                <li className="pb-4">
                  <a className="hover:font-semibold hover:underline text-xl md:text-base 2xl:text-2xl" href="#productos">
                    Productos
                  </a>
                </li>
                <li className="pb-4">
                  <a className="hover:font-semibold hover:underline text-center text-xl md:text-base 2xl:text-2xl" href="#cuidados">
                    Cuidados
                  </a>
                </li>
                <li className="pb-4">
                  <a className="hover:font-semibold hover:underline text-center text-xl md:text-base 2xl:text-2xl" href="#">
                    Contacto
                  </a>
                </li>
                <li className="pb-4">
                  <a className="hover:font-semibold hover:underline text-center text-xl md:text-base 2xl:text-2xl" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <div className="flex space-x-6 md:space-x-2 xl:space-x-4">
              <a
                className="text-white"
                href="https://www.facebook.com/NOXCRLentes"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <img
                  src={iconFacebook}
                  alt="icono Facebook"
                  className="h-14 md:h-20 2xl:h-24"
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
                  className="h-14 md:h-20 2xl:h-24"
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
                  className="h-14 md:h-20 2xl:h-24"
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
                  className="h-14 md:h-20 2xl:h-24"
                />
              </a>
            </div>
      

            <div className="flex flex-col mt-6 space-y-2 text-m text-white 2xl:mt-8 md:mt-2">
              <ul className="py-2 flex flex-col gap-2 2xl:gap-4">
                <li>
                  <p className="font-light text-white text-xl md:text-base 2xl:text-4xl">+506 8329 0039</p>
                </li>
                <li>
                  <p className="font-light text-white text-lg md:text-sm  2xl:text-3xl">
                    noxcrlentes@gmail.com
                  </p>
                </li>
                <li>
                  <p className="underline text-white text-xl md:text-base  2xl:text-4xl">Horario:</p>
                </li>
                <li>
                  <p
                    className="font-light text-lg text-white md:text-sm 2xl:text-3xl"
                  >
                    Lunes a Viernes <br /> 10:00 a 12:00 y de 13:00 a 21:00.
                  </p>
                </li>
                <li>
                  <p
                    className="font-light text-lg text-white md:text-sm 2xl:text-3xl"
                  >
                    Sábados <br /> 10:00 a 12:00
                  </p>
                </li>
                <li>
                  <p
                    className="font-light text-lg text-white md:text-sm 2xl:text-3xl"
                  >
                    Domingos <br /> 10:00 a 12:00 y 13:00 a 18:00.
                  </p>
                </li>
              </ul>
            </div>
            </div>
         
        </div>




        <div className="bg-white">
          <div
            className="mx-auto py-4 px-5 items-center"
          >
            <p className="text-black text-xl text-center 2xl:text-3xl">
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