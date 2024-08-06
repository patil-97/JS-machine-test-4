
let movies = "";

let color= (num) => {
	
	if(num > 7.5){
		return "bg-success";
	}else if(num < 7.5 && num > 5){
		return "bg-warning";
	}else{
		return "bg-danger";
	}
};

movieArr.forEach((mv) => {
	
	movies += `<div class="col-md-4 mb-4 box">
				<div class="card box2">
					<figure class="movieCard mb-0">
						<img src="${mv.image_link}" alt="${mv.title}" title="${mv.title}">
						<figcaption class="movieTitle">
							<div class="row p-3">
								<div class="col-10">
									<h2>${mv.title}</h2>
								</div>
								<div class=	"col-2 align-self-center">
									<span class="pt-2 pb-2 ${color(mv.rating)}" >${mv.rating}</span>
								</div>
							</div>
						
						</figcaption>
					</figure>
					<div class="movieOverview p-3">
						<h3>${mv.title}</h3>
						<p>${mv.overview}</p>
					</div>
				</div>
			</div>`
});

document.getElementById("movies").innerHTML = movies;