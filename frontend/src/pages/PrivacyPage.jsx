import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Last updated: January 2024
          </p>

          <Card>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-2">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Name and email address</li>
                  <li>Account credentials</li>
                  <li>Payment information (processed securely via Stripe)</li>
                  <li>Content you create and upload</li>
                  <li>Usage data and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-2">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your requests and questions</li>
                  <li>Personalize your experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your data. All data is encrypted in transit and at rest. Payment information is handled securely through Stripe and never stored on our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. Your Rights</h2>
                <p className="text-muted-foreground mb-2">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies to enhance your experience, analyze usage, and provide personalized content. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at privacy@videomaker.in
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;