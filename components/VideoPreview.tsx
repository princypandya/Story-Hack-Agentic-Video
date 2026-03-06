'use client';

import { useState } from 'react';

interface VideoPreviewProps {
  script: any;
  videoUrl: string | null;
  isGenerating: boolean;
  progress: string;
  onVideoGenerated: (url: string) => void;
}

export function VideoPreview({ 
  script, 
  videoUrl, 
  isGenerating, 
  progress, 
  onVideoGenerated 
}: VideoPreviewProps) {
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);

  const handleGenerateVideo = async () => {
    if (!script) {
      alert('Please generate a script first');
      return;
    }

    setIsGeneratingVideo(true);

    try {
      const response = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ script }),
      });

      if (!response.ok) throw new Error('Failed to generate video');

      const data = await response.json();
      onVideoGenerated(data.videoUrl);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate video. Check console for details.');
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-white mb-4">2. Generate Video</h2>

      <div className="flex-1 flex flex-col justify-center items-center bg-slate-700 rounded-lg mb-4 min-h-72">
        {videoUrl ? (
          <video
            src={videoUrl}
            controls
            className="w-full h-full rounded-lg object-cover"
          />
        ) : isGeneratingVideo || isGenerating ? (
          <div className="text-center">
            <div className="animate-spin inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
            <p className="text-white font-semibold">{progress || 'Processing...'}</p>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-4">🎬</div>
            <p className="text-gray-300">Generated video will appear here</p>
          </div>
        )}
      </div>

      <button
        onClick={handleGenerateVideo}
        disabled={!script || isGeneratingVideo}
        className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-semibold rounded-md transition"
      >
        {isGeneratingVideo ? 'Generating Video...' : 'Generate Video from Script'}
      </button>

      {videoUrl && (
        <div className="mt-4 p-3 bg-green-900 rounded-lg border border-green-600">
          <p className="text-green-300 text-sm">✓ Video generated successfully!</p>
          <a 
            href={videoUrl} 
            download 
            className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}
