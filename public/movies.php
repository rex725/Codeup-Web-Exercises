<?php


$allMovies = [
    [
        'title' => 'The Godfather',
        'release' => 1972,
        'rating' => '9.2',
        'genre' => ['crime', 'drama']
    ],
    [
        'title' => 'The Godfather: Part II',
        'release' => 1974,
        'rating' => '9.0',
        'genre' => ['crime', 'drama']
    ],
    [
        'title' => 'The Dark Knight',
        'release' => 2008,
        'rating' => '9.0',
        'genre' => ['action', 'crime', 'drama']

    ],
    [
        'title' => 'The Good, The Bad, and The Ugly',
        'release' => '1966',
        'rating' => '8.9',
        'genre' => ['western']
    ],
    [
        'title' => 'Forest Gump',
        'release' => 1994,
        'rating' => '8.7',
        'genre' => ['comedy', 'drama', 'romance']
    ],
    [
        'title' => 'Seven Samurai',
        'release' => 1954,
        'rating' => '8.6',
        'genre' => ['adventure', 'drama']
    ],
    [
        'title' => 'Back to the Future',
        'release' => 1985,
        'rating' => '8.5',
        'genre' => ['adventure', 'comedy', 'sci-fi']
    ],
    [
        'title' => 'The Lion King',
        'release' => 1994,
        'rating' => '8.5',
        'genre' => ['animation', 'adventure', 'drama']
    ],
    [
        'title' => 'Alien',
        'release' => 1979,
        'rating' => '8.5',
        'genre' => ['horror', 'sci-fi']
    ],
    [
        'title' => '2001: A Space Odyssey',
        'release' => 1968,
        'rating' => '8.3',
        'genre' => ['adventure', 'sci-fi']
    ]
];

function pageController($allMovies)
{
    $data = [];
    var_dump($_GET);
    
    // If the $_GET request is empty, show every movie

    
    // If $_GET['genre'] holds 'adventure', make $movies hold movies with 'adventure' as a genre.
    if(!empty($_GET['title'])) {
        $title = $_GET['title'];
        $movies = [];
        foreach($allMovies as $movie) {
            if($title === $movie['title']) {
                $movies[] = $movie;
            }
        }
        $data['movies'] = $movies;
    } else if(!empty($_GET['genre'])) {
        // make a new array called $movies
        // iterate through the allMovies array
        // if any movie has the genre of sci-fi, push that array onto $movies;

        $genre = $_GET['genre'];
        $movies = [];
    
        foreach($allMovies as $movie) {
            if(in_array($genre, $movie['genre'])) {

                $movies[] = $movie;
            }
        }        

        $data['movies'] = $movies;
        
    } else if(isset($_GET['release'])) {
        if($_GET['release'] == 'after2000') {
            $movies = [];
            foreach($allMovies as $movie) {
                if($movie['release'] >= 2000) {
                    echo 'firing';
                    $movies[] = $movie;
                }
            }
            $data['movies'] = $movies;
        }
    } else {
        // set $data['movies'] to hold all movies (unless another request is made.)
        $data['movies'] = $allMovies;
    }


    return $data;
}

extract(pageController($allMovies));

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>
    <main class="container">
        
        <h1>Welcome to MovieLister!</h1>

        <section class="form">
            <form method="GET" action="movies.php">
                <input type="text" name="title" placeholder="Please enter a title.">
                <br>
                <!-- Add an input to search by "title" -->
                <!-- Add a form that has an input for "genre" -->
                <!-- Add submit button -->
                <input type='text' name="genre" placeholder="Please enter a genre.">
                <br>
                <button type="submit">Submit</button>
            </form>
        </section>

        <section class="links">
            <!-- Add a link that will show all movies  -->
            <a href="movies.php?">Show all movies</a>

            <!-- Add a link that will show only movies with a release date after 2000 -->
            <a href="movies.php?release=after2000">All movies released after 2000</a>

            <!-- Add a link that shows all movies w/ the comedy genre -->
            <a href="movies.php?genre=comedy">Show only comedies</a>

            <!-- Add a link that shows all movies w/ the sci-fi genre -->
            <a href="movies.php?genre=sci-fi">Show all Sci-Fi movies</a>
            
        </section>
        <section class="movies">
            <!-- Show all the movies here -->
            <!-- Iterate through $movies array to show all or the filtered results-->
            <?php foreach($movies as $movie): ?>
                <div>
                    <h3>Title: <?= $movie['title'] ?></h3>
                    <p>Released in: <?= $movie['release'] ?></p>
                    <p>Genres: <?= implode(", ", $movie['genre']) ?></p>
                </div>
            <?php endforeach; ?>
        </section>
    </main>
</body>
</html>