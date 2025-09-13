document.addEventListener('DOMContentLoaded', function() {
    const artistsData = {
        risingArtists: [
            { 
                id: 1, 
                name: "Wren Evans", 
                image: "../source/casi/wrenevans.jpg",
                followers: "1.2M",
                genre: "V-Pop, R&B"
            },
            { 
                id: 2, 
                name: "Châu Đăng Khoa", 
                image: "../source/casi/chaudangkhoa.jpg",
                followers: "950K",
                genre: "Rap, Hip-hop"
            },
            { 
                id: 3, 
                name: "Hứa Kim Tuyền", 
                image: "../source/casi/huakimtuyen.jpg",
                followers: "1.5M",
                genre: "Nhạc trẻ, Ballad"
            },
            {
                id: 4,
                name: "GREY D",
                image: "../source/casi/GreyD.webp",
                followers: "4.5M",
                genre: "Rap, Hip-hop"
            },
            
        ],
        vpopArtists: [
            { 
                id: 5, 
                name: "Sơn Tùng M-TP", 
                image: "../source/casi/sontungmtp.jpg",
                followers: "5.2M",
                genre: "V-Pop, Nhạc trẻ"
            },
            { 
                id: 6, 
                name: "Soobin Hoàng Sơn", 
                image: "../source/casi/soobin.jpg",
                followers: "3.8M",
                genre: "V-Pop, Ballad"
            },
            { 
                id: 7, 
                name: "Jack-J97", 
                image: "../source/casi/jack.jpg",
                followers: "4.5M",
                genre: "V-Pop, Rap"
            },
            {
                id: 8,
                name: "AMEE",
                image: "../source/casi/amee.jpg",
                followers: "4M",
                genre: "V-Pop, R&B"
            },
            
        ],
        rockArtists: [
            { 
                id: 9, 
                name: "Ngọt Band", 
                image: "../source/casi/ngotband.jpg",
                followers: "1.8M",
                genre: "Rock, Indie"
            },
            { 
                id: 10, 
                name: "Cá Hồi Hoang", 
                image: "../source/casi/cahoiband.jpg",
                followers: "1.3M",
                genre: "Rock, Alternative"
            },
            { 
                id: 11, 
                name: "The Flob", 
                image: "../source/casi/theflob.jpg",
                followers: "900K",
                genre: "Rock, Punk"
            },
        ]
    };

    function renderArtistCard(artist, container) {
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" class="artist-image">
            <h3>${artist.name}</h3>
            <p class="artist-genre">${artist.genre}</p>
            <p class="artist-followers"><i class="fas fa-users"></i> ${artist.followers}</p>
        `;
        card.addEventListener('click', () => {
            window.location.href = `ArtistDetail.html?id=${artist.id}`;
        });
        container.appendChild(card);
    }

    function renderArtists() {
        // Nghệ sĩ mới nổi
        const risingContainer = document.getElementById('rising-artists');
        artistsData.risingArtists.forEach(artist => {
            renderArtistCard(artist, risingContainer);
        });

        // Nghệ sĩ V-Pop
        const vpopContainer = document.getElementById('vpop-artists');
        artistsData.vpopArtists.forEach(artist => {
            renderArtistCard(artist, vpopContainer);
        });

        // Nghệ sĩ Rock
        const rockContainer = document.getElementById('rock-artists');
        artistsData.rockArtists.forEach(artist => {
            renderArtistCard(artist, rockContainer);
        });
    }

    function setupSearch() {
        const searchInput = document.getElementById('artist-search');
        const searchBtn = document.getElementById('search-btn');
        
        const performSearch = () => {
            const query = searchInput.value.toLowerCase();
            if (!query.trim()) return;
            
            const allArtists = [
                ...artistsData.risingArtists,
                ...artistsData.vpopArtists,
                ...artistsData.rockArtists
            ];
            
            const results = allArtists.filter(artist => 
                artist.name.toLowerCase().includes(query) || 
                artist.genre.toLowerCase().includes(query)
            );
            
            if (results.length > 0) {
                window.location.href = `ArtistDetail.html?id=${results[0].id}`;
            } else {
                alert('Không tìm thấy nghệ sĩ phù hợp');
            }
        };
        
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }

    renderArtists();
    setupSearch();
});