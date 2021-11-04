
fetch("/portfolio/portfolio.json")
.then(response => {return response.json()})
.then(data => {
	for (let i = 0; i < data.portfolio.length; i++) {
		if (data.portfolio[i].status == true) {
			document.getElementById("portfolio").innerHTML += `<div id="card-project"><div id="thumbnail"><a href="/portfolio/${data.portfolio[i].homepage}"><img src="/portfolio/thumbnails/${data.portfolio[i].thumbnail}"></a></div><h6 id="tag">${data.portfolio[i].tag}</h6><h6 id="title"><a href="/portfolio/${data.portfolio[i].homepage}">${data.portfolio[i].title}</a></h6></div>`
		}
	}
	for (let i = 0; i < data.portfolio.length; i++) {
		if (data.portfolio[0].status == true) {
			document.getElementById("latest-portfolio").innerHTML = `<div id="card-project"><div id="thumbnail"><a href="/portfolio/${data.portfolio[0].homepage}"><img src="/portfolio/thumbnails/${data.portfolio[0].thumbnail}"></a></div><h6 id="tag">${data.portfolio[0].tag}</h6><h6 id="title"><a href="/portfolio/${data.portfolio[0].homepage}">${data.portfolio[0].title}</a></h6></div>`
		}
	}
})

