function setPreferredColorScheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    let yelpReview = document.querySelectorAll(".review.island.island-light");
    yelpReview.classList.toggle("dark-mode-yelp")
}