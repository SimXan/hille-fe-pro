window.addEventListener('DOMContentLoaded', function() {
    let list_films = document.querySelector('.list-films');
    let popup = new Popup();
    
    fetch('http://swapi.dev/api/films/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //   console.log(data);
        data.results.forEach((element) => {
            let link = `<a href="#${element.episode_id}" class="link" data-vehicles="${element.vehicles}">${element.title}</a> <br>`;
            list_films.innerHTML += link;
        });
        // list_films.innerHTML += `<p data-next="${data.next}" class="more">Show More</p>`;
      });
    
      
    list_films.addEventListener('click', function(e) {
        let target = e.target;
        if(target.classList.contains('link')) {
            let vehicles = target.getAttribute('data-vehicles').split(',');
            let content = '';
            vehicles.forEach((elem, i) => {
                fetch(elem)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    content += `<div class="border">
                                    <p>Model: ${data.model}</p>
                                    <p>Vehicle Class: ${data.vehicle_class}</p>
                                    <p>Cost: ${data.cost_in_credits}</p>
                                    <p>Max Speed:${data.max_atmosphering_speed}</p>
                                    <p>Passengers:${data.passengers}</p>
                                    <p>Crew:${data.crew}</p>
                                </div>`;
                    popup.open(content);
                });
    
            });
        }
    })
})






