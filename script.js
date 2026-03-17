// Tab switching — booking type buttons
const tabButtons = document.querySelectorAll('section button');
tabButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    console.log('Selected:', this.textContent);
  });
});

// Room selection
const roomOptions = document.querySelectorAll('.room-option');
roomOptions.forEach(room => {
  room.addEventListener('click', function () {
    roomOptions.forEach(r => r.classList.remove('selected'));
    this.classList.add('selected');
  });
});

// Price range label update
const priceRange = document.querySelector('input[type="range"]');
if (priceRange) {
  priceRange.addEventListener('input', function () {
    console.log('Max price: $' + this.value);
  });
}
