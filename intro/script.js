
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
