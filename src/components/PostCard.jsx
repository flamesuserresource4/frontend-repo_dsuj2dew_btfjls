import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, CheckCircle2 } from 'lucide-react';

const ActionButton = ({ active = false, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    type="button"
    className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-white/10 ${
      active ? 'text-rose-300' : 'text-slate-100/90'
    }`}
  >
    <Icon className={`h-5 w-5 ${active ? 'fill-rose-500/20' : ''}`} />
    <span>{label}</span>
  </button>
);

const PostCard = ({ post, onLike, onShare, onAddComment }) => {
  const [comment, setComment] = useState('');

  const submitComment = () => {
    const text = comment.trim();
    if (!text) return;
    onAddComment(post.id, text);
    setComment('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitComment();
    }
  };

  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_0_1px_1px_rgba(255,255,255,0.04)_inset]">
      <div className="flex items-start gap-3">
        <img
          src={post.avatar}
          alt={post.author}
          className="h-10 w-10 rounded-full ring-1 ring-white/20"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white/95">{post.author}</span>
              {post.verified && (
                <CheckCircle2 className="h-4 w-4 text-sky-300" title="Verified" />
              )}
              <span className="text-xs text-slate-200/70">· {post.time}</span>
            </div>
            <button className="rounded-lg p-2 text-slate-100/80 hover:bg-white/10" title="More" type="button">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-2 whitespace-pre-wrap text-slate-50/95">{post.content}</p>

          {post.image && (
            <img
              src={post.image}
              alt="post media"
              className="mt-3 w-full rounded-xl border border-white/10"
            />
          )}

          <div className="mt-4 flex items-center gap-1">
            <ActionButton
              icon={Heart}
              label={post.likes.toLocaleString()}
              active={post.liked}
              onClick={() => onLike(post.id)}
            />
            <ActionButton icon={MessageCircle} label={post.comments.length} onClick={() => {}} />
            <ActionButton icon={Share2} label={post.shares} onClick={() => onShare(post.id)} />
          </div>

          {/* Comments */}
          <div className="mt-3 space-y-2">
            {post.comments.map((c, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <img
                  src={c.avatar}
                  alt={c.author}
                  className="h-6 w-6 rounded-full ring-1 ring-white/20"
                />
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-sm text-slate-50/95 backdrop-blur">
                  <span className="font-medium text-white/95">{c.author}</span>{' '}
                  {c.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={onKeyDown}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-50 placeholder-slate-200/70 outline-none backdrop-blur focus:ring-2 focus:ring-sky-400/50"
              placeholder="Write a comment and press Enter"
            />
            <button
              onClick={submitComment}
              className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-slate-50 hover:bg-white/20"
              type="button"
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
