
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

/* FILTER */
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const value = btn.dataset.filter;

    cards.forEach(card => {
      if(value === "all" || card.classList.contains(value)){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* MODAL IMAGE */
function openModal(card){
  document.getElementById("modal").style.display="flex";
  document.getElementById("modalImg").src = card.querySelector("img").src;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}



  
  let index = 0;
  const slides = document.querySelector(".slides");
  const total = slides.children.length;

  function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % total;
    showSlide();
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    showSlide();
  }


function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-300px";
  document.getElementById("overlay").style.display = "none";
}
function uploadPhoto(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    document.getElementById("profilePic").src = reader.result;

    const user = JSON.parse(localStorage.getItem("eventUser"));
    user.photo = reader.result;
    localStorage.setItem("eventUser", JSON.stringify(user));
  };

  reader.readAsDataURL(file);
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

