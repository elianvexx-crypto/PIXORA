

// SUPABASE CONNECTION

const SUPABASE_URL = "https://aslactttatwjkcwaefgq.supabase.co";
const SUPABASE_KEY = "sb_publishable_lfKkWxl7pNEWMLawslDipg_brpR24wt";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);







const carsGallery = document.getElementById("carsGallery");


if (carsGallery) {
    for (let i = 1; i <= 10; i++) {
        carsGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/cars/car${i}.jpg" alt="Car ${i}">
            </div>
        `;
    }
}

// nature 

const natureGallery = document.getElementById("natureGallery");

if (natureGallery) {
    for (let i = 1; i <= 10; i++) {
        natureGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/nature/nature${i}.jpg" alt="Nature ${i}">
            </div>
        `;
    }
}


// ANIME GALLERY

const animeGallery = document.getElementById("animeGallery");

if (animeGallery) {
    for (let i = 1; i <= 10; i++) {
        animeGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/anime/anime${i}.jpg" alt="Anime ${i}">
            </div>
        `;
    }
}


// ANIMALS GALLERY

const animalsGallery = document.getElementById("animalsGallery");

if (animalsGallery) {
    for (let i = 1; i <= 10; i++) {
        animalsGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/animals/animals${i}.jpg" alt="Animal ${i}">
            </div>
        `;
    }
}

// city gallary 
const cityGallery = document.getElementById("cityGallery");

if (cityGallery) {
    for (let i = 1; i <= 10; i++) {
        cityGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/city/city${i}.jpg" alt="city ${i}">
            </div>
        `;
    }
}
// gamin 
const gamingGallery = document.getElementById("gamingGallery");

if (gamingGallery) {
    for (let i = 1; i <= 10; i++) {
        gamingGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/gaming/gaming${i}.jpg" alt="Gaming ${i}">
            </div>
        `;
    }
}


// TRAVEL GALLERY

const travelGallery = document.getElementById("travelGallery");

if (travelGallery) {
    for (let i = 1; i <= 10; i++) {
        travelGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/travel/travel${i}.jpg" alt="Travel ${i}">
            </div>
        `;
    }
}


// SPORTS GALLERY

const sportsGallery = document.getElementById("sportsGallery");

if (sportsGallery) {
    for (let i = 1; i <= 10; i++) {
        sportsGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/sports/sports${i}.jpg" alt="Sports ${i}">
            </div>
        `;
    }
}


// SPACE GALLERY

const spaceGallery = document.getElementById("spaceGallery");

if (spaceGallery) {
    for (let i = 1; i <= 10; i++) {
        spaceGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/space/space${i}.jpg" alt="Space ${i}">
            </div>
        `;
    }
}


// ARCHITECTURE GALLERY

const architectureGallery = document.getElementById("architectureGallery");

if (architectureGallery) {
    for (let i = 1; i <= 10; i++) {
        architectureGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/architecture/architecture${i}.jpg"
                     alt="Architecture ${i}">
            </div>
        `;
    }
}

// FOOD GALLERY

const foodGallery = document.getElementById("foodGallery");

