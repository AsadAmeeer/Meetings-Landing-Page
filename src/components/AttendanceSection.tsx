import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, BellRing, Calendar, CheckCircle2, Clock, XCircle, AlertCircle, Send, ShieldCheck, Users, MinusCircle } from 'lucide-react';

interface Participant {
  id: string;
  name: string;
  tag?: string;
  duration: string;
  status: 'Attended' | "Didn't join" | 'Joined <15min';
  statusType: 'attended' | 'noshow' | 'dropped';
  avatar?: string;
  initials?: string;
  timelinePercent: number;
}

export const AttendanceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'attended' | 'dropped' | 'noshow'>('all');
  const [broadcastSent, setBroadcastSent] = useState(false);

  const participants: Participant[] = [
    { 
      id: '1',
      name: 'Sameer Khan', 
      tag: 'HOST', 
      duration: '1h 14m', 
      status: 'Attended', 
      statusType: 'attended', 
      avatar: '/avatars/sameer_khan.png',
      timelinePercent: 100
    },
    { 
      id: '2',
      name: 'Haseeb Ahmed', 
      duration: '0m (Didn\'t join)', 
      status: "Didn't join", 
      statusType: 'noshow', 
      avatar: '/avatars/haseeb_ahmed.png',
      timelinePercent: 0
    },
    { 
      id: '3',
      name: 'Asad Ameer', 
      duration: '1h 8m', 
      status: 'Attended', 
      statusType: 'attended', 
      avatar: '/avatars/asad_ameer.png',
      timelinePercent: 92
    },
    { 
      id: '4',
      name: 'Arslan ali khan', 
      duration: '1h 9m', 
      status: 'Attended', 
      statusType: 'attended', 
      avatar: '/avatars/arslan_ali_khan.png',
      timelinePercent: 93
    },
    { 
      id: '5',
      name: 'Muhammad Abdullah Akbar', 
      tag: 'GUEST', 
      duration: '3m', 
      status: 'Joined <15min', 
      statusType: 'dropped', 
      initials: 'MA',
      timelinePercent: 10
    },
    { 
      id: '6',
      name: 'Haseeb Ahmed', 
      tag: 'GUEST', 
      duration: '2m', 
      status: 'Joined <15min', 
      statusType: 'dropped', 
      initials: 'HA',
      timelinePercent: 6
    }
  ];

  const filteredParticipants = participants.filter(p => {
    if (filter === 'attended') return p.statusType === 'attended';
    if (filter === 'dropped') return p.statusType === 'dropped';
    if (filter === 'noshow') return p.statusType === 'noshow';
    return true;
  });

  const handleSendBroadcast = () => {
    setBroadcastSent(true);
    setTimeout(() => setBroadcastSent(false), 3500);
  };

  return (
    <section id="attendance" className="py-20 lg:py-32 relative bg-gradient-to-b from-[#f8fafc] via-[#faf9fe] to-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Attendance Verification &amp; Follow-Through</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-morphe-navy tracking-tight mb-4">
            Team Accountability &amp; Attendance
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Verified Attendance &amp; Timeline Audit for Every Team Member
          </p>
        </motion.div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 mb-6">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-morphe-navy mb-3">
                15-Minute Verified Attendance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Distinguish between team members who stayed for the work session and those who dropped off after 2 minutes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-600">
              <ShieldCheck className="w-4 h-4" /> Real-time Presence Tracking
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 mb-6">
                <BellRing className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-morphe-navy mb-3">
                Automated No-Show Broadcast
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                One-click notifications sent to invitees who missed critical scheduled meetings, with optional re-login verification.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-pink-600">
              <Send className="w-4 h-4" /> Instant Notification Engine
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 mb-6">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-morphe-navy mb-3">
                Universal .ics Email Invites
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sends real calendar attachments directly to Google, Apple, Outlook, and Zoho calendars without OAuth permissions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-purple-600">
              <CheckCircle2 className="w-4 h-4" /> Zero-OAuth SMTP Attachments
            </div>
          </motion.div>

        </div>

        {/* Attendance Dashboard Mockup matching user reference */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white border border-purple-100 shadow-2xl p-6 lg:p-8 max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-display font-bold text-lg text-morphe-navy">
                  Verified Attendance &amp; Timeline Audit
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Meeting: MorpheLabs Product &amp; Intelligence Review • 1h 15m Scheduled
              </p>
            </div>

            {/* Action & Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${filter === 'all' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'hover:text-slate-900'}`}
                >
                  All ({participants.length})
                </button>
                <button
                  onClick={() => setFilter('attended')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${filter === 'attended' ? 'bg-white text-emerald-700 shadow-2xs font-bold' : 'hover:text-slate-900'}`}
                >
                  Attended (3)
                </button>
                <button
                  onClick={() => setFilter('dropped')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${filter === 'dropped' ? 'bg-white text-amber-700 shadow-2xs font-bold' : 'hover:text-slate-900'}`}
                >
                  Joined &lt;15min (2)
                </button>
                <button
                  onClick={() => setFilter('noshow')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${filter === 'noshow' ? 'bg-white text-red-700 shadow-2xs font-bold' : 'hover:text-slate-900'}`}
                >
                  Didn't join (1)
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleSendBroadcast}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold shadow-md hover:opacity-90 transition-opacity cursor-pointer"
              >
                <BellRing className="w-3.5 h-3.5" />
                <span>Broadcast Notice</span>
              </motion.button>
            </div>
          </div>

          {/* Toast Notification */}
          <AnimatePresence>
            {broadcastSent && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="my-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between overflow-hidden"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Automated Follow-up Notification dispatched to absent &amp; dropped members with meeting recording link!</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Dispatched</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Participant Attendance List matching user screenshot */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Participant</th>
                  <th className="py-3 px-4">Role / Tag</th>
                  <th className="py-3 px-4">Presence Timeline</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4 text-right">Attendance Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <AnimatePresence mode="sync">
                  {filteredParticipants.map((p, idx) => (
                    <motion.tr 
                      key={p.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25, delay: idx * 0.05 }}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-3">
                        {p.avatar ? (
                          <img 
                            src={p.avatar} 
                            alt={p.name} 
                            className="w-9 h-9 rounded-full object-cover shadow-2xs border border-purple-100" 
                          />
                        ) : (
                          <div className="w-9 h-9 rounded-full bg-[#1b223c] text-indigo-300 flex items-center justify-center font-bold text-xs shadow-2xs border border-indigo-900/40">
                            {p.initials}
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-900 font-bold">{p.name}</span>
                            {p.tag && (
                              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${p.tag === 'HOST' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                                {p.tag}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-500 font-normal">{p.duration}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-slate-500 font-medium">
                        {p.tag === 'HOST' ? 'Meeting Host' : p.tag === 'GUEST' ? 'External Guest' : 'Team Member'}
                      </td>

                      <td className="py-3.5 px-4">
                        {/* Timeline Bar */}
                        <div className="w-36 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.timelinePercent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`h-full rounded-full ${p.statusType === 'attended' ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : p.statusType === 'dropped' ? 'bg-amber-400' : 'bg-slate-300'}`}
                          />
                        </div>
                      </td>

                      <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">
                        {p.duration}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        {p.statusType === 'attended' ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 shadow-2xs">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Attended
                          </span>
                        ) : p.statusType === 'dropped' ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200 shadow-2xs">
                            <MinusCircle className="w-4 h-4 text-amber-600" /> Joined &lt;15min
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 shadow-2xs">
                            <XCircle className="w-4 h-4 text-slate-500" /> Didn't join
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
