// English page JavaScript functionality

// Platform data for detailed information
const platformData = {
    'cambly': {
        title: 'Cambly - Instant English Practice',
        description: 'Connect with native English speakers for conversational practice 24/7',
        features: [
            '✨ Available 24/7 with instant access',
            '🗣️ Native English speakers from around the world',
            '📱 Mobile and desktop friendly',
            '🎯 No lesson preparation required',
            '💬 Casual conversation practice',
            '🔄 Flexible scheduling'
        ],
        benefits: 'Perfect for improving your speaking confidence and fluency through real conversations with friendly native speakers.',
        pricing: 'Plans starting from $10.99/month with various options available.',
        bestFor: 'Learners who want spontaneous conversation practice and prefer flexible, unstructured learning.'
    },
    'preply': {
        title: 'Preply - Personal English Tutors',
        description: 'Find your perfect English tutor from thousands of qualified teachers',
        features: [
            '👩‍🏫 Thousands of certified English tutors',
            '🎯 Personalized lesson plans',
            '📅 Flexible scheduling system',
            '💰 Competitive pricing options',
            '🔄 Money-back guarantee',
            '📈 Progress tracking tools'
        ],
        benefits: 'Get personalized attention with structured lessons tailored to your learning goals and pace.',
        pricing: 'Tutor rates range from $5-40/hour depending on experience and qualifications.',
        bestFor: 'Students who prefer structured, personalized lessons with dedicated teachers.'
    },
    'ef-english-live': {
        title: 'EF English Live - Professional English School',
        description: 'Learn with certified native teachers in group and private classes',
        features: [
            '🎓 Certified native English teachers',
            '👥 Group classes with international students',
            '👤 Private one-on-one lessons',
            '📜 Internationally recognized certificates',
            '🌍 Available 24/7 worldwide',
            '📊 Comprehensive progress reports'
        ],
        benefits: 'Professional English education with structured curriculum and official certifications.',
        pricing: 'Monthly subscriptions starting from $99/month for unlimited access.',
        bestFor: 'Serious learners seeking professional certification and structured learning paths.'
    },
    'italki': {
        title: 'iTalki - Community Language Learning',
        description: 'Learn from professional teachers and community tutors',
        features: [
            '👨‍🏫 Professional teachers and community tutors',
            '💝 Affordable pricing options',
            '🌐 Global learning community',
            '📝 Lesson notes and feedback',
            '🎯 Customizable learning goals',
            '💬 Language exchange opportunities'
        ],
        benefits: 'Combine professional instruction with community learning for an affordable, comprehensive experience.',
        pricing: 'Lessons from $4-80/hour with both professional and community tutors.',
        bestFor: 'Budget-conscious learners who want quality instruction with community support.'
    },
    'lingoda': {
        title: 'Lingoda - Structured Language School',
        description: 'Follow a clear learning path with qualified teachers',
        features: [
            '🎯 Structured CEFR-aligned curriculum',
            '👩‍🎓 Native-speaking qualified teachers',
            '🏆 Official language certificates',
            '📚 Comprehensive learning materials',
            '👥 Small group classes (3-5 students)',
            '⏰ Fixed schedule options'
        ],
        benefits: 'Systematic language learning with clear progression and internationally recognized certifications.',
        pricing: 'Monthly plans from $59-199 depending on lesson intensity.',
        bestFor: 'Learners who prefer structured curricula and want official language certifications.'
    },
    'udemy': {
        title: 'Udemy - English Course Library',
        description: 'Access thousands of English courses with lifetime access',
        features: [
            '📚 Thousands of English courses available',
            '♾️ Lifetime access to purchased courses',
            '📱 Mobile and offline learning',
            '⭐ High-rated instructors',
            '🎯 Specialized topics (Business, IELTS, etc.)',
            '💰 Regular discounts and sales'
        ],
        benefits: 'Learn at your own pace with comprehensive courses covering every aspect of English learning.',
        pricing: 'Individual courses from $10-200, frequent sales offer courses for $10-20.',
        bestFor: 'Self-paced learners who want comprehensive courses on specific English topics.'
    },
    'coursera': {
        title: 'Coursera - University-Level English',
        description: 'Learn English from top universities with structured programs',
        features: [
            '🎓 Courses from top universities',
            '📜 Verified certificates available',
            '📅 Structured weekly assignments',
            '👥 Peer interaction and forums',
            '📈 Graded assessments',
            '💡 Academic English focus'
        ],
        benefits: 'University-quality English education with academic rigor and recognized credentials.',
        pricing: 'Free courses available, certificates from $39-79, specializations $39-79/month.',
        bestFor: 'Academic learners seeking university-level instruction and recognized certificates.'
    },
    'elsa-speak': {
        title: 'ELSA Speak - AI Pronunciation Coach',
        description: 'Improve your English pronunciation with AI technology',
        features: [
            '🤖 AI-powered pronunciation analysis',
            '🗣️ Real-time feedback on pronunciation',
            '📊 Detailed progress tracking',
            '🎯 Personalized lesson recommendations',
            '📱 Mobile-first learning experience',
            '🌍 Accent reduction training'
        ],
        benefits: 'Get instant, accurate feedback on your pronunciation to speak English more clearly and confidently.',
        pricing: 'Free version available, Premium from $8.99/month or $59.99/year.',
        bestFor: 'Learners focused on improving pronunciation and speaking clarity.'
    },
    'duolingo': {
        title: 'Duolingo - Gamified English Learning',
        description: 'Make learning English fun and addictive with game-like lessons',
        features: [
            '🎮 Gamified learning experience',
            '🔥 Daily streak motivation',
            '📱 Mobile-optimized lessons',
            '🆓 Free version with ads',
            '🏆 Achievement system',
            '👥 Social learning features'
        ],
        benefits: 'Build consistent learning habits through engaging, bite-sized lessons that feel like playing games.',
        pricing: 'Free with ads, Duolingo Plus from $6.99/month for ad-free experience.',
        bestFor: 'Beginners who want fun, habit-forming daily English practice.'
    },
    'busuu': {
        title: 'Busuu - Personalized English Learning',
        description: 'Learn English with AI-powered personalized study plans',
        features: [
            '🤖 AI-powered personalized lessons',
            '🗣️ Native speaker feedback',
            '📊 Progress tracking and insights',
            '🎯 Goal-oriented learning paths',
            '📜 McGraw-Hill Education certificates',
            '👥 Community interactions'
        ],
        benefits: 'Efficient learning through personalized content and real feedback from native speakers.',
        pricing: 'Free basic plan, Premium from $9.99/month, Premium Plus $13.99/month.',
        bestFor: 'Learners who want AI-personalized content and native speaker feedback.'
    },
    'memrise': {
        title: 'Memrise - Memory-Based English Learning',
        description: 'Learn English vocabulary with spaced repetition and real videos',
        features: [
            '🧠 Spaced repetition system',
            '📹 Real native speaker videos',
            '🎯 Vocabulary-focused learning',
            '📱 Mobile and web platforms',
            '🌍 Real-world English exposure',
            '🎮 Gamified learning elements'
        ],
        benefits: 'Master English vocabulary effectively through scientific memory techniques and authentic content.',
        pricing: 'Free version available, Memrise Pro from $8.99/month or $59.99/year.',
        bestFor: 'Learners who want to build strong vocabulary foundations with memory techniques.'
    },
    'drops': {
        title: 'Drops - Visual English Vocabulary',
        description: 'Learn English vocabulary through beautiful illustrations',
        features: [
            '🎨 Beautiful visual illustrations',
            '⏰ 5-minute daily sessions',
            '🧠 Visual memory association',
            '🎯 Vocabulary-focused approach',
            '📱 Mobile-first design',
            '🎮 Minimalist game design'
        ],
        benefits: 'Build vocabulary quickly through visual association in just 5 minutes per day.',
        pricing: 'Free 5 minutes/day, Premium from $9.99/month for unlimited access.',
        bestFor: 'Visual learners who want quick, daily vocabulary building sessions.'
    },
    'hellotalk': {
        title: 'HelloTalk - Language Exchange Community',
        description: 'Practice English with native speakers worldwide',
        features: [
            '🌍 Global language exchange community',
            '💬 Text, voice, and video chat',
            '✏️ Built-in correction tools',
            '📱 Mobile-first social platform',
            '🎯 Cultural exchange opportunities',
            '👥 Group chat and moments'
        ],
        benefits: 'Practice real English with native speakers while helping others learn your language.',
        pricing: 'Free basic features, VIP membership from $6.99/month for additional features.',
        bestFor: 'Learners who want authentic language exchange and cultural connections.'
    }
};

