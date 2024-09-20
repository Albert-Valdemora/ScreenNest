import React from "react";
import { NavLink } from "react-router-dom";

export const SecondNavbar = () => {
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

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="flex flex-col">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              classNames(
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-[#636363] hover:bg-gray-700 hover:text-white",
                "rounded-md px-1 py-2 text-sm font-medium"
              )
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
