/**
 * Main Application Script
 * Dynamically populates data, handles interactive states, theme switching, canvas background, and form validation.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Populate Data from data.js
    populateData();

    // 2. Initialize UI Components & Animations
    initLoader();
    initThemeToggle();
    initMobileMenu();
    initTypedEffect();
    initTechCanvas();
    initScrollEffects();
    initContactForm();
    initCopyEmail();
    initRippleEffect();
});

function populateData() {
    // Hero & Navbar
    document.getElementById("navLogo").innerHTML = `SN<span>.</span>`;
    document.getElementById("heroName").textContent = portfolioData.name;
    document.getElementById("heroAboutShort").textContent = portfolioData.aboutShort;
    document.getElementById("heroProfileImg").src = portfolioData.profileImage;
    document.getElementById("resumeBtn").href = portfolioData.resume;

    // About Section
    document.getElementById("eduInstitution").textContent = portfolioData.education.institution;
    document.getElementById("eduDegree").textContent = portfolioData.education.degree;
    document.getElementById("eduSpec").textContent = portfolioData.education.specialization;
    document.getElementById("careerObjectiveText").textContent = portfolioData.aboutLong;

    // Experience
    const expContainer = document.getElementById("experienceContainer");
    expContainer.innerHTML = portfolioData.experience.map(exp => `
        <div class="exp-item">
            <h4>${exp.role} <span>@ ${exp.company}</span></h4>
            <span class="exp-period">${exp.period}</span>
            <ul>
                ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // Skills
    const skillsGrid = document.getElementById("skillsGrid");
    skillsGrid.innerHTML = portfolioData.skills.map(group => `
        <div class="glass-card skill-category-card">
            <div class="skill-header">
                <i class="${group.icon}"></i>
                <h3>${group.category}</h3>
            </div>
            <div class="skill-tags">
                ${group.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Projects
    const projectsList = document.getElementById("projectsList");
    projectsList.innerHTML = portfolioData.projects.map((proj, index) => `
        <div class="glass-card project-card ${index % 2 === 1 ? 'reverse' : ''}">
            <div class="project-image">
                <img src="${proj.image}" alt="${proj.title}" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'">
            </div>
            <div class="project-info">
                <h3>${proj.title}</h3>
                <p class="project-desc short-desc" id="projDesc-${index}">${proj.description}</p>
                <button class="toggle-desc-btn" onclick="toggleProjectDesc(${index})">Read More</button>
                <div class="project-tech">
                    ${proj.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-buttons">
                   <a href="${proj.github}" class="btn btn-secondary btn-sm ripple-btn" target="_blank">GitHub <i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    `).join('');

    // Contact info
    document.getElementById("contactPhone").textContent = portfolioData.phone;
    document.getElementById("contactPhone").href = `tel:${portfolioData.phone}`;
    document.getElementById("contactEmail").textContent = portfolioData.email;
    document.getElementById("contactEmail").href = `mailto:${portfolioData.email}`;
    document.getElementById("contactLocation").textContent = portfolioData.location;
    document.getElementById("contactLinkedin").textContent = portfolioData.linkedin;
    document.getElementById("contactLinkedin").href = portfolioData.linkedin;
    document.getElementById("contactGithub").textContent = portfolioData.github;
    document.getElementById("contactGithub").href = portfolioData.github;

    // Footer
    document.getElementById("footerCopyright").innerHTML = `&copy; ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.`;
    document.getElementById("footerSocials").innerHTML = `
        <a href="${portfolioData.github}" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="${portfolioData.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
        <a href="mailto:${portfolioData.email}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
    `;
}

// Page Loader
function initLoader() {
    const loader = document.getElementById("pageLoader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }, 600);
}

// Theme Toggle
function initThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");
    const htmlTag = document.documentElement;
    const icon = toggleBtn.querySelector("i");

    toggleBtn.addEventListener("click", () => {
        if (htmlTag.getAttribute("data-theme") === "dark") {
            htmlTag.setAttribute("data-theme", "light");
            icon.className = "fa-solid fa-sun";
        } else {
            htmlTag.setAttribute("data-theme", "dark");
            icon.className = "fa-solid fa-moon";
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// Typing Effect
function initTypedEffect() {
    const typedTextSpan = document.getElementById("typedText");
    const textArray = ["Secure Systems", "Intelligent Agents", "Web Applications", "UI/UX Experiences"];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    if (textArray.length) {
        setTimeout(type, 1000);
    }
}
// Futuristic Tech Canvas Background with Floating Animation
function initTechCanvas() {
    const canvas = document.getElementById("techCanvas");
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];
    let angle = 0;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.baseVx = (Math.random() - 0.5) * 0.6;
            this.baseVy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2.2 + 1;
            this.floatOffset = Math.random() * Math.PI;
        }

        update() {
            // Add a smooth sine-wave floating oscillation
            const floatX = Math.sin(angle + this.floatOffset) * 0.3;
            const floatY = Math.cos(angle + this.floatOffset) * 0.3;

            this.x += this.baseVx + floatX;
            this.y += this.baseVy + floatY;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--tech-particle') || 'rgba(139, 92, 246, 0.35)';
            ctx.fill();
        }
    }

    for (let i = 0; i < Math.floor(window.innerWidth / 18); i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        angle += 0.015; // Controls the speed of the floating wave motion

        // Draw connections and particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--tech-line') || 'rgba(16, 185, 129, 0.08)';
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    animate();
}

// Scroll Effects & Progress Bar
function initScrollEffects() {
    const header = document.getElementById("header");
    const scrollProgress = document.getElementById("scrollProgress");
    const backToTop = document.getElementById("backToTop");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        scrollProgress.style.width = `${scrollPercent}%`;

        if (scrollTop > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        if (scrollTop > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

        // Active section highlight
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (scrollTop >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Contact Form Validation
function initContactForm() {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("formSuccess");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        // Clear errors
        document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

        if (!name.value.trim()) {
            document.getElementById("nameError").textContent = "Name is required";
            isValid = false;
        }

        if (!email.value.trim()) {
            document.getElementById("emailError").textContent = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            document.getElementById("emailError").textContent = "Invalid email address";
            isValid = false;
        }

        if (!subject.value.trim()) {
            document.getElementById("subjectError").textContent = "Subject is required";
            isValid = false;
        }

        if (!message.value.trim()) {
            document.getElementById("messageError").textContent = "Message is required";
            isValid = false;
        }

        if (isValid) {
            successMsg.style.display = "block";
            form.reset();
            setTimeout(() => {
                successMsg.style.display = "none";
            }, 5000);
        }
    });
}

// Copy Email Button
function initCopyEmail() {
    const copyBtn = document.getElementById("copyEmailBtn");
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(portfolioData.email);
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
        }, 2000);
    });
}

// Ripple Effect
function initRippleEffect() {
    document.querySelectorAll(".ripple-btn").forEach(button => {
        button.addEventListener("click", function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement("span");
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add("ripple");

            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Toggle full project description view on click
window.toggleProjectDesc = function(index) {
    const descElement = document.getElementById(`projDesc-${index}`);
    const button = descElement.nextElementSibling;
    
    descElement.classList.toggle("expanded");
    if (descElement.classList.contains("expanded")) {
        button.textContent = "Show Less";
    } else {
        button.textContent = "Read More";
    }
};
/* ==========================================
   DYNAMIC BACKGROUND BUBBLE GENERATOR
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const bubbleCount = 15; // Number of floating bubbles on screen
    const body = document.body;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("floating-bubble");
        
        // Randomize size, starting horizontal position, and animation duration/delay
        const size = Math.random() * 60 + 20; // between 20px and 80px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 8 + 6}s`; // 6s to 14s
        bubble.style.animationDelay = `${Math.random() * 5}s`;

        body.appendChild(bubble);
    }
});
/* ==========================================
   DARK BUBBLE BACKGROUND GENERATOR
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("bubble-background-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "bubble-background-container";
        document.body.prepend(container);
    } else {
        container.innerHTML = ""; // Clear any duplicate instances
    }

    const bubbleCount = 30;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("dark-bubble");
        
        // Small, crisp bubble sizes (12px to 28px)
        const size = Math.random() * 16 + 12;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 6 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(bubble);
    }
});