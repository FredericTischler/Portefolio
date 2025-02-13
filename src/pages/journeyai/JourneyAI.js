import React from 'react';
import './journeyAI.css';

const JourneyAI = () => {
    return (
        <section id="journey-ai" className="journey-ai-section">
            <h2 className="section-title">Journey into AI</h2>

            {/* Timeline for AI goals */}
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Today</h3>
                        <p>Currently working as an apprentice Full Stack Developer. Proficient in various technologies. Passionate about AI and its potential applications.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Near Future</h3>
                        <p>Begin acquiring knowledge in AI-related fields such as Machine Learning, Natural Language Processing, and Deep Learning. Starting with frameworks like TensorFlow and PyTorch.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Future Ambition: Market Prediction Model</h3>
                        <p>Develop an advanced AI-driven market prediction model. The model will analyze real-time financial data and use machine learning algorithms to predict stock prices and economic trends.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Long Term Goal</h3>
                        <p>Specialize in the development of intelligent systems, including agents capable of learning and interacting autonomously with users in different sectors like finance, healthcare, and education.</p>
                    </div>
                </div>
            </div>

            {/* Interactive Skills Section */}
            <div className="skills-section">
                <h2 className="section-title">Skills to Acquire</h2>
                <div className="skills-container">
                    <div className="skill">
                        <span>Python</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Machine Learning</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '10%' }}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Natural Language Processing</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '5%' }}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Intelligent Agent Development</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyAI;
