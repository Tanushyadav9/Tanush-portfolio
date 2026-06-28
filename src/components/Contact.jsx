import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Check, FileText, MapPin } from 'lucide-react';
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
      icon: <Mail className="text-cyan" size={20} />,
      label: 'Email',
      value: 'tanushyada0987@gmail.com',
      href: 'mailto:tanushyada0987@gmail.com'
    },
    {
      icon: <Phone className="text-purple" size={20} />,
      label: 'Phone',
      value: '+91 87506 88748',
      href: 'tel:+918750688748'
    },
    {
      icon: <MapPin className="text-cyan" size={20} />,
      label: 'Location',
      value: 'Delhi, India',
      href: '#'
    },
    {
      icon: <FileText className="text-purple" size={20} />,
      label: 'Resume Document',
      value: 'View PDF File',
      href: '/Tanush_Yadav_Resume.pdf'
    }
  ];

  const availabilities = ['Internships', 'Freelance Projects', 'Collaborations', 'Hackathons'];

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Communication
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Let's Build Something Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Premium Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left w-full">
            
            {/* Availability Highlights Card */}
            <Tilt className="p-8 md:p-10 border border-[#22c55e]/20 bg-[#22c55e]/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] absolute" />
                <span className="text-xs font-black uppercase text-[#22c55e] tracking-widest ml-2">
                  Availability Status
                </span>
              </div>
              <h4 className="text-lg font-bold text-white font-heading mb-3">
                🟢 Available for:
              </h4>
              <div className="flex flex-wrap gap-2">
                {availabilities.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-semibold text-white/90 bg-[#22c55e]/10 border border-[#22c55e]/20 px-3 py-1 rounded-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Tilt>

            {/* Direct Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((detail, i) => (
                <a 
                  key={i} 
                  href={detail.href}
                  target={detail.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel={detail.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3.5 p-5 md:p-6 rounded-2xl bg-white-5 border border-white-5 hover-border-cyan transition-all group decoration-transparent"
                >
                  <div className="p-2.5 bg-white-5 rounded-xl border border-white-10 text-cyan shrink-0">
                    {detail.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted uppercase tracking-wider">{detail.label}</p>
                    <p className="text-xs font-bold text-white group-hover:text-cyan transition-colors mt-0.5 truncate">{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials connections row */}
            <Tilt className="p-6 md:p-8 flex items-center justify-between gap-6">
              <span className="text-xs font-bold text-muted uppercase tracking-wider">Social Channels:</span>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Tanushyadav9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-cyan text-white hover:text-cyan transition-all"
                >
                  <GithubIcon size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tanush-yadav-1893b338b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-purple text-white hover:text-purple transition-all"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </Tilt>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <Tilt className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="flex flex-col text-left">
                
                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 mb-6 error-banner rounded-xl text-sm font-semibold"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="form-group">
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

                <div className="form-group">
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

                <div className="form-group">
                  <textarea 
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input"
                    style={{ resize: 'none' }}
                    placeholder=" "
                    disabled={loading || success}
                  />
                  <label htmlFor="message" className="form-label">Your Message</label>
                </div>

                <div className="mt-2">
                  {success ? (
                    <div className="p-4 success-banner rounded-full flex items-center justify-center gap-2 font-bold text-sm">
                      <Check size={16} />
                      <span>Message Sent Successfully! Thank You.</span>
                    </div>
                  ) : (
                    <button 
                      type="submit" 
                      className="btn btn-primary w-full sm:w-auto"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 spinner-border animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          Send Message
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
