import { FC } from "react";
import {
  RiUserFill,
  RiMailFill,
  RiArrowRightFill,
  RiMessageFill
} from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/Other/UI/button";
import { Input } from "@/components/Other/UI/input";
import { Textarea } from "@/components/Other/UI/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useRouter } from "next/router";

export type FormData = {
  name: string;
  message: string;
  email: string;
};

const Form: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const router = useRouter()

  const onSendSubmit: SubmitHandler<FormData> = async (data) => {
    const templateParams = {
      name: data.name,
      message: data.message,
      email: data.email,
      url: window.location.href,
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("Variáveis de ambiente não estão definidas corretamente.");
    }

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        reset();
        toast.success("Sua mensagem foi enviada com sucesso! Obrigado");
        router.push('/');
      } else {
        toast.error(response.text);
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSendSubmit)} className="flex flex-col gap-y-4">
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
