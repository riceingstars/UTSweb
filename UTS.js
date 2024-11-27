function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open"); // Toggle kelas 'open'
}

// Fungsi untuk menampilkan jam
function startClock() {
  var clock = document.getElementById('clock');
  setInterval(function() {
      var now = new Date();
      clock.innerHTML = now.toLocaleTimeString(); // Format jam
  }, 1000);
}

// Fungsi untuk menghitung pengunjung
function incrementVisitorCount() {
  var visitorCount = document.getElementById('visitor-count');
  var count = parseInt(visitorCount.innerHTML) || 0;
  visitorCount.innerHTML = count + 1; // Tambah pengunjung
}

// Panggil fungsi saat halaman dimuat
window.onload = function() {
  startClock();
  incrementVisitorCount(); // Hitung pengunjung saat halaman dimuat
};

// Menutup sidebar jika mengklik di luar sidebar
window.onclick = function(event) {
  var sidebar = document.getElementById("sidebar");
  if (!event.target.matches('.icon') && !event.target.closest('.sidebar')) {
      sidebar.classList.remove('open'); // Tutup sidebar
  }
}

function toggleDropdown() {
  const dropdownContent = document.querySelector('.dropdown-content');
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block"; // Tampilkan dropdown
  } else {
      dropdownContent.style.display = "none"; // Sembunyikan dropdown
  }
}

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);


let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlideIndex = 0; // Loop back to the first slide
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1; // Loop back to the last slide
  } else {
    currentSlideIndex = index;
  }

  // Update the slider container's transform to show the current slide
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

// Change slide function
function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);
}

// Initialize the slider
showSlide(currentSlideIndex);