<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBLKR94M');</script>
<!-- End Google Tag Manager -->
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Get values from input fields
    var enteredId = document.getElementById('id').value;
    var enteredPassword = document.getElementById('password').value;

    // Check if entered ID and password match the specified values
    if (enteredId === '123456654' && enteredPassword === '123456') {
        // Redirect to the next page (replace 'next-page.html' with the actual URL)
        window.location.href = 'next-page.html';
    } else {
        alert('Invalid ID or password. Please try again.'); // Show an error message
    }
});
