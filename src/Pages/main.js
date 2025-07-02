import React, { useEffect, useRef, useState } from "react";
import '../Pages/app.css';
import logoSvg from "../assets/logo.svg";
import website from "../assets/website.png";
import discordIconSvg from "../assets/discord-icon.svg";
import joinedUsersSvg from "../assets/Joined Users.svg";
import wealthGenieIconSvg from "../assets/1-icon.svg";
import personalizeIconSvg from "../assets/support.png";
import aiAgentsIconSvg from "../assets/Vector.png";
import customizationIconSvg from "../assets/datascience.png";
import video from "../assets/Chatbot_Genie.mp4";
import financialdata from "../assets/financialdata.png"
import FinancialTrackingandAnalytics from "../assets/FinancialTrackingandAnalytics.png";
import InvestmentPortfolioDashboard from "../assets/InvestmentPortfolioDashboard.png"
import lock from "../assets/lock.png";
import join from "../assets/join.png";
import plaid from "../assets/plaid.png";
import encrypt from "../assets/encrypt.png";
import iso from "../assets/iso.png";
import safety from "../assets/safety.png";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  const faqData = [
    {
      question: "What makes WealthNx different from budgeting and investing apps?",
      answer: "WealthNx combines everything in one AI-powered platform, offering personalized financial insights, investment recommendations, and automated budgeting—all backed by premium financial data."
    },
    {
      question: "Is my data safe with WealthNx?",
      answer: "Absolutely. We use 256-bit encryption, SOC 2 compliance, and zero-knowledge architecture to ensure your financial data is completely secure and private."
    },
    {
      question: "How does Wealth Genie help me make financial decisions?",
      answer: "Wealth Genie analyzes real-time financial data to provide accurate insights and recommendations tailored to your specific financial situation, goals, and risk tolerance."
    },
    {
      question: "Do I need financial experience to use WealthNx?",
      answer: "Not at all. WealthNx is designed for everyone, regardless of financial experience. Our intuitive interface and AI guidance make managing your finances simple and accessible."
    },
    {
      question: "Is WealthNx free?",
      answer: "WealthNx offers both free and premium subscription options. The free version provides essential financial management tools, while premium subscriptions unlock advanced features and personalized AI guidance."
    }
  ];

  // Social Icons Component
  const socialIcons = {
    twitter: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white transition-all duration-300">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white transition-all duration-300">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white transition-all duration-300">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white transition-all duration-300">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  };

  const socialLinks = [
    { name: 'twitter', url: 'https://twitter.com', label: 'Follow us on Twitter' },
    { name: 'facebook', url: 'https://facebook.com', label: 'Follow us on Facebook' },
    { name: 'instagram', url: 'https://instagram.com', label: 'Follow us on Instagram' },
    { name: 'linkedin', url: 'https://linkedin.com', label: 'Follow us on LinkedIn' }
  ];

  // FAQ toggle function moved to component level
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const starsContainer = document.querySelector(".stars-container");
    if (starsContainer) {
      for (let i = 0; i < 20; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
      }
    }

    const parallax = (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
      document.querySelectorAll(".star").forEach((star) => {
        const speed = Math.random() * 0.5;
        star.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const createStars = () => {
      const starsContainer = document.createElement('div');
      starsContainer.classList.add('section-stars');

      for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;

        const size = 1 + Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.animationDelay = `${Math.random() * 5}s`;

        starsContainer.appendChild(star);
      }

      if (sectionRef.current) {
        sectionRef.current.prepend(starsContainer);
      }
    };

    createStars();

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="stars-container">
        <div className="star" style={{ top: "15%", left: "10%" }}></div>
        <div className="star" style={{ top: "25%", left: "80%" }}></div>
        <div className="star" style={{ top: "60%", left: "20%" }}></div>
        <div className="star" style={{ top: "40%", left: "70%" }}></div>
        <div className="star" style={{ top: "80%", left: "15%" }}></div>
        <div className="star" style={{ top: "70%", left: "85%" }}></div>
        <div className="star" style={{ top: "30%", left: "50%" }}></div>
        <div className="star" style={{ top: "10%", left: "30%" }}></div>
        <div className="star" style={{ top: "90%", left: "60%" }}></div>
        <div className="star" style={{ top: "50%", left: "40%" }}></div>
      </div>

      <div id="root-html">
        <div className="stars-container">
          <div className="star" style={{ top: "15%", left: "10%" }}></div>
          <div className="star" style={{ top: "25%", left: "80%" }}></div>
          <div className="star" style={{ top: "60%", left: "20%" }}></div>
          <div className="star" style={{ top: "40%", left: "70%" }}></div>
          <div className="star" style={{ top: "80%", left: "15%" }}></div>
          <div className="star" style={{ top: "70%", left: "85%" }}></div>
          <div className="star" style={{ top: "30%", left: "50%" }}></div>
          <div className="star" style={{ top: "10%", left: "30%" }}></div>
          <div className="star" style={{ top: "90%", left: "60%" }}></div>
          <div className="star" style={{ top: "50%", left: "40%" }}></div>
        </div>

        <header>
          <div className="logo">
            <img src={logoSvg} alt="WealthNx Logo" />
          </div>
          <nav>
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about-us-section">About Us</a></li>
            </ul>
          </nav>
          <div className="cta-button">
            <a href="#" className="button">Join Wishlist</a>
          </div>
        </header>

        <main>
          <section id="home" className="hero">
            <div className="ai-badge">
              <span className="ai-icon">AI</span>
              <span className="ai-text">Check out AI Agents →</span>
            </div>

            <h1>Your Hyper-Personalized<br />Financial Co-Pilot</h1>

            <p className="subtitle">
              Build, Manage & Grow your wealth effortlessly. You're Personal<br />
              Finance Dream Team - One Tap
            </p>

            <div className="cta-center">
              <a href="#" className="button">Join Wishlist</a>
            </div>
          </section>

          <section className="app-showcase-section">
            <div className="app-showcase">
              <img src={website} alt="WealthNx App Showcase" className="app-images" />
            </div>
          </section>

          {/* About Us Section */}
          <section id="about-us-section" className="about-us-section">
            <div className="container">
              <div className="about-us-header">
                <h2 className="fade-in visible">Our Mission</h2>
                <p className="subtitle fade-in visible">Transforming Personal Finance For Everyone</p>
              </div>

              <div className="about-us-content" style={{ position: 'relative' }}>
                <div className="about-us-text fade-in visible" style={{ maxWidth: '70%' }}>
                  <p>Wealthnx envisions a future where everyone, regardless of financial background, has the tools to build a secure financial future.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="features-section" className="features-section">
            <div className="features-title">
              <div className="tag-pill">Features</div>
              <h2>Why WealthNx</h2>
            </div>

            <div className="features-grid">
              <div className="feature-card" data-feature="wealth-genie">
                <div className="feature-icon">
                  <img src={wealthGenieIconSvg} alt="Wealth Genie Icon" />
                </div>
                <h3>Investment</h3>
                <p>Powered by premium data, master finances, boost investments & confident decisions</p>
              </div>

              <div className="feature-card" data-feature="personalize">
                <div className="feature-icon">
                  <img src={personalizeIconSvg} alt="Personalize Guidance Icon" />
                </div>
                <h3>Personalize Guidance</h3>
                <p>Personalized financial insights tailored to your unique wealth journey</p>
              </div>

              <div className="feature-card" data-feature="ai-agents">
                <div className="feature-icon">
                  <img src={aiAgentsIconSvg} alt="AI Agents Icon" />
                </div>
                <h3>AI Agents</h3>
                <p>Autonomous AI agents that do the work for you that supercharge your financial success</p>
              </div>

              <div className="feature-card" data-feature="customization">
                <div className="feature-icon">
                  <img src={customizationIconSvg} alt="Customization Icon" />
                </div>
                <h3>Data Security</h3>
                <p>End to end encryption Zero data sharing Fraud detection</p>
              </div>
            </div>

            <div id="wealth-genie-section" className="feature-detail wealth-genie-detail visible">
              <div className="wealth-genie-container">
                <div className="top-section">
                  <div className="powered-badge">AI Powered</div>

                  <div className="main-title">
                    <h1>Wealth Genie</h1>
                    <p className="subtitle">AI Financial Intelligence for everyone.</p>
                  </div>

                  <p className="description">
                    Accurate answers powered by premium data — simplified, accessible, and built for everyone.
                  </p>

                  <div className="feature-badges">
                    <span className="badge">Real Time Data</span>
                    <span className="badge">Hallucination Free</span>
                    <span className="badge">Multi AI Agents</span>
                    <span className="badge">Specialized Finance Domain</span>
                    <span className="badge">Accuracy & Depth</span>
                  </div>
                </div>

                <div className="bottom-section">
                  <div className="left-content">
                    <h2>Powering Your Future</h2>
                    <p>Our revolutionary AI exclusively for Finance & Investments.</p>
                    <ul>
                      <li>Personalized Financial Guidance</li>
                      <li>Market Insights & Forecasts</li>
                      <li>Financial Planning & Strategy</li>
                      <li>Investment Based Analysis</li>
                    </ul>
                  </div>

                  <div className="right-content">
                    <div className="video-container">
                      <video className="demo-video" autoPlay muted loop playsInline>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ai-agents-section">
            <div className="ai-agents-container">
              <div className="section-badge">AI Agents</div>

              <div className="agents-grid">
                <div className="agent-card">
                  <div className="agent-header">
                    <div className="agent-icon accountant-icon">👤</div>
                    <h3 className="agent-title">Accountant Agent</h3>
                  </div>
                  <p className="agent-description">
                    Cash Flow Optimization, Income & Earning Optimization, Retirement Planning
                  </p>
                </div>

                <div className="agent-card">
                  <div className="agent-header">
                    <div className="agent-icon crypto-icon">₿</div>
                    <h3 className="agent-title">Crypto Agent</h3>
                  </div>
                  <p className="agent-description">
                    Cash Flow Optimization, Income & Earning Optimization, Retirement Planning
                  </p>
                </div>

                <div className="agent-card">
                  <div className="agent-header">
                    <div className="agent-icon stock-icon">⏸</div>
                    <h3 className="agent-title">Stock Agent</h3>
                  </div>
                  <p className="agent-description">
                    Technical Analysis, Economic Analysis, Market Summary
                  </p>
                </div>

                <div className="agent-card">
                  <div className="agent-header">
                    <div className="agent-icon build-icon">📊</div>
                    <h3 className="agent-title">Build Mode</h3>
                  </div>
                  <p className="agent-description">
                    Turn Complex Financial to Interactive Visuals
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="financial-freedom" className="financial-freedom-section">
            <div className="container">
              <div className="section-header">
                <h2 className="main-title">All In One Financial Solution</h2>
                <p className="main-description">
                  Say goodbye to financial stress effortlessly manage bills, simplify investing and savings,
                  oversee all your accounts, and put complete financial peace of mind right in your pocket.
                </p>
              </div>

              <div className="features-vertical">
                <div className="feature-row">
                  <div className="feature-content">
                    <div className="feature-subtitle">Integrate all Financial Data</div>
                    <h3 className="feature-title">Actionable Intelligent Guidance</h3>
                    <p className="feature-description">
                      Link All Your External Accounts. 12,000+ Banks And 12,000 Investment Accounts Seamlessly.
                    </p>
                  </div>
                  <div className="feature-image">
                    <img src={financialdata} alt="Financial Data Integration Dashboard" />
                  </div>
                </div>

                <div className="feature-row reverse">
                  <div className="feature-content">
                    <div className="feature-subtitle">Beyond Just Tracking</div>
                    <h3 className="feature-title">Real Financial Understanding</h3>
                    <p className="feature-description">
                      Accurate Pulse On Your Financial. Currency Real Intelligence To Guide Your Personal Money.
                    </p>
                  </div>
                  <div className="feature-image">
                    <img src={FinancialTrackingandAnalytics} alt="Financial Tracking and Analytics" />
                  </div>
                </div>

                <div className="feature-row">
                  <div className="feature-content">
                    <div className="feature-subtitle">Real-Time Investment Clarity</div>
                    <h3 className="feature-title">Investment Clarity</h3>
                    <p className="feature-description">
                      View Your Entire Investment Portfolio Across Traditional And Crypto Holdings. Analyze Your Portfolio,
                      Allocate Assets Daily, Pro Smarter Financial Future. Stock, ETF, Mutual Funds And Crypto In
                      One Sleek Unified Interface.
                    </p>
                    <ul className="feature-points">
                      <li>Stocks & ETFs</li>
                      <li>Mutual Funds & Crypto</li>
                    </ul>
                  </div>
                  <div className="feature-image">
                    <img src={InvestmentPortfolioDashboard} alt="Investment Portfolio Dashboard" />
                  </div>
                </div>

                <div className="feature-row">
                  <div className="feature-content">
                    <div className="feature-subtitle">Iron Shield Security</div>
                    <h3 className="feature-title">We uphold the highest security standards with end-to-end encryption.</h3>

                    <div className="security-image">
                      <img src={lock} alt="Security Shield Illustration" />
                    </div>
                  </div>

                  <div className="security-right">
                    <div className="security-features-list">
                      <div className="security-feature-item">
                        <div className="security-feature-icon">
                          <img src={plaid} alt="Plaid" />
                        </div>
                        <div className="security-feature-content">
                          <h4>Plaid</h4>
                          <p>We Use And End-To-End Security To Protect Your Financial Data.</p>
                        </div>
                      </div>

                      <div className="security-feature-item">
                        <div className="security-feature-icon">
                          <img src={encrypt} alt="256-Bit Encryption" />
                        </div>
                        <div className="security-feature-content">
                          <h4>256-Bit Encryption</h4>
                          <p>We Use And End-To-End Security To Protect Your Financial Data.</p>
                        </div>
                      </div>

                      <div className="security-feature-item">
                        <div className="security-feature-icon">
                          <img src={iso} alt="ISO Certification" />
                        </div>
                        <div className="security-feature-content">
                          <h4>ISO Certification</h4>
                          <p>We Use Encrypted Login And Zero Knowledge Architecture.</p>
                        </div>
                      </div>

                      <div className="security-feature-item">
                        <div className="security-feature-icon">
                          <img src={safety} alt="SOC 2" />
                        </div>
                        <div className="security-feature-content">
                          <h4>SOC 2</h4>
                          <p>AI Alerts And Detects Anomalies To Protect Transactions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Join our Discord Community Section */}
        <section id="join-discord" className="join-discord-section">
          <div className="join-discord-container">
            <div className="join-discord-content">
              <div className="join-discord-left">
                <h2>Join our exclusive Discord community for smart money conversations.</h2>

                <div className="joined-users">
                  <img src={joinedUsersSvg} alt="Joined Users" className="joined-users-image" />
                  <p className="member-count">Join 867+ Members</p>
                </div>

                <a href="#" className="discord-button">
                  <img src={discordIconSvg} alt="Discord" className="discord-icon" />
                  Join Now
                </a>
              </div>

              <div className="join-discord-right">
                <div className="image-stack">
                  <div className="image-card image-card-front">
                    <img src={join} alt="Discord Community" className="discord-community-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section id="faq" className="faq-section">
          <div className="container">
            <div className="faq-header">
              <div className="tag-pill">Frequently Asked Questions</div>
              <h2>Got questions? We got answers!</h2>
              <p className="faq-subtitle">Feel free to reach out to us if you have more questions for us.</p>
            </div>

            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    <h3>{faq.question}</h3>
                    <div className="toggle-icon">
                      {activeIndex === index ? '×' : '+'}
                    </div>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ending Section */}
        <section id="ending" className="ending-section">
          <div className="ending-container">
            <div className="logo-center">
              <img src={logoSvg} alt="WealthNx Logo" />
            </div>

            <nav className="footer-nav">
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#checking">Checking</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </nav>

            <div className="social-links-container">
              <div className="social-links">
                {socialLinks.map(({ name, url, label }) => (
                  <a
                    key={name}
                    href={url}
                    className={`social-link ${name}`}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcons[name]}
                  </a>
                ))}
              </div>
              
            </div>

            <div className="policy-links">
              <a href="#privacy">Privacy Policy</a> <br></br>
              <a href="#terms">Terms & Condition</a> <br></br>
              <a href="#cookie">Cookie Notice</a> <br></br>
              <a href="#copyright">Copyright Policy</a> <br></br>
              <a href="#data">Data Policy</a>
            </div>

            <div className="copyright">
              © 2025 WealthNx All rights reserved.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;