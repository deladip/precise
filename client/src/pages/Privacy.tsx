export default function Privacy() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-lg">
              <strong className="text-primary">Effective Date:</strong> January 1, 2026
            </p>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Information We Collect</h2>
              <p>
                PRECISE METHOD collects personal information that you voluntarily provide when using our services, 
                including but not limited to your name, email address, phone number, and any details you share 
                through our contact forms or during consultations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Schedule appointments and consultations</li>
                <li>Communicate important updates regarding our services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. All client data is kept 
                strictly confidential in accordance with professional standards and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only when required by law, to comply with legal processes, or to protect our rights 
                and the safety of others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information, subject to legal retention requirements</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <p className="font-medium text-primary">PRECISE METHOD</p>
                <p>Email: <a href="mailto:service@precisemethod.pro" className="text-accent hover:underline">service@precisemethod.pro</a></p>
                <p>Phone: <a href="tel:833-454-4794" className="text-accent hover:underline">833-454-4794</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
