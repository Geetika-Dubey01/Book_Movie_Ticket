const movieSelect = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const selectedCount = selectedSeats.length;

  count.innerText = selectedCount;
  total.innerText = selectedCount * ticketPrice;
}

// Seat click event
seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (!seat.classList.contains('occupied')) {
      seat.classList.toggle('selected');
      updateSelectedCount();
    }
  });
});

// Movie select change
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Book Now button
function bookTickets() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat.");
  } else {
    alert(`Successfully booked ${selectedSeats.length} seat(s) for ₹${selectedSeats.length * ticketPrice}`);
    selectedSeats.forEach(seat => seat.classList.remove('selected'));
    updateSelectedCount();
  }
}

