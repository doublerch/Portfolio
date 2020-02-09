export default function renderNews(news){
    // class search ?
    return (`
    <section id="news">
    <h1 class="title animated jackInTheBox delay-1s">News</h1>
    
    <div class="search">
    <input type="search" name='news' placeholder="Search News...">
    </div>

    <div class="news-list">
        ${renderNewsItems(news)}
    </div>
</section>
    `)
}

export function renderNewsItems(news){
    return news.map(d=>`
    <div class="row">
            <div class="col-6">
                ${d.title}
            </div>
            <div class="col-4">
                ${d.date}
            </div>
    </div>
        `).slice(0,5).join('');
        
}

export function newsFilter(data){
    document.querySelector('.search input[name="news"]')
.addEventListener('input', (event)=>{
        const filtered = data.news.filter(news=>news.title.toUpperCase().includes(event.target.value.toUpperCase()));
        document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
    });
}