import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Card } from './ui/card';

export const VideoTutorialSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              See <span className="gradient-text">VideoMaker</span> in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch how easy it is to create professional videos with AI in just 2 minutes
            </p>
          </div>

          {/* Video Container */}
          <Card className="relative overflow-hidden shadow-2xl hover-lift">
            {!isPlaying ? (
              /* Video Thumbnail with Play Button */
              <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                  {/* Thumbnail Image */}
                  <img
                    src="https://images.unsplash.com/photo-1559860199-52dc7841bf5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxBSSUyMHZpZGVvJTIwY3JlYXRpb258ZW58MHx8fHwxNzYwODA5NDE4fDA&ixlib=rb-4.1.0&q=85"
                    alt="Video Tutorial"
                    className="w-full h-full object-cover"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Video Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      Complete VideoMaker Tutorial
                    </h3>
                    <p className="text-sm md:text-base text-white/90">
                      Learn how to create stunning AI videos from start to finish
                    </p>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-semibold">
                    2:30
                  </div>
                </div>
              </div>
            ) : (
              /* Video Player */
              <div className="relative aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="VideoMaker Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(false);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm hover:bg-black/90 flex items-center justify-center text-white transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </Card>

          {/* Tutorial Steps */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-1">Sign Up Free</h4>
              <p className="text-sm text-muted-foreground">Create your account in 30 seconds</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold mb-1">Enter Your Idea</h4>
              <p className="text-sm text-muted-foreground">Type what video you want to create</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-1">Get Your Video</h4>
              <p className="text-sm text-muted-foreground">Download and share your AI video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
