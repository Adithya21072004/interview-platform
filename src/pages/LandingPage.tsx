import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Video, Code, BarChart3, Clock, Users, Shield } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                Ace Your Interviews
              </span>
              <br />
              with Confidence
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Practice with realistic mock interviews, get instant feedback, and boost your confidence with our AI-powered interview platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/signup"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Get Started Free</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/login"
                className="w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg text-lg font-semibold border border-gray-300 dark:border-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-emerald-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-emerald-500" />
                <span>Free trial included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-orange-200 dark:bg-orange-800 rounded-full opacity-20 animate-pulse delay-700"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and resources you need to excel in your interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-750 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                <Video size={24} className="text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mock Interviews</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Practice with realistic video interviews that simulate real interview scenarios and help you prepare effectively.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-750 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <Code size={24} className="text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Live Coding</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Test your programming skills with our integrated code editor featuring syntax highlighting and real-time compilation.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-750 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-orange-200 dark:hover:border-orange-800">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <BarChart3 size={24} className="text-orange-600 dark:text-orange-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Get detailed feedback and analytics on your performance to identify areas for improvement.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-750 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-purple-200 dark:hover:border-purple-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <Clock size={24} className="text-purple-600 dark:text-purple-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Timed Sessions</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Practice under realistic time constraints to simulate the pressure of actual interviews.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-750 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Users size={24} className="text-blue-600 dark:text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Expert Guidance</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Access tips and guidance from industry experts to help you navigate challenging interview scenarios.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-750 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-green-200 dark:hover:border-green-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <Shield size={24} className="text-green-600 dark:text-green-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Secure Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your data and practice sessions are protected with enterprise-grade security and privacy measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of successful candidates who have improved their interview skills with InterviewAce.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl space-x-2"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;