document.addEventListener('DOMContentLoaded', function() {
    // Lấy ID nghệ sĩ từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const artistId = urlParams.get('id');

    // Dữ liệu mẫu chi tiết nghệ sĩ
    const artistsData = {
        1: { // Sơn Tùng M-TP
            id: 1,
            name: "Sơn Tùng M-TP",
            image: "../source/casi/sontungmtp.jpg",
            followers: "5.2M",
            genre: "V-Pop, Nhạc trẻ",
            bio: "Sơn Tùng M-TP là một ca sĩ, nhạc sĩ và diễn viên người Việt Nam. Anh được biết đến với những bản hit như 'Chúng Ta Của Hiện Tại', 'Hãy Trao Cho Anh' và 'Lạc Trôi'. Sơn Tùng là một trong những nghệ sĩ có ảnh hưởng lớn nhất trong làng nhạc Việt hiện đại với phong cách âm nhạc đa dạng và sáng tạo.",
            social: {
                facebook: "https://facebook.com/MTP.Fan",
                instagram: "https://instagram.com/tlinhofficial",
                youtube: "https://youtube.com/sontungmtp",
                twitter: "https://twitter.com/sontungmtp"
            },
            popularSongs: [
                { id: 1, title: "Chúng Ta Của Hiện Tại", album: "Sky Tour", duration: "3:42", cover: "../source/baihat/chungtacuahientai.jpg", file: "../music/chungtacuahientai.mp3" },
                { id: 2, title: "Hãy Trao Cho Anh", album: "Sky Tour", duration: "3:10", cover: "../source/baihat/haytraochoanh.jpg", file: "../music/haytraochoanh.mp3" },
                { id: 3, title: "Lạc Trôi", album: "m-tp M-TP", duration: "4:18", cover: "../source/baihat/lactroi.jpg", file: "../music/lactroi.mp3" },
                { id: 4, title: "Nơi Này Có Anh", album: "m-tp M-TP", duration: "3:55", cover: "../source/baihat/noinaycoanh.jpg", file: "../music/noinaycoanh.mp3" },
                { id: 5, title: "Chạy Ngay Đi", album: "Chạy Ngay Đi (Single)", duration: "3:30", cover: "../source/baihat/chayngaydi.jpg", file: "../music/chayngaydi.mp3" }
            ],
            albums: [
                { id: 1, title: "Sky Tour", year: "2021", cover: "../source/album/albumskytour.jpg", songs: 12 },
                { id: 2, title: "m-tp M-TP", year: "2017", cover: "../source/album/mtpmtp.jpg", songs: 10 },
                { id: 3, title: "Chúng Ta", year: "2019", cover: "../source/album/chungta.jpg", songs: 8 }
            ],
            relatedArtists: [
                { id: 2, name: "Soobin Hoàng Sơn", image: "../source/casi/soobin.jpg", followers: "3.8M" },
                { id: 3, name: "Jack-J97", image: "../source/casi/jack.jpg", followers: "4.5M" },
                { id: 4, name: "AMEE", image: "../source/casi/amee.jpg", followers: "3.1M" },
                { id: 5, name: "Đen Vâu", image: "../source/casi/den.jpg", followers: "4.2M" }
            ],
            events: [
                { id: 1, title: "Sky Tour 2023", date: "15/12/2023", location: "Hà Nội" },
                { id: 2, title: "Music Festival", date: "20/08/2023", location: "TP.HCM" }
            ]
        },
        2: { // Soobin Hoàng Sơn
            id: 2,
            name: "Soobin Hoàng Sơn",
            image: "../source/casi/soobin.jpg",
            followers: "3.8M",
            genre: "V-Pop, Ballad",
            bio: "Soobin Hoàng Sơn là một ca sĩ trẻ tài năng với giọng hát ngọt ngào. Anh nổi tiếng với các ca khúc như 'Giá Như', 'Dancing In The Dark' và 'Chuyện Của Mùa Đông'. Soobin được yêu thích nhờ phong cách trình diễn tinh tế và khả năng truyền cảm xúc qua giọng hát.",
            social: {
                facebook: "https://facebook.com/soobinofficial",
                instagram: "https://instagram.com/soobin.hoangson",
                youtube: "https://youtube.com/soobinhoangson",
                twitter: "https://twitter.com/soobinhoangson"
            },
            popularSongs: [
                { id: 6, title: "Giá Như", album: "Chuyện Của Mùa Đông", duration: "3:45", cover: "../source/baihat/gianhu.jpg", file: "../music/gianhu.mp3" },
                { id: 7, title: "Dancing In The Dark", album: "Dancing In The Dark", duration: "4:12", cover: "../source/baihat/dancing.jpg", file: "../music/dancing.mp3" },
                { id: 8, title: "Chuyện Của Mùa Đông", album: "Chuyện Của Mùa Đông", duration: "4:05", cover: "../source/baihat/chuyenmua.jpg", file: "../music/chuyenmua.mp3" }
            ],
            albums: [
                { id: 4, title: "Chuyện Của Mùa Đông", year: "2021", cover: "../source/album/chuyenmua.jpg", songs: 8 },
                { id: 5, title: "Dancing In The Dark", year: "2020", cover: "../source/album/dancing.jpg", songs: 6 }
            ],
            relatedArtists: [
                { id: 1, name: "Sơn Tùng M-TP", image: "../source/casi/sontungmtp.jpg", followers: "5.2M" },
                { id: 6, name: "Erik", image: "../source/casi/erik.jpg", followers: "2.7M" },
                { id: 7, name: "MIN", image: "../source/casi/min.jpg", followers: "2.8M" }
            ],
            events: []
        },
        3: { // Jack-J97
            id: 3,
            name: "Jack-J97",
            image: "../source/casi/jack.jpg",
            followers: "4.5M",
            genre: "V-Pop, Rap",
            bio: "Jack-J97 là nam ca sĩ, nhạc sĩ trẻ nổi tiếng với phong cách âm nhạc trẻ trung. Anh có những hit lớn như 'Hồng Nhan', 'Đom Đóm' và 'Sóng Gió'. Jack được biết đến với giọng hát đặc biệt và khả năng sáng tác ấn tượng.",
            social: {
                facebook: "https://facebook.com/jack.j97.animation",
                instagram: "https://instagram.com/jack.j97",
                youtube: "https://youtube.com/jackj97",
                twitter: "https://twitter.com/jackj97"
            },
            popularSongs: [
                { id: 9, title: "Hồng Nhan", album: "Hồng Nhan", duration: "3:52", cover: "../source/baihat/hongnhan.jpg", file: "../music/hongnhan.mp3" },
                { id: 10, title: "Đom Đóm", album: "Đom Đóm", duration: "3:15", cover: "../source/baihat/domdom.jpg", file: "../music/domdom.mp3" },
                { id: 11, title: "Sóng Gió", album: "Hồng Nhan", duration: "3:20", cover: "../source/baihat/songgio.jpg", file: "../music/songgio.mp3" }
            ],
            albums: [
                { id: 6, title: "Hồng Nhan", year: "2020", cover: "../source/album/hongnhan.jpg", songs: 7 },
                { id: 7, title: "Đom Đóm", year: "2022", cover: "../source/album/domdom.jpg", songs: 5 }
            ],
            relatedArtists: [
                { id: 4, name: "AMEE", image: "../source/casi/amee.jpg", followers: "3.1M" },
                { id: 8, name: "Karik", image: "../source/casi/karik.jpg", followers: "2.5M" },
                { id: 9, name: "Wren Evans", image: "../source/casi/wren.jpg", followers: "1.2M" }
            ],
            events: [
                { id: 3, title: "Live Concert", date: "10/11/2023", location: "Hà Nội" }
            ]
        }
    };

    // Lấy dữ liệu nghệ sĩ
    const artistData = artistsData[artistId] || artistsData[1]; // Mặc định là Sơn Tùng nếu không tìm thấy

    // Render thông tin nghệ sĩ
    function renderArtistInfo() {
        document.getElementById('artist-cover').src = artistData.image;
        document.getElementById('artist-name').textContent = artistData.name;
        document.getElementById('artist-followers').textContent = artistData.followers;
        document.getElementById('artist-genre').textContent = artistData.genre;
        document.getElementById('artist-bio').textContent = artistData.bio;

        // Render social links
        const socialContainer = document.querySelector('.artist-social');
        socialContainer.innerHTML = '';
        for (const [platform, url] of Object.entries(artistData.social)) {
            const iconClass = {
                facebook: 'fab fa-facebook',
                instagram: 'fab fa-instagram',
                youtube: 'fab fa-youtube',
                twitter: 'fab fa-twitter'
            }[platform];
            
            if (iconClass && url) {
                socialContainer.innerHTML += `
                    <a href="${url}" target="_blank" class="social-link">
                        <i class="${iconClass}"></i>
                    </a>
                `;
            }
        }
    }

    // Render bài hát phổ biến (dạng thanh ngang)
    function renderPopularSongs() {
        const container = document.getElementById('popular-songs');
        container.innerHTML = '';

        const scrollContainer = document.createElement('div');
        scrollContainer.className = 'horizontal-scroll-songs';
        
        artistData.popularSongs.forEach(song => {
            const songCard = document.createElement('div');
            songCard.className = 'horizontal-song-card';
            songCard.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" class="horizontal-song-cover">
                <div class="horizontal-song-title">${song.title}</div>
                <div class="horizontal-song-artist">${artistData.name}</div>
            `;
            songCard.addEventListener('click', () => {
                playSong(song.id);
            });
            scrollContainer.appendChild(songCard);
        });
        
        container.appendChild(scrollContainer);
    }

    // Render album
    function renderAlbums() {
        const container = document.getElementById('artist-albums');
        container.innerHTML = '';

        artistData.albums.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.className = 'album-card';
            albumCard.innerHTML = `
                <img src="${album.cover}" alt="${album.title}" class="album-cover">
                <div class="album-info">
                    <h3>${album.title}</h3>
                    <p>${album.year} • ${album.songs} bài hát</p>
                </div>
            `;
            albumCard.addEventListener('click', () => {
                // Trong thực tế, chuyển hướng đến trang album
                alert(`Xem album: ${album.title}`);
            });
            container.appendChild(albumCard);
        });
    }

    // Render nghệ sĩ liên quan
    function renderRelatedArtists() {
        const container = document.getElementById('related-artists');
        container.innerHTML = '';

        artistData.relatedArtists.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card';
            artistCard.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}" class="artist-image">
                <h3>${artist.name}</h3>
                <p>${artist.followers} người theo dõi</p>
            `;
            artistCard.addEventListener('click', () => {
                window.location.href = `ArtistDetail.html?id=${artist.id}`;
            });
            container.appendChild(artistCard);
        });
    }

    // Render sự kiện
    function renderEvents() {
        const container = document.getElementById('artist-events');
        
        if (artistData.events.length === 0) {
            container.innerHTML = '<div class="no-events">Hiện không có sự kiện nào sắp tới</div>';
            return;
        }
        
        container.innerHTML = '';
        artistData.events.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            eventItem.innerHTML = `
                <div class="event-date">${event.date}</div>
                <div class="event-info">
                    <h3>${event.title}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                </div>
                <button class="event-btn">Chi tiết</button>
            `;
            container.appendChild(eventItem);
        });
    }

    // Hàm phát nhạc
    function playSong(songId) {
        const song = artistData.popularSongs.find(s => s.id === songId);
        if (!song) return;
        
        // Cập nhật player
        const audioPlayer = document.getElementById('audio-player');
        const currentSongTitle = document.getElementById('current-song-title');
        const currentSongArtist = document.getElementById('current-song-artist');
        const currentSongCover = document.getElementById('current-song-cover');
        
        currentSongTitle.textContent = song.title;
        currentSongArtist.textContent = artistData.name;
        currentSongCover.src = song.cover;
        
        // Trong thực tế, bạn sẽ set src cho audio player
        // audioPlayer.src = song.file;
        // audioPlayer.play();
        
        // Hiển thị player nếu đang ẩn
        document.querySelector('.player-bar').classList.add('active');
        
        console.log(`Đang phát: ${song.title} - ${artistData.name}`);
    }

    // Theo dõi nghệ sĩ
    function setupFollowButton() {
        const followBtn = document.querySelector('.follow-btn');
        let isFollowing = false;
        
        followBtn.addEventListener('click', function() {
            isFollowing = !isFollowing;
            if (isFollowing) {
                this.innerHTML = '<i class="fas fa-check"></i> Đang theo dõi';
                this.style.background = '#333';
                this.style.border = '1px solid #666';
                console.log(`Đã theo dõi ${artistData.name}`);
            } else {
                this.innerHTML = '<i class="fas fa-user-plus"></i> Theo dõi';
                this.style.background = '#1db954';
                this.style.border = 'none';
                console.log(`Đã bỏ theo dõi ${artistData.name}`);
            }
        });
    }

    // Phát tất cả bài hát
    function setupPlayAllButton() {
        const playAllBtn = document.querySelector('.play-all-btn');
        
        playAllBtn.addEventListener('click', function() {
            if (artistData.popularSongs.length > 0) {
                playSong(artistData.popularSongs[0].id);
                console.log(`Phát tất cả bài hát của ${artistData.name}`);
            }
        });
    }

    // Khởi tạo trang
    renderArtistInfo();
    renderPopularSongs();
    renderAlbums();
    renderRelatedArtists();
    renderEvents();
    setupFollowButton();
    setupPlayAllButton();
});