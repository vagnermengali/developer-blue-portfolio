import { useState } from "react";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/Other/UI/tabs";
import ProjectCard from "@/components/Other/ProjectCard/ProjectCard";

import { projectData } from "@/data/project";

const uniqueCategories: string[] = [
  "todos os projetos",
  ...Array.from(new Set(projectData.map((item) => item.category)))
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("todos os projetos");

  const filteredProjects = projectData.filter((project) => {
    return category === "todos os projetos"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2
          className="section-title mb-8 xl:mb-16 text-center
        mx-auto"
        >
          MEUS PROJETOS
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4
          lg:max-w-[640px] mb-12 mx-auto md:border border-none"
          >
            {categories.map((category: string, index: number) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px]
              md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard id={index} project={project} specialStyle={true} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
