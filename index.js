function toggleDropdown(spanId) {
    var span = document.getElementById(spanId);
    var dropdown = document.getElementById(spanId + 'Dropdown');
    var header = document.getElementById("header")
    
    var isShowing = dropdown.classList.contains('hidden');

    // Hide all dropdowns first
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('hidden');
    });

    // Set inactive of all spans
    var allSpans = document.querySelectorAll('span');
    allSpans.forEach(function (span) {
        span.classList.remove('active');
    });
    
    header.classList.remove("at_top")
    if (!isShowing) {
      header.classList.toggle("at_top")
      // Toggle active class for styling
      span.classList.toggle('active');
      // Toggle hidden class to move the dropdown vertically
      dropdown.classList.toggle('hidden');
    }
}

