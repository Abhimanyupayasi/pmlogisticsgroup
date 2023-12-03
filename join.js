<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBLKR94M');</script>
<!-- End Google Tag Manager -->
document.querySelector(".button_call1").addEventListener("click",function(){
   
    const phoneNumber = '+917000129266';
    window.location.href = 'tel:' + phoneNumber;
})
document.querySelector(".button_call2").addEventListener("click",function(){
   
    const phoneNumber = '+917000129266';
    window.location.href = 'tel:' + phoneNumber;
})
document.querySelector(".button_call3").addEventListener("click",function(){
   
    const phoneNumber = '+917000129266';
    window.location.href = 'tel:' + phoneNumber;
})
const navigationButtons = document.querySelectorAll('.home-join');

// Add a click event listener to all elements with the class name 'navigationButton'
navigationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to index.html when any button is clicked
        window.location.href = 'index.html';
    });
});
document.querySelector(".contact-join").addEventListener("click",function(){
    
    window.location.href = './contact_us.html';
})
