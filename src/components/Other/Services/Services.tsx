import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Other/UI/card";

import { servicesData } from "@/data/service";

const Services = () => {

  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
        MEUS SERVIÇOS
        </h2>
        <div
          className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24
            xl:gap-x-8"
        >
          {servicesData.map((item: any, index: any) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col
                     pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div
                    className="w-[100px] h-[50px] sm:w-[140px] sm:h-[80px]
                            bg-background flex justify-center items-center"
                  >
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
