import { useState } from "react";
import { Menu, X, BarChart3, TrendingUp, Target, Quote } from 'lucide-react';
import "../LandingPage.css"

const LandingPage = ({ setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Made fixed to stay visible on scroll */}
      <nav className="fixed top-0 w-full bg-blue-900 text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 h-full">
              <img src="src/assets/logo.png" alt="SkillMatch Logo" className="h-12 w-12 object-contain self-center" />              
              <span className="text-xl font-poppins self-center">SkillMatch</span>
            </div>
            
            <div className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-poppins h-full">
                <a href="#home" className="hover:text-teal-200 self-center transition-colors duration-200 font-poppins">Home</a>
                <a href="#features" className="hover:text-teal-200 self-center transition-colors duration-200 font-poppins">Features</a>
                <a href="#how-it-works" className="hover:text-teal-200 self-center transition-colors duration-200 font-poppins">How It Works</a>
                <a href="#testimonials" className="hover:text-teal-200 self-center transition-colors duration-200 font-poppins">Testimonials</a>
              </div>
              <div id="loginBtn" className="hidden md:flex items-center h-full">
                <button 
                  onClick={() => setView("login")}
                  className="bg-teal-400 text-white-900 px-5 py-2 rounded-md font-medium hover:bg-teal-300 self-center font-poppins transition-colors duration-200"
                >
                  Log In
                </button>
              </div>

            <button 
              className="md:hidden self-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 text-sm flex flex-col items-center bg-blue-900/95 backdrop-blur-sm">
              <a href="#home" className="block py-2 hover:text-teal-200 transition-colors duration-200 font-poppins">Home</a>
              <a href="#features" className="block py-2 hover:text-teal-200 transition-colors duration-200 font-poppins">Features</a>
              <a href="#how-it-works" className="block py-2 hover:text-teal-200 transition-colors duration-200 font-poppins">How It Works</a>
              <a href="#testimonials" className="block py-2 hover:text-teal-200 transition-colors duration-200 font-poppins">Testimonials</a>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content - Add padding-top to account for fixed nav */}
      <div className="pt-16">
        {/* Hero Section - ID for Home */}
        <section id="home" className="hero-hero scroll-mt-16 ">
          <div className="hero-inner landing-pt-nav">
            <div className="hero-left">
              <h1 className="font-poppins">Track What You Learn.<br />Show What You're Worth.</h1>
              <p className="font-poppins">
                SkillMatch helps students and educators visualize skill development, monitor role history, and make informed decisions based on experience and learning goals.
              </p>
              <div className="hero-cta">
                <button onClick={() => setView("register")} className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn more</button>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <img src="src/assets/image.png" alt="Professional working" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Track and Grow Section - ID for Features */}
        <section id="features" className="py-16 bg-gray-50 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 font-poppins">Track and Grow Your Skills</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm font-poppins">
                SkillMatch helps students and educators visualize skill development, track <br/>role history, and make smarter academic decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <BarChart3 className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">Skill Heatmaps</h3>
                <p className="text-gray-600 text-sm font-poppins">
                  Visualize your strengths and weaknesses at a glance with our interactive heatmaps.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">Learning Insights</h3>
                <p className="text-gray-600 text-sm font-poppins">
                  Get personalized recommendations based on your skill progression and role history to guide future growth
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">Role History Tracker</h3>
                <p className="text-gray-600 text-sm font-poppins">
                  Track your development across projects and get recommendations for new roles to try.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How SkillMatch Works - ID for How It Works */}
        <section id="how-it-works" className="py-16 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 font-poppins">How SkillMatch Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm font-poppins">
                Simple steps to visualize growth and guide learning journeys.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <img 
                  src="src/assets/working.png" 
                  alt="Team collaboration"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-poppins">Create Your Skill Profile</h3>
                    <p className="text-gray-600 text-sm font-poppins">
                      Students rate their skills across various categories using our intuitive interface. Educators can view class-wide skill distributions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-poppins">Track Your Role History</h3>
                    <p className="text-gray-600 text-sm font-poppins">
                      Reflect on past experiences, view performance feedback, and discover patterns in your growth.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Improve</h3>
                    <p className="text-gray-600 text-sm font-poppins">
                      Track your progress, reflect on past roles, and uncover personalized insights to guide your learning journey.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Get Personalized Learning Insights</h3>
                    <p className="text-gray-600 text-sm font-poppins">
                      SkillMatch recommends new learning paths, activities, or roles to explore. Grow smarter with suggestions tailored to your unique journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-100 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 font-poppins">What Our Users Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm font-poppins">
                Hear from students and educators who have transformed their learning with SkillMatch.
              </p>
            </div>

        <div className="grid md:grid-cols-3 gap-6">
        <div className="testimonial group">
                <div className="flex items-center mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  <Quote className="w-5 h-5 text-teal-500 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <Quote className="w-5 h-5 text-teal-500 rotate-180 group-hover:-rotate-168 transition-transform duration-300" />
                </div>
                <p className="text-gray-600 text-sm mb-4 italic group-hover:text-gray-800 transition-colors duration-300">
                  "SkillMatch has revolutionized how I track my progress. The heatmaps are incredibly insightful!"
                </p>
                <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="" 
                    alt="User" 
                    className="w-10 h-10 rounded-full mr-3 group-hover:shadow-md transition-shadow duration-300"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-teal-600 transition-colors duration-300">Gaea Latina</p>
                    <p className="text-gray-500 text-xs">Student</p>
                  </div>
                </div>
              </div>

          <div className="testimonial group">
                <div className="flex items-center mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  <Quote className="w-5 h-5 text-teal-500 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <Quote className="w-5 h-5 text-teal-500 rotate-180 group-hover:-rotate-168 transition-transform duration-300" />
                </div>
                <p className="text-gray-600 text-sm mb-4 italic group-hover:text-gray-800 transition-colors duration-300">
                  "As an educator, this tool helps me understand my students' growth patterns like never before."
                </p>
                <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="" 
                    alt="User" 
                    className="w-10 h-10 rounded-full mr-3 group-hover:shadow-md transition-shadow duration-300"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-teal-600 transition-colors duration-300">Jeremie Diaz</p>
                    <p className="text-gray-500 text-xs">Professor</p>
                  </div>
                </div>
              </div>

          <div className="testimonial group">
                <div className="flex items-center mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  <Quote className="w-5 h-5 text-teal-500 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <Quote className="w-5 h-5 text-teal-500 rotate-180 group-hover:-rotate-168 transition-transform duration-300" />
                </div>
                <p className="text-gray-600 text-sm mb-4 italic group-hover:text-gray-800 transition-colors duration-300">
                  "The role history tracker gave me clarity on my career path. Highly recommend!"
                </p>
                <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="" 
                    alt="User" 
                    className="w-10 h-10 rounded-full mr-3 group-hover:shadow-md transition-shadow duration-300"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-teal-600 transition-colors duration-300">Engilbert Comadre</p>
                    <p className="text-gray-500 text-xs">Professor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16 scroll-mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Ready to Build Better Future?</h2>
            <p className="text-base text-blue-100 mb-6 font-poppins">
              Join thousands of students and educators using SkillMatch to enhance collaboration and learning outcomes.
            </p>
            <button 
              onClick={() => setView("register")}
              className="bg-teal-400 text-white-900 px-8 py-3 rounded-md font-medium font-poppins hover:bg-teal-300 transition-colors duration-200"
            >
              Get Started
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs">
              <p>© 2025 SkillMatch. All rights reserved.</p>
              <a href="#privacy" className="hover:text-teal-400 mt-2 md:mt-0">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;