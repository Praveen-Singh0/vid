import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import DashboardLayout from '../components/DashboardLayout';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Video, Trash2, Eye, Loader2 } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const VideoLibraryPage = () => {
  const { token } = useAuth();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/videos/my-videos`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setVideos(response.data.videos);
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = async (videoId) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/videos/video/${videoId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSelectedVideo(response.data.video);
    } catch (error) {
      console.error('Failed to fetch video:', error);
    }
  };

  const handleDelete = async (videoId) => {
    if (!window.confirm('Are you sure you want to delete this video?')) return;

    setDeleteLoading(videoId);
    try {
      await axios.delete(`${BACKEND_URL}/api/videos/video/${videoId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setVideos(videos.filter(v => v.id !== videoId));
      if (selectedVideo?.id === videoId) {
        setSelectedVideo(null);
      }
    } catch (error) {
      console.error('Failed to delete video:', error);
    } finally {
      setDeleteLoading(null);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold font-heading mb-2">My Videos</h1>
          <p className="text-muted-foreground">
            {videos.length} {videos.length === 1 ? 'video' : 'videos'} created
          </p>
        </div>

        {videos.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Video className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No videos yet</h3>
              <p className="text-muted-foreground mb-4">
                Create your first AI-powered video
              </p>
              <Button
                variant="premium"
                onClick={() => window.location.href = '/dashboard'}
              >
                Create Video
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video List */}
            <div className="lg:col-span-1 space-y-3">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className={`cursor-pointer transition-all hover-lift ${
                    selectedVideo?.id === video.id ? 'border-primary shadow-elegant' : ''
                  }`}
                  onClick={() => handleView(video.id)}
                >
                  <CardContent className="p-4">
                    {video.thumbnail && (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                    )}
                    <h3 className="font-semibold mb-1 line-clamp-2">{video.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {new Date(video.created_at).toLocaleDateString()}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleView(video.id);
                        }}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(video.id);
                        }}
                        disabled={deleteLoading === video.id}
                      >
                        {deleteLoading === video.id ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : (
                          <Trash2 className="w-3 h-3 text-destructive" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Video Preview */}
            <div className="lg:col-span-2">
              {selectedVideo ? (
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
                      <p className="text-sm text-muted-foreground">
                        Created on {new Date(selectedVideo.created_at).toLocaleDateString()}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Original Prompt:</h3>
                      <p className="text-sm text-muted-foreground">{selectedVideo.prompt}</p>
                    </div>

                    <div className="glass rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Generated Script:</h3>
                      <p className="text-sm whitespace-pre-wrap">{selectedVideo.script}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Video Scenes:</h3>
                      <div className="space-y-3">
                        {selectedVideo.scenes?.map((scene, index) => (
                          <div key={index} className="glass rounded-lg p-4">
                            <div className="flex gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-primary text-sm">{index + 1}</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm mb-2">{scene.text}</p>
                                {scene.footage && (
                                  <img
                                    src={scene.footage.thumbnail}
                                    alt={`Scene ${index + 1}`}
                                    className="rounded-lg w-full h-40 object-cover"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-16">
                    <Video className="w-12 h-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Select a video to view details
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default VideoLibraryPage;
