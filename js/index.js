
$("#cog").click(function () {
    let innerBoxWidth = $(".navv").outerWidth();
    let outerBoxLeft = $(".outerbox").css("left")
    if (outerBoxLeft == '0px') {

        $(".outerbox").animate({ left: `-${innerBoxWidth}px` }, 500)
    }
    else {
        $(".outerbox").animate({ left: `0px` }, 500)
    }
})

let MovieList = []
async function getMovie() {
    let request = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44')

    let data = await request.json()

    MovieList = data.results;
    display()
  }
   getMovie()
  function display() {

    let temp = ''

    MovieList.forEach(element => {



        temp +=
            `<div class="col-md-4">
        <div class="it">
        <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="" class="w-100 h-100 ">
        <div class=" ly">
        <h3 >${element.title}</h3>
               <p>${element.overview}</p>
               <h4><span>Rate : </span>${element.vote_average}</h2>
               <h4>${element.release_date}</h2>
           </div>
      </div>
    </div>`


    })

    document.getElementById("MovieList").innerHTML = temp
}





$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


















