import { FC } from "react";
import { 
    RiUserFill, 
    RiMailFill, 
    RiArrowRightFill, 
    RiMessageFill 
  } from "react-icons/ri";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Other/UI/button";
import { Input } from "@/components/Other/UI/input";
import { Textarea } from "@/components/Other/UI/textarea";

import { sendEmail } from "@/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Form: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Nome"
          {...register("name", { required: true })}
        />
        <RiUserFill className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />
        <RiMailFill className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          placeholder="Digite sua mensagem"
          {...register("message", { required: true })}
        />
        <RiMessageFill className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Enviar
        <RiArrowRightFill size={20} />
      </Button>
    </form>
  );
};

export default Form;
