// $(document).ready(function () {
//     updateActiveState();

//     $('.navbar-nav a').click(function() {
//         $('.navbar-nav a').removeClass('active');
//         $(this).addClass('active');
//     });

//     // Handle scroll events
//     $(window).scroll(function() {
//         updateActiveState();
//     });

//     // Function to update the active state based on scroll position
//     function updateActiveState() {
//         var scrollPosition = $(window).scrollTop();
//         var sections = ['#banner', '#landing', '#tools', '#contact'];

//         // Remove active class from all links
//         $('.navbar-nav a').removeClass('active');

//         // Add active class based on scroll position
//         for (var i = 0; i < sections.length; i++) {
//             var section = $(sections[i]);
//             var sectionTop = section.offset().top;
//             var sectionBottom = sectionTop + section.outerHeight();

//             if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//                 $('.navbar-nav a[href="' + sections[i] + '"]').addClass('active');
//                 break; // Break out of the loop once the first matching section is found
//             }
//         }
//     }
// });
function submitForm() {
    // Handle form submission here (you can use AJAX to send data to the server if needed)

    // Clear input fields
    document.getElementById("inputname").value = "";
    document.getElementById("inputmail").value = "";
    document.getElementById("text_area").value = "";

    alert("Form Submitted!");

    // You can also display a success message or perform other actions as needed
}