 // Get references to HTML elements
        const audioPlayer = document.getElementById('audioPlayer');
        const playPauseButton = document.getElementById('playPauseButton');
        const nextButton = document.getElementById('nextButton');
        const prevButton = document.getElementById('prevButton');
        const trackNameElement = document.getElementById('trackName');// Track name display
        const trackImageElement = document.getElementById('trackImage'); // Track image
        // Added track name element
        // Define the audio files with names
        const audioFiles = [
            { name: 'All the things we do', src: 'music/All the things we do.mp3', image: 'trackimages/things we do.jpg' },
            { name: 'Cascade Breadth', src: 'music/cascade breadth.mp3', image: 'trackimages/cascade breadth.jpg' },
            { name: 'Groovy Vibe', src: 'music/groovy-vibe.mp3', image: 'trackimages/groovy-vibe.jpg' },
            { name: 'The Last Point', src: 'music/The Last Point.mp3', image: 'trackimages/The Last point.jpg' },
            // Add more audio file objects as needed
        ];
        // Initialize variables
        let currentTrack = 0;
        let isPlaying = false;

        // Function to update the track name
        function updateTrackName() {
            trackNameElement.textContent = audioFiles[currentTrack].name;
            trackImageElement.src = audioFiles[currentTrack].image;
        }

        // Function to toggle play/pause
        function togglePlayPause() {
            if (isPlaying) {
                audioPlayer.pause();
                isPlaying = false;
                playPauseButton.textContent = '\u25BA'; // Play icon
            } else {
                audioPlayer.play();
                isPlaying = true;
                playPauseButton.textContent = '\u275A\u275A'; // Pause icon
            }
        }
        // Event listener for play/pause button
        playPauseButton.addEventListener('click', () => {
            togglePlayPause();
        });
        // Event listener for next button
        nextButton.addEventListener('click', () => {
            currentTrack = (currentTrack + 1) % audioFiles.length;
            audioPlayer.src = audioFiles[currentTrack].src;
            updateTrackName();
            if (isPlaying) {
                audioPlayer.play(); // If it was playing before, continue playing the new track.
            }
        });
        // Event listener for previous button
        prevButton.addEventListener('click', () => {
            currentTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
            audioPlayer.src = audioFiles[currentTrack].src;
            updateTrackName();
            if (isPlaying) {
                audioPlayer.play(); // If it was playing before, continue playing the new track.
            }
        });

        // Initial track name update
        updateTrackName();