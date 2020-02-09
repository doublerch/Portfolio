export default function renderNavBar(navbar){
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

export function renderGoBack(){
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