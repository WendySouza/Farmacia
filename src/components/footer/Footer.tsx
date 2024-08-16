import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (

    
    <div className="bg-sky-950">
      <div className="text-white p-4 text-center">
        &copy; 2024 FarmaGe. Todos os direitos reservados.
      </div>
      <p className="text-white p-2 text-center">Acesse nossas redes sociais</p>
      <div className="flex justify-center gap-2 pb-2">
        <LinkedinLogo size={38} weight="bold" color="white" />
        <InstagramLogo size={38} weight="bold" color="white" />
        <FacebookLogo size={38} weight="bold" color="white" />
      </div>
    </div>
    
  );
}

export default Footer;
