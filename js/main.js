// Sample data for movies and events
const movies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        image: "images/avengers.jpeg",
        rating: 4.5,
        genre: "Action, Adventure",
        duration: "3h 1min"
    },
    {
        id: 2,
        title: "The Lion King",
        image: "images/lionking.jpeg",
        rating: 4.2,
        genre: "Animation, Adventure",
        duration: "1h 58min"
    },
    {
        id: 3,
        title: "Joker",
        image: "images/joker.jpeg",
        rating: 4.7,
        genre: "Crime, Drama",
        duration: "2h 2min"
    }
];

const events = [
    {
        id: 1,
        title: "Summer Music Festival",
        date: "2024-06-15",
        venue: "Central Park",
        image: "images/music-festival.jpg"
    },
    {
        id: 2,
        title: "Comedy Night",
        date: "2024-05-20",
        venue: "Laugh Factory",
        image: "images/comedy-night.jpeg"
    },
    {
        id: 3,
        title: "Food & Wine Festival",
        date: "2024-07-01",
        venue: "City Square",
        image: "images/food-festival.jpg"
    }
];

// Function to create movie cards
function createMovieCard(movie) {
    return `
        <div class="col-md-4">
            <div class="movie-card">
                <img src="${movie.image}" alt="${movie.title}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">
                        <i class="fas fa-star text-warning"></i> ${movie.rating}<br>
                        ${movie.genre}<br>
                        Duration: ${movie.duration}
                    </p>
                    <button class="btn btn-book" onclick="bookTicket('movie', ${movie.id})">Book Now</button>
                </div>
            </div>
        </div>
    `;
}

// Function to create event cards
function createEventCard(event) {
    const eventDate = new Date(event.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return `
        <div class="col-md-4">
            <div class="event-card">
                <img src="${event.image}" alt="${event.title}" class="img-fluid mb-3">
                <h3>${event.title}</h3>
                <p class="event-date">
                    <i class="far fa-calendar-alt"></i> ${eventDate}<br>
                    <i class="fas fa-map-marker-alt"></i> ${event.venue}
                </p>
                <button class="btn btn-book" onclick="bookTicket('event', ${event.id})">Book Tickets</button>
            </div>
        </div>
    `;
}

// Function to load movies
function loadMovies() {
    const moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
}

// Function to load events
function loadEvents() {
    const eventsContainer = document.getElementById('eventsContainer');
    eventsContainer.innerHTML = events.map(event => createEventCard(event)).join('');
}

// Function to handle booking
function bookTicket(type, id) {
    alert(`Booking ${type} with ID: ${id}`);
    // Here you would typically redirect to a booking page or show a modal
}

// Function to handle login
document.getElementById('loginBtn').addEventListener('click', () => {
    // Here you would typically show a login modal
    alert('Login functionality would go here');
});

// Function to handle signup
document.getElementById('signupBtn').addEventListener('click', () => {
    // Here you would typically show a signup modal
    alert('Signup functionality would go here');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    loadEvents();
}); 