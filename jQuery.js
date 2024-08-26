// Array of background images
const images = [
    'https://cdn.usarestaurants.info/assets/uploads/79312690b97a42a112f799bad39d8bb8_-united-states-connecticut-fairfield-county-bridgeport-672671-mcdonaldshtm.jpg',
    'https://avatars.mds.yandex.net/i?id=9962ccc590fff4136395f7bbd5672c86_l-9747317-images-thumbs&ref=rim&n=13&w=1600&h=899', // Replace with your image URLs
    'https://steemitimages.com/DQmZac7qn3iBetPRSUV69cN7gqGAGbWYQ1azWGHoS8YLP3v/McDonald',
    'https://scontent.fkhi19-1.fna.fbcdn.net/v/t1.6435-9/65300581_819464388440037_2224173368561631232_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeHCrYXA91y_WRzwHBY-354KLx_hyGHasNcvH-HIYdqw14BfpylUl1Uu0OCzvuXqYcI3UJ-Qolf1mE7tPU3GKEoF&_nc_ohc=0gNyYnQ7o5AQ7kNvgGAJCbn&_nc_ht=scontent.fkhi19-1.fna&oh=00_AYCoAWW9PEd8hxtnlZbGIDgBVyh-5AVAGjO1dtjhLIXLxg&oe=66E7189B',
    'https://wallpapers.com/images/hd/burger-king-with-potato-fries-vg270ayt9cqelad1.jpg'
];



// $(document).ready(function(){
//     $("#next").click(function(){
//         $(this).append(images[1])
//     })
// })



let currentIndex = 0;

            function updateBackgroundImage() {
                $('body').css('background-image', `url(${images[currentIndex]})`);
            }

            $('#prev').click(function() {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateBackgroundImage();
            });

            $('#next').click(function() {
                currentIndex = (currentIndex + 1) % images.length;
                updateBackgroundImage();
            });

            // Initialize the background image
            updateBackgroundImage();



            // $(document).ready(function(event){
            //     event.preventDefault();

            //     $("#myForm").on("submit", function(){
            //     let email = $("#email").val().trim();

            //     let testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            //     let isValid = email && testEmail.test(email);

            //     let emailError = $("#email-error");


            //     if (isValid) {
            //         emailError.text("").hide(); // Clear any previous error message
            //     } else {
            //         emailError.text("Invalid email address").show(); // Show error message
            //     }
            // });
            // })



    $(document).ready(function() {

            $(".newbtn").on("click", function(){
               alert("Form Submit SuccessFully!")
            });
    });        




//     $(document).ready(function() {

//         $(".newbtn").on("click", function(){
//            alert("Form Submit SuccessFully!")
//         });
// });  


$(document).ready(function(){
    $(".add-to-cart-btn").click(function(){
        $(this).append(`<div class="confirmation"><h1>THIS BURGER CANT IN MENU</h1><p>Your request has been successfully processed.</p><button onclick="goBack()">Go Back</button></div>`);
        $(this).delay(3000).fadeOut(1000); 
    });
})





// function goBack() {
//     window.history.back();
// }



$(document).ready(() => {
    $(".btn2").on("click",() => {
        window.scrollTo({
            top: 3000,
            behavior: "smooth"
        });
    });
})



$(document).ready(() => {
    $(".product").on("click",() => {
        window.scrollTo({
            top: 3000,
            behavior: "smooth"
        });
    });
})



$(document).ready(() => {
    $(".about").on("click",() => {
        window.scrollTo({
            top: 5750,
            behavior: "smooth"
        });
    });
})



$(document).ready(() => {
    $(".contact").on("click",() => {
        window.scrollTo({
            top: 6300,
            behavior: "smooth"
        });
    });
})



$(document).ready(() => {
    $(".contact").on("click",() => {
        window.scrollTo({
            top: 6300,
            behavior: "smooth"
        });
    });
})


$(document).ready(() => {
    $(".service").on("click",() => {
        window.scrollTo({
            top: 900,
            behavior: "smooth"
        });
    });
})

