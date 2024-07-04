document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navlist a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });

                // Remove active class from all nav links
                navLinks.forEach(nav => nav.classList.remove("active"));

                // Add active class to the clicked link
                this.classList.add("active");
            }
        });
    });
});
