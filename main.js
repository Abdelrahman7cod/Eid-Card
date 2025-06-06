/*----*/

const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    let cw = canvas.width = window.innerWidth;
    let ch = canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
    });
    
    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 5 + 2;
        this.angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.03 + 0.015;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }
    
    let particles = [];
    function launchFirework() {
      const x = Math.random() * cw * 0.8 + cw * 0.1;
      const y = Math.random() * ch * 0.5 + ch * 0.1;
      const colors = ['#ffd700', '#ff6347', '#adff2f', '#00ffff', '#ff69b4'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle(x, y, color));
      }
    }
    
    function animateFireworks() {
      requestAnimationFrame(animateFireworks);
      ctx.fillStyle = "rgba(10, 61, 77, 0.15)";
      ctx.fillRect(0, 0, cw, ch);
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].alpha <= 0) {
          particles.splice(i, 1);
        }
      }
    }
    animateFireworks();


    /*----*/
    

    function animateTitle() {
      const title = document.getElementById('title');
      const text = title.textContent;
      title.innerHTML = "";
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.className = 'animated-letter';
        span.style.animationDelay = (i * 0.1) + 's';
        title.appendChild(span);
      }
    }
    // On initial load, split the title text
    animateTitle();
    
    // Re-trigger animation on existing letters without removing them
    function reanimateTitle() {
      const letters = document.querySelectorAll('#title span');
      letters.forEach((letter, i) => {
        letter.style.animation = 'none';
        // Force reflow to restart the animation
        void letter.offsetWidth;
        letter.style.animation = 'letterRise 0.8s forwards';
        letter.style.animationDelay = (i * 0.1) + 's';
      });
    }

/*---*/


   const m2 = [
      "Wishing you and your family a luminous Eid celebration!",
      "Eid Mubarak! Embrace the beauty of new beginnings.",
      "Wishing you a day filled with peace, prosperity, and divine blessings!",
      "May the spirit of Eid light up your life with endless joy.",
      "Happy Eid Day! May Allah bless your life and fulfill all your wishes and Dua’s.",
      "May Allah open the doors of happiness for you. Eid Mubarak to you and your family.",
      "Happy Eid Day! I wish you and your family a very joyful Eid 🌙",
      "Eid Mubarak! May Allah accept all your prayers and forgive all your faults.",
      "May the divine happiness fill our homes and hearts. Wishing you all Eid Mubarak! 🌙",
      "May every moment of this Eid brings you closer to Allah (SWT) and gets you rewarded for your deeds! Eid Mubarak.",
      "May this beautiful occasion of Eid gives you all the reasons to make your life even more beautiful. Wishing you a happy Eid day! Eid Mubarak!",
      "Eid Mubarak. Wishing you peace, happiness!",
      "May Allah bless you with happiness, fill your home with peace, and grant you all your wishes. Eid Mubarak!",
      "May your heart fill with boundless joy on this  occasion. Eid Mubarak 🕌🌙⭐️",
      "Eid Mubarak! Wishing you happiness, success in your work and personal life.",
      "Eid Mubarak! May this special occasion open doors to new opportunities and bring success to your professional and personal life.",

      "Eid Mubarak! May your Eid day be filled with joy and bliss.",
      "“May Allah accept your prayers and fulfill all your dreams! Eid Mubarak!”",
      "Windows 10/11: 27QG6-V2XDD-X6MYW-6RN3K-KQBQB",
      "Windows 10/11: G49HN-9YQCT-684C3-R7T3F-3DBQB",
      "Windows 10/11: JNVGH-32WTB-D4CQ3-PHM2C-BTDGY",
      "Windows 10/11: 8XQBX-V4HQ9-KC39Y-MQCGN-GMT6Y",
      "Windows 10/11: MN99Q-62G3R-G2FYW-HF4J7-PWF9M",

    ];

    function getNewWish() {

      const SpecialMsg = document.getElementById('SpecialMessage');
      const randomIndex = Math.floor(Math.random() * m2.length);
      SpecialMsg.textContent = m2[randomIndex];
    
     
      launchFirework();
    
    
    }
    



        
  
