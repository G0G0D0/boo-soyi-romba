const loveBtn = document.getElementById("loveBtn");
const heartContainer = document.getElementById("heartContainer");

loveBtn.addEventListener("click", () => {
    // Create hearts for animation
    createHearts();
    
    // Send an email using the mailto functionality
    sendEmail();
});

function createHearts() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random float time between 3 and 5 seconds
    heartContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove heart after 5 seconds
}

function sendEmail() {
    // Use the mailto link to open the user's email client
    const email = "yashwantsasikumar@gmail.com";
    const subject = encodeURIComponent("Sorry Boo");
    const body = encodeURIComponent(`Boo romba romba romba romba romba soyiiiii. Enna manchiuh. I am ur smol boo. I will always lift u seiyaaa I am here only. I didn’t mean it that way, and I shouldn’t have yelled at you. I got worked up on my adrenaline and wasn't putting my best foot forward. Everything is ours jubi. Namma... idhu ella nammalodadhu dhaa seiyaaa.\n\nIppadikku ur smol baby ur chella kutty ur jubi baby.. ummaaa 💋`);
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}


// const loveBtn = document.getElementById("loveBtn");
// const heartContainer = document.getElementById("heartContainer");

// loveBtn.addEventListener("click", () => {
//     createHearts();
// });

// function createHearts() {
//     const heart = document.createElement("div");
//     heart.classList.add("heart");
//     heart.style.left = `${Math.random() * 100}vw`;
//     heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random float time between 3 and 5 seconds
//     heartContainer.appendChild(heart);
    
//     setTimeout(() => {
//         heart.remove();
//     }, 5000); // Remove heart after 5 seconds
// }
