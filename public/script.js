$(document).ready(function () {
    $('#toggleSidebar').on('click', function () {
        $('#sidebar').toggleClass('closed');
        $('#mainContent').toggleClass('expanded'); // Toggle the expanded class for main content
    });
});
