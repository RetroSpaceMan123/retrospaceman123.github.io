import ProjectCard from "../components/ProjectCard";
import { ProjectCardModel } from "../models/ProjectCardModel";

function Projects() {
    let projects = [
        new ProjectCardModel(
            "ChromeClash",
            "In the Spring of 2024, I organized a group of five members to create a competative multiplayer shooter based on the chess ELO system. I made the matchmaking system, as well as all of the functionality of the promotional website.",
            "https://chromeclash.vercel.app/",
            "ChromeClash Website"
        ),
        new ProjectCardModel(
            "RetroSpaceMan.io",
            "This is the website you are currently looking at. This is meant to be a showcase for my programing projects over the years.",
            "https://github.com/RetroSpaceMan123/retrospaceman123.github.io",
            "Github Repository"
        ),
        new ProjectCardModel(
            "Brackets-App",
            "This is a website I made in my software engineering class in the spring of 2023 with a team of 3 other students. This website allows users to create and store single elimination brackets.",
            "https://github.com/RetroSpaceMan123/brackets-app",
            "Github Repository"
        ),
        new ProjectCardModel(
            "Orion Trail",
            "This is a Unity 2D space shooter created for the Beginner's Circle Jam #3 with 3 other members. The goal of the game is to pilot a ship through enemies and asteriods to reach a new planet.",
            "https://retrospaceman123.itch.io/orion-trail",
            "Itch.io Page"
        ),
        new ProjectCardModel(
            "UF Open Source Club API",
            "I have contributed to the UF Open Source Club API repository. The API uses the FastAPI library for python in order to create a backened API service quickly and easily.",
            "https://github.com/ufosc/UF-API-GROUP",
            "Github Repository"
        ),
        new ProjectCardModel(
            "IMDB Database Recomendation Algorithms",
            "In the Fall of 2022, me and 2 other students implemented two data structures in order to create a recomendation algorithm for movie and tv shows. The algorithm takes in a movie or tv show as input, and if the piece of media is in its database, it gives a top 5 ranking for which movie or tv show to watch next.",
            "https://github.com/calebreverett/IMDBProject",
            "Github Repository"
        )
    ];
    
    return (
        <>
            <div className="page-content">
                <h2>My Featured Projects</h2>
                <div className="project_list">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} projectCardModel={project} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;