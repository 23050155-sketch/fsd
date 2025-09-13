document.addEventListener('DOMContentLoaded', function() {
    // Mock data - Thay bằng API call thực tế
    const albumsData = {
        newAlbums: [
            { id: 1, title: "Sky Tour", artist: "Sơn Tùng M-TP", year: "2021", cover: "images/albums/sky-tour.jpg" },
            { id: 2, title: "Chuyện Của Mùa Đông", artist: "Soobin Hoàng Sơn", year: "2021", cover: "images/albums/chuyen-mua-dong.jpg" },
            { id: 3, title: "Hồng Nhan", artist: "Jack-J97", year: "2020", cover: "images/albums/hong-nhan.jpg" },
            { id: 4, title: "Muộn Rồi Mà Sao Còn", artist: "Sơn Tùng M-TP", year: "2022", cover: "images/albums/muon-roi.jpg" },
            { id: 5, title: "Đom Đóm", artist: "Jack-J97", year: "2022", cover: "images/albums/dom-dom.jpg" }
        ],
        popularAlbums: [
            { id: 1, title: "Sky Tour", artist: "Sơn Tùng M-TP", year: "2021", cover: "images/albums/sky-tour.jpg" },
            { id: 6, title: "99%", artist: "AMEE", year: "2021", cover: "images/albums/99percent.jpg" },
            { id: 7, title: "Đen", artist: "Đen Vâu", year: "2022", cover: "images/albums/den.jpg" },
            { id: 8, title: "Có Hẹn Với Thanh Xuân", artist: "MONSTAR", year: "2020", cover: "images/albums/co-hen.jpg" }
        ],
        vpopAlbums: [
            { id: 9, title: "Tình Đắng Như Ly Cà Phê", artist: "Ngơ", year: "2021", cover: "images/albums/tinh-dang.jpg" },
            { id: 10, title: "Bước Qua Nhau", artist: "Vũ.", year: "2021", cover: "images/albums/buoc-qua.jpg" },
            { id: 11, title: "Sài Gòn Đau Lòng Quá", artist: "Hứa Kim Tuyền", year: "2021", cover: "images/albums/saigon-daulong.jpg" }
        ]
    };

    // Render album card
    function renderAlbumCard(album, container) {
        const card = document.createElement('div');
        card.className = 'album-card';
        card.innerHTML = `
            <img src="${album.cover}" alt="${album.title}">
            <h4>${album.title}</h4>
            <p>${album.artist}</p>
        `;
        card.addEventListener('click', () => {
            alert(`Đã chọn album: ${album.title}`);
            // Thực tế sẽ chuyển đến trang album chi tiết
        });
        container.appendChild(card);
    }

    // Render all albums
    function renderAlbums() {
        const newAlbumsContainer = document.getElementById('new-albums');
        const popularAlbumsContainer = document.getElementById('popular-albums');
        const vpopAlbumsContainer = document.getElementById('vpop-albums');
        
        // Clear containers
        newAlbumsContainer.innerHTML = '';
        popularAlbumsContainer.innerHTML = '';
        vpopAlbumsContainer.innerHTML = '';
        
        // Render new albums
        albumsData.newAlbums.forEach(album => {
            renderAlbumCard(album, newAlbumsContainer);
        });
        
        // Render popular albums
        albumsData.popularAlbums.forEach(album => {
            renderAlbumCard(album, popularAlbumsContainer);
        });
        
        // Render V-Pop albums
        albumsData.vpopAlbums.forEach(album => {
            renderAlbumCard(album, vpopAlbumsContainer);
        });
    }

    // Initialize
    renderAlbums();
});