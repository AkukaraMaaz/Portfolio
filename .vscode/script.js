document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll on Navigation Links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 100, // Account for fixed nav
          behavior: "smooth",
        });
      });
    });
  
    // Dynamic Heart Animation Following Mouse
    const heartsContainer = document.createElement('div');
    heartsContainer.classList.add('hearts-container');
    document.body.appendChild(heartsContainer);
  
    const createHeart = (x, y) => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    };
  
    document.addEventListener('mousemove', (event) => {
      createHeart(event.pageX, event.pageY);
    });
  
    // Love Letter Pop-up
    const loveLetterButton = document.createElement('button');
    loveLetterButton.textContent = '💌 Send a Love Letter';
    loveLetterButton.style.position = 'fixed';
    loveLetterButton.style.bottom = '30px';
    loveLetterButton.style.right = '30px';
    loveLetterButton.style.padding = '15px 30px';
    loveLetterButton.style.backgroundColor = '#ff1493';
    loveLetterButton.style.color = '#fff';
    loveLetterButton.style.border = 'none';
    loveLetterButton.style.borderRadius = '30px';
    loveLetterButton.style.fontSize = '1.2rem';
    loveLetterButton.style.cursor = 'pointer';
    document.body.appendChild(loveLetterButton);
  
    loveLetterButton.addEventListener('click', () => {
      const loveLetter = document.createElement('div');
      loveLetter.classList.add('love-letter');
      loveLetter.innerHTML = `
        <h2>Your Love Letter</h2>
        <p>My dearest one, your smile brightens my days like the stars light up the night. I adore you forever and always! 💖</p>
        <button onclick="this.parentElement.remove()">Close</button>
      `;
      document.body.appendChild(loveLetter);
    });
  
    // Typing Effect for "About Me" Section
    const aboutText = document.querySelector('#about p');
    const textToType = aboutText.textContent;
    aboutText.textContent = '';
    let index = 0;
  
    const typeText = () => {
      if (index < textToType.length) {
        aboutText.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100); // Speed of typing
      }
    };
    typeText();
  
    // Flashing Text in Header
    const headerText = document.querySelector('header h1');
    let toggle = true;
  
    const flashText = () => {
      headerText.style.visibility = toggle ? 'hidden' : 'visible';
      toggle = !toggle;
    };
    setInterval(flashText, 700); // Flash interval in ms
  
    // Interactive Button Animation
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'all 0.3s ease';
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });
    });
  
    // Animated Moon Phases (Night to Day Transition)
    const moonPhasesContainer = document.createElement('div');
    moonPhasesContainer.classList.add('moon-phases-container');
    document.body.appendChild(moonPhasesContainer);
  
    const moonPhaseAnimation = () => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      let moonPhase = '';
  
      if (hours >= 18 || hours < 6) {
        moonPhase = 'full';
      } else if (hours >= 6 && hours < 12) {
        moonPhase = 'half';
      } else if (hours >= 12 && hours < 18) {
        moonPhase = 'new';
      }
  
      moonPhasesContainer.innerHTML = `<div class="moon-phase ${moonPhase}"></div>`;
    };
    setInterval(moonPhaseAnimation, 60000); // Update every minute
  
    // Particle Effect on Mouse Click
    const createParticles = (event) => {
      const particleCount = 10;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);
        const size = Math.random() * 5 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${event.pageX - size / 2}px`;
        particle.style.top = `${event.pageY - size / 2}px`;
  
        const xDirection = (Math.random() - 0.5) * 2;
        const yDirection = (Math.random() - 0.5) * 2;
  
        particle.style.animation = `particleMove ${Math.random() * 2 + 2}s ease-out forwards`;
  
        setTimeout(() => particle.remove(), 2000); // Remove after animation
      }
    };
  
    document.addEventListener('click', createParticles);
  
    // Romantic Background Sparkles
    const createSparkles = () => {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      document.body.appendChild(sparkle);
      sparkle.style.top = `${Math.random() * window.innerHeight}px`;
      sparkle.style.left = `${Math.random() * window.innerWidth}px`;
  
      setTimeout(() => sparkle.remove(), 1500); // Remove sparkle after animation
    };
  
    setInterval(createSparkles, 500); // Generate sparkles every 500ms
  
  });
  
  // CSS for Dynamic Effects
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .hearts-container .heart {
        position: absolute;
        width: 30px;
        height: 30px;
        background-image: url('https://cdn-icons-png.flaticon.com/512/833/833472.png');
        background-size: cover;
        animation: heartAnimation 1s ease-out forwards;
      }
  
      @keyframes heartAnimation {
        0% { transform: scale(0.5); opacity: 1; }
        100% { transform: scale(1.5); opacity: 0; }
      }
  
      .love-letter {
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        padding: 30px;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        border-radius: 20px;
        box-shadow: 0 0 25px rgba(255, 105, 180, 0.8);
        animation: popUp 0.5s ease-out;
      }
  
      @keyframes popUp {
        0% { transform: scale(0.5); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
  
      .moon-phases-container .moon-phase {
        position: fixed;
        top: 10px;
        right: 10px;
        width: 80px;
        height: 80px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 30px rgba(255, 105, 180, 0.7);
        transition: all 1s ease;
      }
  
      .moon-phase.full { background-color: #fff; }
      .moon-phase.half { background-color: #ffd700; }
      .moon-phase.new { background-color: #333; }
  
      .particle {
        position: absolute;
        border-radius: 50%;
        background-color: #ff1493;
        animation: particleMove 2s ease-out forwards;
      }
  
      @keyframes particleMove {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
      }
  
      .sparkle {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #ff1493;
        border-radius: 50%;
        animation: sparkleMove 1s ease-out forwards;
      }
  
      @keyframes sparkleMove {
        0% { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-30px) scale(2); }
      }
    </style>
  `);
  
  