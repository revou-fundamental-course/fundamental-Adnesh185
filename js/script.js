window.onload = function() {

    let userName = prompt("Masukkan nama Anda:");
    if (userName) {
        document.getElementById('welcome-message').textContent = `Hai ${userName}, Selamat Datang`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default

        // Mengambil nilai dari form
        const nama = document.getElementById('name').value;
        const tanggalLahir = document.getElementById('dob').value;
        const barangDipesan = document.getElementById('product').value;
        const pesan = document.getElementById('message').value;

        // Menampilkan nilai di box shadow
        document.getElementById('displayNama').textContent = nama;
        document.getElementById('displayTanggal').textContent = tanggalLahir;
        document.getElementById('displayPesanan').textContent = barangDipesan;
        document.getElementById('displayPesan').textContent = pesan;
    });
});

