document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form?.addEventListener("submit", function (event) {
        event.preventDefault();

        var formData = new FormData(form);

        fetch("contact.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(result => {
                if (result === "Success") {
                    showNotification("Message sent successfully", "success");
                } else {
                    showNotification("Message sent successfully", "success");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                showNotification("Message sent successfully", "success");
            });
    });

    function showNotification(message, type) {
        toastr.options = {
            closeButton: false,
            progressBar: true,
            positionClass: "toast-bottom-right",
            showDuration: 300,
            hideDuration: 1000,
            timeOut: 5000,
            extendedTimeOut: 1000,
        };

        toastr.clear(); // Clear any existing toasts


        if (type === "success") {
            toastr.success(message, "", { className: "toast-success" });
        } else {
            toastr.error(message, "", { className: "toast-error" });
        }
    }
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let porogressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    }
    else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#1F2BE3 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


$('.owl-carousel.testimonial').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
        0: {
            items: 1
        },
        750: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

// ---------------- preloader -------------------- //



function rotateIcon(iconId) {
    const icon = document.getElementById(iconId);
    icon.classList.toggle('rotated');
}

//   ------------- numbers counter -----------------//

$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200,
    });
});



