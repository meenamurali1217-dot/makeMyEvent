/* =========================================
   CHAT INTERFACE LOGIC
   ========================================= */

// Switch Active Chat
function openChat(element, name, type) {
    // 1. Update Active Class in List
    const allContacts = document.querySelectorAll('.contact-item');
    allContacts.forEach(c => c.classList.remove('active'));
    element.classList.add('active');

    // 2. Update Header Info
    document.getElementById('chatHeaderName').innerText = name;
    
    // Switch Avatar based on clicked element
    const clickedImg = element.querySelector('img').src;
    document.getElementById('chatHeaderImg').src = clickedImg;

    // Reset Chat Area (Simulated)
    const chatBox = document.getElementById('chatMessages');
    chatBox.innerHTML = `
        <div style="text-align:center; padding: 20px; color:#94a3b8; font-size:12px;">
            -- Conversation started with ${name} --
        </div>
    `;
    
    // Add fake history based on type
    if(type === 'admin') {
        appendMessage('received', 'Hello! This is Admin Support. How can we help you?');
    } else {
        appendMessage('received', 'Hi! I am interested in your services.');
    }
}

// Send Message Logic
function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();

    if (message !== "") {
        // 1. Append Sent Message
        appendMessage('sent', message);
        input.value = ""; // Clear input

        // 2. Scroll to bottom
        const chatBox = document.getElementById('chatMessages');
        chatBox.scrollTop = chatBox.scrollHeight;

        // 3. Simulate Reply (after 1.5s)
        setTimeout(() => {
            appendMessage('received', 'Thanks for the message! I will get back to you shortly.');
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1500);
    }
}

// Enter Key Handler
function handleEnter(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
}

// Helper: Append HTML Message
function appendMessage(type, text) {
    const chatBox = document.getElementById('chatMessages');
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const div = document.createElement('div');
    div.className = `message-bubble ${type}`;
    div.innerHTML = `
        <p>${text}</p>
        <span class="time">${time} ${type === 'sent' ? '<i class="fa-solid fa-check"></i>' : ''}</span>
    `;
    
    chatBox.appendChild(div);
}