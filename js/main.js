document.addEventListener('DOMContentLoaded', function() {
    // Mock data based on your database
    const mockData = {
        users: [
            { id: 1, username: 'user1', name: 'Bùi Anh Dũng', type: 'vip' },
            { id: 2, username: 'user2', name: 'Trần Khánh Bình', type: 'vip' },
            { id: 3, username: 'user3', name: 'Bùi Nguyễn Đức Thắng', type: 'vip' },
            { id: 4, username: 'user4', name: 'Huỳnh Thanh Tiến', type: 'vip' }
        ],
        artists: [
            { id: 1, name: 'Sơn Tùng M-TP', description: 'Ca sĩ nhạc trẻ nổi tiếng Việt Nam', 
                image: '../source/casi/sontungmtp.jpg'},

            { id: 2, name: 'Soobin Hoàng Sơn', description: 'Ca sĩ trẻ tài năng', 
                image: '../source/casi/soobin.jpg' },
                
            { id: 3, name: 'Jack-J97', 
                description: 'Nam ca sĩ, nhạc sĩ trẻ nổi tiếng với phong cách âm nhạc trẻ trung', 
                image: '../source/casi/jack.jpg' }
        ],
        albums: [
            { id: 1, name: 'Sky Tour', artistId: 1, releaseDate: '2021-05-20', cover: '../source/album/albumskytour.jpg' },
            { id: 2, name: 'Chuyện Của Mùa Đông', artistId: 2, releaseDate: '2021-01-10', cover: 'https://via.placeholder.com/200' },
            { id: 3, name: 'Hồng Nhan', artistId: 3, releaseDate: '2020-03-15', cover: 'https://via.placeholder.com/200' }
        ],
        songs: [
            { id: 1, title: 'Chúng Ta Của Hiện Tại', artistId: 1, albumId: 1, duration: 300, 
                file: '../music/Chúng Ta Của Hiện Tại.mp3', cover: '../source/baihat/chungtacuahientai.jpg', genre: 'VPop' },
            { id: 2, title: 'Hồng Nhan', artistId: 3, albumId: 3, duration: 192, 
                file: '../music/Hồng Nhan.mp3', cover: '../source/baihat/hongnhan.jpg', genre: 'VPop' },
            { id: 3, title: 'Giá Như', artistId: 2, albumId: 2, duration: 227, 
                file: '../music/Giá Như.mp3', cover: '../source/baihat/gianhu.jpg', genre: 'VPOP' }
        ],
        playlists: [
            { id: 1, userId: 1, title: 'Nhạc yêu thích', description: 'Danh sách bài hát yêu thích của tôi', cover: '../source/playlist/baihatyeuthich.jpg' },
            { id: 2, userId: 2, title: 'Nhạc làm việc', description: 'Nhạc giúp tập trung khi làm việc', cover: '../source/playlist/playlist.jpg' },
            { id: 3, userId: 3, title: 'Nhạc buồn', description: 'Khi cần một mình', cover: '../source/playlist/playlist.jpg' },
            { id: 5, userId: 4, title: 'Nhạc du lịch', description: 'Nhạc cho những chuyến đi', cover: '../source/playlist/playlist.jpg' }
        ],
        favorites: [
            { userId: 1, songId: 1 },
            { userId: 1, songId: 2 },
            { userId: 1, songId: 3 },
            { userId: 2, songId: 3 },
            { userId: 2, songId: 2 },
            { userId: 3, songId: 1 },
            { userId: 3, songId: 3 },
            { userId: 4, songId: 1 },
            { userId: 4, songId: 3 }
        ]
    };

    // DOM elements
    const featuredSongsContainer = document.getElementById('featured-songs');
    const featuredArtistsContainer = document.getElementById('featured-artists');
    const userPlaylistsContainer = document.getElementById('user-playlists');
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const currentSongTitle = document.getElementById('current-song-title');
    const currentSongArtist = document.getElementById('current-song-artist');
    const currentSongCover = document.getElementById('current-song-cover');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    const stopBtn = document.getElementById('stop-btn');      //biến toàn cục nút Stop

    // State
    let currentUser = null;
    let currentSongIndex = 0;
    let isPlaying = false;
    let songsQueue = [...mockData.songs];

    // Initialize the app
    function init() {
        renderFeaturedSongs();
        renderFeaturedArtists();
        renderUserPlaylists();
        setupEventListeners();
    }

    // Render featured songs
    function renderFeaturedSongs() {
        featuredSongsContainer.innerHTML = '';
        
        mockData.songs.forEach(song => {
            const artist = mockData.artists.find(a => a.id === song.artistId);
            
            const songCard = document.createElement('div');
            songCard.className = 'song-card';
            songCard.dataset.songId = song.id;
            
            songCard.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" class="song-cover">
                <div class="song-info">
                    <div class="song-title">${song.title}</div>
                    <div class="song-artist">${artist ? artist.name : 'Unknown Artist'}</div>
                </div>
            `;
            
            songCard.addEventListener('click', () => playSong(song.id));
            featuredSongsContainer.appendChild(songCard);
        });
    }

    // Render featured artists
    function renderFeaturedArtists() {
        featuredArtistsContainer.innerHTML = '';
        
        mockData.artists.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card';
            
            artistCard.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}" class="artist-image">
                <div class="artist-info">
                    <div class="artist-name">${artist.name}</div>
                </div>
            `;
            
            artistCard.addEventListener('click', () => {
                alert(`Viewing artist: ${artist.name}`);
                // In a real app, you would navigate to the artist page
            });
            
            featuredArtistsContainer.appendChild(artistCard);
        });
    }

    // Render user playlists
    function renderUserPlaylists() {
        userPlaylistsContainer.innerHTML = '';
        
        // For demo purposes, show all playlists
        // In a real app, you would filter by current user
        mockData.playlists.forEach(playlist => {
            const user = mockData.users.find(u => u.id === playlist.userId);
            
            const playlistCard = document.createElement('div');
            playlistCard.className = 'playlist-card';
            
            playlistCard.innerHTML = `
                <img src="${playlist.cover}" alt="${playlist.title}" class="playlist-cover">
                <div class="playlist-info">
                    <div class="playlist-title">${playlist.title}</div>
                    <div class="playlist-description">${playlist.description}</div>
                    ${user ? `<div class="playlist-user">By ${user.name}</div>` : ''}
                </div>
            `;
            
            playlistCard.addEventListener('click', () => {
                alert(`Viewing playlist: ${playlist.title}`);
                // In a real app, you would navigate to the playlist page
            });
            
            userPlaylistsContainer.appendChild(playlistCard);
        });
    }

    // Play a song by ID
    function playSong(songId) {
        const song = mockData.songs.find(s => s.id === songId);
        if (!song) return;
        
        const artist = mockData.artists.find(a => a.id === song.artistId);
        
        currentSongIndex = songsQueue.findIndex(s => s.id === songId);
        audioPlayer.src = song.file;
        
        currentSongTitle.textContent = song.title;
        currentSongArtist.textContent = artist ? artist.name : 'Unknown Artist';
        currentSongCover.src = song.cover;

        document.querySelector('.player-bar').classList.add('active'); 
        
        if (isPlaying) {
            audioPlayer.play();
        } else {
            togglePlay();
        }
        
        // Update duration display
        audioPlayer.addEventListener('loadedmetadata', () => {
            durationDisplay.textContent = formatTime(audioPlayer.duration);
        });
    }

    // Toggle play/pause
    function togglePlay() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
            document.querySelector('.player-bar').classList.add('active');
        } else {
            audioPlayer.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
            // Nếu muốn ẩn player khi pause, bỏ comment dòng dưới
            //document.querySelector('.player-bar').classList.remove('active');

        }
    }

    // Play next song
    function playNext() {
        currentSongIndex = (currentSongIndex + 1) % songsQueue.length;
        playSong(songsQueue[currentSongIndex].id);
    }

    // Play previous song
    function playPrev() {
        currentSongIndex = (currentSongIndex - 1 + songsQueue.length) % songsQueue.length;
        playSong(songsQueue[currentSongIndex].id);
    }

    // Format time (seconds to MM:SS)
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Update progress bar
    function updateProgress() {
        const { currentTime, duration } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        currentTimeDisplay.textContent = formatTime(currentTime);
    }

    // Set progress bar
    function setProgress() {
        const seekTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Player controls
        playBtn.addEventListener('click', togglePlay);
        prevBtn.addEventListener('click', playPrev);
        nextBtn.addEventListener('click', playNext);

        // Nút stop
        stopBtn.addEventListener('click', stopPlayback);
        
        // Progress bar
        audioPlayer.addEventListener('timeupdate', updateProgress);
        audioPlayer.addEventListener('ended', playNext);
        progressBar.addEventListener('input', setProgress);
        
        // Modal controls
        loginBtn.addEventListener('click', () => loginModal.style.display = 'flex');
        registerBtn.addEventListener('click', () => registerModal.style.display = 'flex');
        
        // Đóng player khi click nút đóng
        document.getElementById('close-player').addEventListener('click', function() {
            document.querySelector('.player-bar').classList.remove('active');
            audioPlayer.pause();
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
});

        closeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                this.closest('.modal').style.display = 'none';
            });
        });
        
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
        
        // Form submissions
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            
            // In a real app, you would validate against your database
            const user = mockData.users.find(u => u.username === username);
            
            if (user) {
                currentUser = user;
                alert(`Welcome back, ${user.name}!`);
                loginModal.style.display = 'none';
                updateUserUI();
            } else {
                alert('Invalid username or password');
            }
        });
        
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const fullname = document.getElementById('register-fullname').value;
            
            // In a real app, you would validate and create a new user in your database
            const newUser = {
                id: mockData.users.length + 1,
                username,
                name: fullname || username,
                type: 'miễn phí'
            };
            
            mockData.users.push(newUser);
            currentUser = newUser;
            
            alert(`Welcome, ${newUser.name}! Your account has been created.`);
            registerModal.style.display = 'none';
            updateUserUI();
        });
    }

    // Update UI based on user state
    function updateUserUI() {
        if (currentUser) {
            document.querySelector('.user-actions').innerHTML = `
                <span>Hi, ${currentUser.name}</span>
                <button id="logout-btn">Đăng xuất</button>
            `;
            
            document.getElementById('logout-btn').addEventListener('click', () => {
                currentUser = null;
                updateUserUI();
            });
        } else {
            document.querySelector('.user-actions').innerHTML = `
                <button id="login-btn">Đăng nhập</button>
                <button id="register-btn">Đăng ký</button>
            `;
            
            // Reattach event listeners to the new buttons
            document.getElementById('login-btn').addEventListener('click', () => loginModal.style.display = 'flex');
            document.getElementById('register-btn').addEventListener('click', () => registerModal.style.display = 'flex');
        }
    }

    //Hàm nút stop
    function stopPlayback() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;  // Reset thời gian về 0
    isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';  // Đổi icon về play
    progressBar.value = 0;  // Reset progress bar
    currentTimeDisplay.textContent = '0:00';  // Reset thời gian hiển thị
    
    // Optional: Ẩn player bar nếu muốn
    // document.querySelector('.player-bar').classList.remove('active');
}

    // Initialize the app
    init();
});