import React from 'react';
import { CalendarDays, Link2, MapPin, Star } from 'lucide-react';

const Stat = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur">
    <div className="text-xl font-semibold text-white/95">{value}</div>
    <div className="text-xs uppercase tracking-wide text-slate-200/70">{label}</div>
  </div>
);

const ProfilePane = ({ user }) => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_1px_1px_rgba(255,255,255,0.04)_inset]">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-24 w-24 rounded-2xl ring-2 ring-sky-400/40"
        />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-semibold text-white/95">{user.name}</h2>
            {user.badge && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs font-medium text-sky-200/90 backdrop-blur">
                <Star className="h-3.5 w-3.5" /> {user.badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-slate-200/90">{user.bio}</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-200/80">
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {user.location}</span>
            <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" /> Joined {user.joined}</span>
            {user.website && (
              <a href={user.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-sky-300">
                <Link2 className="h-4 w-4" /> Website
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
        <Stat label="Posts" value={user.stats.posts} />
        <Stat label="Likes" value={user.stats.likes} />
        <Stat label="Comments" value={user.stats.comments} />
        <Stat label="Following" value={user.stats.following} />
        <Stat label="Followers" value={user.stats.followers} />
        <Stat label="Shares" value={user.stats.shares} />
      </div>
    </section>
  );
};

export default ProfilePane;
