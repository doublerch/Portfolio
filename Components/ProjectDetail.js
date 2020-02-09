export default function renderProjectItems(projects){
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