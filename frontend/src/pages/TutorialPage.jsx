import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Play, User, Video, CreditCard, Download, Check } from 'lucide-react';

const TutorialPage = () => {
  const steps = [
    {
      icon: User,
      title: 'Step 1: Create Your Account',
      duration: '30 seconds',
      instructions: [
        'Click "Get Started Free" button on the homepage',
        'Enter your name, email, and password',
        'Click "Create Account" button',
        'You\'ll be automatically logged in to your dashboard'
      ],
      tips: 'No credit card required! You get 3 free videos to start.'
    },
    {
      icon: Video,
      title: 'Step 2: Create Your First Video',
      duration: '2 minutes',
      instructions: [
        'On your dashboard, find the "AI Video Generator" section',
        'Enter your video idea or script in the text box (Example: "Create a video about morning exercise tips")',
        'Select video length: Short (30s), Medium (1m), or Long (2m)',
        'Choose if you want AI voiceover (recommended)',
        'Select voice style from 6 options (Alloy, Echo, Fable, etc.)',
        'Click "Generate Video with AI" button',
        'Wait 1-2 minutes while AI creates your video'
      ],
      tips: 'Be specific with your idea! The more details you provide, the better your video will be.'
    },
    {
      icon: Download,
      title: 'Step 3: View & Download Your Video',
      duration: '1 minute',
      instructions: [
        'Once generated, you\'ll see your complete video script',
        'Review all video scenes with matched footage',
        'Click "View in Library" to see all your videos',
        'From library, click on any video to view full details',
        'Download your video or create another one'
      ],
      tips: 'All your videos are saved in "My Videos" - access them anytime!'
    },
    {
      icon: CreditCard,
      title: 'Step 4: Upgrade Your Plan (Optional)',
      duration: '2 minutes',
      instructions: [
        'Scroll to "Pricing" section on homepage',
        'Choose your plan: Starter (₹100/mo), Professional (₹1000/mo), or Enterprise (₹1500/mo)',
        'Toggle between Monthly or Annual billing',
        'Click "Get Started" on your chosen plan',
        'For India: PayU payment gateway (UPI, Cards, Net Banking)',
        'For International: Stripe payment gateway (Cards)',
        'Complete payment and enjoy unlimited features!'
      ],
      tips: 'Annual plans save you money! Try with free plan first before upgrading.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              How to Use <span className="gradient-text">VideoMaker</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Complete step-by-step guide to creating amazing AI videos
            </p>

            {/* Video Preview */}
            <Card className="relative overflow-hidden shadow-xl mb-8">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src="https://images.unsplash.com/photo-1559860199-52dc7841bf5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxBSSUyMHZpZGVvJTIwY3JlYXRpb258ZW58MHx8fHwxNzYwODA5NDE4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Tutorial Video"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-2xl">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-semibold">
                  5:00 Tutorial
                </div>
              </div>
            </Card>

            <p className="text-sm text-muted-foreground">
              ⏱️ Total time: 5 minutes • 🎯 Difficulty: Easy • 🎓 Complete beginner-friendly
            </p>
          </div>

          {/* Step-by-Step Guide */}
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Step Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <span className="text-sm text-muted-foreground">⏱️ {step.duration}</span>
                      </div>

                      {/* Instructions List */}
                      <div className="space-y-3 mb-4">
                        {step.instructions.map((instruction, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-4 h-4 text-success" />
                            </div>
                            <p className="text-foreground">{instruction}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tips */}
                      <div className="glass rounded-lg p-4 border-l-4 border-primary">
                        <p className="text-sm">
                          <span className="font-semibold">💡 Pro Tip:</span> {step.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Start Summary */}
          <Card className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Quick Start Summary</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">1</div>
                  <p className="text-sm">Sign Up Free</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">2</div>
                  <p className="text-sm">Enter Video Idea</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">3</div>
                  <p className="text-sm">Generate with AI</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">4</div>
                  <p className="text-sm">Download & Share</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Do I need a credit card to start?</h4>
                  <p className="text-muted-foreground">No! You get 3 free videos without entering any payment information.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">How long does it take to generate a video?</h4>
                  <p className="text-muted-foreground">Typically 1-2 minutes depending on video length and complexity.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Can I edit the video after generation?</h4>
                  <p className="text-muted-foreground">You can regenerate with different settings. Full editing features coming soon!</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">What payment methods do you accept?</h4>
                  <p className="text-muted-foreground">For India: UPI, Cards, Net Banking (PayU). International: Credit/Debit Cards (Stripe).</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TutorialPage;
