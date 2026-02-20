import pfpURL from '../assets/pfpspace.png';

function About() {
    const source = pfpURL;

    return (
        <>
            <div className="page-content">
                <h2>About Me</h2>
                <img src={source} alt="RetroSpaceMan123" />
                <p className="subtitles">An old profile picture I made in 2021</p>
                <p>Hello! My name is Carlos. I am a recent Computer Science graduate from the University of Florida from May 2024. I have earned an Associate's of Arts from Santa Fe College, and Bachelor's of Science Cum laude from the College of Engineering at the University of Florida with a minor in Mathematics. I have also earned a certification in AI Fundamentals and Applications from the University of Florida.</p>
                <p>Although I have been programming since my childhood, I started consistently programming in 2018 with the creation of my first Discord bot. Since then I have had the privilege to work on a series of projects both on my own and with a team, some of which I lead to success. The most notable of these projects are listed in the projects tab on this website.</p>
                <p>During my time in college, I was able to work in freelance projects within the gaming space, and work in as an intern for the Miami-Dade Information and Technology Department, which gave me valuable insights into software development and project management.</p>
                <p>I have experience in Java, C#, Go, Typescript/Javascript, C++, Java, and SQL, multiple tech stacks, such as React, .NET, and FastAPI, familiarized myself with various development tools and practices, such as Git, Docker, and CI/CD pipelines, and I have experimented with using AI tooling such as ChatGPT and GitHub Copilot since 2023, making me a well-rounded developer ready for the modern development landscape.</p>
                <p>I am currently seeking opportunities to apply my skills in a professional environment and contribute to innovative projects that align with my interests and expertise.</p>
                <p>Feel free to reach out to me through the contact form on this website or connect with me in one of the social media links in the navigation bar.</p>
            </div>
        </>
    )
}

export default About;