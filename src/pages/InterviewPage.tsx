import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Camera, Mic, MicOff, VideoOff, Video, Clock, Code, Send, ArrowLeft } from 'lucide-react';
import Editor from '@monaco-editor/react';

const InterviewPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes
  const [code, setCode] = useState('// Write your code here\nfunction solution() {\n    \n}');
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [chatMessages, setChatMessages] = useState<Array<{id: string, text: string, isUser: boolean}>>([]);
  const [newMessage, setNewMessage] = useState('');
  
  const questions = [
    {
      id: 1,
      title: "Array Two Sum Problem",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      difficulty: "Easy",
      examples: [
        { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" }
      ]
    },
    {
      id: 2,
      title: "Behavioral Question",
      description: "Tell me about a time when you had to work with a difficult team member. How did you handle the situation?",
      difficulty: "Medium"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleEndInterview();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEndInterview = () => {
    navigate('/dashboard');
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    setChatMessages(prev => [
      ...prev,
      { id: Date.now().toString(), text: newMessage, isUser: true }
    ]);
    
    // Simulate interviewer response
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), text: "Thank you for that response. Can you explain your approach in more detail?", isUser: false }
      ]);
    }, 1000);
    
    setNewMessage('');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Exit Interview</span>
            </button>
            <div className="text-lg font-semibold">React Developer Interview</div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-orange-400">
              <Clock size={20} />
              <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-2 rounded-lg transition-colors ${
                  isVideoOn ? 'bg-gray-600 hover:bg-gray-700' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
              </button>
              
              <button
                onClick={() => setIsAudioOn(!isAudioOn)}
                className={`p-2 rounded-lg transition-colors ${
                  isAudioOn ? 'bg-gray-600 hover:bg-gray-700' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isAudioOn ? <Mic size={20} /> : <MicOff size={20} />}
              </button>
              
              <button
                onClick={handleEndInterview}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                End Interview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Left Panel - Video and Chat */}
        <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
          {/* Video Section */}
          <div className="p-4 border-b border-gray-700">
            <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden mb-4">
              {isVideoOn ? (
                <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <Camera size={32} className="text-white" />
                </div>
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <VideoOff size={32} className="text-gray-400" />
                </div>
              )}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
                You
              </div>
            </div>
            
            <div className="aspect-video bg-gray-700 rounded-lg relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-blue-600 flex items-center justify-center">
                <div className="text-center">
                  <Camera size={24} className="text-white mx-auto mb-2" />
                  <span className="text-sm text-white">Interviewer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-semibold text-white">Interview Chat</h3>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              <div className="text-sm text-gray-400 bg-gray-700 rounded-lg p-3">
                Welcome! I'm your interviewer today. Let's begin with the technical questions.
              </div>
              
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`text-sm p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-indigo-600 text-white ml-4'
                      : 'bg-gray-700 text-gray-200 mr-4'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-indigo-600 hover:bg-indigo-700 p-2 rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Question and Code Editor */}
        <div className="flex-1 flex flex-col">
          {/* Question Section */}
          <div className="bg-gray-800 p-6 border-b border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <div className="flex space-x-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                      index === currentQuestion
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-medium text-white">{currentQ.title}</h3>
                  <span className="px-2 py-1 bg-green-600 text-green-100 rounded text-sm font-medium">
                    {currentQ.difficulty}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{currentQ.description}</p>
              </div>
              
              {currentQ.examples && (
                <div>
                  <h4 className="font-medium text-white mb-2">Example:</h4>
                  {currentQ.examples.map((example, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-3 font-mono text-sm">
                      <div className="text-gray-300">
                        <span className="text-blue-400">Input:</span> {example.input}
                      </div>
                      <div className="text-gray-300">
                        <span className="text-green-400">Output:</span> {example.output}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 bg-gray-900">
            {currentQuestion === 0 && (
              <div className="h-full">
                <div className="flex items-center space-x-3 bg-gray-800 px-6 py-3 border-b border-gray-700">
                  <Code size={20} className="text-indigo-400" />
                  <span className="text-white font-medium">Code Editor</span>
                  <select className="ml-auto bg-gray-700 text-white rounded px-3 py-1 text-sm">
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C++</option>
                  </select>
                </div>
                
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value || '')}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    wordWrap: 'on',
                    automaticLayout: true,
                  }}
                />
              </div>
            )}
            
            {currentQuestion === 1 && (
              <div className="h-full p-6">
                <div className="bg-gray-800 rounded-lg p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <Video size={20} className="text-emerald-400" />
                    <span className="text-white font-medium">Behavioral Response</span>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      This is a behavioral question. Please provide a thoughtful response using the STAR method 
                      (Situation, Task, Action, Result).
                    </p>
                    
                    <textarea
                      className="w-full h-48 bg-gray-700 text-white rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Type your response here... You can also use voice recording if preferred."
                    />
                    
                    <div className="flex space-x-3">
                      <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors">
                        Submit Response
                      </button>
                      <button className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                        Record Audio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;