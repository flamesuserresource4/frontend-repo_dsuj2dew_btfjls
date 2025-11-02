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
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
      <div className="flex gap-3">
        <img
          src={`https://api.dicebear.com/7.x/identicon/svg?seed=you`}
          alt="you"
          className="h-10 w-10 rounded-full ring-1 ring-white/10"
        />
        <div className="flex-1">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            rows={2}
            placeholder="Share something..."
            className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-500/50"
          />
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <button className="rounded-lg p-2 hover:bg-slate-800" title="Add image" type="button">
                <ImagePlus className="h-5 w-5" />
              </button>
              <button className="rounded-lg p-2 hover:bg-slate-800" title="Add emoji" type="button">
                <Smile className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={submit}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
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
