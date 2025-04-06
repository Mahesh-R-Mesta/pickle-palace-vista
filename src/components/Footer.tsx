
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 md:py-16 bg-pickle-brown/10 border-t border-pickle-brown/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-pickle-brown/80 max-w-md">
              Bringing the authentic taste of traditional Indian pickles to your table since 1965.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-pickle-brown">Contact Us</h3>
            <address className="not-italic text-pickle-brown/80 space-y-2">
              <p>123 Spice Avenue</p>
              <p>Flavor District, Pickle Town</p>
              <p>Karnataka, India - 560001</p>
            </address>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-pickle-brown">Get in Touch</h3>
            <div className="text-pickle-brown/80 space-y-2">
              <p>Email: info@picklepalace.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Hours: Mon-Sat, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-pickle-brown/10 text-center text-pickle-brown/70">
          <p>© {new Date().getFullYear()} Pickle Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
