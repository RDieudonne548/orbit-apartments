// 1. INITIALIZE SUPABASE
const supabaseUrl = 'https://iecgjcoftzrchbgiowxf.supabase.co';
const supabaseKey = 'sb_publishable_lwFsYrS1Fk6IDEg7HG8qdw_cvKk5PRo'; 
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);
let roomsCache = {}; 

// 2. IMAGE DATABASE (23 Rooms - 3 Images Each)
// Ensure these names match your Supabase "room_name" column EXACTLY.
const roomImages = {
    // GISHUSHU (10 Rooms)
    "Gishushu Room 01": ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"],
    "Gishushu Room 02": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600"],
    "Gishushu Room 03": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600"],
    "Gishushu Room 04": ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600", "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600"],
    "Gishushu Room 05": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600"],
    "Gishushu Room 06": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"],
    "Gishushu Room 07": ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600", "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600"],
    "Gishushu Room 08": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600"],
    "Gishushu Room 09": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"],
    "Gishushu Room 10": ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600", "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600"],

    // MUHIMA (6 Rooms)
    "Muhima Studio A1": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"],
    "Muhima Studio A2": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"],
    "Muhima Studio A3": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"],
    "Muhima Studio A4": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"],
    "Muhima Studio A5": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"],
    "Muhima Studio A6": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"],

    // NYABISINDU (7 Rooms)
    "Nyabisindu Unit G1": ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"],
    "Nyabisindu Unit G2": ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"],
    "Nyabisindu Unit G3": ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"],
    "Nyabisindu Unit G4": ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"],
    "Nyabisindu Unit G5": ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"],
    "Nyabisindu Unit G6": ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"],
    "Nyabisindu Unit G7": ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"]
};

// 3. FETCH DATA & DISPLAY
async function showLocation(area) {
    const grid = document.getElementById('apartment-grid');
    const selection = document.getElementById('location-selection');
    const section = document.getElementById('apartments-section');
    const title = document.getElementById('location-title');

    // STEP A: Switch screens IMMEDIATELY
    selection.style.display = 'none';
    section.style.display = 'block';
    title.innerText = area + " UNITS";

    // STEP B: Check if we already have these rooms in memory
    if (roomsCache[area]) {
        // If yes, show them instantly!
        renderRoomGrid(roomsCache[area], grid);
    } else {
        // If first time, show a quick loader inside the grid area only
        grid.innerHTML = '<p style="text-align:center; width:100%;">Loading rooms...</p>';
    }

    // STEP C: Fetch fresh data from Supabase in the background
    try {
        const { data: liveRooms, error: roomError } = await _supabase
            .from('rooms')
            .select('*')
            .eq('location', area)
            .order('room_name', { ascending: true });

        const { data: paidBookings, error: bookingError } = await _supabase
            .from('bookings')
            .select('room_name, status, check_in_date, check_out_date')
            .eq('status', 'Paid');

        if (!roomError && !bookingError) {
            // Process the data to include "Occupied" status
            const processedRooms = liveRooms.map(room => {
                const today = new Date().toISOString().split('T')[0];
                const activeBooking = paidBookings?.find(b => 
                    b.room_name === room.room_name && today >= b.check_in_date && today <= b.check_out_date
                );
                return { ...room, activeBooking, isOccupied: !!activeBooking };
            });

            // Save to cache and update the screen
            roomsCache[area] = processedRooms;
            renderRoomGrid(processedRooms, grid);
        }
    } catch (e) {
        console.error("Cache Update Error:", e);
    }
}

// Helper function to draw the rooms on the screen
function renderRoomGrid(rooms, grid) {
    grid.innerHTML = '';
    rooms.forEach(room => {
        const photos = roomImages[room.room_name] || ["https://via.placeholder.com/600x400"];
        const formattedPrice = Number(room.price).toLocaleString();
        
        grid.innerHTML += `
            <div class="room-card">
                <img src="${photos[0]}" style="width:100%; height:200px; object-fit:cover; border-radius:10px;">
                <div class="card-content">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h3>${room.room_name}</h3>
                        <span style="font-weight:bold; color:#2ecc71;">${formattedPrice} RWF</span>
                    </div>
                    <p>Status: <span class="status ${room.isOccupied ? 'booked' : 'available'}">
                        ${room.isOccupied ? 'Occupied until ' + room.activeBooking.check_out_date : 'Available'}
                    </span></p>
                    <div style="margin-top: 15px; display: flex; gap: 10px;">
                        <button onclick="openGallery('${room.room_name}')" class="btn-secondary" style="flex:1;">📷 GALLERY</button>
                        <button onclick="openBookingForm('${room.room_name}', ${room.price})" 
                                class="btn-primary" 
                                ${room.isOccupied ? 'disabled style="background:#ccc; cursor:not-allowed;"' : ''}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>`;
    });
}

