document.addEventListener('DOMContentLoaded', function() {
    // Mock data for discover page
    const discoverData = {
        newReleases: [
            { id: 4, title: 'Có Hẹn Với Thanh Xuân', artist: 'MONSTAR, GREY D', 
                file: '../music/baihat/có hẹn với thanh xuân.mp3', cover: '../source/baihat/cohenvoithanhxuan.jpg', duration: '4:28' },
            { id: 5, title: 'Lạ Lùng', artist: 'Vũ', cover: 'https://via.placeholder.com/200', duration: '4:12' },
            { id: 6, title: 'Bước Qua Nhau', artist: 'Vũ. ft. AMEE', cover: 'https://via.placeholder.com/200', duration: '3:28' },
            { id: 7, title: 'Đi Về Nhà', artist: 'Đen ft. JustaTee', cover: 'https://via.placeholder.com/200', duration: '4:15' },
            { id: 8, title: 'Sài Gòn Đau Lòng Quá', artist: 'Hứa Kim Tuyền', cover: 'https://via.placeholder.com/200', duration: '3:52' },
            { id: 9, title: 'Có Em Chờ', artist: 'Min', cover: 'https://via.placeholder.com/200', duration: '3:20' },
            { id: 10, title: 'Thích Em Hơi Nhiều', artist: 'Wren Evans', cover: 'https://via.placeholder.com/200', duration: '2:56' }
        ],
        topSongs: [
            { id: 1, title: 'Chúng Ta Của Hiện Tại', artist: 'Sơn Tùng M-TP', plays: '1.2M' },
            { id: 2, title: 'Hồng Nhan', artist: 'Jack-J97', plays: '980K' },
            { id: 3, title: 'Dancing In The Dark', artist: 'Soobin Hoàng Sơn', plays: '850K' },
            { id: 4, title: 'Hoa Nở Không Màu', artist: 'Hoài Lâm', plays: '750K' },
            { id: 5, title: 'Lạ Lùng', artist: 'Vũ', plays: '700K' }
        ],
        featuredArtists: [
            { id: 1, name: 'Sơn Tùng M-TP', image: 'https://via.placeholder.com/200' },
            { id: 2, name: 'Soobin Hoàng Sơn', image: 'https://via.placeholder.com/200' },
            { id: 3, name: 'Jack-J97', image: 'https://via.placeholder.com/200' },
            { id: 4, name: 'Đen Vâu', image: 'https://via.placeholder.com/200' },
            { id: 5, name: 'AMEE', image: 'https://via.placeholder.com/200' },
            { id: 6, name: 'Hoài Lâm', image: 'https://via.placeholder.com/200' }
        ]
    };

    // DOM elements
    const newSongsContainer = document.getElementById('new-songs');
    const topSongsList = document.querySelector('.top-songs-list');
    const featuredArtistsContainer = document.getElementById('featured-artists');

    // Render new releases
    function renderNewReleases() {
        newSongsContainer.innerHTML = '';
        
        discoverData.newReleases.forEach(song => {
            const songCard = document.createElement('div');
            songCard.className = 'new-song-card';
            songCard.dataset.songId = song.id;
            
            songCard.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" class="new-song-cover">
                <div class="new-song-info">
                    <div class="new-song-title">${song.title}</div>
                    <div class="new-song-artist">${song.artist}</div>
                </div>
            `;
            
            songCard.addEventListener('click', () => {
                alert(`Playing: ${song.title} - ${song.artist}`);
                // In a real app, this would play the song
            });
            
            newSongsContainer.appendChild(songCard);
        });
    }

    // Render top songs
    function renderTopSongs() {
        topSongsList.innerHTML = '';
        
        discoverData.topSongs.forEach((song, index) => {
            const songItem = document.createElement('div');
            songItem.className = 'top-song-item';
            songItem.dataset.songId = song.id;
            
            songItem.innerHTML = `
                <div class="top-song-number">${index + 1}</div>
                <div class="top-song-info">
                    <div class="top-song-title">${song.title}</div>
                    <div class="top-song-artist">${song.artist}</div>
                </div>
                <div class="top-song-plays">${song.plays}</div>
            `;
            
            songItem.addEventListener('click', () => {
                alert(`Playing: ${song.title} - ${song.artist}`);
                // In a real app, this would play the song
            });
            
            topSongsList.appendChild(songItem);
        });
    }

    // Render featured artists
    function renderFeaturedArtists() {
        featuredArtistsContainer.innerHTML = '';
        
        discoverData.featuredArtists.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card-circle';
            
            artistCard.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}" class="artist-image-circle">
                <div class="artist-name-circle">${artist.name}</div>
            `;
            
            artistCard.addEventListener('click', () => {
                alert(`Viewing artist: ${artist.name}`);
                // In a real app, this would navigate to artist page
            });
            
            featuredArtistsContainer.appendChild(artistCard);
        });
    }

    // Initialize discover page
    function initDiscoverPage() {
        renderNewReleases();
        renderTopSongs();
        renderFeaturedArtists();
    }

    initDiscoverPage();
});