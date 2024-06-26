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
// trỏ
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

// zalo
	function toggleChatBox() {
		const chatBox = document.getElementById("zalo-chat-box");
		if (chatBox.style.display === "none" || chatBox.style.display === "") {
			chatBox.style.display = "block";
		} else {
			chatBox.style.display = "none";
		}
	}

	document.addEventListener("DOMContentLoaded", function() {
		var chatBubble = document.getElementById("chat-bubble");
		var chatBox = document.getElementById("zalo-chat-box");
		var closeChat = document.getElementById("close-chat");

		chatBubble.addEventListener("click", function() {
			chatBox.style.display = "block";
		});

		closeChat.addEventListener("click", function() {
			chatBox.style.display = "none";
		});
	});
