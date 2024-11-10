"use client"; // For using React hooks (useState, useEffect)

/** @jsxImportSource @emotion/react */
import { useState } from "react";
import axios from "axios";
import { Navbar } from "@/components/Navbar";
import { Stars } from "lucide-react";

export default function MainPage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle video transcription
  const handleTranscribe = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:8000/api/transcribe", { videoUrl });
      setTranscript(data.transcript);
    } catch (error) {
      console.error("Error transcribing video:", error);
    }
    setLoading(false);
  };

  // Function to handle summarization
  const handleSummarize = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:8000/api/summarize", { transcript });
      setResult(data.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
    }
    setLoading(false);
  };

  // Function to handle quiz generation
  const handleQuiz = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:8000/api/generate-quiz", { transcript });
      setResult(data.quiz);
    } catch (error) {
      console.error("Error generating quiz:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <Navbar />
      <Stars  />
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-3xl bg-black-800 p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-300 mb-6">AI Video Transcription & Analysis</h2>

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
              onClick={handleSummarize}
              disabled={!transcript || loading}
              className="w-1/3 py-3 bg-blue-500 text-white text-lg rounded-md disabled:bg-gray-300"
            >
              Summarize
            </button>
            <button
              onClick={handleQuiz}
              disabled={!transcript || loading}
              className="w-1/3 py-3 bg-blue-500 text-white text-lg rounded-md disabled:bg-gray-300"
            >
              Generate Quiz
            </button>
          </div>

          {loading && <p className="text-lg text-blue-500 mt-4">Loading...</p>}

          {result && (
            <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50 text-left max-h-72 overflow-y-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Result:</h3>
              <p className="text-lg text-gray-700">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
