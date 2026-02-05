// 1. WhatsApp Config
const myWhatsAppNumber = "250780000000"; 

// 2. Full Database: 23 Units (15 Booked / 8 Available) - All with 3 Photos
const apartmentData = [
    // --- GISHUSHU (10 UNITS) ---
    { id: 1, name: "Gishushu Room 01", price: "150,000 RWF", status: "Booked", bookedUntil: "2026-03-15", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", gallery: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"] },
    { id: 2, name: "Gishushu Room 02", price: "150,000 RWF", status: "Booked", bookedUntil: "2026-04-01", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", gallery: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200","https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200"] },
    { id: 3, name: "Gishushu Room 03", price: "140,000 RWF", status: "Available", bookedUntil: "", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"] },
    { id: 4, name: "Gishushu Room 04", price: "140,000 RWF", status: "Booked", bookedUntil: "2026-02-28", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", gallery: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200","https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200"] },
    { id: 5, name: "Gishushu Room 05", price: "130,000 RWF", status: "Booked", bookedUntil: "2026-05-10", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", gallery: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200","https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"] },
    { id: 6, name: "Gishushu Room 06", price: "130,000 RWF", status: "Available", bookedUntil: "", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"] },
    { id: 7, name: "Gishushu Room 07", price: "125,000 RWF", status: "Booked", bookedUntil: "2026-03-01", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", gallery: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200","https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200"] },
    { id: 8, name: "Gishushu Room 08", price: "125,000 RWF", status: "Booked", bookedUntil: "2026-06-20", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", gallery: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200","https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"] },
    { id: 9, name: "Gishushu Room 09", price: "120,000 RWF", status: "Available", bookedUntil: "", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"] },
    { id: 10, name: "Gishushu Room 10", price: "120,000 RWF", status: "Booked", bookedUntil: "2026-03-25", location: "GISHUSHU", mainImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", gallery: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200","https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200"] },

    // --- MUHIMA (6 UNITS) ---
    { id: 11, name: "Muhima Studio A1", price: "80,000 RWF", status: "Booked", bookedUntil: "2026-04-12", location: "MUHIMA", mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"] },
    { id: 12, name: "Muhima Studio A2", price: "80,000 RWF", status: "Booked", bookedUntil: "2026-03-10", location: "MUHIMA", mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"] },
    { id: 13, name: "Muhima Studio A3", price: "85,000 RWF", status: "Available", bookedUntil: "", location: "MUHIMA", mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"] },
    { id: 14, name: "Muhima Studio A4", price: "85,000 RWF", status: "Booked", bookedUntil: "2026-02-20", location: "MUHIMA", mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"] },
    { id: 15, name: "Muhima Studio A5", price: "90,000 RWF", status: "Booked", bookedUntil: "2026-05-01", location: "MUHIMA", mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"] },
    { id: 16, name: "Muhima Studio A6", price: "90,000 RWF", status: "Available", bookedUntil: "", location: "MUHIMA", mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", gallery: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"] },

    // --- NYABISINDU (7 UNITS) ---
    { id: 17, name: "Nyabisindu Unit G1", price: "100,000 RWF", status: "Booked", bookedUntil: "2026-03-30", location: "NYABISINDU", mainImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800", gallery: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"] },
    { id: 18, name: "Nyabisindu Unit G2", price: "100,000 RWF", status: "Booked", bookedUntil: "2026-04-15", location: "NYABISINDU", mainImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800", gallery: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"] },
    { id: 19, name: "Nyabisindu Unit G3", price: "100,000 RWF", status: "Available", bookedUntil: "", location: "NYABISINDU", mainImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800", gallery: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"] },
    { id: 20, name: "Nyabisindu Unit G4", price: "110,000 RWF", status: "Booked", bookedUntil: "2026-02-25", location: "NYABISINDU", mainImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800", gallery: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"] },
    { id: 21, name: "Nyabisindu Unit G5", price: "110,000 RWF", status: "Available", bookedUntil: "", location: "NYABISINDU", mainImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800", gallery: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"] },
    { id: 22, name: "Nyabisindu Unit G6", price: "115,000 RWF", status: "Booked", bookedUntil: "2026-05-20", location: "NYABISINDU", mainImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800", gallery: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"] },
    { id: 23, name: "Nyabisindu Unit G7", price: "115,000 RWF", status: "Available", bookedUntil: "", location: "NYABISINDU", mainImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800", gallery: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200","https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"] }
];

function sendWhatsApp(roomName) {
    const msg = encodeURIComponent(`Hello StayNest! I am interested in booking: ${roomName}.`);
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${msg}`, '_blank');
}

function showLocation(area) {
    document.getElementById('location-selection').style.display = 'none';
    document.getElementById('apartments-section').style.display = 'block';
    document.getElementById('location-title').innerText = area + " UNITS";
    const grid = document.getElementById('apartment-grid');
    grid.innerHTML = '';

    const today = new Date();
    today.setHours(0,0,0,0);

    const filtered = apartmentData.filter(r => r.location === area);

    filtered.forEach(room => {
        let currentStatus = room.status;
        let checkOut = room.bookedUntil ? new Date(room.bookedUntil) : null;
        
        if (currentStatus === "Booked" && checkOut && today > checkOut) {
            currentStatus = "Available";
        }

        const statusLabel = currentStatus === 'Booked' ? `Occupied until: ${room.bookedUntil}` : 'Available Now';
        
        // Button changed to "Book Now" and logic removed
        const bookBtn = currentStatus === 'Booked' ? 
            `<button class="btn-primary" style="background:#ccc; cursor:not-allowed;" disabled>Already Booked</button>` :
            `<button class="btn-primary" style="cursor: default;">Book Now</button>`;

        grid.innerHTML += `
            <div class="room-card">
                <div class="img-container">
                    <img src="${room.mainImage}" alt="${room.name}">
                </div>
                <div class="card-content">
                    <div>
                        <h3 style="margin: 0 0 10px 0;">${room.name}</h3>
                        <p style="color: var(--primary-green); font-weight: 800; font-size: 1.3rem; margin-bottom: 5px;">${room.price}</p>
                        <p>Status: <span class="status ${currentStatus.toLowerCase()}">${currentStatus}</span></p>
                        <p style="font-size: 14px; color: #777; margin-top: 5px;">${statusLabel}</p>
                    </div>
                    <div style="margin-top: 20px;">
                        <button onclick="openModal(${room.id})" class="btn-secondary">📷 VIEW GALLERY</button>
                        ${bookBtn}
                    </div>
                </div>
            </div>`;
    });
}

function openModal(roomId) {
    const room = apartmentData.find(r => r.id === roomId);
    document.getElementById('modal-body').innerHTML = `
        <h2 style="margin-top:0; color:var(--primary-blue);">${room.name}</h2>
        <p style="color: var(--primary-green); font-weight: bold; font-size: 1.2rem;">Price: ${room.price}</p>
        <div class="gallery-grid">
            ${room.gallery.map(img => `<img src="${img}" style="width:100%; border-radius:10px; margin-bottom:15px;">`).join('')}
        </div>
        <div style="text-align:center; padding: 20px 0;">
            <button class="btn-primary" style="width: auto; padding: 15px 60px; cursor: default;">Book Now</button>
        </div>`;
    document.getElementById('details-modal').style.display = "block";
}

function closeModal() { document.getElementById('details-modal').style.display = "none"; }
function goBack() { 
    document.getElementById('location-selection').style.display = 'grid';
    document.getElementById('apartments-section').style.display = 'none';
}
window.onload = goBack;
window.onclick = function(e) { if(e.target == document.getElementById('details-modal')) closeModal(); }