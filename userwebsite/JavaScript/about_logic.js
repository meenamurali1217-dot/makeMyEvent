
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
    window.location.href = "../../index.html";
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
    window.location.href = "../../index.html";
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
