'use client';

// Placeholder component - functionality moved to main page
export function VideoGenerator() {
  return null;
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
