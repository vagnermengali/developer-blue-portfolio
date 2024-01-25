import Link from "next/link";

import { Button } from "@/components/Other/UI/button";

const Contact = () => {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Preparado para transformar suas ideias em realidade? Estou aqui para ajudar
          </h2>
          <Link href="/contact">
            <Button>Contate-me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
