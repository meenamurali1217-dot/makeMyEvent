/* =========================================
   SIDEBAR NAVIGATION LOGIC
   ========================================= */

/**
 * Opens the sidebar by sliding it in from the left
 * and showing the dark overlay.
 */
function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    
    if (sidebar && overlay) {
        sidebar.style.left = "0";              // Bring sidebar into view
        overlay.style.display = "block";       // Show the dark background
        document.body.style.overflow = "hidden"; // Disable scrolling on the main page
    }
}

/**
 * Closes the sidebar by sliding it back off-screen
 * and hiding the overlay.
 */
function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    
    if (sidebar && overlay) {
        sidebar.style.left = "-300px";         // Push sidebar off-screen
        overlay.style.display = "none";        // Hide the dark background
        document.body.style.overflow = "auto";   // Re-enable scrolling
    }
}

/* =========================================
   OPTIONAL: SEARCH BAR HIGHLIGHT
   ========================================= */
// This adds a nice glow effect when you click inside the search box
const searchInput = document.querySelector('.search-box input');

if (searchInput) {
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = "0 0 8px rgba(33, 150, 243, 0.3)";
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = "none";
    });
}


/* =========================================
   USER MENU DROPDOWN LOGIC
   ========================================= */

/**
 * Toggle the user menu dropdown visibility
 */
function toggleUserMenu() {
    closeAll();
    let menu = document.getElementById("userDropdown");
    if (menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
}

/**
 * Close all open dropdowns
 */
function closeAll() {
    document.querySelectorAll(".user-dropdown").forEach(d => d.style.display = "none");
}

/**
 * Close dropdown when clicking outside the menu
 */
window.addEventListener('click', function(e) {
    if (!e.target.closest('.user-menu')) {
        closeAll();
    }
});

/* =========================================
   LOGOUT FUNCTIONALITY
   ========================================= */

/**
 * Handle user logout with confirmation
 */
function logout() {
    // Show Confirmation Dialog
    const userConfirmed = confirm("Are you sure you want to log out?");

    // If User confirms logout
    if (userConfirmed) {
        sessionStorage.removeItem('currentUser');
        // Show Success Message
        alert("You have successfully logged out!");

        // Redirect to home page after logout
        window.location.href = "../index.html";
    }
}

/* =========================================
   CHANGE PASSWORD FUNCTIONALITY
   ========================================= */

/**
 * Handle change password request
 * Opens a modal or redirects to password change page
 */
function changePassword() {
    // Option 1: Show a prompt dialog
    alert("Change Password feature coming soon!\n\nYou will be able to change your password by:\n1. Verifying your current password\n2. Setting a new password\n3. Confirming the new password");
    
    // Option 2: If you have a dedicated change password page, uncomment below:
    // window.location.href = "../templates/change_password.html";
    
    // Option 3: Open a modal (uncomment if you add CSS for modal)
    // showChangePasswordModal();
}