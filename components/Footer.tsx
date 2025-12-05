import React from 'react';
import { View } from '../types';
import { 
  Activity, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div>
                 <span className="text-xl font-bold tracking-tight block leading-none">Avishkar</span>
                 <span className="text-xs text-secondary font-bold tracking-wide uppercase">Diagnostic Centre</span>
              </div>
            </div>
            <p className="text-green-50 text-sm leading-relaxed">
              Avishkar Diagnostic Centre is Dhanbad's premier diagnostic facility, committed to providing accurate, timely, and quality services with a human touch at Bank More.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors group">
                <Facebook className="h-5 w-5 text-green-100 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors group">
                <Twitter className="h-5 w-5 text-green-100 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors group">
                <Instagram className="h-5 w-5 text-green-100 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors group">
                <Linkedin className="h-5 w-5 text-green-100 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Patient Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">For Patients</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', view: View.HOME },
                { label: 'About Us', view: View.ABOUT },
                { label: 'Our Services', view: View.SERVICES },
                { label: 'Book Appointment', view: View.APPOINTMENT },
                { label: 'Find a Lab', view: View.LOCATOR },
              ].map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => link.view && onNavigate(link.view)}
                    className="text-green-100 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Doctor Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">For Doctors</h3>
            <ul className="space-y-3">
              {['Refer a Patient', 'Partner with Us', 'Clinical Research', 'Careers', 'News & Updates'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-green-100 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-green-100 text-sm">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Bank More, Dhanbad,<br/>Jharkhand 826001</span>
              </li>
              <li className="flex items-center gap-3 text-green-100 text-sm">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>+91 326 230 XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-green-100 text-sm">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>info@avishkardiagnostic.com</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-green-100 mb-1">Emergency Hotline (24/7)</p>
                <p className="text-2xl font-bold text-secondary">0326-230-000</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-200">
          <p>&copy; {new Date().getFullYear()} Avishkar Diagnostic Centre, Dhanbad. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;