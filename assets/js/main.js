// ===========================
// 🌟 IMPRESSIVE Network Mesh Animation 🌟
// Glowing nodes + Pulsing connections like your image!
// ===========================
let networkAnimation = null; // Global reference

class NetworkAnimation {
    constructor() {
        this.canvas = document.getElementById('networkCanvas');
        if (!this.canvas) {
            console.error('Canvas element not found');
            return;
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50; // Reduced for smoother performance
        this.mouse = { x: null, y: null, radius: 200 };
        this.animationId = null;
        this.time = 0; // For pulsing animations
        
        this.resize();
        this.createParticles();
        this.addEventListeners();
        this.animate();
    }
    
    // Force refresh on theme change
    forceRefresh() {
        // Clear and redraw immediately
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Disable smoothing for sharp, crisp rendering
        this.ctx.imageSmoothingEnabled = false;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.7, // Even faster!
                vy: (Math.random() - 0.5) * 0.7, // Even faster!
                radius: Math.random() * 1.5 + 2, // Bigger nodes
                pulseOffset: Math.random() * Math.PI * 2 // For pulsing effect
            });
        }
    }
    
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
    
    animate() {
        // Light mode only - no theme checking needed
        this.time += 0.02;
        
        // Clear canvas completely for clean look
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles (optimized)
        for (let i = 0; i < this.particles.length; i++) {
            const particle = this.particles[i];
            
            // Move particles smoothly
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges with some padding
            if (particle.x < 50 || particle.x > this.canvas.width - 50) {
                particle.vx *= -1;
                particle.x = Math.max(50, Math.min(this.canvas.width - 50, particle.x));
            }
            if (particle.y < 50 || particle.y > this.canvas.height - 50) {
                particle.vy *= -1;
                particle.y = Math.max(50, Math.min(this.canvas.height - 50, particle.y));
            }
            
            // Mouse interaction - attract particles!
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius * 0.5;
                    particle.x += (dx / distance) * force; // Attract!
                    particle.y += (dy / distance) * force;
                }
            }
            
            // Calculate pulsing for this particle
            const pulse = Math.sin(this.time * 2 + particle.pulseOffset) * 0.5 + 0.5;
            
            // Draw connections FIRST (behind nodes)
            for (let j = i + 1; j < this.particles.length; j++) {
                const particle2 = this.particles[j];
                const dx = particle.x - particle2.x;
                const dy = particle.y - particle2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Draw connections for nearby particles - light mode colors
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.8;
                    const lineWidth = 1.3;
                    
                    // Dark blue for light mode background
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(30, 64, 175, ${opacity})`;
                    this.ctx.lineWidth = lineWidth;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(particle2.x, particle2.y);
                    this.ctx.stroke();
                }
            }
            
            // Draw glowing node with sharp edges - light mode colors only
            const nodeSize = particle.radius + pulse * 0.5;
            const glowSize = nodeSize + 3;
            
            // Tighter glow for sharper appearance
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, glowSize * 1.5
            );
            
            // Dark blue gradient for light mode
            gradient.addColorStop(0, 'rgba(30, 64, 175, 1)');
            gradient.addColorStop(0.4, 'rgba(37, 99, 235, 0.8)');
            gradient.addColorStop(0.7, 'rgba(59, 130, 246, 0.5)');
            gradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
            
            // Draw sharper glow
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, glowSize * 1.5, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Draw solid node with crisp edges
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, nodeSize, 0, Math.PI * 2);
            this.ctx.fillStyle = '#1e40af'; // Dark blue for light background
            this.ctx.fill();
            
            // Add bright center highlight
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, nodeSize * 0.5, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // Fully opaque
            this.ctx.fill();
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// ===========================
// Particle System
// ===========================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

// ===========================
// Initialize AOS (Animate On Scroll)
// ===========================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ===========================
// Theme Toggle - DISABLED (Light Mode Only)
// ===========================
// Dark mode completely removed for stability
// Portfolio uses light mode only with dark blue mesh

/*
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (!themeToggle) {
    console.error('Theme toggle button not found');
} else {
    // ... theme toggle code removed ...
}
*/

// Force light mode
document.body.classList.add('light-mode');

// ===========================
// Mobile Navigation
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(45deg) translate(5px, 5px)' 
        : 'rotate(0) translate(0, 0)';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(-45deg) translate(7px, -6px)' 
        : 'rotate(0) translate(0, 0)';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0, 0)';
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// Smooth Scrolling for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Active Navigation Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===========================
// Typing Effect for Hero Section (Optional)
// ===========================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===========================
// Intersection Observer for Fade-in Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// ===========================
// Stats Counter Animation
// ===========================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            
            const statNumbers = entry.target.querySelectorAll('.stat-number, .impact-number');
            statNumbers.forEach(stat => {
                const originalText = stat.textContent.trim();
                
                // Check if it's a number (integer or decimal)
                const numericValue = parseFloat(originalText);
                
                // Only animate if it's a valid integer (not decimal like 3.60 or text like "DOD")
                if (!isNaN(numericValue) && !originalText.includes('.') && !originalText.includes('+')) {
                    animateCounter(stat, numericValue);
                }
                // For decimals, DOD, or text with +, keep original text
            });
        }
    });
}, { threshold: 0.5 });

// Observe stat sections
document.querySelectorAll('.about-stats, .research-impact').forEach(section => {
    statsObserver.observe(section);
});

// ===========================
// Dynamic Copyright Year
// ===========================
const currentYear = new Date().getFullYear();
const copyrightYear = document.querySelector('.footer-bottom p');
if (copyrightYear) {
    copyrightYear.innerHTML = `&copy; ${currentYear} Mayank Raj. All rights reserved.`;
}

// ===========================
// Form Validation (if contact form is added later)
// ===========================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===========================
// Parallax Effect Removed for Better Performance
// ===========================
// Parallax effect disabled to improve hero section performance

// ===========================
// Skill Progress Bars Animation (if needed)
// ===========================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.dataset.progress;
        bar.style.width = `${progress}%`;
    });
}

// ===========================
// Lazy Loading Images
// ===========================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===========================
// Reading Progress Bar (Optional)
// ===========================
function createReadingProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

// Uncomment to enable reading progress bar
// createReadingProgressBar();

// ===========================
// Clipboard Copy Functionality
// ===========================
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('Copied to clipboard!');
    }
}

// ===========================
// Notification System
// ===========================
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ===========================
// Console Easter Egg
// ===========================
console.log('%c👋 Hello, curious developer!', 'font-size: 20px; color: #4f46e5; font-weight: bold;');
console.log('%cInterested in my work? Let\'s connect!', 'font-size: 14px; color: #6b7280;');
console.log('%cmraj1@umassd.edu', 'font-size: 14px; color: #10b981; font-weight: bold;');
console.log('%cGitHub: https://github.com/mayank02raj', 'font-size: 14px; color: #10b981;');

// ===========================
// Performance Monitoring (Optional)
// ===========================
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime);
            }
        }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
}

// ===========================
// Typewriter Effect - DISABLED (no cursor)
// ===========================
function typewriterEffect() {
    // Disabled - text shows immediately without typing animation or cursor
    return;
}

// ===========================
// Initialize Everything on DOM Load
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    
    // Initialize network animation and store globally
    networkAnimation = new NetworkAnimation();
    
    // Create particle system
    createParticles();
    
    // Start typewriter effect
    typewriterEffect();
    
    // Set initial active link
    highlightNavLink();
});

// ===========================
// Service Worker Registration (for PWA, optional)
// ===========================
if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //     .then(registration => console.log('Service Worker registered'))
    //     .catch(error => console.log('Service Worker registration failed:', error));
}

// ===========================
// Accessibility Enhancements
// ===========================
// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#about';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10001;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ===========================
// Keyboard Navigation Enhancement
// ===========================
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0, 0)';
    }
});
