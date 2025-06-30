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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← ホームに戻る
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">試験タイマー</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {!selectedTimer ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">タイマーを選択してください</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timers.map((timer) => (
                <div
                  key={timer.id}
                  className={`${timer.color} text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105`}
                  onClick={() => selectTimer(timer.duration)}
                >
                  <div className="text-4xl font-bold mb-2">{timer.duration}分</div>
                  <div className="text-xl font-medium">{timer.name}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {timers.find(t => t.duration === selectedTimer)?.name}
              </h2>
              
              {/* 時計の視覚化 */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <div className="absolute inset-0 border-8 border-gray-200 rounded-full"></div>
                <div 
                  className="absolute inset-0 border-8 border-blue-500 rounded-full transition-all duration-1000"
                  style={{
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((angle - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((angle - 90) * Math.PI / 180)}%)`
                  }}
                ></div>
                
                {/* 時計の針 */}
                <div 
                  className="absolute top-1/2 left-1/2 w-1 h-20 bg-blue-600 transform -translate-x-1/2 -translate-y-full origin-bottom transition-transform duration-1000"
                  style={{ transform: `translate(-50%, -100%) rotate(${angle}deg)` }}
                ></div>
                
                {/* 中心点 */}
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* 時間表示 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-800 font-mono">
                    {formatTime(timeLeft)}
                  </div>
                </div>
              </div>
              
              {/* プログレスバー */}
              <div className="w-full max-w-md mx-auto mb-8">
                <div className="bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  進捗: {Math.round(progress)}%
                </div>
              </div>
            </div>
            
            {/* コントロールボタン */}
            <div className="flex justify-center gap-4 flex-wrap">
              {!isRunning ? (
                <button
                  onClick={startTimer}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  スタート
                </button>
              ) : (
                <>
                  {!isPaused ? (
                    <button
                      onClick={pauseTimer}
                      className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
                    >
                      一時停止
                    </button>
                  ) : (
                    <button
                      onClick={resumeTimer}
                      className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                    >
                      再開
                    </button>
                  )}
                </>
              )}
              <button
                onClick={resetTimer}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
              >
                リセット
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 