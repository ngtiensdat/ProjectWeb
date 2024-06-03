document.addEventListener("DOMContentLoaded", function() {
    // Tooltip
    const tooltipTriggers = document.querySelectorAll(".tooltip-trigger");

    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener("mouseenter", function() {
            const tooltipContent = this.nextElementSibling;
            tooltipContent.classList.add("show");
        });

        trigger.addEventListener("mouseleave", function() {
            const tooltipContent = this.nextElementSibling;
            tooltipContent.classList.remove("show");
        });

        trigger.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
        });
    });

    // Navbar scroll
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-50px";
        } else {
            navbar.style.top = "0";
        }

        lastScrollTop = scrollTop;
    });

    // Booking form
    const form = document.getElementById("booking-form");
    const serviceResults = document.getElementById("service-results");
    const selectedServicesList = document.getElementById("selected-services");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Lấy thông tin từ form
        const fullName = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const checkIn = document.getElementById("check-in").value;
        const checkOut = document.getElementById("check-out").value;
        const roomType = document.getElementById("room-type").value;
        const services = Array.from(document.querySelectorAll('input[name="services[]"]:checked')).map(el => el.nextElementSibling.innerText);

        // Hiển thị thông tin
        selectedServicesList.innerHTML = `
            <li><strong>Họ và tên:</strong> ${fullName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Số điện thoại:</strong> ${phone}</li>
            <li><strong>Ngày nhận phòng:</strong> ${checkIn}</li>
            <li><strong>Ngày trả phòng:</strong> ${checkOut}</li>
            <li><strong>Loại phòng:</strong> ${roomType}</li>
            <li><strong>Dịch vụ đã chọn:</strong> ${services.join(", ")}</li>
        `;

        serviceResults.style.display = "block";
    });

    // Chat box
    function toggleChatBox() {
        const chatBox = document.getElementById("zalo-chat-box");
        if (chatBox.style.display === "none" || chatBox.style.display === "") {
            chatBox.style.display = "block";
        } else {
            chatBox.style.display = "none";
        }
    }

    document.getElementById('cart-icon').addEventListener('click', function() {
        document.getElementById('cart').style.display = 'block';
    });

    document.getElementById('close-cart').addEventListener('click', function() {
        document.getElementById('cart').style.display = 'none';
    });
});
