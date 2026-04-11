/* =========================================
   SIDEBAR & GENERAL UI LOGIC
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

// Search box highlight effect
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
   DASHBOARD ACTIONS
   ========================================= */

function respondBooking(btn, action) {
    const row = btn.closest('tr');
    const actionsDiv = row.querySelector('.action-buttons');
    
    if (action === 'accepted') {
        if(confirm("Accept this booking request?")) {
            actionsDiv.innerHTML = '<span class="tag low" style="font-size:12px; padding: 5px 10px;">Accepted</span>';
            row.style.backgroundColor = '#f0fdf4';
            showToast("Booking accepted successfully!");
        }
    } else if (action === 'declined') {
        if(confirm("Decline this booking request?")) {
            actionsDiv.innerHTML = '<span class="tag high" style="font-size:12px; padding: 5px 10px;">Declined</span>';
            row.style.backgroundColor = '#fef2f2'; 
            row.style.opacity = '0.6';
            showToast("Booking declined.");
        }
    }
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/* =========================================
   ADD SERVICE MODAL LOGIC
   ========================================= */
function openServiceModal() {
    document.getElementById("serviceModal").style.display = "flex";
}

function closeServiceModal() {
    document.getElementById("serviceModal").style.display = "none";
}

function handleServiceSubmit(event) {
    event.preventDefault(); // Prevent page reload

    // Collect Data
    const name = document.getElementById("serviceName").value;
    const price = document.getElementById("servicePrice").value;
    const category = document.getElementById("serviceCategory").value;
    const files = document.getElementById("serviceImages").files;

    // Simulate Saving process
    const btn = event.target.querySelector('button[type="submit"]');
    const originalText = btn.innerText;
    btn.innerText = "Saving...";
    btn.disabled = true;

    setTimeout(() => {
        // Reset form and UI
        btn.innerText = originalText;
        btn.disabled = false;
        document.getElementById("addServiceForm").reset();
        closeServiceModal();
        
        // Show success feedback
        showToast(`Service "${name}" added to ${category} category!`);
    }, 1500);
}

/* =========================================
   CALENDAR MODAL LOGIC
   ========================================= */
function openCalendarModal() {
    renderCalendar();
    document.getElementById("calendarModal").style.display = "flex";
}

function closeCalendarModal() {
    document.getElementById("calendarModal").style.display = "none";
}

function renderCalendar() {
    const grid = document.getElementById("calendarGrid");
    grid.innerHTML = ""; // Clear existing

    const date = new Date();
    const currentMonth = date.getMonth(); // 0-11
    const currentYear = date.getFullYear();

    // First day of the month (0=Sun, 1=Mon...)
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    // Total days in month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Dummy Events Data
    const events = {
        14: { title: "Corporate Gala", type: "corporate" },
        20: { title: "Rahul's Wedding", type: "wedding" },
        25: { title: "B'day Bash", type: "private" }
    };

    // Fill Empty Slots before 1st of month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("day", "empty");
        grid.appendChild(emptyDiv);
    }

    // Fill Actual Days
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.innerText = i;

        // Highlight Today
        if (i === date.getDate()) {
            dayDiv.classList.add("today");
        }

        // Add Event Marker if exists
        if (events[i]) {
            const marker = document.createElement("span");
            marker.classList.add("event-marker");
            if(events[i].type === 'wedding') marker.classList.add("wedding");
            marker.innerText = events[i].title;
            dayDiv.appendChild(marker);
        }

        grid.appendChild(dayDiv);
    }
}

// Close modals if clicked outside content box
window.onclick = function(event) {
    const sModal = document.getElementById("serviceModal");
    const cModal = document.getElementById("calendarModal");
    if (event.target === sModal) closeServiceModal();
    if (event.target === cModal) closeCalendarModal();
}