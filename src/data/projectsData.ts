import type { ProjectItem } from "../types/types"
import sintaxWear from '../assets/images/sintaxwear.jpg'
import devEcomerce from '../assets/images/devcomerce.jpg'
import ghiblifilms from '../assets/images/ghiblifilms.jpg'
import todoList from '../assets/images/todolist.jpg'

export const projectsData: ProjectItem[] = [
    {
        id: "sintaxwear",
        title: "Sintax Wear",
        description: "Ecommerce de tênis.",
        image: sintaxWear,
        tags: ["React", "TypeScript", "Tailwind CSS", "TanStack Router"],
        githubUrl: "https://github.com/Henrique970/syntax-wear-app.git",
        liveUrl: "https://henriquedossantos.github.io/portfolio",
        featured: true,
    },

    {
        id: "devcomerce",
        title: "DevComerce",
        description: "Ecomerce com cadastro de produtos",
        image: devEcomerce,
        tags: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/Henrique970/product-registration-form.git",
        liveUrl: "https://github.com/Henrique970/product-registration-form.git",
        featured: true,
    },

    {
        id: "ghiblifilms",
        title: "Studio Ghibli Films",
        description: "Exibição do filmes studio Ghibli com API",
        image: ghiblifilms,
        tags: ["React", "TypeScript", "Tailwind CSS",  "API"],
        githubUrl: "https://github.com/Henrique970/studio-ghibli-films.git",
        liveUrl: "https://github.com/Henrique970/product-registration-form.git",
        featured: true,
    },

    {
        id: "todolist",
        title: "Todo List",
        description: "Lista de tarefas dinâmico com modo claro e modo escuro",
        image: todoList,
        tags: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/Henrique970/todolist-app.git",
        liveUrl: "https://github.com/Henrique970/product-registration-form.git",
        featured: true,
    },
   
]