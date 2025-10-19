import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, User, Tag } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      title: '10 Tips for Creating Engaging Video Content',
      excerpt: 'Learn the secrets to keeping your audience hooked from start to finish.',
      date: 'Jan 15, 2024',
      author: 'Sarah Johnson',
      category: 'Tips'
    },
    {
      title: 'How AI is Revolutionizing Video Production',
      excerpt: 'Discover how artificial intelligence is changing the video creation landscape.',
      date: 'Jan 12, 2024',
      author: 'Michael Chen',
      category: 'Technology'
    },
    {
      title: 'Video Marketing Statistics You Need to Know',
      excerpt: 'Latest data on video marketing performance and consumer behavior.',
      date: 'Jan 10, 2024',
      author: 'Emily Rodriguez',
      category: 'Marketing'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              VideoMaker <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tips, tutorials, and insights for video creators
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post, i) => (
              <Card key={i} className="hover-lift cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;