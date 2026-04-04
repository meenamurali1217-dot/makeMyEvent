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

