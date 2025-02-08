let output = document.getElementById("output");
output.style.fontSize = "20px";
output.style.color = "#946ad0";
output.style.paddingTop = "10px";

document.getElementById("svg1").addEventListener("click", () => {
    let output = document.getElementById("output");

    // Toggle between showing and hiding text
    if (output.textContent === "hamburger is not available yet") {
        output.textContent = ""; // Remove text
    } else {
        output.textContent = "hamburger is not available yet"; // Show text
    }
});
document.getElementById("svg2").addEventListener("click", () => {
    let output = document.getElementById("output");

    // Toggle between showing and hiding text
    if (output.textContent === "you are trying to cancel the song") {
        output.textContent = ""; // Remove text
    } else {
        output.textContent = "you are trying to cancel the song"; // Show text
    }
});

document.getElementById("pre").addEventListener("click", () => {
    let output2 = document.getElementById("output2");
    if (output2.textContent === "previous song is not available") {
        output2.textContent = "";
    }
    else {
        output2.textContent = "previous song is not available";
    }

})

document.getElementById("post").addEventListener("click", () => {
    let output2 = document.getElementById("output2");
    if (output2.textContent === "another song is not available") {
        output2.textContent = "";
    }
    else {
        output2.textContent = "another song is not available";
    }

})

function changep() {
    let pause = document.getElementById("pause"); // Make sure this is the correct ID
    let song = document.getElementById("song"); // Ensure this is the correct audio element

    if (pause.src.includes("play.svg")) {  // Check if "play.svg" is part of the src
        pause.src = "pause.svg"; // Change to pause icon
        song.play(); // Play the song
    } else {
        pause.src = "play.svg"; // Change to play icon
        song.pause(); // Pause the song
    }
}
{/* <audio id="song" src="your-audio-file.mp3"></audio>
<input type="range" id="seekbar" min="0" value="0" step="1"> */}

{/* <script> */}
    let song = document.getElementById("song");
    let range = document.getElementById("range");

    // Update seekbar max when metadata is loaded
    song.addEventListener("loadedmetadata", () => {
        range.max = song.duration;
    });

    // Update seekbar as song plays
    song.addEventListener("timeupdate", () => {
        range.value = song.currentTime;
    });

    // Seek when user moves the slider
    range.addEventListener("input", () => {
        song.currentTime = range.value;
    });


