export const newsFetch = async (parent, url) => {
    const urlData = await fetch(url)
    const res = await urlData.json()
    const data = res.articles

    data.forEach(element => {

        const { title, urlToImage, description, publishedAt, content, url } = element


        const child = document.createElement('div')
        child.className = 'card p-3 mb-3 col-12 col-lg-6'
        child.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src='${urlToImage || 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'}' class="img-fluid rounded mt-3" alt="...">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${title}</h5>
                            <p class="card-text">${description}</p>
                            <div class="d-flex justify-content-around align-items-center">
                                <p class="card-text"><small class="text-muted"><i class="fas fa-clock"></i>
                                        ${publishedAt.slice(0, 10)}</small></p>
                                <button type="button" class="btn btn-outline-success">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            `

        parent.appendChild(child)

    });



}





