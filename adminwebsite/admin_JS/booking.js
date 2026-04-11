/* =========================================
   SIDEBAR NAVIGATION LOGIC
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
   SEARCH BAR HIGHLIGHT
   ========================================= */
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
   ADMIN BOOKING TABLE LOGIC
   ========================================= */

function searchBookingTable() {
    let input = document.getElementById("bookingSearch");
    if(!input) return;
    let filter = input.value.toUpperCase();
    let table = document.getElementById("bookingTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        // ID (0), User (2), Vendor (3)
        let tdId = tr[i].getElementsByTagName("td")[0];
        let tdUser = tr[i].getElementsByTagName("td")[2];
        let tdVendor = tr[i].getElementsByTagName("td")[3];
        
        if (tdId || tdUser || tdVendor) {
            let txtId = tdId.textContent || tdId.innerText;
            let txtUser = tdUser.textContent || tdUser.innerText;
            let txtVendor = tdVendor.textContent || tdVendor.innerText;
            
            if (txtId.toUpperCase().indexOf(filter) > -1 || 
                txtUser.toUpperCase().indexOf(filter) > -1 || 
                txtVendor.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function cancelBooking(btn) {
    let row = btn.closest('tr');
    let statusSpan = row.querySelector('.status');
    
    if (statusSpan.classList.contains('completed')) {
        alert("Cannot cancel a completed booking.");
        return;
    }

    if(confirm("Are you sure you want to cancel this booking?")) {
        statusSpan.className = "status canceled";
        statusSpan.innerText = "Cancelled";
        // Disable cancel button
        btn.disabled = true;
        btn.style.opacity = "0.5";
        btn.style.cursor = "not-allowed";
    }
}