$(document).ready(function() {
    $('button').click(function() {

        // -----SECOND DATABASE ------
        // var titleTomato = $('#search').val()
        // $.ajax('https://developer.fandango.com/Rotten_Tomatoes')



        var title = $('#search').val()
        $.ajax("http://www.omdbapi.com/?s=" + title + "&apikey=2f6435d9")
            .done(function(results) {
                var movies = results.Search
                $('#movies').empty()
                console.log(results.Search)
                movies.forEach(function(movie) {

                    if (movie.Poster === 'N/A') {
                        var movieImg = 'http://www.fullcourt.com/sites/default/files/oldsite/uploads/articles/NO_PHOTO_PROVIDED.jpg'
                    } else {
                        var movieImg = movie.Poster
                    }
                    var $h2 = $('<h2>').append(movie.Title)
                    var $img = $('<img>').attr('src', movieImg)
                    var $li = $('<li>').append($h2, $img)
                    $('#movies').append($li)
                    $('#splat').css("width", "100px")
                })

            })

    })
})