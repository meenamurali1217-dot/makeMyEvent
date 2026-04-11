
// --------------user menu and dropdown logic--------------//

function toggleDropdown(id) {
  closeAll();
  let el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function toggleUserMenu() {
  closeAll();
  let menu = document.getElementById("userDropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function selectOption(el) {
  let btn = el.parentElement.previousElementSibling;
  btn.innerText = el.innerText + " ⌄";
  el.parentElement.style.display = "none";
}

function logout() {
  const userConfirmed = confirm("Are you sure you want to log out?");
  if (userConfirmed) {
    sessionStorage.removeItem('currentUser');
    alert("You have successfully logged out!");
    window.location.href = "../index.html";
  }
}

function changePassword() {
  alert("Change Password feature coming soon!\n\nYou will be able to change your password by:\n1. Verifying your current password\n2. Setting a new password\n3. Confirming the new password");
}

/* Close all dropdowns */
function closeAll() {
  document.querySelectorAll(".dropdown-content, .user-dropdown")
    .forEach(d => d.style.display = "none");
}

window.onclick = function(e) {
  if (!e.target.closest('.dropdown') && !e.target.closest('.user-menu')) {
    closeAll();
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

/* =========================================
   CUSTOM REQUEST FORM HANDLING
   ========================================= */
document.addEventListener('DOMContentLoaded', function() {
    const requestForm = document.querySelector('.request-form');
    
    if(requestForm) {
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const eventType = document.getElementById('eventType').value;
            const requirements = document.getElementById('requirements').value;
            
            if(!eventType || !requirements.trim()) {
                alert('Please fill in all fields');
                return;
            }
            
            // Create success toast notification
            const toast = document.createElement('div');
            toast.textContent = '✓ Your inquiry has been submitted successfully!';
            Object.assign(toast.style, {
                position: 'fixed',
                top: '20px',
                right: '20px',
                background: 'linear-gradient(135deg, #89c3ea, #18aef3)',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '25px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                boxShadow: '0 8px 20px rgba(24, 174, 243, 0.3)',
                zIndex: 9999,
                animation: 'slideInRight 0.4s ease'
            });
            
            document.body.appendChild(toast);
            
            // Reset form
            requestForm.reset();
            
            // Remove toast after 4 seconds
            setTimeout(() => {
                toast.style.animation = 'slideOutRight 0.4s ease';
                setTimeout(() => toast.remove(), 400);
            }, 4000);
        });
    }
});

// Add animation styles
if(!document.querySelector('style[data-form-animations]')) {
    const style = document.createElement('style');
    style.setAttribute('data-form-animations', 'true');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
}