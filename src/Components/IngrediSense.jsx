import React, { useState } from 'react';
import { Camera, CheckCircle2, Leaf, FlaskConical } from 'lucide-react';
import './IngrediSense.css';

// Destructure onGoToDemo from props so the button works
export default function IngrediSense({ onAnalyze, onGoToDemo }) {
  const [ingredients, setIngredients] = useState('');

  return (
    <div className="page-container">
      {/* Soft background glow for that premium feel */}
      <div className="ambient-glow" />

      <header className="header">
        <div className="logo-section">
          <div className="logo-icon">
            <Leaf className="leaf-icon" fill="currentColor" />
          </div>
          <h1 className="logo-text">IngrediSense</h1>
        </div>
        <p className="tagline">Understand what you eat — <span>in seconds.</span></p>
      </header>

      <main className="main-card">
        <div className="input-group">
          <label className="input-label">Paste Ingredients List</label>
          <textarea 
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., Water, Sugar, Corn Syrup, Modified Food Starch..."
            className="ingredient-textarea"
          />
        </div>

        <div className="divider">
          <span className="divider-line"></span>
          <span className="divider-text">OR</span>
          <span className="divider-line"></span>
        </div>

        <div className="button-group">
          <button className="btn-secondary">
            <Camera size={20} /> Upload food label photo
          </button>
          
          {/* Triggers the transition to the Result screen */}
          <button onClick={onAnalyze} className="btn-primary">
            <CheckCircle2 size={20} /> Analyze Safety
          </button>
        </div>
      </main>

      {/* Triggers the transition to the Demo screen */}
      <button className="btn-demo" onClick={onGoToDemo}>
        <FlaskConical size={14} /> Try a demo product instead
      </button>
    </div>
  );
}