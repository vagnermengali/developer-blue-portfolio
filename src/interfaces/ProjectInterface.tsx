export interface ProjectCardInterface {
    project: {
        image: string;
        category: string;
        name: string;
        description: string;
        link: string;
        github: string;
    }
    specialStyle?: boolean;
}