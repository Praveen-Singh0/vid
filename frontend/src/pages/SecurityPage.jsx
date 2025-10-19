import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

const SecurityPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-center">
            Security
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Your data security is our top priority
          </p>

          <Card>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-3">Data Encryption</h2>
                <p className="text-muted-foreground">
                  All data transmitted to and from VideoMaker is encrypted using industry-standard TLS 1.3 encryption. Data at rest is encrypted using AES-256 encryption.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Compliance</h2>
                <p className="text-muted-foreground mb-2">
                  VideoMaker is compliant with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>SOC 2 Type II</li>
                  <li>GDPR (General Data Protection Regulation)</li>
                  <li>CCPA (California Consumer Privacy Act)</li>
                  <li>PCI DSS (for payment processing)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Infrastructure Security</h2>
                <p className="text-muted-foreground">
                  Our infrastructure is hosted on secure, enterprise-grade cloud providers with 99.9% uptime SLA. We conduct regular security audits and penetration testing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Access Controls</h2>
                <p className="text-muted-foreground">
                  We implement strict access controls with multi-factor authentication, role-based permissions, and regular access reviews to ensure only authorized personnel can access systems.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Incident Response</h2>
                <p className="text-muted-foreground">
                  We have a dedicated security team and incident response plan. Any security incidents are handled immediately with full transparency to affected users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Report a Vulnerability</h2>
                <p className="text-muted-foreground">
                  If you discover a security vulnerability, please report it to security@videomaker.in. We take all reports seriously and respond within 24 hours.
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

export default SecurityPage;