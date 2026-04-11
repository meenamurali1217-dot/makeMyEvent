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
function searchTable() {
    let input = document.getElementById("vendorSearch");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("vendorTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let tdName = tr[i].getElementsByTagName("td")[0];
        let tdLoc = tr[i].getElementsByTagName("td")[2];
        
        if (tdName || tdLoc) {
            let txtValueName = tdName.textContent || tdName.innerText;
            let txtValueLoc = tdLoc.textContent || tdLoc.innerText;
            
            if (txtValueName.toUpperCase().indexOf(filter) > -1 || txtValueLoc.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function toggleVendorStatus(btn) {
    let row = btn.closest('tr');
    let statusSpan = row.querySelector('.status');
    
    if (statusSpan.classList.contains('completed')) {
        if(confirm("Suspend this vendor?")) {
            statusSpan.className = "status canceled";
            statusSpan.innerText = "Suspended";
            btn.innerHTML = '<i class="fa-solid fa-unlock"></i>';
            btn.className = "icon-btn approve";
            btn.title = "Activate";
        }
    } else if (statusSpan.classList.contains('canceled')) {
        if(confirm("Re-activate this vendor?")) {
            statusSpan.className = "status completed";
            statusSpan.innerText = "Active";
            btn.innerHTML = '<i class="fa-solid fa-ban"></i>';
            btn.className = "icon-btn delete";
            btn.title = "Suspend";
        }
    }
}

function approveVendorRow(btn) {
    let row = btn.closest('tr');
    let statusSpan = row.querySelector('.status');
    
    if(confirm("Approve this new vendor?")) {
        statusSpan.className = "status completed";
        statusSpan.innerText = "Active";
        let actionDiv = row.querySelector('.action-buttons');
        actionDiv.innerHTML = `
            <button class="icon-btn edit" title="Edit"><i class="fa-solid fa-pen"></i></button>
            <button class="icon-btn delete" title="Suspend" onclick="toggleVendorStatus(this)"><i class="fa-solid fa-ban"></i></button>
        `;
    }
}

/* =========================================
   ADD VENDOR MODAL & FORM LOGIC
   ========================================= */
const vendorModal = document.getElementById('vendor-modal');

function openVendorModal() {
    vendorModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVendorModal() {
    vendorModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    // Clear form and preview
    document.getElementById('add-vendor-form').reset();
    document.getElementById('image-preview-container').innerHTML = '';
}

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target === vendorModal) {
        closeVendorModal();
    }
});

// Image Preview
function previewSingleImage() {
    const container = document.getElementById('image-preview-container');
    const fileInput = document.getElementById('vendor-img-input');
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
document.getElementById('add-vendor-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Gather Data
    const name = document.getElementById('v-name').value;
    const category = document.getElementById('v-category').value;
    const location = document.getElementById('v-location').value;
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Get Image (or use default if none)
    const fileInput = document.getElementById('vendor-img-input');
    let imgSrc = "https://via.placeholder.com/40"; // Default
    if (fileInput.files && fileInput.files[0]) {
        imgSrc = URL.createObjectURL(fileInput.files[0]);
    }

    // 2. Create Table Row
    const tableBody = document.querySelector('#vendorTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>
            <div class="vendor-cell">
                <img src="${imgSrc}" alt="Vendor">
                <div>
                    <strong>${name}</strong><br>
                    <small>ID: #V-${Math.floor(Math.random() * 9000) + 1000}</small>
                </div>
            </div>
        </td>
        <td>${category}</td>
        <td>${location}</td>
        <td>${date}</td>
        <td>0</td>
        <td><span class="star-rating text-gray">N/A</span></td>
        <td><span class="status completed">Active</span></td>
        <td>
            <div class="action-buttons">
                <button class="icon-btn edit" title="Edit"><i class="fa-solid fa-pen"></i></button>
                <button class="icon-btn delete" title="Suspend" onclick="toggleVendorStatus(this)"><i class="fa-solid fa-ban"></i></button>
            </div>
        </td>
    `;

    // 3. Add to Table & Close Modal
    tableBody.insertBefore(newRow, tableBody.firstChild); // Add to top
    alert("New Vendor Added Successfully!");
    closeVendorModal();
});