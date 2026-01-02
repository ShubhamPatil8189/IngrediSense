import React from 'react';
import { BarChart3, ArrowRight, Leaf, User } from 'lucide-react'; // Added User icon
import './DemoPage.css';

const EXAMPLES = [
  {
    id: 1,
    title: 'Classic Potato Chips',
    desc: 'Standard supermarket variety. Contains additives and high sodium levels.',
    tag: 'ULTRA-PROCESSED',
    tagClass: 'tag-orange',
    img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 2,
    title: 'Orange Soda',
    desc: 'High fructose corn syrup, artificial colors (Yellow 6), and caffeine.',
    tag: 'HIGH SUGAR',
    tagClass: 'tag-red',
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 3,
    title: 'Organic Baby Food',
    desc: 'Certified organic, no added sugars, and minimally processed.',
    tag: 'CLEAN LABEL',
    tagClass: 'tag-green',
    img: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=500'
  }
];

export default function DemoPage({ onAnalyze, onSkip }) {
  return (
    <div className="demo-view">
      <div className="glow-effect" />

      <nav className="compact-nav">
        <div className="logo-group">
          <div className="logo-box"><Leaf size={14} fill="currentColor" /></div>
          <span>IngrediSense</span>
        </div>
        <div className="nav-items">
          <span>History</span><span>Settings</span>
          {/* Updated Profile Section with Icon Logo */}
          <div className="profile-logo-circle">
            <User size={18} color="#1ed760" />
          </div>
        </div>
      </nav>

      <main className="demo-main">
        <header className="demo-head">
          <div className="live-pill">LIVE DEMO</div>
          <h1 className="main-title">Try an example</h1>
          <p className="main-sub">Select a product below to see how our AI analyzes ingredients.</p>
        </header>

        <div className="product-grid">
          {EXAMPLES.map((item) => (
            <div key={item.id} className="prod-card">
              <div className="img-box">
                <img src={item.img} alt={item.title} />
                <span className={`badge ${item.tagClass}`}>{item.tag}</span>
              </div>
              <div className="card-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="analyze-action" onClick={onAnalyze}>
                  <BarChart3 size={16} /> Analyze
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="demo-footer-links">
          <p>Already know what you're eating?</p>
          <button className="skip-action" onClick={onSkip}>
            Skip demo and upload my own <ArrowRight size={14} />
          </button>
        </div>
      </main>
    </div>
  );
}