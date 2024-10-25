import React from "react";
import { Link, NavLink } from "react-router-dom";

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
    <div className=" h-full flex justify-between items-center px-5">
      <div className="text-white">
        <p>Copyrights © 2020-23, Pursuit Movies - All Rights Reserved.</p>
      </div>
      <div className="flex gap-4">
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