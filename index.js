import renderMainPage from './Components/MainPage.js';
import renderProjectPage from './Components/ProjectPage.js';

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
