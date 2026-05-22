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



  //  USER MENU DROPDOWN LOGIC


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
        window.location.href = "../../index.html";
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
/* ============================================================
   WISHLIST MANAGEMENT FOR HOME PAGE
   ============================================================ */
   
let wishlistItems=[];
try{wishlistItems=JSON.parse(localStorage.getItem('evh_wishlist')||'[]');}catch(e){wishlistItems=[];}

function updateWishlistBadge(){
  const badge=document.getElementById('wishlist-count');
  if(wishlistItems.length>0){
    badge.style.display='inline';
    badge.textContent=`(${wishlistItems.length})`;
  } else {
    badge.style.display='none';
  }
}


function openWishlistModal(){
  // Create modal
  const modal=document.createElement('div');
  modal.style.cssText=`
    position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);
    display:flex;align-items:center;justify-content:center;z-index:10000;
  `;
  modal.onclick=()=>modal.remove();
  
  const box=document.createElement('div');
  box.style.cssText=`
    background:white;border-radius:12px;max-width:600px;width:90%;max-height:80vh;overflow-y:auto;
    padding:30px;box-shadow:0 10px 40px rgba(0,0,0,0.3);
  `;
  modal.appendChild(box);
  
  let content;
  if(!wishlistItems.length){
    content=`
      <div style="text-align:center;padding:40px 0;">
        <div style="font-size:60px;margin-bottom:20px;">❤️</div>
        <h3 style="margin-bottom:10px;color:#333;">Your Wishlist is Empty</h3>
        <p style="color:#666;margin-bottom:20px;">Add vendors to your wishlist to save them for later</p>
        <button onclick="location.href='./events_vendors.html'" style="background:#18aef3;color:white;border:none;padding:10px 25px;border-radius:6px;cursor:pointer;font-weight:600;">Browse Vendors</button>
      </div>
    `;
  } else {
    content=`
      <h2 style="margin-bottom:20px;color:#333;"><i class="fa-solid fa-heart" style="color:var(--teal);margin-right:10px;"></i>My Wishlist</h2>
      <p style="color:#666;margin-bottom:20px;">${wishlistItems.length} item${wishlistItems.length!==1?'s':''} saved</p>
      <div style="border-top:1px solid #eee;padding-top:15px;">
        ${wishlistItems.map(w=>`
          <div style="padding:15px;background:#f9f9f9;margin-bottom:10px;border-radius:6px;border-left:4px solid #18aef3;">
            <div style="font-weight:600;margin-bottom:8px;color:#333;">${w.type==='package'?w.vendorName:w.serviceName}</div>
            <div style="color:#666;font-size:14px;margin-bottom:8px;">
              ${w.type==='package'?`<i class="fa-solid fa-layer-group" style="margin-right:6px;color:#18aef3;"></i>${w.packageCount} packages`:`<i class="fa-solid fa-tag" style="margin-right:6px;color:#18aef3;"></i>${w.serviceType}`}
            </div>
            <button onclick="removeWishlistItem('${w.id}');this.parentElement.parentElement.remove();" style="background:#ff6b6b;color:white;border:none;padding:6px 12px;border-radius:4px;cursor:pointer;font-size:12px;">Remove</button>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:20px;padding-top:20px;border-top:1px solid #eee;">
        <button onclick="location.href='./events_vendors.html'" style="width:100%;background:#18aef3;color:white;border:none;padding:12px;border-radius:6px;cursor:pointer;font-weight:600;font-size:15px;">Browse More Vendors</button>
      </div>
    `;
  }
  
  box.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:1px solid #eee;padding-bottom:15px;">
      <h2 style="margin:0;color:#333;">❤️ Wishlist</h2>
      <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background:none;border:none;font-size:24px;cursor:pointer;color:#999;">&times;</button>
    </div>
    ${content}
  `;
  
  document.body.appendChild(modal);
}
