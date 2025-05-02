let newsBlock = document.querySelector('.news-container')

async function getData() {
    let response = await fetch('https://dev.to/api/articles?tag=programming&top=10')
    let data = await response.json()
    setUiNews(data)
}

getData()

function setUiNews(data) {
    console.log(data)
    data.forEach(elem => {
        newsBlock.innerHTML += `
        <div class="news-block" onclick="window.open('${elem.canonical_url}', '_blank')">
        <img class="news-block-image" src="${elem.social_image}" alt="">
        <div>
          <p class="news-block-title">${elem.title}</p>
          <p class="news-block-subtitle">${elem.description}</p>
        </div>
        <p class="news-block-date">${elem.readable_publish_date}</p>
      </div>

        `
    });
}
