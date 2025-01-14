function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    }
}
function toggleSidebar() {
    const searchSidebar = document.getElementById('search-sidebar');
    const overlay = document.getElementById('overlay');

    if (searchSidebar.classList.contains('open')) {
        searchSidebar.classList.remove('open');
        overlay.classList.remove('active');
    } else {
        searchSidebar.classList.add('open');
        overlay.classList.add('active');
    }
}