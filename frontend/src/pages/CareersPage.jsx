import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const CareersPage = () => {
  const jobs = [
    {
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA (Remote)',
      type: 'Full-time'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'New York, NY',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Help us revolutionize video creation with AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, i) => (
              <Card key={i} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button variant="primary">Apply Now</Button>
                  </div>
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

export default CareersPage;