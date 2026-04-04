/* ================= SIDEBAR LOGIC ================= */
function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
}

function closeSidebar() {
    document.getElementById("sidebar").style.left = "-300px";
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
}

// Close sidebar if user clicks outside of it (on the overlay)
document.getElementById('overlay').addEventListener('click', closeSidebar);

// Close sidebar if user clicks a link inside the sidebar
document.querySelectorAll('.sidebar-content a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

/* ================= PROFILE PIC LOGIC (If needed) ================= */
function uploadPhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            // Check if profilePic element exists before trying to set src
            const profilePic = document.getElementById("profilePic");
            if (profilePic) {
                profilePic.src = reader.result;
            }

            // Save to local storage safely
            try {
                const user = JSON.parse(localStorage.getItem("eventUser")) || {};
                user.photo = reader.result;
                localStorage.setItem("eventUser", JSON.stringify(user));
            } catch (e) {
                console.error("Local Storage Error", e);
            }
        };
        reader.readAsDataURL(file);
    }
}



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