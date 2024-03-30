document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    openBtn.addEventListener('click', function () {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
        document.cookie = "sidebarOpen=true";
    });

    closeBtn.addEventListener('click', function () {
        sidebar.style.width = '0px';
        content.style.marginLeft = '0px';
        document.cookie = "sidebarOpen=false";
    });

    // Check if sidebar was previously open
    const sidebarOpen = document.cookie.split(';').some((item) => item.trim().startsWith('sidebarOpen=true'));
    if (sidebarOpen) {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
    }
});
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display === "block" ? menu.style.display = "none" : menu.style.display = "block";
}