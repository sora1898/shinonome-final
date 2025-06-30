"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const timers = [
  { id: 1, name: "英語", duration: 90, color: "bg-blue-500" },
  { id: 2, name: "歴史・地理", duration: 80, color: "bg-green-500" },
  { id: 3, name: "小論文", duration: 60, color: "bg-purple-500" },
];

export default function Timer() {
  const [selectedTimer, setSelectedTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialTime, setInitialTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const selectTimer = (duration: number) => {
    setSelectedTimer(duration);
    setTimeLeft(duration * 60);
    setInitialTime(duration * 60);
    setIsRunning(false);
    setIsPaused(false);
  };

  const startTimer = () => {
    if (selectedTimer && !isRunning) {
      setIsRunning(true);
      setIsPaused(false);
      
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            setIsPaused(false);
            alert("時間です！");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsPaused(true);
  };

  const resumeTimer = () => {
    setIsPaused(false);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          setIsPaused(false);
          alert("時間です！");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeLeft(0);
    setIsRunning(false);
    setIsPaused(false);
    setSelectedTimer(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = initialTime > 0 ? ((initialTime - timeLeft) / initialTime) * 100 : 0;
  const angle = (progress / 100) * 360;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Ultra-Premium Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-violet-900/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/IMG_1994.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          filter: 'contrast(1.2) brightness(0.95)'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/85 backdrop-blur-[0.5px]"></div>
      </div>
      
      {/* Ultra-Thin Premium Header */}
      <header className="sticky top-0 z-50 glass border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 font-light transition-all duration-500 hover:-translate-x-1">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ホームに戻る
            </Link>
            <h1 className="text-xl md:text-2xl font-light text-gray-900 tracking-wide">試験タイマー</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {!selectedTimer ? (
          <div className="text-center animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">タイマーを選択してください</h2>
            <p className="text-gray-600 mb-12">科目に応じた試験時間を設定します</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {timers.map((timer) => (
                <div
                  key={timer.id}
                  className="card card-hover p-8 cursor-pointer group"
                  onClick={() => selectTimer(timer.duration)}
                >
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow">
                      <span className="text-2xl font-bold">{timer.duration}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{timer.name}</h3>
                      <p className="text-gray-500">{timer.duration}分</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {timers.find(t => t.duration === selectedTimer)?.name}
              </h2>
              <p className="text-gray-600">試験時間: {selectedTimer}分</p>
            </div>
            
            <div className="card p-8 md:p-12">
              {/* Modern Timer Display */}
              <div className="relative w-72 h-72 mx-auto mb-8">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="144"
                    cy="144"
                    r="120"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="144"
                    cy="144"
                    r="120"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 120}`}
                    strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
                    className="text-blue-600 transition-all duration-1000"
                  />
                </svg>
                
                {/* Digital Time Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 font-mono tabular-nums">
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-gray-500 mt-2">
                    {isRunning ? (isPaused ? '一時停止中' : '実行中') : '準備完了'}
                  </div>
                </div>
              </div>
              
              {/* Progress Information */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>経過時間: {formatTime(initialTime - timeLeft)}</span>
                  <span>残り時間: {formatTime(timeLeft)}</span>
                </div>
                <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              
              {/* Control Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                {!isRunning ? (
                  <button
                    onClick={startTimer}
                    className="btn-primary"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    スタート
                  </button>
                ) : (
                  <>
                    {!isPaused ? (
                      <button
                        onClick={pauseTimer}
                        className="btn-secondary"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        一時停止
                      </button>
                    ) : (
                      <button
                        onClick={resumeTimer}
                        className="btn-primary"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        再開
                      </button>
                    )}
                  </>
                )}
                <button
                  onClick={resetTimer}
                  className="btn-secondary"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  リセット
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}