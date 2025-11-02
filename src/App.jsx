import React, { useMemo, useState } from 'react';
import { Home, User, Bell } from 'lucide-react';
import Hero from './components/Hero';
import Composer from './components/Composer';
import PostCard from './components/PostCard';
import ProfilePane from './components/ProfilePane';

const initialPosts = () => ([
  {
    id: 1,
    author: 'Ava Stone',
    verified: true,
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=ava',
    time: '2h',
    content:
      'Exploring the new holographic profile card – the glow is unreal! ✨\nWhat do you think about this vibe?',
    image: '',
    likes: 182,
    liked: false,
    shares: 12,
    comments: [
      {
        author: 'Leo',
        avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=leo',
        text: 'Looks awesome! The blue check is chef’s kiss.'
      }
    ]
  },
  {
    id: 2,
    author: 'Noah Park',
    verified: false,
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=noah',
    time: '5h',
    content: 'Weekend photo dump incoming 📸',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    likes: 95,
    liked: false,
    shares: 5,
    comments: []
  }
]);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState(initialPosts);

  const user = useMemo(
    () => ({
      name: 'You',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=you',
      badge: 'Pro',
      bio: 'Exploring digital identity and futuristic UI.',
      location: 'The Internet',
      joined: '2024',
      website: 'https://example.com',
      stats: {
        posts: posts.length,
        likes: posts.reduce((s, p) => s + p.likes, 0),
        comments: posts.reduce((s, p) => s + p.comments.length, 0),
        following: 321,
        followers: 980,
        shares: posts.reduce((s, p) => s + p.shares, 0)
      }
    }),
    [posts]
  );

  const handlePost = ({ content }) => {
    setPosts((prev) => [
      {
        id: Date.now(),
        author: 'You',
        verified: true,
        avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=you',
        time: 'now',
        content,
        image: '',
        likes: 0,
        liked: false,
        shares: 0,
        comments: []
      },
      ...prev
    ]);
  };

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.likes + (p.liked ? -1 : 1) }
          : p
      )
    );
  };

  const handleShare = (id) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, shares: p.shares + 1 } : p)));
    if (navigator && navigator.share) {
      navigator.share({ title: 'Check this post', url: window.location.href }).catch(() => {});
    }
  };

  const handleAddComment = (id, text) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              comments: [
                ...p.comments,
                { author: 'You', avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=you', text }
              ]
            }
          : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 shadow-lg" />
            <h2 className="text-xl font-semibold tracking-tight">Vibe Social</h2>
          </div>
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-slate-800 ${
                activeTab === 'home' ? 'bg-slate-800 text-white' : 'text-slate-300'
              }`}
              type="button"
            >
              <Home className="h-5 w-5" /> Home
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-slate-800 ${
                activeTab === 'profile' ? 'bg-slate-800 text-white' : 'text-slate-300'
              }`}
              type="button"
            >
              <User className="h-5 w-5" /> Profile
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-slate-800" type="button">
              <Bell className="h-5 w-5" />
            </button>
          </nav>
        </header>

        {/* Hero */}
        <Hero />

        {/* Feed / Profile */}
        {activeTab === 'home' ? (
          <main className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <Composer onPost={handlePost} />
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={handleLike}
                  onShare={handleShare}
                  onAddComment={handleAddComment}
                />
              ))}
            </div>
            <aside className="hidden md:block">
              <ProfilePane user={user} />
            </aside>
          </main>
        ) : (
          <main className="mt-6">
            <ProfilePane user={user} />
            <div className="mt-4 space-y-4">
              {posts
                .filter((p) => p.author === 'You')
                .map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onLike={handleLike}
                    onShare={handleShare}
                    onAddComment={handleAddComment}
                  />
                ))}
            </div>
          </main>
        )}

        {/* Footer */}
        <footer className="mt-10 py-8 text-center text-xs text-slate-500">
          Built with React, Tailwind, and a holographic 3D Spline scene.
        </footer>
      </div>
    </div>
  );
}
