import React from "react";
import { ReactComponent as IconFacebook } from "../../icons/facebook.svg";
import { ReactComponent as IconGithub } from "../../icons/github.svg";

export const FAQs = () => {
  return (
    <div className="mt-24">
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">
              <img src="/assets/Logo.png" alt="" />
            </a>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com/albert.valdemorasuarez"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="icon" />
            </a>
            <a
              href="https://github.com/Albert-Valdemora"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Prepárese para el cambio.</h1>
            <p>
            Próximamente publicaremos el sitio web. Visite nuevamente para obtener más información.
            </p>
          </div>
          
        </div>
        <div className="footer">
          <span>
          Creado por {" "}
            <a
              className="underlined"
              href="https://github.com/Albert-Valdemora"
              target="_blank"
              rel="noopener noreferrer"
            >
              Albert
            </a>{" "}
            using{" "}
            <a
              className="underlined"
              href="https://reactjs.org/"
              title="ReactJS"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{" "}
            |{" "}
            <a
              className="underlined"
              href="https://github.com/Albert-Valdemora/ScreenNest"
              title="GitHub repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
