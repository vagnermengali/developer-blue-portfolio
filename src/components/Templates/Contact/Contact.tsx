import {
  RiMailFill,
  RiPhoneFill,
  RiHomeFill
} from "react-icons/ri";

import Form from "@/components/Other/Form/Form";

const Contact = () => {

  return (
    <section>
      <div className="container mx-auto">
        <div
          className="grid xl:grid-cols-2 pt-12 xl:h-[480px] 
        xl:mb-24"
        >
          <div className="flex flex-col justify-center">
            <div
              className="flex items-center gap-x-4 text-primary 
            text-lg mb-4"
            >
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Diga olá
            </div>
            <h1 className="h1 max-w-md mb-8">Vamos trabalhar juntos</h1>
            <p className="subtitle max-w-[400px]">
            Pronto para transformar ideias em realidade? Seja um projeto, uma colaboração ou apenas para dizer oi, deixe uma mensagem abaixo. Sou todo ouvidos e ansiosa para iniciarmos essa jornada juntos!
            </p>
          </div>
          <div
            className="hidden xl:flex w-full
          bg-contact_illustration
          bg-contain bg-top bg-no-repeat"
          ></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div
            className="flex flex-col gap-y-4 xl:gap-y-14
          mb-12 xl:mb-24 text-base xl:text-lg"
          >
            <div className="flex items-center gap-x-8">
              <RiMailFill size={18} className="text-primary" />
              <div>dev.mvinicius@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <RiHomeFill size={18} className="text-primary" />
              <div>Cabo Frio, Rio de Janeiro, Brasil</div>
            </div>
            <div className="flex items-center gap-x-8">
              <RiPhoneFill size={18} className="text-primary" />
              <div>+55 99 999999999</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
