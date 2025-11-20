import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Code, Video, Filter, Plus, Bell, TrendingUp, Award, Target } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Interview {
  id: string;
  title: string;
  type: 'technical' | 'behavioral' | 'system-design';
  date: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status: 'scheduled' | 'completed' | 'in-progress';
  score?: number;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [filter, setFilter] = useState<'all' | 'scheduled' | 'completed'>('all');
  const [notifications] = useState([
    'Interview scheduled for tomorrow at 2:00 PM',
    'New practice questions available for JavaScript',
    'Weekly progress report is ready'
  ]);

  useEffect(() => {
    // Mock data
    setInterviews([
      {
        id: '1',
        title: 'React Developer Interview',
        type: 'technical',
        date: '2025-01-18T14:00:00Z',
        duration: 60,
        difficulty: 'intermediate',
        status: 'scheduled'
      },
      {
        id: '2',
        title: 'Behavioral Questions Practice',
        type: 'behavioral',
        date: '2025-01-17T10:00:00Z',
        duration: 45,
        difficulty: 'beginner',
        status: 'completed',
        score: 85
      },
      {
        id: '3',
        title: 'System Design - Chat Application',
        type: 'system-design',
        date: '2025-01-19T16:00:00Z',
        duration: 90,
        difficulty: 'advanced',
        status: 'scheduled'
      }
    ]);
  }, []);

  const filteredInterviews = interviews.filter(interview => {
    if (filter === 'all') return true;
    return interview.status === filter;
  });

  const stats = {
    total: interviews.length,
    completed: interviews.filter(i => i.status === 'completed').length,
    scheduled: interviews.filter(i => i.status === 'scheduled').length,
    avgScore: interviews
      .filter(i => i.score)
      .reduce((acc, i) => acc + (i.score || 0), 0) / interviews.filter(i => i.score).length || 0
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'technical':
        return <Code size={20} className="text-indigo-600 dark:text-indigo-400" />;
      case 'behavioral':
        return <Video size={20} className="text-emerald-600 dark:text-emerald-400" />;
      case 'system-design':
        return <Target size={20} className="text-orange-600 dark:text-orange-400" />;
      default:
        return <Calendar size={20} className="text-gray-600 dark:text-gray-400" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
      case 'intermediate':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      case 'advanced':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your progress and prepare for upcoming interviews.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Interviews</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Calendar size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.completed}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                <Award size={24} className="text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Scheduled</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.scheduled}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <Clock size={24} className="text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Score</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.avgScore ? Math.round(stats.avgScore) : '-'}%
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <TrendingUp size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interviews List */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Your Interviews
                  </h2>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <Filter size={16} className="text-gray-400" />
                      <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value as any)}
                        className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="all">All</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <Link
                      to="/interview/new"
                      className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Plus size={16} />
                      <span>New Interview</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredInterviews.map((interview) => (
                  <div key={interview.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {getTypeIcon(interview.type)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                            {interview.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{new Date(interview.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{interview.duration} min</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(interview.difficulty)}`}>
                              {interview.difficulty}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                              {interview.type.replace('-', ' ')}
                            </span>
                            {interview.score && (
                              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                Score: {interview.score}%
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {interview.status === 'scheduled' && (
                          <Link
                            to={`/interview/${interview.id}`}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            Start
                          </Link>
                        )}
                        {interview.status === 'completed' && (
                          <Link
                            to={`/interview/${interview.id}/review`}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            Review
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notifications Panel */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Bell size={20} className="text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Notifications
                  </h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-750 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{notification}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Section */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <TrendingUp size={20} className="text-emerald-600 dark:text-emerald-400" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Progress Tracker
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Technical Skills</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Behavioral</span>
                      <span>60%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>System Design</span>
                      <span>40%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;