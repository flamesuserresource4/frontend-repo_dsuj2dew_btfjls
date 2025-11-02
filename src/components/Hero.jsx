import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full h-[440px] overflow-hidden rounded-3xl bg-[#0b1020]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glassy glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(900px_500px_at_10%_110%,rgba(99,102,241,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative z-10 flex h-full items-end p-6">
        <div className="max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_0_1px_1px_rgba(255,255,255,0.04)_inset]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-sky-100/90 backdrop-blur">
            Liquid Glass UI · Futuristic
          </span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            A shimmering social space with glassmorphic vibes.
          </h1>
          <p className="mt-2 text-slate-200/90">
            Create posts, like, comment and share — with an ambient AI sparkles animation setting the tone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
