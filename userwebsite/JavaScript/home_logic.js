// user menu and dropdown logic
function openForm() {
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent scroll
}

function closeForm() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Vendor Registration Handler
document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.querySelector('.submit-btn');

    if(registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();

            // Get form data
            const form = document.querySelector('.form-box');
            const inputs = form.querySelectorAll('input, select');
            const emailInput = form.querySelector('input[type="email"]');
            let isValid = true;

            // Basic validation
            inputs.forEach(input => {
                if(input.type !== 'submit' && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff6b6b';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });

            if(!isValid) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }

            // Show success popup with email notification
            showVendorPopup(emailInput.value);
            showVendorPopup();

            // Close modal after popup
            setTimeout(() => {
                closeForm();
                // Reset form
                inputs.forEach(input => {
                    if(input.type !== 'submit') input.value = '';
                    input.style.borderColor = '#ddd';
                });
            }, 3000);
        });
    }
});

function showVendorPopup(email) {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: linear-gradient(135deg, #89c3ea, #18aef3);
        color: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        margin: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        animation: slideUp 0.4s ease;
        position: relative;
    `;

    popup.innerHTML = `
        <div style="font-size: 60px; margin-bottom: 20px;">🎉</div>
        <h2 style="margin-bottom: 15px; font-size: 28px; font-weight: 700;">Welcome to Event Nest!</h2>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            OK, we will add you to our website as a vendor. We will update you soon!
        </p>
        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
            <i class="fas fa-envelope" style="margin-right: 10px;"></i>
            <span style="font-weight: 600;">Email Notification Sent!</span><br>
            <small>Check your email (${email}) for vendor registration details</small>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="
            background: white;
            color: #18aef3;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Got it!</button>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Simulate email notification
    simulateEmailNotification(email);
}

function simulateEmailNotification(email) {
    // This would normally send an actual email
    // For demo purposes, we'll show a console message
    console.log('📧 Email notification sent to vendor:');
    console.log('To:', email);
    console.log('Subject: Welcome to Event Nest - Vendor Registration');
    console.log('Body: Thank you for registering as a vendor. We will review your application and get back to you within 24-48 hours.');
    console.log('From: Event Nest Team <noreply@eventnest.com>');

    // You could integrate with an email service here like:
    // - EmailJS
    // - SendGrid
    // - Firebase Functions
    // - Your backend API
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ff6b6b' : '#4ecdc4'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add required CSS animations
if(!document.querySelector('style[data-vendor-styles]')) {
    const style = document.createElement('style');
    style.setAttribute('data-vendor-styles', 'true');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
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
                transform: translateX(100%);
            }
        }
    `;
    document.head.appendChild(style);
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

function removeWishlistItem(id){
  wishlistItems=wishlistItems.filter(w=>w.id!==id);
  try{localStorage.setItem('evh_wishlist',JSON.stringify(wishlistItems));}catch(e){}
  updateWishlistBadge();
}

// Initialize wishlist on page load
document.addEventListener('DOMContentLoaded',function(){
  updateWishlistBadge();
});