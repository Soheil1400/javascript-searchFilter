const divCard = document.getElementsByClassName("container__box-movieCard")[0]

function GetInfo(name, rate, calender, time, src) {
    this.name = name;
    this.rate = rate;
    this.calender = calender;
    this.time = time;
    this.src = src;
}

const creatCard = (movie) => {
    return `
        <div class="card">
            <div class="card__img">
                <img src="${movie.src}" alt=${movie.name}>
            </div>
            <div class="card--dec">
                <div class="flexCard">
                    <div>
                        <h4>
                            ${movie.name}
                        </h4>
                    </div>
                    <div class="card--rate">
                        <h5 style="color: #7E9FB9">
                            ${movie.rate}
                        </h5>
                        <h5>
                           /10
                        </h5>
                    </div>
                </div>
                <div class="card--update flexCard">
                    <h6>
                        LAST UPDATE
                    </h6>
                    <h6>
                        RUNNING TIME
                    </h6>
                </div>
                <div class="flexCard">
                    <h6>
                        ${movie.calender}
                    </h6>
                    <h6>
                        ${movie.time}
                    </h6>
                </div>
            </div>
        </div>
`
}

let collectionMovie = []
collectionMovie.push(new GetInfo("Avengers:Endgame", 8.8, "SUN 8 SEPT", "2HR 09MIN", "../img/avengers.jpg"))
collectionMovie.push(new GetInfo("Hobbs & Shaw", 9.7, "TUE 4 JULY", "2HR 13MIN", "../img/hobbs and shaw.jpg"))
collectionMovie.push(new GetInfo("John Wick 3", 9.8, "WED 16 AUG", "2HR 33MIN", "../img/John-Wick-3-1.jpg"))
collectionMovie.push(new GetInfo("Deadpool", 7.3, "MON 16 AUG", "2HR 0MIN", "../img/deadpool-2.jpg"))
collectionMovie.push(new GetInfo("The Lion King", 8.1, "SUN 8 SEPT", "2HR 38MIN", "../img/the lion king.jpg"))
collectionMovie.push(new GetInfo("Mad Max: Fury Road", 7.4, "TUE 8 JULY", "2HR 19MIN", "../img/mad-max.jpg"))
collectionMovie.push(new GetInfo("Aquaman", 8.1, "WED 16 AUG", "2HR 14MIN", "../img/aquaman.jpg"))
collectionMovie.push(new GetInfo("Mission-Impossible", 7.8, "MON 16 OCT", "2HR 33MIN", "../img/mission-impossible.jpg"))

const creatMovie = (info) => {
    return info.map(item => {
        return creatCard(item)
    }).join(' ')
}

divCard.innerHTML = creatMovie(collectionMovie)

function onSearch(element){
    const search = element.value.toUpperCase();
    const filterSearch = collectionMovie.filter(card=>{
        return card.name.toUpperCase().includes(search)
    })
    divCard.innerHTML = creatMovie(filterSearch)
}
