import {renderGoBack} from "./Navbar.js";

export default function renderProjectPage(projects){
    document.querySelector('.container').innerHTML = `
    ${renderGoBack()}
    <section>
        <h1 class="title animated jackInTheBox delay-1s">${projects.title}</h1>
        <span class="animated bounceInLeft delay-1s"><img src=${projects.teaser} width = 50% height = 50%></span>
        <div>
            ${projects.authors}<br>
        </div>
        <div>
            <em>${projects.source}</em>
        </div>
        <div class="project-tags">
            <span>Tags: </span>
            ${projects.tags.map(s=>(
                `<span class="${s}">${s}</span>`
            )
           
                )}
        </div>
        <div>
            <p>
                ${projects.description}</em>.
            </p>
        </div>
        <div>
            <span><a href=${projects.materials.path} target="_blank">${projects.materials.label} <i class="fas fa-video"></i></a></span>
        </div>
    </section>
    `;

}