export interface ProjectData {
    thumbnail: string;
    projectName: string;
    description: string;
    technologies: string[];
    githubLink: string;
    viewMoreLink: string;
}

export const projects: ProjectData[] = [
    {
        thumbnail: "/images/project-thumbnails/media-library-manager-thumbnail.png",
        projectName: "Media Library Manager",
        description: "Automatically renames and reorganizes large media libraries I.e plex, jellyfin, etc)",
        technologies: ["Go", "Bash"],
        githubLink: "https://github.com/ENIACore/media_library_manager",
        viewMoreLink: "#"
    },
    {
        thumbnail: "/images/project-thumbnails/nexus-server-thumbnail.png",
        projectName: "Nexus Server",
        description: "\'Nexus\' Server bootstrap which bootstraps a server setup. Even used to boostrap the server this site is hosted on ☺.",
        technologies: ["Python","Bash", "Docker"],
        githubLink: "https://github.com/ENIACore/nexus",
        viewMoreLink: "#"
    },
    {
        thumbnail: "/images/project-thumbnails/neovim-bootstrap-thumnail.png",
        projectName: "Neovim Bootstrap",
        description: "Project that automatically bootstraps my personal neovim configuration to your system",
        technologies: ["Lua", "Bash"],
        githubLink: "https://github.com/ENIACore/eniacore.nvim",
        viewMoreLink: "#"
    },
    {
        thumbnail: "/images/project-thumbnails/nexus-site-thumbnail.png",
        projectName: "Nexus Website",
        description: "\'Nexus\' Site, (current site) to display about me, projects, and blogs. Available for use by others if credit is given.",
        technologies: ["typescript","NextJS", "tailwindcss"],
        githubLink: "https://github.com/ENIACore/nexus_site",
        viewMoreLink: "#"
    },
];
