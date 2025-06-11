document.addEventListener('DOMContentLoaded', function() {
    
    function updateHealthBar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = scrollTop / scrollHeight;
        const remainingHealth = 100 - (scrollPercentage * 100);
        
        const healthBar = document.getElementById('healthBar');
        if (healthBar) {
            healthBar.style.width = remainingHealth + '%';
            
            if (remainingHealth < 20) {
                healthBar.style.backgroundImage = 'linear-gradient(to right, #F2D0E5, rgb(235, 199, 222))';
            } else if (remainingHealth < 50) {
                healthBar.style.backgroundImage = 'linear-gradient(to right, #CD95C2, rgb(205, 149, 194))';
            } else {
                healthBar.style.backgroundImage = 'linear-gradient(to right, #7AC6C0, rgb(130, 204, 198))';
            }
        }
    }
    
    window.addEventListener('scroll', updateHealthBar);
    updateHealthBar();
    

    // Typing
          
            const highlightBlock = document.getElementById('highlight-block');
            const segments = [];

            let i = 1;
            let segment = document.getElementById('segment' + i);
            while (segment) {
              segments.push(segment);
              i++;
              segment = document.getElementById('segment' + i);
            }
            
            let currentIndex = 0;
            
            function animateNextSegment() {
              if (currentIndex >= segments.length) {
                // Animation complete
                return;
              }
              
              const segment = segments[currentIndex];
              const containerRect = segment.parentElement.getBoundingClientRect();
              const segmentRect = segment.getBoundingClientRect();
              
              // Position highlight block precisely before showing it
              highlightBlock.style.left = (segmentRect.left - containerRect.left) + 'px';
              highlightBlock.style.width = segmentRect.width + 'px';
              highlightBlock.style.opacity = '0'; // Reset opacity
              
              // Flash the highlight block
              requestAnimationFrame(() => {
                // Show highlight
                highlightBlock.style.opacity = '1';
                
                // Wait a moment, then show the text and hide the highlight
                setTimeout(() => {
                  segment.classList.add('visible');
                  highlightBlock.style.opacity = '0';
                  currentIndex++;
                  setTimeout(animateNextSegment, 300);
                }, 200);
              });
            }
            
            // Start animation with a short delay
            setTimeout(animateNextSegment, 7900);

    const highlightBlock = document.getElementById('highlight-block');
const segments = [];

let i = 1;
let segment = document.getElementById('segment' + i);
while (segment) {
  segments.push(segment);
  i++;
  segment = document.getElementById('segment' + i);
}

let currentIndex = 0;
let typingStarted = false;

function animateNextSegment() {
  if (currentIndex >= segments.length) {
    return;
  }
  
  const segment = segments[currentIndex];
  const containerRect = segment.parentElement.getBoundingClientRect();
  const segmentRect = segment.getBoundingClientRect();
  
  highlightBlock.style.left = (segmentRect.left - containerRect.left) + 'px';
  highlightBlock.style.width = segmentRect.width + 'px';
  highlightBlock.style.opacity = '0';
  
  requestAnimationFrame(() => {
    highlightBlock.style.opacity = '1';
    
    setTimeout(() => {
      segment.classList.add('visible');
      highlightBlock.style.opacity = '0';
      currentIndex++;
      setTimeout(animateNextSegment, 300);
    }, 200);
  });
}

// Check for trigger via class changes
function checkTypingTrigger() {
  const triggerElement = document.querySelector('.start-typing.trigger');
  if (triggerElement && !typingStarted) {
    typingStarted = true;
    animateNextSegment();
  }
}

// Add this checker to your video timeupdate or use MutationObserver
setInterval(checkTypingTrigger, 100);

    //REALITY SCRAMBLE
    const letters = 'qwertyuiopasdfghjklzxcvbnm';

        function splitTextIntoChars(elementId) {
            const element = document.getElementById(elementId);
            const text = element.textContent.trim();
            element.innerHTML = '';
            
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const span = document.createElement('span');
                span.className = 'char';
                span.textContent = getRandomChar(); // Start with random character
                span.dataset.originalChar = char;
                element.appendChild(span);
            }
        }

        function getRandomChar() {
            return letters[Math.floor(Math.random() * letters.length)];
        }

        function scrambleWord(elementId) {
            const element = document.getElementById(elementId);
            const chars = element.querySelectorAll('.char');
            
            chars.forEach((char, index) => {
                const originalChar = char.dataset.originalChar;
                
                const scrambleInterval = setInterval(() => {
                    char.textContent = getRandomChar();
                }, 50);

                setTimeout(() => {
                    clearInterval(scrambleInterval);
                    char.textContent = originalChar;
                }, (index * 200) + 1000);
            });
        }

        function restartAnimation() {
            splitTextIntoChars('reality');
            setTimeout(() => {
                scrambleWord('reality');
            }, 120000);
        }

        splitTextIntoChars('reality');
        
        setTimeout(() => {
            scrambleWord('reality');
        }, 122000);

    // Pink Particle Effect
function startPinkParticles() {
    let isRunning = false;
    let particleSystem = null;
    
    function createParticle() {
        const particle = document.createElement('div');
        
        // Random size
        const sizes = ['', 'small', 'large'];
        const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
        particle.className = `particle ${sizeClass}`;
        
        // Random position at bottom
        const startX = Math.random() * window.innerWidth;
        particle.style.left = startX + 'px';
        particle.style.top = window.innerHeight + 10 + 'px';
        
        // Random drift
        const driftX = (Math.random() - 0.5) * 200 + 'px';
        const driftY = -(window.innerHeight + Math.random() * 200) + 'px';
        particle.style.setProperty('--drift-x', driftX);
        particle.style.setProperty('--drift-y', driftY);
        
        // Random timing
        const duration = 6 + Math.random() * 6; // 6-12 seconds
        const delay = Math.random() * 3; // 0-3 seconds
        particle.style.setProperty('--duration', duration + 's');
        particle.style.setProperty('--delay', delay + 's');
        
        return particle;
    }
    
    function spawnParticles() {
        const container = document.getElementById('particleContainer');
        if (!container) return;
        
        // Create 5 particles
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                container.appendChild(createParticle());
            }, i * 50);
        }
        
        // Clean up old particles
        const particles = container.querySelectorAll('.particle');
        if (particles.length > 100) {
            for (let i = 0; i < 20; i++) {
                if (particles[i]) particles[i].remove();
            }
        }
    }
    
    // Start after 2 seconds
    setTimeout(() => {
        isRunning = true;
        spawnParticles();
        
        // Continue spawning
        particleSystem = setInterval(() => {
            if (isRunning) spawnParticles();
        }, 800);
        
        // Stop after 3 seconds of running
        setTimeout(() => {
            isRunning = false;
            if (particleSystem) clearInterval(particleSystem);
            
            // Remove all existing particles immediately
            stopAllParticles();
        }, 133000);
    }, 125000);
}

// Start particles when page loads
window.addEventListener('load', startPinkParticles);

});