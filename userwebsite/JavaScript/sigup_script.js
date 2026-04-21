const DEFAULT_AVATAR = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><rect width='120' height='120' fill='%23e8edf5'/><circle cx='60' cy='36' r='24' fill='%238899a9'/><path d='M24 102c0-24 18-42 36-42s36 18 36 42' fill='%238899a9'/></svg>";

function getStoredUser() {
    const raw = sessionStorage.getItem('currentUser');
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

function saveCurrentUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
}

function clearCurrentUser() {
    sessionStorage.removeItem('currentUser');
}

function getRegisteredUsers() {
    const raw = localStorage.getItem('registeredUsers');
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function saveRegisteredUsers(users) {
    localStorage.setItem('registeredUsers', JSON.stringify(users));
}

function findRegisteredUser(email, password) {
    return getRegisteredUsers().find(user => user.email === email && user.password === password) || null;
}

function isEmailRegistered(email) {
    return getRegisteredUsers().some(user => user.email === email);
}

function registerUser(user) {
    const users = getRegisteredUsers();
    users.push(user);
    saveRegisteredUsers(users);
}

function getAccount(email, password) {
    const accounts = [
        {
            email: 'nacharamvinaykumar@gmail.com',
            password: '123@Nvinay',
            role: 'vendor',
            name: 'Vinay Kumar',
            redirect: '../vendorewebsite/vendor_pages/vendor_dashboard.html'
        },
        {
            email: 'shanmukh1207@gmail.com',
            password: '1207@Shanmukh',
            role: 'user',
            name: 'Shanmukh',
            redirect: '../userwebsite/after_login_pages/home.html'
        },
        {
            email: 'meena.murali1217@gmail.com',
            password: '1217@Mkvm',
            role: 'admin',
            name: 'Admin',
            redirect: '../adminwebsite/admin_pages/index.html'
        }
    ];

    return accounts.find(account => account.email === email && account.password === password) || null;
}

function authenticateUser(email, password) {
    const user = findRegisteredUser(email, password);
    if (user) {
        return {
            ...user,
            role: 'user',
            redirect: '../templates/user_page.html'
        };
    }

    return getAccount(email, password);
}

function setImageFallback(img) {
    if (!img) return;

    const defaultAvatar = DEFAULT_AVATAR;
    img.onerror = function () {
        if (img.src !== defaultAvatar) {
            img.src = defaultAvatar;
        }
    };

    if (!img.src || img.src.trim() === '') {
        img.src = defaultAvatar;
    }
}

function applyCurrentUserToPage() {
    const user = getStoredUser();
    if (!user) return;

    document.querySelectorAll('.user-menu .avatar').forEach(img => {
        img.src = user.profileImage || user.avatar || DEFAULT_AVATAR;
        img.alt = `${user.name} Avatar`;
        setImageFallback(img);
    });

    document.querySelectorAll('.user-menu .user-btn span').forEach(span => {
        span.textContent = user.name;
    });

    document.querySelectorAll('.profile-img img').forEach(img => {
        img.src = user.profileImage || user.avatar || DEFAULT_AVATAR;
        img.alt = `${user.name} Profile`;
        setImageFallback(img);
    });

    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        const heading = profileCard.querySelector('h3');
        if (heading) heading.textContent = user.name;

        const paragraphs = profileCard.querySelectorAll('p');
        if (paragraphs.length > 0) {
            paragraphs[0].textContent = user.email;
        }
        if (paragraphs.length > 1) {
            paragraphs[1].textContent = user.contact || '';
        }
    }

    const locationLabel = getDefaultLocationLabel(user);
    updateLocationText(locationLabel);

    const welcomeName = document.getElementById('welcome-user-name');
    if (welcomeName) {
        welcomeName.textContent = user.name;
    }
}

function ensureLocationElement() {
    document.querySelectorAll('.user-menu').forEach(menu => {
        if (!menu.querySelector('.user-location')) {
            const loc = document.createElement('div');
            loc.className = 'user-location';
            loc.innerHTML = '<i class="fa-solid fa-location-dot"></i> Loading...';
            loc.style.fontSize = '0.85rem';
            loc.style.marginTop = '4px';
            loc.style.color = 'inherit';
            loc.style.display = 'flex';
            loc.style.alignItems = 'center';
            loc.style.gap = '4px';
            menu.parentElement.insertBefore(loc, menu);
        }
    });

    document.querySelectorAll('header.navbar').forEach(header => {
        if (header.querySelector('.user-location')) return;
        const auth = header.querySelector('.auth');
        if (auth) {
            const loc = document.createElement('div');
            loc.className = 'user-location';
            loc.innerHTML = '<i class="fa-solid fa-location-dot"></i> Loading...';
            loc.style.fontSize = '0.85rem';
            loc.style.marginTop = '4px';
            loc.style.color = 'inherit';
            loc.style.display = 'flex';
            loc.style.alignItems = 'center';
            loc.style.gap = '4px';
            auth.insertAdjacentElement('afterend', loc);
        }
    });
}

