import React from 'react';
import { Toaster } from 'sonner';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background-color: #020617;
          color: #f8fafc;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #22d3ee, #60a5fa);
        }
        
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
        }
      `}</style>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#1e293b',
            border: '1px solid #334155',
            color: '#f8fafc',
          },
        }}
      />
      {children}
    </div>
  );
}