if (foodGallery) {
    for (let i = 1; i <= 10; i++) {
        foodGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/food/food${i}.jpg" alt="Food ${i}">
            </div>
        `;
    }
}


// FASHION GALLERY

const fashionGallery = document.getElementById("fashionGallery");

if (fashionGallery) {
    for (let i = 1; i <= 10; i++) {
        fashionGallery.innerHTML += `
            <div class="photo-card">
                <img src="images/fashion/fashion${i}.jpg" alt="Fashion ${i}">
            </div>
        `;
    }
}

// PIXORA FULL SCREEN PHOTO VIEWER

const photoViewer = document.getElementById("photoViewer");
const fullScreenPhoto = document.getElementById("fullScreenPhoto");
const closeViewer = document.getElementById("closeViewer");

document.addEventListener("click", function(event) {

    const clickedPhoto = event.target.closest(".photo-card img");

    if (clickedPhoto && photoViewer && fullScreenPhoto) {

        fullScreenPhoto.src = clickedPhoto.src;

        photoViewer.style.display = "flex";

        currentPhotoId = clickedPhoto.getAttribute("src");

        if (viewerLikeButton) {
            viewerLikeButton.textContent = "❤️ Like";
        }

        loadViewerLikes(currentPhotoId);
    }

});

// CLOSE BUTTON

if (closeViewer && photoViewer) {

    closeViewer.addEventListener("click", function() {

        photoViewer.style.display = "none";
        fullScreenPhoto.src = "";

    });

}

// CLOSE WHEN CLICKING OUTSIDE PHOTO

if (photoViewer) {

    photoViewer.addEventListener("click", function(event) {

        if (event.target === photoViewer) {

            photoViewer.style.display = "none";
            fullScreenPhoto.src = "";

        }

    });

}

// CLOSE WITH ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && photoViewer) {

        photoViewer.style.display = "none";
        fullScreenPhoto.src = "";

    }

});


// PIXORA FULL SCREEN LIKE SYSTEM

const viewerLikeButton = document.getElementById("viewerLikeButton");
const viewerLikeCount = document.getElementById("viewerLikeCount");

let currentPhotoId = null;

async function loadViewerLikes(photoId) {

    if (!viewerLikeCount) return;

    viewerLikeCount.textContent = "Loading...";

    const { data, error } = await supabaseClient.rpc(
        "get_photo_like_count",
        { p_photo_id: photoId }
    );

    if (error) {
        console.error(error);
        viewerLikeCount.textContent = "Likes unavailable";
    } else {
        viewerLikeCount.textContent = "❤️ " + data + " Likes";
    }
}

if (viewerLikeButton) {

    viewerLikeButton.addEventListener("click", async function() {

        if (!currentPhotoId) return;

        viewerLikeButton.disabled = true;

        try {

            const { data, error } = await supabaseClient.rpc(
                "add_photo_like",
                { p_photo_id: currentPhotoId }
            );

            if (error) {
                throw error;
            }

            if (viewerLikeCount) {
                viewerLikeCount.textContent = "❤️ " + data + " Likes";
            }

            viewerLikeButton.textContent = "❤️ Liked";

        } catch (error) {

            console.error("Like Error:", error);
            alert("Like failed! Please try again.");

        } finally {

            viewerLikeButton.disabled = false;

        }

    });

}



// PIXORA CATEGORY SELECTOR + SEARCH

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const categoryButtons = document.querySelectorAll(
    ".category-list button"
);

const categoryMenuBtn = document.getElementById("categoryMenuBtn");
const categoryDropdown = document.getElementById("categoryDropdown");

let selectedCategory = "all";


// OPEN / CLOSE CATEGORY MENU

if (categoryMenuBtn && categoryDropdown) {

    categoryMenuBtn.addEventListener("click", function(event) {

        event.stopPropagation();

        categoryDropdown.classList.toggle("active");

    });

    document.addEventListener("click", function(event) {

        if (!event.target.closest(".category-selector")) {
            categoryDropdown.classList.remove("active");
        }

    });

}


// SELECT CATEGORY

if (categoryDropdown) {

    categoryDropdown.querySelectorAll("button").forEach(function(button) {

        button.addEventListener("click", function() {

            selectedCategory = button.dataset.category;

            categoryMenuBtn.textContent = "⋮";

            categoryMenuBtn.title =
                "Selected: " + button.textContent.trim();

            categoryDropdown.classList.remove("active");

            filterCategories();

        });

    });

}


// SEARCH FUNCTION

function filterCategories() {

    const searchText = searchInput.value.toLowerCase().trim();

    categoryButtons.forEach(function(button) {

        const categoryName = button.textContent.toLowerCase().trim();

        const matchesSearch = categoryName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            categoryName.includes(selectedCategory);

        if (matchesSearch && matchesCategory) {

            button.style.display = "";

            button.classList.remove("category-show");

            void button.offsetWidth;

            button.classList.add("category-show");

        } else {

            button.style.display = "none";

        }

    });

}


// SEARCH BUTTON

if (searchBtn) {

    searchBtn.addEventListener("click", filterCategories);

}


// ENTER KEY

if (searchInput) {

    searchInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            filterCategories();
        }

    });

}

// LIVE SEARCH + RESET

if (searchInput) {

    searchInput.addEventListener("input", function() {

        if (searchInput.value.trim() === "") {

            selectedCategory = "all";

            categoryButtons.forEach(function(button) {
                button.style.display = "";
            });

            if (categoryMenuBtn) {
                categoryMenuBtn.title = "Select Category";
            }

        } else {

            filterCategories();

        }

    });

}



// CARS BUTTON FUNCTION

function playCarSound() {

    const nitro = document.getElementById("nitroEffect");

    if (!nitro) {
        window.location.href = "cars.html";
        return;
    }

    const carSound = new Audio("sounds/car-racing.mp3");

    nitro.classList.add("active");

    carSound.play().catch(error => {
        console.log("Sound error:", error);
    });

    setTimeout(function() {
        window.location.href = "cars.html";
    }, 2500);

}






