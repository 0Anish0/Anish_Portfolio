import React from 'react';
import Head from 'next/head';

const TermsOfService: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Anish Kumar Pandey</title>
        <meta name="description" content="Terms of Service for Anish Kumar Pandey's portfolio website" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Website Content</h2>
                <p className="text-gray-300 mb-4">
                  The content of this website is for your general information and use only. 
                  It is subject to change without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  All content, including but not limited to text, graphics, images, and code, 
                  is the intellectual property of Anish Kumar Pandey unless otherwise stated.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at:
                  <br />
                  Email: anishpandey4576@gmail.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService; 