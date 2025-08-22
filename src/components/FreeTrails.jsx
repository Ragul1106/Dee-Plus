import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import meditator11 from "../assets/images/therapist11.png";
import meditator12 from "../assets/images/therapist12.png";
import meditator13 from "../assets/images/therapist13.png";
import meditator14 from "../assets/images/therapist14.png";
import meditator15 from "../assets/images/therapist15.png";

function FreeTrails() {
  const audioRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isPlaying, setIsPlaying] = useState([false, false, false, false, false]);
  const [progress, setProgress] = useState([0, 0, 0, 0, 0]);

  const audios = [
    {
      img: meditator11,
      author: "Pascal Auclair",
      title: "Rediscover the Familiar",
      desc: "This is the first time you’ve ever been here, now. Pascal invites you to discover the vivid and mysterious experience of this new moment.",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      img: meditator12,
      author: "Alexis Santos",
      title: "Natural mindful walking meditation",
      desc: "Taking a relaxed walk mindfully will soothe the nervous system, get you outside, and can refresh you mentally when you’re feeling low or off.",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      img: meditator13,
      author: "Sharon Salzberg",
      title: "Being with Big Emotions",
      desc: "Bring an open minded curiosity to your big emotions and get to know yourself more fully, developing resilience to deal with all the feels.",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      img: meditator14,
      author: "Joseph Goldstein",
      title: "Balanced Compassion",
      desc: "We're living in challenging times. Try practicing balance, letting you open to the suffering of the world without becoming overwhelmed.",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      img: meditator15,
      author: "Sebene Selassie",
      title: "Self-kindness for stress",
      desc: "Showing self compassion to ourselves in hard times bolsters our resilience, so we can learn from setbacks rather than getting stuck in rumination.",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];

  const togglePlay = (index) => {
    const newStates = [...isPlaying];
    if (isPlaying[index]) {
      audioRefs[index].current.pause();
      newStates[index] = false;
    } else {
      audioRefs.forEach((ref, i) => {
        if (i !== index && ref.current) ref.current.pause();
      });
      newStates.fill(false);
      audioRefs[index].current.play();
      newStates[index] = true;
    }
    setIsPlaying(newStates);
  };

  const handleTimeUpdate = (index) => {
    const current = audioRefs[index].current.currentTime;
    const duration = audioRefs[index].current.duration;
    const newProgress = [...progress];
    newProgress[index] = (current / duration) * 100;
    setProgress(newProgress);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center py-8 px-3 space-y-6">
      <h2 className="text-center text-lg sm:text-2xl md:text-3xl font-semibold text-[#6F145F] my-4">
        Discover popular meditations.
      </h2>

      {audios.map((audio, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 lg:gap-10 bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full max-w-5xl"
        >
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52 mx-auto sm:mx-0">
            <img
              src={audio.img}
              alt={audio.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <button
              onClick={() => togglePlay(index)}
              className="absolute inset-0 flex items-center justify-center rounded-xl"
            >
              <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white bg-opacity-70 rounded-full">
                {isPlaying[index] ? (
                  <Pause className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                ) : (
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                )}
              </span>
            </button>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-xs sm:text-sm md:text-lg font-medium text-gray-500 mb-1">
              {audio.author}
            </h4>
            <h2 className="text-sm sm:text-lg md:text-2xl mb-1">{audio.title}</h2>
            <p className="text-gray-600 mt-1 text-xs sm:text-sm md:text-lg">
              {audio.desc}
            </p>

            <div className="mt-4">
              <div className="relative h-[2px] bg-gray-600 rounded-full">
                <div
                  className="absolute top-0 left-0 h-[4px] bg-gray-500 rounded-full"
                  style={{ width: `${progress[index]}%` }}
                ></div>
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 border border-black rounded-full"
                  style={{ left: `calc(${progress[index]}% - 8px)` }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-xs md:text-sm font-bold text-gray-500 mt-4">
                <span>{formatTime(audioRefs[index].current?.currentTime || 0)}</span>
                <span>{formatTime(audioRefs[index].current?.duration || 0)}</span>
              </div>
            </div>
          </div>

          <audio
            ref={audioRefs[index]}
            src={audio.src}
            onTimeUpdate={() => handleTimeUpdate(index)}
            onEnded={() => {
              const newStates = [...isPlaying];
              newStates[index] = false;
              setIsPlaying(newStates);
            }}
          />
        </div>
      ))}

      <div className="flex justify-center my-6 w-full">
        <button className="w-full sm:w-auto bg-gray-900 text-white font-semibold py-2 px-8 sm:px-16 lg:px-20 text-sm sm:text-lg md:text-xl rounded-xl hover:bg-gray-800 transition">
          Get 14 Days Free Trial
        </button>
      </div>
    </div>
  );
}

export default FreeTrails;
