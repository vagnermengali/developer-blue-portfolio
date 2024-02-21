import Image from "next/image";
import {
  RiGraduationCapFill,
  RiBriefcaseFill,
} from "react-icons/ri";

import DevImg from "@/components/Other/DevImg/DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Other/UI/tabs";

import { infoData, qualificationData, skillsData } from "@/data/about";
import Icon from "@/components/Other/UI/Icon";

const About = () => {
  const getData = (arr: any, title: any) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2
          className="section-title mb-8 xl:mb-16 text-center 
        mx-auto"
        >
          SOBRE MIM
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              alt="second image"
              containerStylesImage="w-[430px] h-[560px] rounded-[12px] z-10"
              containerStyles="w-[530px] h-[660px] flex items-start justify-end
            bg-no-repeat relative before:z-10 before:rounded-xl before:absolute before:content-[''] before:w-[430px] before:h-[560px] before:border-dashed before:border-2 before:border-primary before:top-[20px] before:right-[30px]"
              imgSrc="/developer-1.webp"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList
                className="w-full grid xl:grid-cols-3 
                xl:max-w[520px] xl:border border-none"
              >
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Informação pessoal
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualificações
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Habilidades
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Qualidade de serviço há mais de 2 anos
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Movido por uma curiosidade insaciável, dedico-me ao ofício da codificação, engajando-me em novos projetos e aprendendo continuamente.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto 
                                    xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Habilidade linguística</div>
                      <div className="border-b border-border"></div>
                      <div>Português(Nativo), Inglês(Básico) </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Minhas qualificações
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <RiBriefcaseFill />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item: any, index: any) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div
                                    className="h-[84px] w-[1px] bg-border 
                                                    relative mb-2"
                                  >
                                    <div
                                      className="w-[11px] h-[11px] rounded-xl
                                                        bg-primary absolute -left-[5px] 
                                                        group-hover:translate-y-[84px]
                                                        transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div
                                      className="font-semibold text-xl
                                                        leading-none mb-2"
                                    >
                                      {company}
                                    </div>
                                    <div
                                      className="text-lg leading-none
                                                        text-muted-foreground mb-4"
                                    >
                                      {role}
                                    </div>
                                    <div
                                      className="text-base 
                                                        font-medium"
                                    >
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <RiGraduationCapFill size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item: any, index: any) => {
                              const { school, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div
                                    className="h-[84px] w-[1px] bg-border 
                                                    relative mb-2"
                                  >
                                    <div
                                      className="w-[11px] h-[11px] rounded-xl
                                                        bg-primary absolute -left-[5px] 
                                                        group-hover:translate-y-[84px]
                                                        transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div
                                      className="font-semibold text-xl
                                                        leading-none mb-2"
                                    >
                                      {school}
                                    </div>
                                    <div
                                      className="text-lg leading-none
                                                        text-muted-foreground mb-4"
                                    >
                                      {qualification}
                                    </div>
                                    <div
                                      className="text-base 
                                                        font-medium"
                                    >
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Meu Conjunto de Habilidades</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Habilidades</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {getData(skillsData, "skills").data.map(
                          (item: any, index: any) => {
                            const { icons } = item;
                            return (
                              <div
                                className="flex flex-wrap justify-center"
                                key={index}
                              >
                                {icons.map((imgPath: string, idx: number) => (
                                  <div
                                    key={idx}
                                    style={{ width: "48px", height: "48px" }}
                                    className="relative w-20 h-20 cursor-pointer transition duration-300 transform hover:scale-110 mx-2 my-2"
                                  >
                                    <Icon width={48}
                                      height={48} id={imgPath} />
                                  </div>
                                ))}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 xl:text-left">
                      Ferramentas
                    </h4>
                    <div className="border-b border-border mb-4"></div>
                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      {getData(skillsData, "tools").data.map(
                        (item: any, index: any) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={28}
                                height={28}
                                alt="Tools Image"
                                priority
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
