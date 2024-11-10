"use client"; // Enables client-side features and hooks in Next.js

/** @jsxImportSource @emotion/react */
import { useState } from "react";
import axios from "axios";
import { Navbar } from "@/components/Navbar";
import Stars from "@/components/ui/stars";
const videoUrl = ""; // Initialize videoUrl with an empty string or a valid URL
const response = await axios.post('/api/summarize', { videoUrl });


// Access environment variables directly from process.env
const DEEPGRAM_API_KEY = process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY;
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const handleSummarize = async (videoUrl: string) => {
  try {
    setLoading(true);
    const response = await axios.post('/api/summarize', { videoUrl });
    setResult(response.data.summary);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error('Server responded with an error:', error.response);
      } else if (error.request) {
        console.error('Request was made but no response received:', error.request);
      } else {
        console.error('Error occurred while setting up the request:', error.message);
      }
    } else {
      console.error('Unexpected error:', error);
    }
  } finally {
    setLoading(false);
  }
};

export default function MainPage() {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [transcript, setTranscript] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

const generateSummary = async (videoUrl: string) => {
  try {
    setLoading(true);
    const response = await axios.post('/api/summarize', { videoUrl }); // Ensure this endpoint is correct
    setResult(response.data.summary);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error generating summary:", error.response || error.message); // Improved logging
    } else {
      console.error("Error generating summary:", error);
    }
  } finally {
    setLoading(false);
  }
};


  const handleTranscribe = async () => {
    setLoading(true);
    setResult("");
    try {
      const audioBlob = await downloadAndConvertVideoToAudio(videoUrl);
      const transcription = await transcribeAudio(audioBlob);
      setTranscript(transcription);
    } catch (error) {
      console.error("Error transcribing video:", error);
    }
    setLoading(false);
  };

  const downloadAndConvertVideoToAudio = async (url: string): Promise<Blob> => {
    try {
      const response = await axios.post(
        "/api/download-audio",
        { videoUrl: url },
        { responseType: "blob" }
      );
      return response.data;
    } catch (error) {
      console.error("Error downloading and converting video:", error);
      throw new Error("Error downloading and converting video");
    }
  };

  const transcribeAudio = async (audioBlob: Blob) => {
    const deepgramUrl = "https://api.deepgram.com/v1/listen";
    const response = await axios.post(deepgramUrl, audioBlob, {
      headers: {
        Authorization: `Bearer ${DEEPGRAM_API_KEY}`,
        "Content-Type": "audio/mp3",
      },
    });
    return response.data.results.channels[0].alternatives[0].transcript;
  };

  const handleSummarize = async () => {
    setLoading(true);
    setResult("");
    try {
      const { data } = await axios.post("https://api.example.com/summarize", {
        transcript,
      });
      setResult(data.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
    }
    setLoading(false);
  };

  const handleQuiz = async () => {
    setLoading(true);
    setResult("");
    try {
      const { data } = await axios.post(
        "https://api.example.com/generate-quiz",
        { transcript }
      );
      setResult(data.quiz);
    } catch (error) {
      console.error("Error generating quiz:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <Navbar />
      <Stars />
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-3xl bg-black-800 p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-300 mb-6">
            AI Video Transcription & Analysis
          </h2>

          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Enter YouTube video link"
            className="w-full p-3 text-lg border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          />

          <div className="flex justify-between gap-4 mb-6">
            <button
              onClick={handleTranscribe}
              disabled={!videoUrl || loading}
              className="w-1/3 py-3 bg-blue-500 text-white text-lg rounded-md disabled:bg-gray-300"
            >
              Transcribe Video
            </button>

            <button
              onClick={handleTranscribe}
              disabled={!videoUrl || loading}
              className="w-1/3 py-3 bg-blue-500 text-white text-lg rounded-md disabled:bg-gray-300"
            >
              Transcribe Video
            </button>

            <button
              onClick={handleSummarize}
              
              className="w-1/3 py-3 bg-blue-500 text-white text-lg rounded-md disabled:bg-gray-300"
            >
              Summarize
            </button>

            <button
              onClick={handleQuiz}
              
              className="w-1/3 py-3 bg-blue-500 text-white text-lg rounded-md disabled:bg-gray-300"
            >
              Generate Quiz
            </button>
          </div>

          {loading && <p className="text-lg text-blue-500 mt-4">Loading...</p>}

          {result && (
            <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50 text-left max-h-72 overflow-y-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Result:
              </h3>
              <p className="text-lg text-gray-700">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setResult(summary: any) {
  throw new Error("Function not implemented.");
}

