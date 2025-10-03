import { FC, useState } from "react";
import { Menu, X, BarChart3, TrendingUp, Target } from 'lucide-react';

interface Props {
  setView: (view: "landing" | "register" | "login") => void;
}

const LandingPage: FC<Props> = ({ setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
        <nav className="bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2 h-full">
                <img src="src/assets/logo.png" alt="SkillMatch Logo" className="h-12 w-12 object-contain self-center" />              
                <span className="text-xl font-poppins self-center">SkillMatch</span>
              </div>
              
              <div className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-poppins h-full">
                  <a href="#home" className="hover:text-teal-200 self-center">Home</a>
                  <a href="#features" className="hover:text-teal-200 self-center">Features</a>
                  <a href="#how-it-works" className="hover:text-teal-200 self-center">How It Works</a>
                  <a href="#testimonials" className="hover:text-teal-200 self-center">Testimonials</a>
                </div>
                <div className="hidden md:flex items-center h-full">
                  <button 
                    onClick={() => setView("login")}
                    className="bg-teal-400 text-white-900 px-5 py-2 rounded-md font-medium hover:bg-teal-300 self-center font-poppins"
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
              <div className="md:hidden pb-4 space-y-2 text-sm flex flex-col items-center">
                <a href="#home" className="block py-2">Home</a>
                <a href="#features" className="block py-2">Features</a>
                <a href="#how-it-works" className="block py-2">How It Works</a>
                <a href="#testimonials" className="block py-2">Testimonials</a>
              </div>
            )}
          </div>
        </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-teal-400 text-white py-16 md:py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 font-poppins">
                Track What You Learn.<br />
                Show What You're Worth.
              </h1>
              <p className="text-base text-white-100 mb-6 font-poppins">
                SkillMatch helps students and educators visualize skill development, monitor role history, and make informed decisions based on experience and learning goals.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setView("register")}
                  className="bg-teal-400 text-white px-6 py-2.5 rounded-md font-poppins hover:bg-teal-300"
                >
                  Get Started
                </button>
                <button className="bg-blue-800 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700">
                  Learn more
                </button>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="src/assets/image.png" 
                  alt="Professional working"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track and Grow Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Track and Grow Your Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              SkillMatch helps students and educators visualize skill development, track <br/>role history, and make smarter academic decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="bg-teal-100 w-12 h-12 rounded flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Skill Heatmaps</h3>
              <p className="text-gray-600 text-sm">
                Visualize your strengths and weaknesses at a glance with our interactive heatmaps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="bg-teal-100 w-12 h-12 rounded flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Learning Insights</h3>
              <p className="text-gray-600 text-sm">
                Get personalized recommendations based on your skill progression and role history to guide future growth
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="bg-teal-100 w-12 h-12 rounded flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Role History Tracker</h3>
              <p className="text-gray-600 text-sm">
                Track your development across projects and get recommendations for new roles to try.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How SkillMatch Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How SkillMatch Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm font-poppins">
              Simple steps to visualize growth and guide learning journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop" 
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
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Create Your Skill Profile</h3>
                  <p className="text-gray-600 text-sm">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Track Your Role History</h3>
                  <p className="text-gray-600 text-sm">
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
                  <p className="text-gray-600 text-sm">
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
                  <p className="text-gray-600 text-sm">
                    SkillMatch recommends new learning paths, activities, or roles to explore. Grow smarter with suggestions tailored to your unique journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Better Future?</h2>
          <p className="text-base text-blue-100 mb-6">
            Join thousands of students and educators using SkillMatch to enhance collaboration and learning outcomes.
          </p>
          <button 
            onClick={() => setView("register")}
            className="bg-teal-400 text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-teal-300"
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
  );
};

export default LandingPage;