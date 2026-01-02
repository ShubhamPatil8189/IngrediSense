import React from 'react';
import { 
  ShieldCheck, 
  Beaker, 
  Brain, 
  AlertTriangle, 
  Scan, 
  Bookmark, 
  Share2, 
  ChevronRight 
} from 'lucide-react';
import './AnalysisResult.css';

export default function AnalysisResult({ onReset, onViewReport }) {
  return (
    <div className="result-container">
      {/* Top Navigation */}
      <nav className="result-nav">
        <div className="nav-left">
          <div className="nav-logo-box">
            <div className="nav-logo-inner" />
          </div>
          <span className="nav-brand">FoodAI</span>
        </div>
        <div className="nav-right">
          <span className="nav-link">History</span>
          <div className="user-avatar" />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="result-header">
        <div className="verified-badge">
          <ShieldCheck size={14} fill="currentColor" /> VERIFIED ANALYSIS
        </div>
        <h1 className="result-title">Generally safe for occasional consumption</h1>
        <p className="result-subtitle">
          The main concern is high added sugar, which matters if consumed daily, but otherwise the ingredients are clean.
        </p>
      </header>

      {/* Analysis Grid */}
      <div className="result-grid">
        {/* Card 1: What Matters Most */}
        <section className="info-card">
          <div className="card-label">
            <Beaker size={14}/> WHAT MATTERS MOST
          </div>
          <div className="ingredient-item">
            <div className="item-icon yellow">
              <ShieldCheck size={18} fill="currentColor" />
            </div>
            <div className="item-details">
              <p className="item-name">High Fructose Corn Syrup</p>
              <span className="item-desc">High Glycemic Index sweetener</span>
            </div>
          </div>
          <div className="ingredient-item">
            <div className="item-icon pink">
              <ShieldCheck size={18} fill="currentColor" />
            </div>
            <div className="item-details">
              <p className="item-name">Red 40</p>
              <span className="item-desc">Artificial Colorant</span>
            </div>
          </div>
        </section>

        {/* Card 2: Why This Matters */}
        <section className="info-card">
          <div className="card-label">
            <Brain size={14}/> WHY THIS MATTERS
          </div>
          <p className="card-body-text">
            This product is acceptable as a sweet treat. However, the combination of liquid sugars and artificial dyes suggests it shouldn't be a staple of your diet.
          </p>
          <p className="card-body-text secondary">
            The sugar content exceeds recommended daily limits for children in a single serving, which can lead to energy spikes and crashes.
          </p>
          <button className="text-action-btn" onClick={onViewReport}>
            Read full analysis <ChevronRight size={14} />
          </button>
        </section>

        {/* Card 3: Who Should Be Cautious */}
        <section className="info-card">
          <div className="card-label">
            <AlertTriangle size={14}/> WHO SHOULD BE CAUTIOUS
          </div>
          <div className="tag-container">
            <span className="tag tag-warning">Diabetics</span>
            <span className="tag tag-warning">Children (Hyperactivity)</span>
            <span className="tag tag-info">Dye Sensitivity</span>
          </div>
        </section>

        {/* Card 4: Uncertainty */}
        <section className="info-card">
          <div className="card-label">
            <ShieldCheck size={14}/> UNCERTAINTY & LIMITS
          </div>
          <p className="card-body-text small">
            We could not verify the specific source of the "Natural Flavors" listed on the package. These can sometimes include allergens not explicitly stated.
          </p>
        </section>
      </div>

      {/* Floating Bottom Bar */}
      <div className="floating-action-bar">
        <button onClick={onReset} className="scan-main-btn">
          <Scan size={20} /> Scan another item
        </button>
        <button className="utility-btn"><Bookmark size={20}/></button>
        <button className="utility-btn"><Share2 size={20}/></button>
      </div>
    </div>
  );
}