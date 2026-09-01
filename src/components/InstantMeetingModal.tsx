import React, { useState, useEffect } from 'react';
import { X, Mic, MicOff, Video, VideoOff, PhoneOff, Share2, Sparkles, CheckCircle2, UserCheck, MessageSquare, ShieldCheck, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InstantMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstantMeetingModal: React.FC<InstantMeetingModalProps> = ({ isOpen, onClose }) => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [activeTab, setActiveTab] = useState<'transcript' | 'crm' | 'ai'>('transcript');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Send updated enterprise proposal to Sarah', assignee: 'Sarah Jenkins', status: 'Pending', time: '10:14 AM' },
    { id: 2, text: 'Schedule technical integration follow-up for Tuesday', assignee: 'Alex Rivera', status: 'Pending', time: '10:22 AM' }
  ]);
  const [newPrompt, setNewPrompt] = useState('');
  const [aiAnswers, setAiAnswers] = useState<Array<{ q: string; a: string; time: string }>>([
    { q: 'What budget was mentioned for Q3?', a: 'Sarah mentioned a budget allocation of $45,000 for Q3 onboarding at 10:12 AM timestamp.', time: '10:15 AM' }
  ]);

  const [liveTranscript, setLiveTranscript] = useState([
    { speaker: 'Sarah (Client)', text: 'We are ready to proceed with MorpheLabs Meetings for our 25-person team.', time: '10:12 AM', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
    { speaker: 'Alex (Account Exec)', text: 'Fantastic! I will configure the custom AI Bot and send the enterprise agreement.', time: '10:14 AM', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
    { speaker: 'AI Assistant', text: '⚡ Action item detected: "Send enterprise agreement to Sarah by Friday 5 PM". Auto-saved to CRM.', time: '10:14 AM', isAi: true }
  ]);

  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAskAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPrompt.trim()) return;
    setAiAnswers(prev => [
      ...prev,
      {
        q: newPrompt,
        a: `Based on the live transcript, the team confirmed full compliance with SOC2 Type II and private tenancy storage for all audio recordings.`,
        time: 'Just now'
      }
    ]);
    setNewPrompt('');
  };

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      text: 'Follow up with security team regarding private tenancy audio storage',
      assignee: 'David Chen',
      status: 'Pending',
      time: 'Just now'
    };
    setTasks(prev => [newTask, ...prev]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-morphe-navy/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-900 via-morphe-navy to-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">Live In-CRM HD Meeting</span>
            <span className="text-slate-400">|</span>
            <h3 className="font-display font-bold text-sm md:text-base text-white flex items-center gap-2">
              Q3 Strategy & CRM Onboarding Demo
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              15m Verified Attendance
            </span>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Video + AI Drawer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden bg-slate-950">
          {/* Main Video Grid (8 columns) */}
          <div className="lg:col-span-8 p-4 flex flex-col justify-between relative bg-slate-950/90">
            {/* Ambient Room Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Video Cards Grid */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              {/* Participant 1 */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner group flex items-center justify-center min-h-[160px]">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80" 
                  alt="Sarah Jenkins" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-slate-700/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Sarah Jenkins (VP Sales)
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] border border-emerald-500/40 flex items-center gap-1">
                  <UserCheck className="w-3 h-3" /> 15m Verified
                </div>
              </div>

              {/* Participant 2 */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-purple-500/40 shadow-inner group flex items-center justify-center min-h-[160px] ring-2 ring-purple-500/50">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80" 
                  alt="Alex Rivera" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-purple-500/40">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  Alex Rivera (Speaking)
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-purple-900/80 backdrop-blur-md px-2 py-1 rounded-full text-[10px] text-purple-200">
                  <div className="flex gap-0.5 items-end h-3">
                    <span className="w-0.5 h-2 bg-purple-400 animate-bounce" />
                    <span className="w-0.5 h-3 bg-pink-400 animate-bounce delay-75" />
                    <span className="w-0.5 h-1.5 bg-purple-400 animate-bounce delay-150" />
                  </div>
                  Audio Isolated
                </div>
              </div>

              {/* Participant 3 */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner group flex items-center justify-center min-h-[160px]">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80" 
                  alt="Elena Rostova" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-slate-700/60">
                  Elena Rostova (Product Lead)
                </div>
              </div>

              {/* AI Assistant Video Feed Box */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-950/80 via-morphe-navy to-slate-950 border border-pink-500/30 shadow-lg flex flex-col items-center justify-center p-6 text-center">
                <div className="relative mb-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500"></span>
                  </span>
                </div>
                <h4 className="font-display font-bold text-white text-sm">MorpheLabs AI Bot</h4>
                <p className="text-[11px] text-purple-300 mt-1">Transcribing & Auto-Extracting CRM Tasks</p>
                <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs border border-pink-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Unlimited Active
                </div>
              </div>
            </div>

            {/* Video Controls Bar */}
            <div className="mt-4 flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-2xl p-3 px-6">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsMicOn(!isMicOn)} 
                  className={`p-3 rounded-xl transition-all ${isMicOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-red-500 text-white hover:bg-red-600'}`}
                >
                  {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                </button>
                <button 
                  onClick={() => setIsVideoOn(!isVideoOn)} 
                  className={`p-3 rounded-xl transition-all ${isVideoOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-red-500 text-white hover:bg-red-600'}`}
                >
                  {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                </button>
                <button className="p-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs text-slate-400 hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                HD Audio Engine Active • Noise Cancelled
              </div>

              <button 
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors shadow-lg shadow-red-600/20"
              >
                <PhoneOff className="w-4 h-4" /> End Call
              </button>
            </div>
          </div>

          {/* AI Intelligence Drawer (4 columns) */}
          <div className="lg:col-span-4 bg-slate-900 border-l border-slate-800 flex flex-col h-full overflow-hidden">
            {/* Drawer Tabs */}
            <div className="flex border-b border-slate-800 p-2 bg-slate-950">
              <button 
                onClick={() => setActiveTab('transcript')}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 ${activeTab === 'transcript' ? 'bg-[#FEDBFC] text-slate-900 shadow' : 'text-slate-400 hover:text-white'}`}
              >
                <MessageSquare className="w-3.5 h-3.5" /> Live Transcript
              </button>
              <button 
                onClick={() => setActiveTab('crm')}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 ${activeTab === 'crm' ? 'bg-[#FEDBFC] text-slate-900 shadow' : 'text-slate-400 hover:text-white'}`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" /> CRM Tasks ({tasks.length})
              </button>
              <button 
                onClick={() => setActiveTab('ai')}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 ${activeTab === 'ai' ? 'bg-[#FEDBFC] text-slate-900 shadow' : 'text-slate-400 hover:text-white'}`}
              >
                <Sparkles className="w-3.5 h-3.5" /> Copilot
              </button>
            </div>

            {/* Tab Content: Live Transcript */}
            {activeTab === 'transcript' && (
              <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
                <div className="text-[11px] text-purple-400 bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 flex items-center justify-between">
                  <span>Speaker Identification Active</span>
                  <span className="font-semibold text-white">99.8% Accuracy</span>
                </div>

                {liveTranscript.map((item, idx) => (
                  <div key={idx} className={`p-3 rounded-2xl transition-all ${item.isAi ? 'bg-gradient-to-r from-pink-950/40 to-purple-950/40 border border-pink-500/30 text-pink-200' : 'bg-slate-800/80 text-slate-200 border border-slate-700/50'}`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        {item.avatar && <img src={item.avatar} alt={item.speaker} className="w-5 h-5 rounded-full object-cover" />}
                        <span className="font-bold text-white text-xs">{item.speaker}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">{item.time}</span>
                    </div>
                    <p className="leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab Content: CRM Tasks */}
            {activeTab === 'crm' && (
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Auto-Extracted Spoken Tasks</span>
                  <button 
                    onClick={handleAddTask}
                    className="text-pink-400 hover:text-pink-300 font-medium text-[11px] flex items-center gap-1"
                  >
                    + Simulate Task
                  </button>
                </div>

                {tasks.map((task) => (
                  <div key={task.id} className="p-3 bg-slate-800/90 border border-slate-700 rounded-xl space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs text-white font-medium">{task.text}</p>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                        {task.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Assignee: <strong className="text-purple-300">{task.assignee}</strong></span>
                      <span>{task.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab Content: Copilot */}
            {activeTab === 'ai' && (
              <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
                <div className="space-y-3 overflow-y-auto flex-1 pr-1 text-xs">
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-slate-300">
                    <p className="font-semibold text-white mb-1">🤖 Ask MorpheLabs Copilot</p>
                    <p className="text-[11px] text-slate-400">Ask any question about this live meeting or past client transcripts.</p>
                  </div>

                  {aiAnswers.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="p-2.5 bg-purple-900/40 rounded-xl text-purple-200 border border-purple-700/50">
                        <strong className="text-purple-300">Q:</strong> {item.q}
                      </div>
                      <div className="p-2.5 bg-slate-800 rounded-xl text-slate-200 border border-slate-700">
                        <strong className="text-pink-400">AI:</strong> {item.a}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAskAi} className="mt-3 flex gap-2">
                  <input 
                    type="text"
                    value={newPrompt}
                    onChange={(e) => setNewPrompt(e.target.value)}
                    placeholder="Ask about budget, risks, deadlines..."
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                  <button type="submit" className="px-3 py-2 bg-[#FEDBFC] hover:bg-[#fca5f9] text-slate-900 text-xs font-extrabold rounded-xl border border-[#f59ef2]/60 transition-colors cursor-pointer">
                    Ask
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
