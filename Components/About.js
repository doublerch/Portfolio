export default function renderAbout(about){
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