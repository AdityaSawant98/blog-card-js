// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const blogCard = document.querySelector('#blog-card');

blogCard.innerHTML = `
    <div class="card-container">
        <img class="card-picture"
            src='./../img/spacejoy-YqFz7UMm8qE-unsplash.jpg'
            alt='card image'
        />
        <div class="card-content">
            <span class="card-content-button">Interior</span>
            
            <p class="card-content-heading">Top 5 Living Room Inspirations</p>

            <p class="card-content-desc">
                Curated vibrants colors for your living, make it pop & calm in the same time.
            </p>

            <a class="card-content-link" href="">Read more</a>

            <span class="card-content-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                    </path>
                </svg>
            </span>
        </div>
    </div>
`;
