		document.addEventListener("DOMContentLoaded", function() {
			const tooltipTrigger = document.querySelector('.tooltip-trigger');
			const tooltipContent = document.querySelector('.tooltip-content');

			tooltipTrigger.addEventListener('mouseover', function() {
				tooltipContent.style.display = 'block';
			});

			tooltipTrigger.addEventListener('mouseout', function() {
				tooltipContent.style.display = 'none';
			});
		});
		// chat
		function openZalo() {
			window.location.href = "https://chat.zalo.me/"; // Thay "your-zalo-id" vaofo 
		}
		function toggleChatBox() {
			const chatBox = document.getElementById("zalo-chat-box");
			if (chatBox.style.display === "none" || chatBox.style.display === "") {
				chatBox.style.display = "block";
			} else {
				chatBox.style.display = "none";
			}
		}

/* video
		let currentVideoIndex = 0;
		const videos = ["Video/test01.mp4", "Video/test02.mp4", "Video/test03.mp4"]; // Danh sách các video

		function showVideo(index) {
			const videoContainer = document.querySelector('.video-container video');
			videoContainer.src = videos[index];
			videoContainer.load();
			currentVideoIndex = index;
		}

		function prevVideo() {
			if (currentVideoIndex > 0) {
				currentVideoIndex--;
			} else {
				currentVideoIndex = videos.length - 1;
			}
			showVideo(currentVideoIndex);
		}

		function nextVideo() {
			if (currentVideoIndex < videos.length - 1) {
				currentVideoIndex++;
			} else {
				currentVideoIndex = 0;
			}
			showVideo(currentVideoIndex);
		}
		showVideo(currentVideoIndex);
		*/
// trỏ
<script>
    document.addEventListener("DOMContentLoaded", function() {
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
    });
</script>
<script>
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
</script>
// Giỏ hàng
const cart = document.getElementById('cart');
const closeCartBtn = document.getElementById('close-cart');
document.getElementById('cart-icon').addEventListener('click', function() {
    cart.style.display = 'block';
});

closeCartBtn.addEventListener('click', function() {
    cart.style.display = 'none';
});
