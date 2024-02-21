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
        text: "+55 21 983493309",
    },
    {
        icon: <RiMailFill size={20} />,
        text: "dev.mvinicius@gmail.com",
    },
    {
        icon: <RiCalendarFill size={20} />,
        text: "Nascido em 09 de abril de 1993",
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
                    "/icon/html5.svg",
                    "/icon/css.svg",
                    "/icon/styled-components.svg",
                    "/icon/tailwind.svg",
                ],
            },
            {
                icons: [
                    "/icon/javascript.svg",
                    "/icon/typescript.svg",
                    "",
                    "",
                ],
            },
            {
                icons: [
                    "/icon/nodejs.svg",
                    "/icon/express.svg",
                    "/icon/typeorm.svg",
                    "/icon/prisma.svg",
                ],
            },
            {
                icons: [
                    "",
                    "/icon/django.svg",
                    "/icon/java.svg",
                    "",
                ],
            },
            {
                icons: [
                    "",
                    "/icon/php.svg",
                    "/icon/laravel.svg",
                    "/icon/redis.svg",
                ],
            },
            {
                icons: [
                    "/icon/postgres.svg",
                    "/icon/mysql.svg",
                    "/icon/mongodb.svg",
                    "/icon/docker.svg",
                ],
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/icon/windows.svg",
            },
            {
                imgPath: "/icon/linux.svg",
            },
            {
                imgPath: "/icon/vscode.svg",
            },
            {
                imgPath: "/icon/insomnia.svg",
            },
            {
                imgPath: "/icon/jira.svg",
            },
            {
                imgPath: "/icon/notion.svg",
            },
            {
                imgPath: "/icon/trello.svg",
            },
        ],
    },
];