function calculateNights(cin, cout) {
    const start = new Date(cin);
    const end = new Date(cout);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays > 0 ? diffDays : 1; // Minimum 1 night
}
// 4. MODALS & FORMS
function openGallery(roomName) {
    const photos = roomImages[roomName] || [];
    document.getElementById('modal-body').innerHTML = `
        <h2 style="margin-bottom:20px;">${roomName} Gallery</h2>
        <div style="display: grid; gap: 15px;">
            ${photos.map(img => `<img src="${img}" style="width:100%; border-radius:8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">`).join('')}
        </div>`;
    document.getElementById('details-modal').style.display = "block";
}

function closeModal() { document.getElementById('details-modal').style.display = "none"; }

let currentRoomPrice = 0; // This creates a "memory" for the price

function openBookingForm(roomName, price) {
    currentRoomPrice = price; // Remember the price of the room clicked
    document.getElementById('bookingModal').style.display = 'flex';
    document.getElementById('selectedRoomDisplay').innerText = "Booking: " + roomName;
}

function closeBookingModal() { document.getElementById('bookingModal').style.display = 'none'; }


// 5. BOOKING & PAYMENT LOGIC
let selectedRoomName = "";
let selectedRoomPrice = 0;

function openBookingForm(roomName, price) {
    selectedRoomName = roomName;
    selectedRoomPrice = price;
    document.getElementById('selectedRoomDisplay').innerText = "Booking: " + roomName;
    document.getElementById('bookingModal').style.display = 'flex';
    
    // Set minimum date to today so users can't book the past
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkInDate').setAttribute('min', today);
    document.getElementById('checkOutDate').setAttribute('min', today);
}

function closeBookingModal() { 
    document.getElementById('bookingModal').style.display = 'none'; 
}

    document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cin = document.getElementById('checkInDate').value;
    const cout = document.getElementById('checkOutDate').value;

    if (cout <= cin) {
        alert("Check-out date must be after the Check-in date.");
        return;
    }

    const nights = calculateNights(cin, cout);
    const totalAmount = selectedRoomPrice * nights;

    // This calls the payment immediately without the extra popup
    startPayment(totalAmount);
});
   

function startPayment(totalAmount) {
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-1d19c96c271334b1bb6397336f0053ca-X",
        tx_ref: "ORB-" + Date.now(),
        amount: totalAmount, // This is now the dynamic total
        currency: "RWF",
        payment_options: "card, mobilemoneyrwanda, barter, payattitude",
        customer: {
            email: document.getElementById('clientEmail').value,
            phone_number: document.getElementById('clientPhone').value,
            name: document.getElementById('clientName').value,
        },
        callback: async function (data) {
            if (data.status === "successful") {
                const { error } = await _supabase
                    .from('bookings')
                    .insert([{
                        client_name: document.getElementById('clientName').value,
                        client_phone: document.getElementById('clientPhone').value,
                        room_name: selectedRoomName,
                        check_in_date: document.getElementById('checkInDate').value,
                        check_out_date: document.getElementById('checkOutDate').value,
                        status: 'Paid',
                        amount_paid: totalAmount // Save the total paid
                    }]);

                if (!error) {
                    alert("Payment Successful! Room is now reserved.");
                    location.reload(); // Refresh to show "Occupied" status
                } else {
                    console.error("Supabase Error:", error.message);
                    alert("Payment received, but database sync failed. Please contact support.");
                }
            }
        },
        onclose: function() {
            console.log("Payment window closed");
        }
    });
}

['checkInDate', 'checkOutDate'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('change', () => {
            const cin = document.getElementById('checkInDate').value;
            const cout = document.getElementById('checkOutDate').value;
            const display = document.getElementById('totalPriceDisplay');

            if (cin && cout && cout > cin) {
                const nights = calculateNights(cin, cout);
                if (display) {
                    display.innerText = `Total: ${(selectedRoomPrice * nights).toLocaleString()} RWF (${nights} nights)`;
                }
            } else if (display) {
                display.innerText = ""; // Clear if dates are invalid
            }
        });
    }
});
function goBack() { 
    document.getElementById('location-selection').style.display = 'grid';
    document.getElementById('apartments-section').style.display = 'none';
}

window.onload = goBack;