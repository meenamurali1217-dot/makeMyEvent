// Search bar functionality (Simple alert for demo)
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert('Searching for: ' + this.value);
    }
});



/* =========================================
   LOGOUT FUNCTIONALITY
   ========================================= */
function confirmLogout() {
    // 1. Show Confirmation Dialog
    const userConfirmed = confirm("Do you want to log out?");

    // 2. If User clicks "Yes" (OK)   
    if (userConfirmed) {
        // Show Success Message
        alert("You logged out of the website.");

        // NAVBAR: Hide User Name, Show Login/Register Buttons
        document.getElementById('nav-logged-in').style.display = 'none';
        document.getElementById('nav-logged-out').style.display = 'flex';

        // SIDEBAR: Hide Logout Link, Show Login/Register Links
        document.getElementById('sidebar-logged-in').style.display = 'none';
        document.getElementById('sidebar-logged-out').style.display = 'block';

        // SIDEBAR HEADER: Update Name to Guest
        const sidebarUser = document.getElementById('sidebar-username');
        if(sidebarUser) {
            sidebarUser.innerText = "Guest User";
        }
    }
}


// Select all card links
const cardLinks = document.querySelectorAll('.card-link');

cardLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent page jump
    console.log(`Clicked: ${this.textContent}`);
    alert(`You clicked: "${this.textContent}"`);
  });
});




// CARD SLIDER FUNCTIONALITY

const container = document.getElementById("cardContainer");

document.querySelector(".next").addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});

document.querySelector(".prev").addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});

/* NAVBAR SHOW/HIDE */
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.top = "-80px"; // hide
  } else {
    navbar.style.top = "0"; // show
  }

  lastScroll = currentScroll;
});