// Function to validate form
function validateForm() {
    const nameInput = document.getElementById('name');
    const dobInput = document.getElementById('dob');
    const genderInput = document.getElementById('selectedGender').value; // Mengambil dari input hidden
    const messageInput = document.getElementById('message');

    // Validasi input
    if (nameInput.value.trim() === '') {
        alert('Nama harus diisi.');
        return false;
    }
    if (!dobInput.value) {
        alert('Tanggal lahir harus diisi.');
        return false;
    }
    if (!genderInput) {
        alert('Jenis kelamin harus dipilih.');
        return false;
    }
    if (messageInput.value.trim() === '') {
        alert('Pesan tidak boleh kosong.');
        return false;
    }

    return true;
}

// Banner functionality
let bannerIndex = 0;
const banners = document.querySelectorAll('.banner-img');

function showBanner() {
    banners.forEach((banner, index) => {
        banner.style.display = index === bannerIndex ? 'block' : 'none';
    });
}

// Function to change banner
function nextBanner() {
    bannerIndex = (bannerIndex + 1) % banners.length;
    showBanner();
}

// Initialize first banner display
showBanner();

// Set interval to change banner every 3 seconds
setInterval(nextBanner, 3000);

// Handle form submission
document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateForm()) return;

    // Get form values
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('selectedGender').value; // Ambil gender dari input hidden
    const message = document.getElementById('message').value;
    const currentTime = new Date().toLocaleString(); // Format waktu lebih rapi

    // Display the results
    document.getElementById('currentTime').textContent = currentTime;
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultDob').textContent = dob;
    document.getElementById('resultGender').textContent = gender;
    document.getElementById('resultMessage').textContent = message;

    // Reset form after submission
    this.reset();

    // Reset gender selection
    document.getElementById('selectedGender').value = ''; 
    document.querySelectorAll(".gender-box").forEach(box => {
        box.classList.remove("selected");
    });
});

// Function to select gender
function selectGender(gender) {
    // Simpan nilai gender ke dalam input hidden
    document.getElementById("selectedGender").value = gender;

    // Reset tampilan gender-box
    document.querySelectorAll(".gender-box").forEach(box => {
        box.classList.remove("selected");
    });

    // Tambahkan efek terpilih
    document.getElementById(gender === "Laki-Laki" ? "male" : "female").classList.add("selected");
}
