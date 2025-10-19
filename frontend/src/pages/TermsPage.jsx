import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-center">
            Terms of Service
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Last updated: January 2024
          </p>

          <Card>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using VideoMaker, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. Use of Service</h2>
                <p className="text-muted-foreground mb-2">
                  You agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Use the service in compliance with all applicable laws</li>
                  <li>Not misuse or abuse the service</li>
                  <li>Not upload illegal or inappropriate content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. Subscription and Payments</h2>
                <p className="text-muted-foreground">
                  Subscriptions are billed in advance on a recurring basis. You can cancel anytime. Refunds are provided according to our refund policy. All payments are processed securely through Stripe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. Content Ownership</h2>
                <p className="text-muted-foreground">
                  You retain all rights to the content you create using VideoMaker. We do not claim ownership of your videos. You grant us a limited license to host and process your content to provide the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. Prohibited Activities</h2>
                <p className="text-muted-foreground mb-2">
                  You may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Upload malicious code or viruses</li>
                  <li>Attempt to gain unauthorized access</li>
                  <li>Resell or redistribute the service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  VideoMaker is provided "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">8. Contact</h2>
                <p className="text-muted-foreground">
                  Questions about these terms? Contact us at legal@videomaker.in
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

export default TermsPage;