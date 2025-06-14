// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.slider-nav.next').addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.slider-nav.prev').addEventListener('click', () => showSlide(currentSlide - 1));

// Auto advance slides
setInterval(() => showSlide(currentSlide + 1), 5000);

// Navbar Animation
gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Hero Section Animations
gsap.from('.hero-content h1', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.from('.hero-content p', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.7,
    ease: 'power3.out'
});

// About Section Animations
gsap.to('.about-image img', {
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    counter.textContent = '0';
    
    ScrollTrigger.create({
        trigger: counter,
        start: 'top center+=100',
        onEnter: () => {
            gsap.to({
                val: 0
            }, {
                val: target,
                duration: 2,
                onUpdate: function() {
                    counter.textContent = Math.round(this.targets()[0].val) + '+';
                }
            });
        }
    });
});

// Service Cards Animation
gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.2
    });
});

// Portfolio Items Animation
gsap.utils.toArray('.portfolio-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        scale: 1,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.2
    });
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');

// Create dots
const dotsContainer = document.querySelector('.testimonial-dots');
testimonials.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('testimonial-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showTestimonial(i));
    dotsContainer.appendChild(dot);
});

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    document.querySelectorAll('.testimonial-dot').forEach(dot => dot.classList.remove('active'));
    
    currentTestimonial = (index + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
    document.querySelectorAll('.testimonial-dot')[currentTestimonial].classList.add('active');
}

// Auto advance testimonials
setInterval(() => showTestimonial(currentTestimonial + 1), 4000);

// Contact Form Animation
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top center+=100'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Map Animation
gsap.from('.map-container', {
    scrollTrigger: {
        trigger: '.map-container',
        start: 'top center+=100'
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// WhatsApp Button Animation
gsap.to('.whatsapp-button', {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: 2,
    ease: 'back.out(1.7)'
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 70
            },
            ease: 'power3.inOut'
        });
    });
});

// Service Button Hover Animation
document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3
        });
    });
    
    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Form Submit Animation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    gsap.to(this, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            this.reset();
            alert('Thank you for your message! We\'ll get back to you soon.');
        }
    });
});