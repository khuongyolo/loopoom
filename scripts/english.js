// English page JavaScript functionality

// Platform data for detailed information
const platforms = {
    'ef-english-live': {
        name: 'EF English Live',
        description: 'The world\'s #1 online English school with 20 million learners. Award-winning Efekta Method™ combines native teachers, Hyperclass, and AI technology.',
        features: [
            '🎓 1-on-1 classes with certified native teachers',
            '👥 Group classes with international students',
            '📱 Learn 24/7 on any device',
            '🏆 Cambridge University recognized certificates',
            '🌟 Efekta Method™ for faster progress',
            '🎯 16 levels from A1 to C2',
            '💼 Professional Business English courses',
            '🗣️ Hyperclass™ - Interactive virtual environment'
        ],
        pricing: 'From $49/month - Includes unlimited 1-on-1 and group classes',
        rating: '4.1/5 ⭐ (Trustpilot)',
        link: 'https://englishlive.ef.com/',
        modalContent: {
            hero: {
                title: 'Find your voice in English. Faster.',
                subtitle: 'The world\'s #1 online English school with the Efekta Method™ developed with Apple and supported by Cambridge University',
                stats: [
                    { number: '20M+', label: 'Learners taught' },
                    { number: '2M+', label: 'Classes per year' },
                    { number: '60+', label: 'Years experience' },
                    { number: '4.1★', label: 'Teacher rating' }
                ]
            },
            steps: [
                {
                    number: '01',
                    title: 'Test Your English Level',
                    description: 'Take our free English assessment to determine your current level and get personalized recommendations'
                },
                {
                    number: '02', 
                    title: 'Choose Your Course',
                    description: 'Select General English or Business English with 16 levels from A1-C2'
                },
                {
                    number: '03',
                    title: 'Learn with Native Teachers',
                    description: 'Join 1-on-1 and group classes with certified native English teachers 24/7'
                },
                {
                    number: '04',
                    title: 'Get Certified',
                    description: 'Complete your course and receive an internationally recognized certificate'
                }
            ],
            features: [
                'Efekta Method™ - AI-powered learning with real-life interactions',
                'Hyperclass™ - Immersive 3D virtual learning environment',
                'Certified native teachers from USA, UK, Canada, Australia',
                'Flexible 24/7 learning on any device',
                'Cambridge University recognized certificates',
                'Global learning community from 120+ countries',
                'Real-life scenarios and practical conversations',
                'Satisfaction guarantee - money back after 12 weeks',
                'Mobile app for offline and online learning',
                '24/7 multilingual student support'
            ]
        }
    },
}

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
        name: 'EF English Live',
        description: 'The world\'s #1 online English school with 20 million learners. Award-winning Efekta Method™ combines native teachers, Hyperclass, and AI technology.',
        features: [
            '🎓 Lớp học 1:1 với giáo viên bản ngữ có chứng chỉ',
            '👥 Lớp học nhóm trực tuyến với học viên quốc tế',
            '📱 Học tập 24/7 trên mọi thiết bị',
            '🏆 Chứng chỉ được Cambridge University công nhận',
            '🌟 Phương pháp Efekta™ giúp tiến bộ nhanh hơn',
            '🎯 16 cấp độ từ A1 đến C2',
            '💼 Khóa học Business English chuyên nghiệp',
            '�️ Hyperclass™ - Môi trường học tương tác độc đáo'
        ],
        pricing: 'Từ $49/tháng - Bao gồm lớp học 1:1 và nhóm không giới hạn',
        rating: '4.1/5 ⭐ (Trustpilot)',
        link: 'https://englishlive.ef.com/',
        modalContent: {
            hero: {
                title: 'Find your voice in English. Faster.',
                subtitle: 'Trường học tiếng Anh trực tuyến #1 thế giới với phương pháp Efekta™ được phát triển cùng Apple và Cambridge University',
                stats: [
                    { number: '20M+', label: 'Học viên toàn cầu' },
                    { number: '2M+', label: 'Lớp học/năm' },
                    { number: '60+', label: 'Năm kinh nghiệm' },
                    { number: '4.1★', label: 'Đánh giá Trustpilot' }
                ]
            },
            steps: [
                {
                    number: '01',
                    title: 'Kiểm tra trình độ miễn phí',
                    description: 'Làm bài test đánh giá trình độ tiếng Anh hiện tại của bạn'
                },
                {
                    number: '02', 
                    title: 'Chọn khóa học phù hợp',
                    description: 'General English hoặc Business English với 16 cấp độ từ A1-C2'
                },
                {
                    number: '03',
                    title: 'Học với giáo viên bản ngữ',
                    description: 'Tham gia lớp học 1:1 và nhóm với giáo viên có chứng chỉ'
                },
                {
                    number: '04',
                    title: 'Nhận chứng chỉ quốc tế',
                    description: 'Hoàn thành khóa học và nhận chứng chỉ được công nhận'
                }
            ],
            features: [
                'Phương pháp Efekta™ - Kết hợp AI và tương tác thực tế',
                'Lớp học Hyperclass™ - Môi trường học tương tác 3D',
                'Giáo viên bản ngữ có chứng chỉ từ Mỹ, Anh, Canada, Úc',
                'Học tập linh hoạt 24/7 trên mọi thiết bị',
                'Chứng chỉ được Cambridge University công nhận',
                'Cộng đồng học viên quốc tế từ 120+ quốc gia',
                'Bài học thực tế với tình huống cuộc sống',
                'Đảm bảo hoàn tiền nếu không hài lòng sau 12 tuần',
                'App di động học offline và online',
                'Hỗ trợ học viên 24/7 bằng nhiều ngôn ngữ'
            ]
        }
    },
    'italki': {
        title: 'iTalki - Find Your Perfect Language Teacher',
        description: 'Learn from 5,000+ certified teachers and tutors from around the world with personalized 1-on-1 lessons',
        features: [
            '� 5,000+ professional teachers & community tutors',
            '� Lessons starting from $4/hour - most affordable rates',
            '� 150+ languages with native speakers',
            '� Study anytime, anywhere on any device',
            '🎯 Customized lessons for your goals & level',
            '💬 Language exchange with 5M+ learners',
            '📝 Track progress with detailed lesson reports',
            '⭐ 4.9/5 rating from 20M+ satisfied learners'
        ],
        benefits: 'Choose your perfect teacher based on price, availability, and teaching style. Start from $4/hour with flexible scheduling.',
        pricing: 'Professional teachers from $4-50/hour, Community tutors from $4-15/hour. Pay per lesson, no subscription required.',
        bestFor: 'Learners seeking personalized, affordable 1-on-1 lessons with flexible scheduling and diverse teacher options.'
    },
    'lingoda': {
        title: 'Lingoda - Live Online Language School',
        description: 'Learn English with certified teachers in small live classes, following a structured curriculum designed by language experts.',
        features: [
            '🎯 CEFR-aligned structured curriculum',
            '👩‍🎓 Certified native-speaking teachers',
            '👥 Small group classes (max 5 students)',
            '📚 Downloadable learning materials',
            '🏆 Official certificates upon completion',
            '⏰ Classes available 24/7',
            '📱 Learn on any device',
            '🎓 90% of students speak confidently'
        ],
        pricing: 'Flex plans from €59-399/month - Up to 25% off for summer!',
        rating: '4.5/5 ⭐ (Multiple platforms)',
        link: 'https://www.lingoda.com/',
        bestFor: 'Structured learners who want live interaction with qualified teachers and official certifications.'
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
    
    // Add platform-specific theme class to modal
    const modalContent = modal.querySelector('.modal-content');
    modalContent.className = 'modal-content'; // Reset classes
    modalContent.classList.add(`${platformId}-modal-theme`);
    
    modalBody.innerHTML = `
        <div class="platform-detail ${platformId}-detail">
            ${platformId === 'cambly' ? `
                <div class="cambly-modal-hero">
                    <div class="cambly-hero-content">
                        <h2>Practice English with Native Speakers</h2>
                        <p class="hero-subtitle">Connect instantly with friendly native English tutors for conversation practice, anytime, anywhere.</p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <span class="stat-number">10,000+</span>
                                <span class="stat-label">Native Tutors</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">24/7</span>
                                <span class="stat-label">Available</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">120+</span>
                                <span class="stat-label">Countries</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="cambly-features-grid">
                    <div class="cambly-feature-card">
                        <div class="feature-icon">🗣️</div>
                        <h3>Instant Practice</h3>
                        <p>Start speaking English right now with native speakers. No booking required.</p>
                    </div>
                    <div class="cambly-feature-card">
                        <div class="feature-icon">🌍</div>
                        <h3>Global Community</h3>
                        <p>Meet tutors from USA, UK, Canada, Australia and learn different accents.</p>
                    </div>
                    <div class="cambly-feature-card">
                        <div class="feature-icon">📱</div>
                        <h3>Learn Anywhere</h3>
                        <p>Practice on your phone, tablet, or computer. Perfect for busy schedules.</p>
                    </div>
                    <div class="cambly-feature-card">
                        <div class="feature-icon">💡</div>
                        <h3>Real Conversations</h3>
                        <p>No textbooks or rigid lessons. Just natural conversations about your interests.</p>
                    </div>
                </div>
                
                <div class="cambly-pricing-section">
                    <h3>Choose Your Plan</h3>
                    <div class="pricing-grid">
                        <div class="pricing-card">
                            <div class="plan-name">Basic</div>
                            <div class="plan-price">$10.99<span>/month</span></div>
                            <div class="plan-features">
                                <div class="feature">✓ 30 minutes per week</div>
                                <div class="feature">✓ Access to all tutors</div>
                                <div class="feature">✓ Mobile & desktop app</div>
                            </div>
                        </div>
                        <div class="pricing-card featured">
                            <div class="popular-badge">Most Popular</div>
                            <div class="plan-name">Standard</div>
                            <div class="plan-price">$43.96<span>/month</span></div>
                            <div class="plan-features">
                                <div class="feature">✓ 2.5 hours per week</div>
                                <div class="feature">✓ Priority booking</div>
                                <div class="feature">✓ Learning progress tracking</div>
                            </div>
                        </div>
                    </div>
                </div>
            ` : platformId === 'preply' ? `
                <div class="preply-modal-hero">
                    <div class="preply-hero-content">
                        <h2>Learn Faster with Your Best Language Tutor</h2>
                        <p class="hero-subtitle">Find the perfect English tutor from our community of qualified teachers for personalized 1-on-1 lessons tailored to your goals.</p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <span class="stat-number">100,000+</span>
                                <span class="stat-label">Expert Tutors</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">1M+</span>
                                <span class="stat-label">Happy Learners</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">300K+</span>
                                <span class="stat-label">5-Star Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="preply-how-it-works">
                    <h3>How Preply Works</h3>
                    <div class="steps-grid">
                        <div class="step-card">
                            <div class="step-number">1</div>
                            <div class="step-icon">👨‍🏫</div>
                            <h4>Find Your Tutor</h4>
                            <p>Browse thousands of verified tutors, read reviews, and choose the perfect match for your learning style.</p>
                        </div>
                        <div class="step-card">
                            <div class="step-number">2</div>
                            <div class="step-icon">📅</div>
                            <h4>Book a Trial Lesson</h4>
                            <p>Start with a trial lesson to see if your tutor is the right fit. Satisfaction guaranteed or try another tutor for free.</p>
                        </div>
                        <div class="step-card">
                            <div class="step-number">3</div>
                            <div class="step-icon">🚀</div>
                            <h4>Start Learning</h4>
                            <p>Create a personalized study plan and start improving your English with lessons designed around your goals.</p>
                        </div>
                    </div>
                </div>
                
                <div class="preply-features">
                    <h3>Why Choose Preply?</h3>
                    <div class="features-list">
                        <div class="feature-item">
                            <span class="preply-feature-icon">✅</span>
                            <div class="feature-text">
                                <h4>Qualified Tutors</h4>
                                <p>All tutors are verified and many have teaching certificates and years of experience</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="preply-feature-icon">💰</span>
                            <div class="feature-text">
                                <h4>Affordable Pricing</h4>
                                <p>Choose from tutors at different price points, starting from just $5 per hour</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="preply-feature-icon">📅</span>
                            <div class="feature-text">
                                <h4>Flexible Scheduling</h4>
                                <p>Book lessons that fit your schedule. Change or reschedule anytime up to 4 hours before</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="preply-feature-icon">🎯</span>
                            <div class="feature-text">
                                <h4>Personalized Learning</h4>
                                <p>Get a customized study plan based on your goals, interests, and current level</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="preply-feature-icon">🌍</span>
                            <div class="feature-text">
                                <h4>Global Community</h4>
                                <p>Learn from native speakers and certified teachers from around the world</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="preply-feature-icon">💻</span>
                            <div class="feature-text">
                                <h4>Interactive Classroom</h4>
                                <p>Built-in tools for video chat, screen sharing, and interactive exercises</p>
                            </div>
                        </div>
                    </div>
                </div>
            ` : platformId === 'ef-english-live' ? `
                <div class="ef-modal-hero">
                    <div class="ef-hero-content">
                        <h2>Find your voice in English. Faster.</h2>
                        <p class="hero-subtitle">The world's #1 online English school with the Efekta Method™ developed with Apple and supported by Cambridge University</p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <span class="stat-number">20M+</span>
                                <span class="stat-label">Learners worldwide</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">2M+</span>
                                <span class="stat-label">Classes per year</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">60+</span>
                                <span class="stat-label">Years experience</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">4.1★</span>
                                <span class="stat-label">Trustpilot rating</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="ef-how-it-works">
                    <h3>How EF English Live Works</h3>
                    <div class="ef-steps-grid">
                        <div class="ef-step-card">
                            <div class="ef-step-number">01</div>
                            <div class="step-icon">📊</div>
                            <h4>Test Your Level</h4>
                            <p>Take our free English assessment to determine your current level and get personalized recommendations</p>
                        </div>
                        <div class="ef-step-card">
                            <div class="ef-step-number">02</div>
                            <div class="step-icon">🎯</div>
                            <h4>Choose Your Course</h4>
                            <p>Select from General English or Business English with 16 levels from A1 to C2</p>
                        </div>
                        <div class="ef-step-card">
                            <div class="ef-step-number">03</div>
                            <div class="step-icon">👨‍🏫</div>
                            <h4>Learn with Native Teachers</h4>
                            <p>Join 1-on-1 and group classes with certified native English teachers 24/7</p>
                        </div>
                        <div class="ef-step-card">
                            <div class="ef-step-number">04</div>
                            <div class="step-icon">🏆</div>
                            <h4>Get Certified</h4>
                            <p>Complete your course and receive an internationally recognized certificate</p>
                        </div>
                    </div>
                </div>
                
                <div class="ef-features">
                    <h3>The Efekta Method™ Features</h3>
                    <div class="ef-features-list">
                        <div class="ef-feature-item">
                            <span class="ef-feature-icon">🧠</span>
                            <div class="feature-text">
                                <h4>AI-Powered Learning</h4>
                                <p>Smart technology adapts to your learning style and provides personalized feedback</p>
                            </div>
                        </div>
                        <div class="ef-feature-item">
                            <span class="ef-feature-icon">🌐</span>
                            <div class="feature-text">
                                <h4>Hyperclass™ Virtual Environment</h4>
                                <p>Immersive 3D learning environment that simulates real-life scenarios</p>
                            </div>
                        </div>
                        <div class="ef-feature-item">
                            <span class="ef-feature-icon">👥</span>
                            <div class="feature-text">
                                <h4>Global Learning Community</h4>
                                <p>Practice with students from 120+ countries in group classes</p>
                            </div>
                        </div>
                        <div class="ef-feature-item">
                            <span class="ef-feature-icon">⏰</span>
                            <div class="feature-text">
                                <h4>24/7 Availability</h4>
                                <p>Learn anytime, anywhere with classes starting every 30 minutes</p>
                            </div>
                        </div>
                        <div class="ef-feature-item">
                            <span class="ef-feature-icon">📜</span>
                            <div class="feature-text">
                                <h4>Cambridge Certificates</h4>
                                <p>Earn internationally recognized certificates backed by Cambridge University</p>
                            </div>
                        </div>
                        <div class="ef-feature-item">
                            <span class="ef-feature-icon">💰</span>
                            <div class="feature-text">
                                <h4>Money-Back Guarantee</h4>
                                <p>Not satisfied after 12 weeks? Get your money back, guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="preply-modal-hero">
                    <div class="preply-hero-content">
                        <h2>Learn Faster with Your Best Language Tutor</h2>
                        <p class="hero-subtitle">Find the perfect English tutor from our community of qualified teachers for personalized 1-on-1 lessons tailored to your goals.</p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <span class="stat-number">100,000+</span>
                                <span class="stat-label">Expert Tutors</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">1M+</span>
                                <span class="stat-label">Happy Learners</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">300K+</span>
                                <span class="stat-label">5-Star Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="preply-how-it-works">
                    <h3>How Preply Works</h3>
                    <div class="steps-grid">
                        <div class="step-card">
                            <div class="step-number">1</div>
                            <div class="step-icon">�‍🏫</div>
                            <h4>Find Your Tutor</h4>
                            <p>Browse thousands of verified tutors, read reviews, and choose the perfect match for your learning style.</p>
                        </div>
                        <div class="step-card">
                            <div class="step-number">2</div>
                            <div class="step-icon">📅</div>
                            <h4>Book a Trial Lesson</h4>
                            <p>Start with a trial lesson to see if your tutor is the right fit. Satisfaction guaranteed or try another tutor for free.</p>
                        </div>
                        <div class="step-card">
                            <div class="step-number">3</div>
                            <div class="step-icon">🚀</div>
                            <h4>Start Learning</h4>
                            <p>Create a personalized study plan and start improving your English with lessons designed around your goals.</p>
                        </div>
                    </div>
                </div>
                
                <div class="preply-features">
                    <h3>Why Choose Preply?</h3>
                    <div class="features-list">
                                                <div class="feature-item">
                            <span class="preply-feature-icon">✅</span>
                            <div class="feature-text">
                                <h4>Qualified Tutors</h4>
                                <p>All tutors are verified and many have teaching certificates and years of experience</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="preply-feature-icon">💰</span>
                            <div class="feature-text">
                                <h4>Affordable Pricing</h4>
                                <p>Choose from tutors at different price points, starting from just $5 per hour</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="preply-feature-icon">🛡️</span>
                            <div class="feature-text">
                                <h4>Satisfaction Guaranteed</h4>
                                <p>Not happy with your tutor? We'll help you find a replacement or refund your lesson</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="preply-feature-icon">📱</span>
                            <div class="feature-text">
                                <h4>Learn Anywhere</h4>
                                <p>Take lessons on desktop or mobile with our easy-to-use platform and progress tracking</p>
                            </div>
                        </div>
                    </div>
                </div>
            ` : platformId === 'italki' ? `
                <div class="italki-modal-hero">
                    <div class="italki-hero-content">
                        <h2>Learn with the World's Best Language Tutors</h2>
                        <p class="hero-subtitle">Connect with 5,000+ certified English teachers and professional tutors for personalized 1-on-1 lessons at your own pace.</p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <span class="stat-number">5M+</span>
                                <span class="stat-label">Active Learners</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">20K+</span>
                                <span class="stat-label">Expert Teachers</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">150+</span>
                                <span class="stat-label">Languages Available</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">4.9★</span>
                                <span class="stat-label">Student Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="italki-how-it-works">
                    <h3>How italki Works</h3>
                    <div class="italki-steps-grid">
                        <div class="italki-step-card">
                            <div class="italki-step-number">01</div>
                            <div class="step-icon">🔍</div>
                            <h4>Find Your Perfect Teacher</h4>
                            <p>Browse thousands of qualified English teachers, read reviews, and watch intro videos to find your ideal match</p>
                        </div>
                        <div class="italki-step-card">
                            <div class="italki-step-number">02</div>
                            <div class="step-icon">💬</div>
                            <h4>Book a Trial Lesson</h4>
                            <p>Start with a discounted trial lesson to test your chemistry with the teacher and their teaching style</p>
                        </div>
                        <div class="italki-step-card">
                            <div class="italki-step-number">03</div>
                            <div class="step-icon">📚</div>
                            <h4>Create Learning Plan</h4>
                            <p>Work with your teacher to create a personalized curriculum that fits your goals and schedule</p>
                        </div>
                        <div class="italki-step-card">
                            <div class="italki-step-number">04</div>
                            <div class="step-icon">🚀</div>
                            <h4>Start Speaking</h4>
                            <p>Practice speaking English confidently in flexible 1-on-1 lessons that adapt to your progress</p>
                        </div>
                    </div>
                </div>
                
                <div class="italki-features">
                    <h3>Why Choose italki?</h3>
                    <div class="italki-features-list">
                        <div class="italki-feature-item">
                            <span class="italki-feature-icon">👨‍🏫</span>
                            <div class="feature-text">
                                <h4>Professional & Community Tutors</h4>
                                <p>Choose from certified teachers with degrees or friendly community tutors for conversation practice</p>
                            </div>
                        </div>
                        <div class="italki-feature-item">
                            <span class="italki-feature-icon">💰</span>
                            <div class="feature-text">
                                <h4>Affordable Pricing</h4>
                                <p>Lessons starting from just $4/hour with no subscription fees - pay as you learn</p>
                            </div>
                        </div>
                        <div class="italki-feature-item">
                            <span class="italki-feature-icon">⏰</span>
                            <div class="feature-text">
                                <h4>Flexible Scheduling</h4>
                                <p>Book lessons anytime, anywhere with teachers available 24/7 across different time zones</p>
                            </div>
                        </div>
                        <div class="italki-feature-item">
                            <span class="italki-feature-icon">🎯</span>
                            <div class="feature-text">
                                <h4>Personalized Learning</h4>
                                <p>Custom lessons focused on your specific goals: business English, conversation, exam prep, and more</p>
                            </div>
                        </div>
                        <div class="italki-feature-item">
                            <span class="italki-feature-icon">📱</span>
                            <div class="feature-text">
                                <h4>Easy-to-Use Platform</h4>
                                <p>Seamless learning experience with built-in video chat, lesson notes, and progress tracking</p>
                            </div>
                        </div>
                        <div class="italki-feature-item">
                            <span class="italki-feature-icon">🌍</span>
                            <div class="feature-text">
                                <h4>Global Community</h4>
                                <p>Learn from native speakers worldwide and connect with fellow language learners in the community</p>
                            </div>
                        </div>
                    </div>
                </div>
            ` : platformId === 'lingoda' ? `
                <div class="lingoda-modal-hero">
                    <div class="lingoda-hero-content">
                        <h2>Speak with confidence this summer</h2>
                        <p class="hero-subtitle">Join live online classes with certified teachers and follow our structured curriculum designed by language experts</p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <span class="stat-number">90%</span>
                                <span class="stat-label">Speak confidently</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">500K+</span>
                                <span class="stat-label">Students worldwide</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">24/7</span>
                                <span class="stat-label">Classes available</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">5</span>
                                <span class="stat-label">Students max per class</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="lingoda-method">
                    <h3>The Lingoda Method</h3>
                    <div class="lingoda-steps-grid">
                        <div class="lingoda-step-card">
                            <div class="lingoda-step-number">01</div>
                            <div class="step-icon">📊</div>
                            <h4>Take Placement Test</h4>
                            <p>Determine your current level with our quick assessment or start with A1.1 if you're a beginner</p>
                        </div>
                        <div class="lingoda-step-card">
                            <div class="lingoda-step-number">02</div>
                            <div class="step-icon">🎯</div>
                            <h4>Start Free Trial</h4>
                            <p>Get 7 days free access to our platform with 3 group classes or 1 private class included</p>
                        </div>
                        <div class="lingoda-step-card">
                            <div class="lingoda-step-number">03</div>
                            <div class="step-icon">📚</div>
                            <h4>Choose Your Plan</h4>
                            <p>Select a Lingoda Flex plan that fits your schedule and adjust intensity whenever needed</p>
                        </div>
                        <div class="lingoda-step-card">
                            <div class="lingoda-step-number">04</div>
                            <div class="step-icon">🚀</div>
                            <h4>Learn & Progress</h4>
                            <p>Follow our structured curriculum and use the study area for daily revision and practice</p>
                        </div>
                    </div>
                </div>
                
                <div class="lingoda-features">
                    <h3>Your Tools for Success</h3>
                    <div class="lingoda-features-list">
                        <div class="lingoda-feature-item">
                            <span class="lingoda-feature-icon">🏫</span>
                            <div class="feature-text">
                                <h4>The Lingoda Classroom</h4>
                                <p>Interactive classes focused on vocabulary, grammar, and communication with max 5 students</p>
                            </div>
                        </div>
                        <div class="lingoda-feature-item">
                            <span class="lingoda-feature-icon">👨‍🏫</span>
                            <div class="feature-text">
                                <h4>Certified Teachers</h4>
                                <p>Learn from qualified, native-speaking teachers who follow our custom-built curriculum</p>
                            </div>
                        </div>
                        <div class="lingoda-feature-item">
                            <span class="lingoda-feature-icon">📱</span>
                            <div class="feature-text">
                                <h4>Study Area & Materials</h4>
                                <p>Access personalized practice tools, flashcards, and downloadable materials anytime</p>
                            </div>
                        </div>
                        <div class="lingoda-feature-item">
                            <span class="lingoda-feature-icon">🏆</span>
                            <div class="feature-text">
                                <h4>CEFR Certificates</h4>
                                <p>Earn internationally recognized certificates following the Common European Framework</p>
                            </div>
                        </div>
                        <div class="lingoda-feature-item">
                            <span class="lingoda-feature-icon">⏰</span>
                            <div class="feature-text">
                                <h4>Flexible Scheduling</h4>
                                <p>Book classes anytime with our 24/7 availability and adjust your plan as needed</p>
                            </div>
                        </div>
                        <div class="lingoda-feature-item">
                            <span class="lingoda-feature-icon">💰</span>
                            <div class="feature-text">
                                <h4>Summer Special Offer</h4>
                                <p>Save up to 25% on Lingoda Flex plans - limited time offer until August 25th</p>
                            </div>
                        </div>
                    </div>
                </div>
            ` : `
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
            `}
            
            <div class="detail-actions ${platformId}-actions">
                <a href="#" class="btn ${platformId === 'cambly' ? 'cambly-btn' : platformId === 'preply' ? 'preply-btn' : platformId === 'ef-english-live' ? 'ef-btn' : platformId === 'italki' ? 'italki-btn-main' : platformId === 'lingoda' ? 'lingoda-btn-main' : 'btn-primary'} affiliate-link">
                    ${platformId === 'cambly' ? '🚀 Start Learning English' : platformId === 'preply' ? '🎯 Find My Tutor' : platformId === 'ef-english-live' ? '🌟 Get plans & prices' : platformId === 'italki' ? '👨‍🏫 Find my teacher' : platformId === 'lingoda' ? '🏫 Get started' : `<i class="fas fa-external-link-alt"></i> Try ${platform.title.split(' -')[0]} Now`}
                </a>
                <button onclick="closeModal()" class="btn ${platformId === 'cambly' ? 'cambly-secondary' : platformId === 'preply' ? 'preply-secondary' : platformId === 'ef-english-live' ? 'ef-secondary' : platformId === 'italki' ? 'italki-secondary' : platformId === 'lingoda' ? 'lingoda-secondary' : 'btn-secondary'}">
                    ${platformId === 'cambly' || platformId === 'preply' || platformId === 'ef-english-live' || platformId === 'italki' || platformId === 'lingoda' ? 'Maybe Later' : '<i class="fas fa-times"></i> Close'}
                </button>
            </div>
        </div>
    `;

    // Store current scroll position and prevent background scroll
    const scrollY = window.scrollY;
    window.modalScrollPosition = scrollY;
    
    modal.style.display = 'flex';
    
    // Prevent background scroll without jumping
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
    document.body.style.position = 'fixed';
    document.body.style.top = `calc(var(--scroll-y) * -1)`;
    document.body.style.width = '100%';
    
    // Add click outside to close (without jumping)
    setTimeout(() => {
        modal.addEventListener('click', handleModalClick);
    }, 100);
    
    // Add styles for modal content
    addModalStyles();
}

function closeModal() {
    const modal = document.getElementById('platformModal');
    modal.style.display = 'none';
    
    // Remove click outside listener
    modal.removeEventListener('click', handleModalClick);
    
    // Restore body styles
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // Restore scroll position
    if (typeof window.modalScrollPosition !== 'undefined') {
        window.scrollTo(0, window.modalScrollPosition);
        delete window.modalScrollPosition;
    }
}

function handleModalClick(e) {
    // Only close if clicking on the overlay background (not the modal content)
    if (e.target === e.currentTarget) {
        closeModal();
    }
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