// Modal functionality
function openPlatformDetail(platformId) {
    const platform = platformData[platformId];
    if (!platform) return;

    const modal = document.getElementById('platformModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = platform.title;
    
    modalBody.innerHTML = `
        <div class="platform-detail">
            <div class="detail-section">
                <h4><i class="fas fa-info-circle"></i> About</h4>
                <p>${platform.description}</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-star"></i> Key Features</h4>
                <ul class="feature-list">
                    ${platform.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-heart"></i> Why You'll Love It</h4>
                <p>${platform.benefits}</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-tag"></i> Pricing</h4>
                <p>${platform.pricing}</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-target"></i> Best For</h4>
                <p>${platform.bestFor}</p>
            </div>
            
            <div class="detail-actions">
                <a href="#" class="btn btn-primary affiliate-link">
                    <i class="fas fa-external-link-alt"></i>
                    Try ${platform.title.split(' -')[0]} Now
                </a>
                <button onclick="closeModal()" class="btn btn-secondary">
                    <i class="fas fa-times"></i>
                    Close
                </button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add styles for modal content
    addModalStyles();
}

function closeModal() {
    const modal = document.getElementById('platformModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function addModalStyles() {
    const existingStyle = document.getElementById('modalStyles');
    if (existingStyle) return;

    const style = document.createElement('style');
    style.id = 'modalStyles';
    style.textContent = `
        .platform-detail {
            line-height: 1.6;
        }
        
        .detail-section {
            margin-bottom: 25px;
        }
        
        .detail-section h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .detail-section h4 i {
            color: #667eea;
        }
        
        .detail-section p {
            color: #666;
            font-size: 1rem;
            line-height: 1.6;
        }
        
        .feature-list {
            list-style: none;
            padding: 0;
        }
        
        .feature-list li {
            padding: 8px 0;
            color: #666;
            font-size: 1rem;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .feature-list li:last-child {
            border-bottom: none;
        }
        
        .detail-actions {
            margin-top: 30px;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        
        .detail-actions .btn {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    `;
    document.head.appendChild(style);
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('platformModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Add smooth animations on scroll
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe platform cards for animation
    const cards = document.querySelectorAll('.platform-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    addScrollAnimations();
    
    // Add click effects to affiliate links
    const affiliateLinks = document.querySelectorAll('.affiliate-link');
    affiliateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small celebration effect
            const celebration = document.createElement('div');
            celebration.innerHTML = '💝';
            celebration.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                font-size: 2rem;
                pointer-events: none;
                animation: celebrate 1s ease forwards;
                z-index: 1001;
            `;
            document.body.appendChild(celebration);
            
            setTimeout(() => celebration.remove(), 1000);
        });
    });
    
    // Add CSS for celebration animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes celebrate {
            0% {
                transform: translate(-50%, -50%) scale(0.5);
                opacity: 1;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.2);
            }
            100% {
                transform: translate(-50%, -50%) scale(1) translateY(-100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Add loading animation for better UX
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a subtle fade-in effect for the whole page
    const style = document.createElement('style');
    style.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});

// Track affiliate link clicks (for analytics if needed)
function trackAffiliateClick(platform) {
    // This is where you could add analytics tracking
    console.log(`Affiliate link clicked for: ${platform}`);
    
    // Show a thank you message
    showThankYouMessage();
}

function showThankYouMessage() {
    const message = document.createElement('div');
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1001;
            animation: slideInRight 0.3s ease forwards;
        ">
            <i class="fas fa-heart" style="margin-right: 8px;"></i>
            Thank you for your support! 💚
        </div>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

// Add CSS for notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);