function updateLocationText(text) {
    document.querySelectorAll('.user-location').forEach(el => {
        el.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${text}`;
    });
}

function getDefaultLocationLabel(user) {
    if (user && user.address) {
        return user.address;
    }
    if (user && typeof user.latitude === 'number' && typeof user.longitude === 'number') {
        return `Lat ${user.latitude.toFixed(3)}, Lon ${user.longitude.toFixed(3)}`;
    }
    return 'Unavailable';
}

function startLiveLocationTracking() {
    if (!navigator.geolocation) {
        updateLocationText('Geolocation not supported');
        return;
    }

    navigator.geolocation.watchPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const user = getStoredUser();
            if (user) {
                user.latitude = lat;
                user.longitude = lon;
                saveCurrentUser(user);
            }
            updateLocationText(`Lat ${lat.toFixed(3)}, Lon ${lon.toFixed(3)}`);
        },
        error => {
            const user = getStoredUser();
            const fallback = getDefaultLocationLabel(user);
            if (fallback !== 'Unavailable') {
                updateLocationText(fallback);
            } else {
                updateLocationText(error.message || 'Location unavailable');
            }
        },
        {
            enableHighAccuracy: true,
            maximumAge: 60000,
            timeout: 10000
        }
    );
}

function setUserProfileImage(url) {
    const user = getStoredUser();
    if (!user) return;
    user.profileImage = url;
    saveCurrentUser(user);
    applyCurrentUserToPage();
}

function handleProfileImageChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
        setUserProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
}

function setupProfileImageUpload() {
    const fileInput = document.getElementById('profileImageUpload');
    const editButton = document.querySelector('.profile-img .edit-icon');

    if (fileInput) {
        fileInput.addEventListener('change', handleProfileImageChange);
    }

    if (editButton && fileInput) {
        editButton.addEventListener('click', () => fileInput.click());
    }
}

function handleRedirection(button) {
    const destination = button.getAttribute('data-target');
    if (destination) {
        button.style.backgroundColor = '#4caf50';
        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';

        setTimeout(() => {
            window.location.href = destination;
        }, 600);
    }
}

function initSignupLoginForm() {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    if (container && registerBtn && loginBtn) {
        registerBtn.addEventListener('click', () => {
            container.classList.add('active');
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }

    const registerForm = document.querySelector('.form-box.register form');
    const address = document.getElementById('registerAddress');
    const username = document.getElementById('registerName');
    const email = document.getElementById('registerEmail');
    const contact = document.getElementById('registerContact');
    const gender = document.getElementById('registerGender');
    const age = document.getElementById('registerAge');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const errorMsg = document.getElementById('error-msg');

    if (registerForm && address && username && email && contact && gender && age && password && confirmPassword && errorMsg) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const userEmail = email.value.trim();
            const userPassword = password.value.trim();
            const userConfirm = confirmPassword.value.trim();

            if (userPassword !== userConfirm) {
                errorMsg.textContent = 'Passwords do not match!';
                return;
            }

            if (isEmailRegistered(userEmail)) {
                errorMsg.textContent = 'That email is already registered.';
                return;
            }

            const newUser = {
                name: username.value.trim() || 'New User',
                email: userEmail,
                password: userPassword,
                address: address.value.trim(),
                contact: contact.value.trim(),
                gender: gender.value,
                age: age.value.trim(),
                role: 'user',
                avatar: DEFAULT_AVATAR,
                profileImage: ''
            };

            registerUser(newUser);
            saveCurrentUser(newUser);

            alert('Registration successful! Redirecting to your dashboard...');

            setTimeout(() => {
                window.location.href = '../userwebsite/after_login_pages/home.html';
            }, 600);
        });
    }

    const loginForm = document.querySelector('.form-box.login form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailValue = this.querySelector('#loginEmail').value.trim();
            const passwordValue = this.querySelector('#loginPassword').value.trim();

            const account = authenticateUser(emailValue, passwordValue);
            if (!account) {
                alert('Invalid email or password');
                return;
            }

            saveCurrentUser({
                name: account.name,
                email: account.email,
                role: account.role,
                contact: account.contact || '',
                address: account.address || '',
                gender: account.gender || '',
                age: account.age || '',
                avatar: account.avatar || DEFAULT_AVATAR,
                profileImage: account.profileImage || ''
            });

            const button = this.querySelector('.submit-btn');
            button.style.backgroundColor = '#4caf50';
            button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';

            setTimeout(() => {
                window.location.href = account.redirect;
            }, 600);
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    ensureLocationElement();
    initSignupLoginForm();
    applyCurrentUserToPage();
    setupProfileImageUpload();
    startLiveLocationTracking();
    window.setUserProfileImage = setUserProfileImage;
    window.clearCurrentUser = clearCurrentUser;
});