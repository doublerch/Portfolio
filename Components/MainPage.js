import renderNavBar from './Navbar.js';
import renderAbout from './About.js';
import renderNews, {newsFilter} from './News.js';
import renderProjects, {projectFilter} from './Projects.js';

export default function MainPage(data){
    console.log(this);
    document.querySelector('.container').innerHTML = `
        ${renderNavBar(data.navbar)}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
    newsFilter(data);
    projectFilter(data);
}