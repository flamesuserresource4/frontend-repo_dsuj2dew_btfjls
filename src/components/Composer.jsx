import React, { useState } from 'react';
import { ImagePlus, Smile, Send } from 'lucide-react';

const Composer = ({ onPost }) => {
  const [value, setValue] = useState('');

  const submit = () => {
    const content = value.trim();
    if (!content) return;
    onPost({ content });
    setValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_0_1px_1px_rgba(255,255,255,0.04)_inset]">
      <div className="flex gap-3">
        <img
          src={`https://api.dicebear.com/7.x/identicon/svg?seed=you`}
          alt="you"
          className="h-10 w-10 rounded-full ring-1 ring-white/20"
        />
        <div className="flex-1">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            rows={2}
            placeholder="Share something..."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 p-3 text-slate-100 placeholder-slate-300/70 outline-none backdrop-blur focus:ring-2 focus:ring-sky-400/50"
          />
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-200/80">
              <button className="rounded-lg p-2 hover:bg-white/10" title="Add image" type="button">
                <ImagePlus className="h-5 w-5" />
              </button>
              <button className="rounded-lg p-2 hover:bg-white/10" title="Add emoji" type="button">
                <Smile className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={submit}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/20 hover:bg-sky-400/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
              type="button"
            >
              <Send className="h-4 w-4" />
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Composer;
