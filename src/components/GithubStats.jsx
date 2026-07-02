import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Star, Users, BookOpen } from 'lucide-react';
import Tilt from './Tilt';

const USERNAME = 'Tanushyadav9';

export default function GithubStats() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`)
        ]);
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        setProfile(userData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch (e) {
        console.error('GitHub API error:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const topRepos = repos
    .filter(r => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);

  const metrics = profile ? [
    { label: 'Public Repos', value: profile.public_repos ?? '—', icon: <BookOpen className="text-cyan" size={18} /> },
    { label: 'Followers', value: profile.followers ?? '—', icon: <Users className="text-purple" size={18} /> },
    { label: 'Following', value: profile.following ?? '—', icon: <GitBranch className="text-cyan" size={18} /> },
    { label: 'Stars Earned', value: totalStars || '—', icon: <Star className="text-purple" size={18} /> },
  ] : [];

  return (
    <section id="github-stats" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Open Source
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            GitHub Statistics
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40 text-white/40 text-sm">
            Loading GitHub data...
          </div>
        ) : (
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">

            {/* Top: Profile card + metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

              {/* Profile Card */}
              <Tilt className="lg:col-span-5 p-6 border border-white/10 hover:border-cyan/25 transition-all text-left flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  {profile?.avatar_url && (
                    <img
                      src={profile.avatar_url}
                      alt={USERNAME}
                      className="w-14 h-14 rounded-full border-2 border-cyan/30"
                    />
                  )}
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">
                      {profile?.name || USERNAME}
                    </h3>
                    <a
                      href={`https://github.com/${USERNAME}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-cyan hover:underline flex items-center gap-1 decoration-transparent"
                    >
                      @{USERNAME}
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
                {profile?.bio && (
                  <p className="text-[11px] text-white/50 leading-relaxed mb-4 font-light">{profile.bio}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {profile?.location && (
                    <span className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/50">
                      📍 {profile.location}
                    </span>
                  )}
                  <span className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/50">
                    🗓 Joined {profile?.created_at ? new Date(profile.created_at).getFullYear() : '—'}
                  </span>
                </div>
              </Tilt>

              {/* Metrics 2x2 grid */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {metrics.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.07 }}
                  >
                    <Tilt className="p-5 flex flex-col items-center text-center justify-center border border-white/10 hover:border-cyan/25 transition-all h-full">
                      <div className="mb-2 p-2 bg-white/5 rounded-xl border border-white/10">
                        {m.icon}
                      </div>
                      <h4 className="text-2xl font-black text-white font-heading">{m.value}</h4>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider mt-1">{m.label}</p>
                    </Tilt>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* GitHub Readme Stats Cards (live SVG embeds) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Tilt className="p-4 border border-white/10 hover:border-cyan/25 transition-all overflow-hidden">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=00E5FF&icon_color=915EFF&text_color=ffffff&bg_color=0B0F19`}
                  alt="GitHub Stats"
                  className="w-full"
                  loading="lazy"
                />
              </Tilt>
              <Tilt className="p-4 border border-white/10 hover:border-purple/25 transition-all overflow-hidden">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com?user=${USERNAME}&theme=transparent&hide_border=true&ring=00E5FF&fire=915EFF&currStreakLabel=ffffff&sideLabels=ffffff&dates=ffffff99&background=0B0F19`}
                  alt="GitHub Streak"
                  className="w-full"
                  loading="lazy"
                />
              </Tilt>
            </div>

            {/* Top Repos */}
            {topRepos.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4 font-heading">
                  Top Repositories
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topRepos.map((repo, idx) => (
                    <motion.a
                      key={idx}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.06 }}
                      className="glass-card p-4 border border-white/10 hover:border-cyan/30 transition-all text-left flex flex-col gap-2 group decoration-transparent"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-cyan transition-colors font-heading truncate">
                          {repo.name}
                        </span>
                        <ExternalLink size={12} className="text-white/30 group-hover:text-cyan transition-colors shrink-0 ml-2" />
                      </div>
                      {repo.description && (
                        <p className="text-[10px] text-white/45 leading-relaxed font-light line-clamp-2">{repo.description}</p>
                      )}
                      <div className="flex items-center gap-3 mt-auto pt-1">
                        {repo.language && (
                          <span className="text-[9px] font-semibold text-purple bg-purple/10 border border-purple/20 px-2 py-0.5 rounded-full">
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-[9px] text-white/40">
                          <Star size={9} /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1 text-[9px] text-white/40">
                          <GitBranch size={9} /> {repo.forks_count}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
