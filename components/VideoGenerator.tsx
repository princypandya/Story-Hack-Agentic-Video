'use client';

import { useState } from 'react';

interface VideoGeneratorProps {
  onScriptGenerated: (script: any) => void;
  onGenerating: (isGenerating: boolean) => void;
  onProgress: (message: string) => void;
}

export function VideoGenerator({ onScriptGenerated, onGenerating, onProgress }: VideoGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [duration, setDuration] = useState('10');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleGenerateScript = async () => {
    if (!pdfFile) {
      alert('Please select a PDF file');
      return;
    }

    setIsLoading(true);
    onGenerating(true);
    onProgress('Uploading and parsing PDF...');

    try {
      const formData = new FormData();
      formData.append('file', pdfFile);
      formData.append('duration', duration);

      const response = await fetch('/api/generate-script', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to generate script');

      const data = await response.json();
      onProgress('Script generated successfully!');
      onScriptGenerated(data.script);
    } catch (error) {
      console.error('Error:', error);
      onProgress('Error generating script');
      alert('Failed to generate script. Check console for details.');
    } finally {
      setIsLoading(false);
      onGenerating(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-4">1. Upload & Generate Script</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Upload PDF Paper
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white file:bg-blue-600 file:text-white file:border-0 file:px-3 file:py-1 file:rounded file:cursor-pointer"
          />
          {pdfFile && (
            <p className="text-sm text-green-400 mt-1">✓ {pdfFile.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Video Duration (minutes)
          </label>
          <input
            type="number"
            min="1"
            max="60"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
          />
        </div>

        <button
          onClick={handleGenerateScript}
          disabled={isLoading || !pdfFile}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold rounded-md transition"
        >
          {isLoading ? 'Generating Script...' : 'Generate Script'}
        </button>
      </div>
    </div>
  );
}
