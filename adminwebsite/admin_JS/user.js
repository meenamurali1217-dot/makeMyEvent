/* =========================================
   SIDEBAR & EXISTING LOGIC
   ========================================= */
function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    if (sidebar && overlay) {
        sidebar.style.left = "0";              
        overlay.style.display = "block";       
        document.body.style.overflow = "hidden"; 
    }
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    if (sidebar && overlay) {
        sidebar.style.left = "-300px";         
        overlay.style.display = "none";        
        document.body.style.overflow = "auto";   
    }
}

/* =========================================
   SEARCH & TABLE LOGIC
   ========================================= */
function searchUserTable() {
    let input = document.getElementById("userSearch");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("userTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let tdName = tr[i].getElementsByTagName("td")[0];
        let tdContact = tr[i].getElementsByTagName("td")[1];
        
        if (tdName || tdContact) {
            let txtValueName = tdName.textContent || tdName.innerText;
            let txtValueContact = tdContact.textContent || tdContact.innerText;
            
            if (txtValueName.toUpperCase().indexOf(filter) > -1 || txtValueContact.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function toggleUserStatus(btn) {
    let row = btn.closest('tr');
    let statusSpan = row.querySelector('.status');
    
    if (statusSpan.classList.contains('completed')) {
        // Block User
        if(confirm("Are you sure you want to BLOCK this user?")) {
            statusSpan.className = "status canceled";
            statusSpan.innerText = "Blocked";
            btn.innerHTML = '<i class="fa-solid fa-unlock"></i>';
            btn.className = "icon-btn approve";
            btn.title = "Unblock";
        }
    } else if (statusSpan.classList.contains('canceled')) {
        // Unblock User
        if(confirm("Unblock this user account?")) {
            statusSpan.className = "status completed";
            statusSpan.innerText = "Active";
            btn.innerHTML = '<i class="fa-solid fa-ban"></i>';
            btn.className = "icon-btn delete";
            btn.title = "Block";
        }
    }
}

/* =========================================
   ADD USER MODAL & FORM LOGIC
   ========================================= */
const userModal = document.getElementById('user-modal');

function openUserModal() {
    userModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeUserModal() {
    userModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    // Clear form
    document.getElementById('add-user-form').reset();
    document.getElementById('image-preview-container').innerHTML = '';
}

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target === userModal) {
        closeUserModal();
    }
});

// Image Preview Logic
function previewUserImage() {
    const container = document.getElementById('image-preview-container');
    const fileInput = document.getElementById('user-img-input');
    const file = fileInput.files[0];

    container.innerHTML = ""; 

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.classList.add("preview-img");
            container.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

// Handle Form Submission (Add to Table)
document.getElementById('add-user-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Gather Data
    const name = document.getElementById('u-name').value;
    const email = document.getElementById('u-email').value;
    const phone = document.getElementById('u-phone').value;
    const status = document.getElementById('u-status').value;
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Get Image (or use default avatar)
    const fileInput = document.getElementById('user-img-input');
    let imgSrc = "https://via.placeholder.com/40"; // Default
    if (fileInput.files && fileInput.files[0]) {
        imgSrc = URL.createObjectURL(fileInput.files[0]);
    } else {
        // Random gender for placeholder
        const randomNum = Math.floor(Math.random() * 99) + 1;
        imgSrc = `https://randomuser.me/api/portraits/men/${randomNum}.jpg`; 
    }

    // Determine status class
    let statusClass = "completed"; // Active
    if(status === "Inactive") statusClass = "pending";

    // 2. Create Table Row
    const tableBody = document.querySelector('#userTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>
            <div class="vendor-cell">
                <img src="${imgSrc}" alt="User">
                <div>
                    <strong>${name}</strong><br>
                    <small>ID: #U-${Math.floor(Math.random() * 9000) + 1000}</small>
                </div>
            </div>
        </td>
        <td>${email}<br><small>${phone}</small></td>
        <td>${date}</td>
        <td>0</td>
        <td>₹0</td>
        <td><span class="status ${statusClass}">${status}</span></td>
        <td>
            <div class="action-buttons">
                <button class="icon-btn edit" title="View Details"><i class="fa-solid fa-eye"></i></button>
                <button class="icon-btn delete" title="Block User" onclick="toggleUserStatus(this)"><i class="fa-solid fa-ban"></i></button>
            </div>
        </td>
    `;

    // 3. Add to Table & Close Modal
    tableBody.insertBefore(newRow, tableBody.firstChild); // Add to top
    alert("New User Added Successfully!");
    closeUserModal();
});