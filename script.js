document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    // Check if sidebar was previously open
    const sidebarOpen = document.cookie.split(';').some((item) => item.trim().startsWith('sidebarOpen=true'));
    if (sidebarOpen) {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
    } else {
        sidebar.style.width = '0px';
        content.style.marginLeft = '0px';
    }

    // Close sidebar when clicking outside the sidebar area
    window.addEventListener('click', function (event) {
        if (event.target !== sidebar && !sidebar.contains(event.target)) {
            sidebar.style.width = '0px';
            content.style.marginLeft = '0px';
            document.cookie = "sidebarOpen=false";
        }
    });
});

// Function to toggle menu and change its visibility
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarWidth = sidebar.style.width;

    // Toggle sidebar visibility and adjust content margin accordingly
    if (sidebarWidth === '0px' || !sidebarWidth) {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
        document.cookie = "sidebarOpen=true";
    } else {
        sidebar.style.width = '0px';
        content.style.marginLeft = '0px';
        document.cookie = "sidebarOpen=false";
    }
}
