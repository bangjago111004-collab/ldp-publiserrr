const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
function openBook(title, author, desc) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalAuthor").innerText = author;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("bookModal").style.display = "flex";
}

function closeBook() {
    document.getElementById("bookModal").style.display = "none";
}

function orderBook(judul, penulis) {
    const phone = "6283152195459"; // nomor WA LDP (tanpa 0)
    
    const message = encodeURIComponent(
        `Halo LDP Penerbit,

Saya tertarik dengan buku berikut:
Judul: ${judul}
Penulis: ${penulis}

Mohon informasi lebih lanjut. Terima kasih.`
    );

    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
}


document.addEventListener("DOMContentLoaded", function () {
    const phone = "6283152195459"; // nomor WA LDP (tanpa 0)

    document.querySelectorAll(".book-btn").forEach(button => {
        button.addEventListener("click", function () {
            const judul = this.dataset.judul;
            const penulis = this.dataset.penulis;

            const message = encodeURIComponent(
                `Halo LDP Penerbit,

Saya tertarik dengan buku berikut:
Judul: ${judul}
Penulis: ${penulis}

Mohon informasi lebih lanjut. Terima kasih.`
            );

            window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
        });
    });
});
