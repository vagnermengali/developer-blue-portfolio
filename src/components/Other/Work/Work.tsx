import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Button } from "@/components/Other/UI/button";
import ProjectCard from "@/components/Other/ProjectCard/ProjectCard";
import { workData } from "@/data/work";

const Work = () => {

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto xl:flex xl:justify-between">
        <div
          className="max-w-[400px] mx-auto
          xl:mx-0 text-center xl:text-left mb-12 xl:h-fit
          flex flex-col justify-center items-center xl:justify-center
          xl:items-start"
        >
          <h2
            className="section-title 
            mb-4"
          >
            ULTIMOS PROJETOS
          </h2>
          <p className="subtitle mb-8">
            Explore uma vitrine diversificada de projetos recentes, desde back-end até front-end e desenvolvimento full-stack. Deslize ou clique em Todos os projetos abaixo para ver mais
          </p>
          <Link href="/projects" aria-label={"projectos"}>
            <Button>Todos os projetos</Button>
          </Link>
        </div>
        <div
          className="xl:max-w-[780px]
        top-0"
        >
          <Swiper
            className="h-fit"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {workData.slice(0, 5).map((project: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
