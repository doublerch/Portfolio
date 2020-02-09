import renderProjectItems from "./ProjectDetail.js";

export default function renderProjects(projects){
    return (`
    <section id="projects">
    <h1 class="title animated jackInTheBox delay-1s">Projects</h1>
    <div class="filter">
        <label>
        <input type="radio" name="filter" value="all" checked>
        All
        </label>
        <label>
        <input type="radio" name="filter" value="personal">
        Personal
        </label>
        <label>
        <input type="radio" name="filter" value="game">
        Game
        </label>
        <label>
        <input type="radio" name="filter" value="swift">
        Swift
        </label>
        <label>
        <input type="radio" name="filter" value="java">
        Java
        </label>
        <label>
        <input type="radio" name="filter" value="school">
        School
        </label>
        <label>
        <input type="radio" name="filter" value="app">
        App
        </label>
    </div>
    <div class="projects-list">
            ${renderProjectItems(projects)}
    </div>
    </section>
    `)
}
export function projectFilter(data){
    let buttons = document.querySelectorAll('.filter input[name="filter"]');

    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        var filtered;
        if (event.target.value === "all"){
            filtered = data.projects;
        }
        else{
            filtered = data.projects.filter(projects=>projects.tags.includes(event.target.value));
        }
        console.log(filtered);
        document.querySelector('.projects-list').innerHTML = renderProjectItems(filtered);
    }));

    console.log(data.projects.filter(projects=>projects.tags.includes("personal")));

 
}