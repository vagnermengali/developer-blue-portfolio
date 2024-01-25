import {
    RiGraduationCapFill,
    RiCalendarFill,
    RiMailFill,
    RiPhoneFill,
    RiHomeFill,
    RiUserFill
} from "react-icons/ri";

export const infoData = [
    {
        icon: <RiUserFill size={20} />,
        text: "Marcus Vinicius Nascimento Ferreira",
    },
    {
        icon: <RiPhoneFill size={20} />,
        text: "+55 99 999999999",
    },
    {
        icon: <RiMailFill size={20} />,
        text: "dev.mvinicius@gmail.com",
    },
    {
        icon: <RiCalendarFill size={20} />,
        text: "Nascido em 09 de abril de 1994",
    },
    {
        icon: <RiGraduationCapFill size={20} />,
        text: "Desenvolvedor full stack",
    },
    {
        icon: <RiHomeFill size={20} />,
        text: "Cabo Frio, Rio de Janeiro, Brasil",
    },
];

export const qualificationData = [
    {
        title: "education",
        data: [
            {
                school: "Vai na Web",
                qualification: "Formação de Desenvolvedor em Tecnologia (Front end)",
                years: "agosto de 2023 - dez de 2023",
            },
            {
                school: "Kenzie Academy Brasil",
                qualification: "Desenvolvedor full stack",
                years: "mar de 2022 - mar de 2023",
            },

        ],
    },
    {
        title: "experience",
        data: [
            {
                company: "Wicomm",
                role: "Desenvolvedor de front-end",
                years: "mai de 2023 - o momento",
            },
        ],
    },
];

export const skillsData = [
    {
        title: "skills",
        data: [
            {
                icons: [
                    "/about/skills/html5.svg",
                    "/about/skills/css.svg",
                    "/about/skills/styled-components.svg",
                    "/about/skills/tailwind.svg",
                ],
            },
            {
                icons: [
                    "/about/skills/javascript.svg",
                    "/about/skills/typescript.svg",
                    "/about/skills/react.png",
                    "/about/skills/next.png",
                ],
            },
            {
                icons: [
                    "/about/skills/nodejs.svg",
                    "/about/skills/express.svg",
                    "/about/skills/typeorm.svg",
                    "/about/skills/prisma.svg",
                ],
            },
            {
                icons: [
                    "/about/skills/python.png",
                    "/about/skills/django.svg",
                    "/about/skills/java.svg",
                    "/about/skills/springboot.png",
                ],
            },
            {
                icons: [
                    "/about/skills/nest.png",
                    "/about/skills/php.svg",
                    "/about/skills/laravel.svg",
                    "/about/skills/redis.svg",
                ],
            },
            {
                icons: [
                    "/about/skills/postgres.svg",
                    "/about/skills/mysql.svg",
                    "/about/skills/mongodb.svg",
                    "/about/skills/docker.svg",
                ],
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/about/tools/windows.svg",
            },
            {
                imgPath: "/about/tools/linux.svg",
            },
            {
                imgPath: "/about/tools/vscode.svg",
            },
            {
                imgPath: "/about/tools/insomnia.svg",
            },
            {
                imgPath: "/about/tools/jira.svg",
            },
            {
                imgPath: "/about/tools/notion.svg",
            },
            {
                imgPath: "/about/tools/trello.svg",
            },
        ],
    },
];