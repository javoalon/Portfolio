document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".project-item");

    projectItems.forEach(function (item) {
        const imageGallery = item.querySelector(".image-gallery");
        const projectDescription = item.querySelector(".project-description");

        item.addEventListener("mouseenter", function () {
            imageGallery.classList.add("hover");
            projectDescription.style.transform = "translateY(0%)";
        });

        item.addEventListener("mouseleave", function () {
            imageGallery.classList.remove("hover");
            projectDescription.style.transform = "translateY(100%)";
        });
    });

    const swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });
});