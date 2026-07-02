import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Check, FileText, MapPin, Clock, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import Tilt from './Tilt';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please complete all form fields.');
      return;
    }

    setLoading(true);

    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#00E5FF', '#915EFF', '#ffffff']
        });

        setTimeout(() => setSuccess(false), 5000);
      }, 1200);
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: 'Tanush Yadav',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#00E5FF', '#915EFF', '#ffffff']
        });

        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        setLoading(false);
        setError('Failed to send message. Please try again or use direct email links.');
        console.error('EmailJS submit error:', err);
      });
  };

  const contactDetails = [
    {
      icon: <Mail className="text-cyan" size={18} />,
      label: 'Email Address',
      value: 'tanushyada0987@gmail.com',
      href: 'mailto:tanushyada0987@gmail.com'
    },
    {
      icon: <LinkedinIcon className="text-purple" size={18} />,
      label: 'LinkedIn Profile',
      value: 'tanush-yadav',
      href: 'https://www.linkedin.com/in/tanush-yadav-1893b338b'
    },
    {
      icon: <GithubIcon className="text-cyan" size={18} />,
      label: 'GitHub Code',
      value: 'Tanushyadav9',
      href: 'https://github.com/Tanushyadav9'
    },
    {
      icon: <Phone className="text-purple" size={18} />,
      label: 'Phone Contact',
      value: '+91 87506 88748',
      href: 'tel:+918750688748'
    },
    {
      icon: <MapPin className="text-cyan" size={18} />,
      label: 'Location',
      value: 'Delhi, India',
      href: '#'
    },
    {
      icon: <FileText className="text-purple" size={18} />,
      label: 'Resume PDF',
      value: 'View Resume',
      href: '/Tanush_Yadav_Resume.pdf'
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4 font-heading">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Contact & Availability
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column (Details) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
            
            {/* Availability card */}
            <Tilt className="glass-card p-6 border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">
                  Availability Status
                </span>
              </div>
              <h4 className="text-base font-bold text-white font-heading mb-2">
                Open for Opportunities
              </h4>
              <p className="text-[11px] text-white/50 leading-relaxed font-light mb-4">
                Currently looking for engineering internships, student placements, open source coding, and hackathons iterations.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Internships', 'Open Source', 'Hackathons', 'Collaborations'].map((item, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Tilt>

            {/* Response speed banner */}
            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple border border-purple-500/20 flex items-center justify-center shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Response Guaranteed</span>
                <span className="text-[10px] text-white/50">Typically replies to professional inquiries within 24 hours.</span>
              </div>
            </div>

            {/* Direct details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((detail, i) => (
                <a 
                  key={i} 
                  href={detail.href}
                  target={detail.href.startsWith('http') || detail.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel={detail.href.startsWith('http') || detail.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                  className="glass-card p-4 border border-white/10 hover:border-cyan/35 transition-all flex items-start gap-3 group decoration-transparent text-left"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-cyan shrink-0 transition-colors group-hover:bg-cyan/10">
                    {detail.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] text-white/30 uppercase tracking-wider block mb-0.5 font-semibold">{detail.label}</span>
                    <span className="text-xs font-bold text-white group-hover:text-cyan transition-colors truncate block">{detail.value}</span>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7 w-full">
            <Tilt className="glass-card p-6 md:p-8 border border-white/10">
              <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-6 text-left">
                Send Direct Inquiry
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col text-left">
                
                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 mb-6 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs font-semibold"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="form-group mb-6">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder=" "
                    disabled={loading || success}
                  />
                  <label htmlFor="name" className="form-label">Full Name</label>
                </div>

                <div className="form-group mb-6">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder=" "
                    disabled={loading || success}
                  />
                  <label htmlFor="email" className="form-label">Email Address</label>
                </div>

                <div className="form-group mb-6">
                  <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input"
                    style={{ resize: 'none' }}
                    placeholder=" "
                    disabled={loading || success}
                  />
                  <label htmlFor="message" className="form-label">Your Message</label>
                </div>

                <div>
                  {success ? (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center gap-2 font-bold text-xs">
                      <Check size={14} className="stroke-[3]" />
                      <span>Message Sent Successfully! Confetti Launched.</span>
                    </div>
                  ) : (
                    <button 
                      type="submit" 
                      className="btn btn-primary w-full sm:w-auto font-semibold text-xs cursor-pointer"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 rounded-full border-2 border-t-transparent border-white animate-spin" />
                          <span>Sending Inquiry...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={14} />
                          <span>Send Message</span>
                        </span>
                      )}
                    </button>
                  )}
                </div>

              </form>
            </Tilt>
          </div>

        </div>
      </div>
    </section>
  );
}
