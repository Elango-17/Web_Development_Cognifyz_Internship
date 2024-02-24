$(document).ready(function() {
    let currentIndex = 0;
    const $galleryImages = $(".gallery-image");

    // Show the first image by default
    $($galleryImages[currentIndex]).show();

    // Handle thumbnail clicks
    $(".thumbnail").click(function() {
        const index = $(this).parent().index();
        showImage(index);
    });

    // Function to display the selected image
    function showImage(index) {
        $galleryImages.eq(currentIndex).fadeOut();
        currentIndex = index;
        $galleryImages.eq(currentIndex).fadeIn();
    }
});
