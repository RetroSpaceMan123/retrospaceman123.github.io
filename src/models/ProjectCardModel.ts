export class ProjectCardModel {
    name: string;
    description: string;
    url: string;
    urlLabel: string;

    constructor(name: string, description: string, url: string, urlLabel: string) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.urlLabel = urlLabel;
    }
}