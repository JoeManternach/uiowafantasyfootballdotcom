function show_content(sectionId) {
    // Hide all content sections
    let sections = document.querySelectorAll('.main-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected content section
    let selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
