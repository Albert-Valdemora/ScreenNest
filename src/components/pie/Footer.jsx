import React from "react";
import { Link } from "react-router-dom";
import './footer.scss'

export const Footer = () => {
  const navigation = [
    { name: "Sobre Nosotros", href: "/AboutUs", current: false },
    { name: "Preguntas Frecuentes", href: "/FAQs", current: false },
    { name: "Política de Privacidad", href: "/PrivacyPolicy", current: false },
    {
      name: "Términos y Condiciones",
      href: "/TermsConditions",
      current: false,
    },
    { name: "Política de DMCA", href: "/DMCAPolicy", current: false },
  ];

  return (
    <div className=" h-full flex justify-between items-center px-5 container-footer">
      <div className="text-white">
        <p>Copyrights © 2024, Albert Valdemora </p>
      </div>
      <div className="flex gap-4 container-menu">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-white hover:underline hover:opacity-80 transition duration-300  "
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
