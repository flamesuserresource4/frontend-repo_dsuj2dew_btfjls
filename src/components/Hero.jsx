import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full h-[420px] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent" />

      <div className="relative z-10 flex h-full items-end p-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-medium text-sky-200 ring-1 ring-sky-400/30">
            Futuristic Profiles
          </span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Share moments. Build your digital identity.
          </h1>
          <p className="mt-2 max-w-xl text-slate-300">
            A minimal social space with likes, comments, shares and a sleek profile view – powered by a holographic 3D card.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
