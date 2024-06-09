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
	//feedback from
	
	// ảnh
    let slideIndex = 0;

    function changeSlide(n) {
        const slides = document.getElementsByClassName('slides');
        slides[slideIndex].classList.remove('active');
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        slides[slideIndex].classList.add('active');
    }