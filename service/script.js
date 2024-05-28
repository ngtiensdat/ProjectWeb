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
