# M-portfolio-
My website 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Muhammad Alamin | Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" href="icon.jpg" type="image/jpeg" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
</head>
<body>

  <!-- Background Music -->
  <audio id="bg-music" autoplay loop muted>
    <source src="music1.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>

  <header>
    <img src="icon.jpg" alt="Muhammad Alamin" class="icon" />
    <h1>Muhammad Alamin</h1>
    <button id="name-button">Hi, I'm Muhammad 👋</button>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Video Section -->
  <section id="intro-video">
    <video controls autoplay muted loop>
      <source src="video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>

  <!-- About Section -->
  <section id="about">
    <h2>About Me</h2>
    <p>I’m Muhammad Alamin, a creative web developer with a passion for elegant and functional design.</p>
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <h2>Projects</h2>
    <div class="project">
      <h3>Portfolio Website</h3>
      <p>A fully responsive personal portfolio built with HTML, CSS, and JavaScript.</p>
    </div>
    <div class="project">
      <h3>Task Manager</h3>
      <p>A productivity app to manage your daily tasks with ease and style.</p>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact Me</h2>
    <form id="contact-form">
      <input type="text" id="name" placeholder="Your Name" required />
      <input type="email" id="email" placeholder="Your Email" required />
      <textarea id="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <p id="response-message"></p>
    <div id="map"></div>
  </section>

  <footer>
    <p>© 2025 Muhammad Alamin. All rights reserved.</p>
  </footer>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="script.js"></script>
</body>
</html>
