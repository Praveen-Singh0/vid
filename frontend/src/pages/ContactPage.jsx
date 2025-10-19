import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows="6"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        required
                      />
                    </div>
                    {submitted && (
                      <div className="p-3 bg-success/10 border border-success/20 text-success rounded-lg text-sm">
                        Thank you! Your message has been sent.
                      </div>
                    )}
                    <Button type="submit" variant="premium" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground">support@videomaker.in</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <MessageSquare className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Office</h3>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
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

export default ContactPage;