import React, { useState } from 'react';
import IngrediSense from './Components/IngrediSense';
import AnalysisResult from './Components/AnalysisResult';
import TransparencyReport from './Components/TransparencyReport';
import DemoPage from './Components/DemoPage';

function App() {
  // 'input' | 'result' | 'report' | 'demo'
  const [view, setView] = useState('input');

  return (
    <div className="app-main">
      {view === 'input' && (
        <IngrediSense 
          onAnalyze={() => setView('result')} 
          onGoToDemo={() => setView('demo')}
        />
      )}

      {view === 'demo' && (
        <DemoPage 
          onAnalyze={() => setView('result')} 
          onSkip={() => setView('input')} 
        />
      )}

      {view === 'result' && (
        <AnalysisResult 
          onReset={() => setView('input')} 
          onViewReport={() => setView('report')} 
        />
      )}

      {view === 'report' && (
        <TransparencyReport onBack={() => setView('result')} />
      )}
    </div>
  );
}

export default App;