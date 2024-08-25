// Mengambil parameter URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama");

// Cek apakah parameter "nama" ada dalam URL
if (nama) {
    // Ubah teks dalam elemen h2 sesuai dengan input pengguna
    document.getElementById("namaH4").textContent = nama;
    // Tampilkan elemen h2 yang sebelumnya tersembunyi
    document.getElementById("namaH4").classList.remove("d-none");
    document.getElementById('nama').value = nama;
}

// Event listener untuk tombol save-to-calendar
const saveButton = document.getElementById("save-to-calendar");
saveButton.addEventListener("click", function() {
    const tanggal = "20241005"; // Format: YYYYMMDD
    const googleCalendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${tanggal}/${tanggal}`;
    window.open(googleCalendarURL);
});

// Mengelola tampilan hero dan isi serta audio
const showIsiButton = document.getElementById("showIsi");
const heroDiv = document.getElementById("hero");
const isiDiv = document.getElementById("isi");
const audio = document.getElementById("song");

showIsiButton.addEventListener("click", function() {
    heroDiv.style.display = "none";
    isiDiv.style.display = "block";
    audio.play(); 
});

// Mengelola ikon audio
const audioIcon = document.getElementById("audio");
audioIcon.addEventListener("click", () => {
    if (audio.paused) {
        audio.play(); // Memutar audio
        audioIcon.classList.remove("bi-play-circle");
        audioIcon.classList.add("bi-pause-circle");
    } else {
        audio.pause(); // Memberhentikan audio
        audioIcon.classList.remove("bi-pause-circle");
        audioIcon.classList.add("bi-play-circle");
    }
});

// Countdown Timer
const countDownDate = new Date("Oct 31, 2024 00:00:00").getTime();
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Event listener untuk tombol salin nomor rekening
document.getElementById("salinButton1").addEventListener("click", function() {
    const textToCopy = "08882"; // Nomor Rekening BRI
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert("Nomor Rekening BRI atas nama disalin ke clipboard.");
    }).catch(function(err) {
        console.error("Gagal menyalin ke clipboard: ", err);
    });
});

document.getElementById("salinButton2").addEventListener("click", function() {
    const textToCopy = "08884"; // Nomor Rekening BCA
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert("Nomor Rekening BCA atas nama disalin ke clipboard.");
    }).catch(function(err) {
        console.error("Gagal menyalin ke clipboard: ", err);
    });
});

// SimplyCountdown setup
(function() {
    "use strict";
    
    const extend = function(out) {
        out = out || {};
        for (let i = 1; i < arguments.length; i++) {
            const obj = arguments[i];
            if (!obj) continue;
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === "object") {
                        extend(out[key], obj[key]);
                    } else {
                        out[key] = obj[key];
                    }
                }
            }
        }
        return out;
    };

    const createSection = function(parent, options, sectionClass) {
        const section = document.createElement("div");
        const amountSpan = document.createElement("span");
        const wordSpan = document.createElement("span");
        const innerDiv = document.createElement("div");

        innerDiv.appendChild(amountSpan);
        innerDiv.appendChild(wordSpan);
        section.appendChild(innerDiv);

        section.classList.add(options.sectionClass, sectionClass);
        amountSpan.classList.add(options.amountClass);
        wordSpan.classList.add(options.wordClass);

        parent.appendChild(section);

        return { full: section, amount: amountSpan, word: wordSpan };
    };
})();
