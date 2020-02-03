fetch ('./Assets/data.json')
.then (response => {
    return response.json();
}).then(data => {
    console.log(data);
    //render HTML here

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has("project")){
        let title = urlParams.get('project');
        let project = data.projects.find(function (project){
            return project.title === title;
        });
        renderProjectPage(project)
    }
    else{
        renderMainPage(data)
    }


});

function renderNavBar(navbar){
    return(`
    <nav>
    <ul>
        <li>
            <a href="#about">${navbar.first}</a>
        </li>
        <li>
            <a href="#news">${navbar.second}</a>
        </li>
        <li>
            <a href="#projects">${navbar.third}</a>
        </li>
    </ul>
    </nav>
    `)
}
function renderMainPage(data){

    document.querySelector('.container').innerHTML = `
        ${renderNavBar(data.navbar)}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${ renderProjectItems(data.projects)}

    `;

}
function renderGoBack(){
    return(`
    <nav>
    <ul>
        <li>
            <a href="index.html">Go Back</a>
        </li>
    </ul>
</nav>
`)
}


function renderProjectPage(projects){
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

function renderAbout(about){
    return(`
    <section id="about">
    <h1 class="title animated jackInTheBox delay-1s">${about.name}</h1>
    <div class="row">
                <div class="col-6">
                <img class="profile-image" src= ${about.photo} width = 50% height = 50%>
                <p>
                    <strong>${about.title}</strong><br>
                    ${about.email} <br>
                    ${about.address}<br>
                    <a href=${about.resume} target="_blank"><i class="fas fa-file-alt"></i> Resume</a> |
                    <a href=${about.linkedin} target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a> | <a href=${about.github} target="_blank"><i class="fab fa-github"></i> Github</a> | <a href=${about.facebook} target="_blank"><i class="fab fa-facebook"></i> Facebook</a><br>
                </p>
                </div> 
            <div class="col-6">
                <p>
                    ${about.description}
                </p>
            </div>
        </div> 
        </section>
    `)
}

function renderNews(news){
    return (`
    <section id="news">
    <h1 class="title animated jackInTheBox delay-1s">News</h1>
    <div class="news-list">
        ${renderNewsItems(news)}
    </div>
</section>
    `)
}

function renderNewsItems(news){
    return news.map(d=>`
    <div class="row">
            <div class="col-6">
                ${d.title}
            </div>
            <div class="col-4">
                ${d.date}
            </div>
    </div>
        `).join('');
}

function renderProjects(projects){
    return `
    <section id="projects">
    <h1 class="title animated jackInTheBox delay-1s">Projects</h1>
    <div class="projects-list">
            ${renderProjectItems(projects)}
        </div>
    </section>`;
}

function renderProjectItems(projects){
	return projects.map(d=>`
    <div class="row">
        <div class="col-6">
            <div>
                <a href="?project=${d.title}"><strong>${d.title}</strong></a>
            </div>
            <div>
                ${d.authors}<br>
            </div>
            <div>
                <em>${d.source}</em>
            </div>
            <div class="project-tags">
                <span>Tags: </span>
                ${d.tags.map(s=>(
                    `<span class="${s}">${s}</span>`
                )
               
                    )}
            </div>
        </div> 
        <div class="col-6">
            <div>
                <span><a href=${d.materials.path} target="_blank">${d.materials.label} <i class="fas fa-video"></i></a></span>
            </div>
        
        <div>
            <span class="animated bounceInLeft delay-1s"><img src=${d.teaser} width = 50% height = 50%></span>
        </div>
        </div>
    </div>
	`).join('');
}

