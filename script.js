const themeToggle = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const audioBtn = document.getElementById("audioBtn");
const bgMusic = document.getElementById("bgMusic");

// Function to toggle theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    themeToggle.innerHTML = "🌞";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = "🌙";
  }
}

// Set initial theme based on system preference
if (prefersDarkScheme.matches) {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.innerHTML = "🌙";
}

// Add click event listener
themeToggle.addEventListener("click", toggleTheme);

audioBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    audioBtn.classList.add("playing");
    audioBtn.innerHTML = "🎵"; // Playing icon
  } else {
    bgMusic.pause();
    audioBtn.classList.remove("playing");
    audioBtn.innerHTML = "🔇"; // Muted icon
  }
});