import React from "react";
import logo from "../assets/Logo-footer.svg";
import iconWhathsapp from "../assets/WPP.svg";
import iconTikTok from "../assets/tiktok.svg";
import iconFacebook from "../assets/facebook.svg"
import iconInstagram from"../assets/instagram.svg"
function Footer() {
  return (
    <footer className="bg-black" id="contacto">
      <div className="max-w-screen-xl px-4 py-14 mx-auto sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center" /*"grid grid-cols-1 lg:grid-cols-3"*/
        >
          <div className="w-2/6" /*"lg:col-span-1"*/>
            <img
              src={logo}
              className="mr-4 h-5 sm:h-9"
              alt="logo"
              style={{ height: "60px" }}
            />
            <p className="max-w-x mt-4 text-sm" style={{ color: "#A2A2A2" }}>
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

          <div className="w-max h-max" /*"lg:col-span-1"*/>
            <nav className="text-white text-center">
              <ul className="flex flex-col gap-4 justify-center">
                <li className="p-2">
                  <a className="hover:font-semibold hover:underline" href="#">
                    Productos
                  </a>
                </li>
                <li className="p-2">
                  <a className="hover:font-semibold hover:underline" href="#">
                    Cuidados
                  </a>
                </li>
                <li className="p-2">
                  <a className="hover:font-semibold hover:underline" href="#">
                    Contacto
                  </a>
                </li>
                <li className="p-2">
                  <a className="hover:font-semibold hover:underline" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="" /*"lg:col-span-1"*/>
          <div className="flex mt-8 space-x-6">
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
                  style={{ height: "35px" }}
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
                  style={{ height: "35px" }}
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
                  style={{ height: "35px" }}
                />
              </a>
              <a
                className="text-white"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Whatsapp</span>
                <img
                  src={iconWhathsapp}
                  alt="icono Whatsapp"
                  style={{ height: "35px" }}
                />
              </a>
            </div>
            <div className="flex flex-col mt-2 space-y-2 text-m text-white">
              <ul className="py-2 flex flex-col gap-2">
                <li>
                  <p className="font-light  text-white ">+506 8329 0039</p>
                </li>
                <li>
                  <p className="font-light text-sm text-white ">
                    noxcrlentes@gmail.com
                  </p>
                </li>
                <li>
                  <p className="underline text-white text-l ">Horario:</p>
                </li>
                <li>
                  <p
                    className="font-light text-sm text-white "
                    style={{ margin: "0" }}
                  >
                    Lunes a Viernes <br /> 10:00 a 12:00 y de 13:00 a 21:00.
                  </p>
                </li>
                <li>
                  <p
                    className="font-light text-sm text-white "
                    style={{ margin: "0" }}
                  >
                    Sábados <br /> 10:00 a 12:00
                  </p>
                </li>
                <li>
                  <p
                    className="font-light text-sm text-white "
                    style={{ margin: "0" }}
                  >
                    Domingos <br /> 10:00 a 12:00 y 13:00 a 18:00.
                  </p>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div
          className="container mx-auto py-4 px-5 flex flex-wrap flex-col items-center sm:flex-row"
          style={{ justifyContent: "center" }}
        >
          <p className="text-black text-m lg:text-center sm:text-center">
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
