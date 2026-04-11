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
   SETTINGS PAGE LOGIC
   ========================================= */

function saveSettings() {
    // Simulate API call
    const saveBtn = document.querySelector('.glass-btn.primary');
    const originalText = saveBtn.innerHTML;
    
    saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
    saveBtn.style.opacity = '0.7';
    
    setTimeout(() => {
        saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> Saved!';
        saveBtn.style.backgroundColor = '#10b981';
        saveBtn.style.borderColor = '#10b981';
        
        // alert("Settings updated successfully!");
        
        setTimeout(() => {
            saveBtn.innerHTML = originalText;
            saveBtn.style.backgroundColor = '';
            saveBtn.style.borderColor = '';
            saveBtn.style.opacity = '1';
        }, 2000);
    }, 1500);
}

function resetForm() {
    if(confirm("Are you sure you want to discard unsaved changes?")) {
        document.querySelectorAll('.settings-form').forEach(form => form.reset());
    }
}