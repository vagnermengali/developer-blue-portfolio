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
        text: "Vagner Mengali",
    },
    /*     {
            icon: <RiPhoneFill size={20} />,
            text: "+55 21 983493309",
        }, */
    {
        icon: <RiMailFill size={20} />,
        text: "contatovagnermengali@gmail.com",
    },
    /*     {
            icon: <RiCalendarFill size={20} />,
            text: "Nascido em 21 de dezembro de 2000",
        }, */
    {
        icon: <RiGraduationCapFill size={20} />,
        text: "Desenvolvedor full stack",
    },
    {
        icon: <RiHomeFill size={20} />,
        text: "São Paulo, São Paulo, Brasil",
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
                    "HTML",
                    "CSS",
                    "Styled Components",
                    "TailwindCSS",
                ],
            },
            {
                icons: [
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "NextJs",
                ],
            },
            {
                icons: [
                    "NodeJS",
                    "NestJS",
                    "Express",
                    "PrismaJs",
                ],
            },
            {
                icons: [
                    "Jest",
                    "Django",
                    "Git",
                    "Figma",
                ],
            },
            {
                icons: [
                    "MongoDB",
                    "PostgreSQL",
                    "",
                    "",
                ],
            },
            {
                icons: [
                    "Docker",
                    "SQlite",
                    "",
                    "",
                ],
            },
            {
                icons: [
                    "Sass",
                    "Vtex",
                ],
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "Windows",
            },
            {
                imgPath: "Linux",
            },
            {
                imgPath: "Vscode",
            },
            {
                imgPath: "Insomnia",
            },
            {
                imgPath: "Jira",
            },
            {
                imgPath: "Notion",
            },
            {
                imgPath: "Trello",
            },
        ],
    },
];