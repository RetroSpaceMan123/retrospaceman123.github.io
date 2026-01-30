import '../css/ProjectCard.css';
import { ProjectCardModel } from '../models/ProjectCardModel';

function ProjectCard(props: { projectCardModel: ProjectCardModel }) {
    return (
        <div className="project_card">
            <h2>{props.projectCardModel.name}</h2>
            <p>{props.projectCardModel.description}</p>
            <a href={props.projectCardModel.url}>{props.projectCardModel.urlLabel}</a>
        </div>
    )
}

export default ProjectCard;