
import React, { useState } from 'react';
import { View } from '../types';
import { popularPackages, quickActions } from '../data/mockData';
import PackageCard from '../components/PackageCard';
import BookingModal from '../components/BookingModal';
import ReportModal from '../components/ReportModal';
import HealthConcerns from './HealthConcerns';
import TestimonialCard from '../components/TestimonialCard';
import { 
  ArrowRight, 
  MapPin, 
  Home as HomeIcon, 
  FileText, 
  Users, 
  ChevronRight,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Star,
  Calendar,
  Search,
  Upload,
  ChevronDown
} from 'lucide-react';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [heroSearch, setHeroSearch] = useState('');
  
  const handleQuickAction = (link: string) => {
    if (link === '/locator') onNavigate(View.LOCATOR);
    else if (link === '/book-visit') onNavigate(View.HOME_COLLECTION);
    else if (link === '/reports') onNavigate(View.REPORT_DOWNLOAD);
  };

  const iconMap: Record<string, React.ElementType> = {
    Home: HomeIcon,
    MapPin: MapPin,
    FileText: FileText
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bank More, Dhanbad",
      rating: 5,
      text: "The home collection service was incredibly punctual. The phlebotomist was professional and painless. Got reports on email same day!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Rahul Verma",
      location: "Jharia",
      rating: 5,
      text: "Avishkar is the only place I trust for my parents' diabetes monitoring. Accurate reports and very helpful staff.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Anjali Gupta",
      location: "Hirapur",
      rating: 4,
      text: "Very clean and hygienic lab. The wait time was minimal and the staff guided me well for my MRI scan.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

      {/* 
        HERO SECTION - REFERENCE IMAGE STYLE
        Structure:
        - Purple/Gradient Background
        - Image on Left (Doctor/Person)
        - Action Strip (Location | Search | Upload Rx) floating in center/right
      */}
      <section className="relative bg-gradient-to-r from-purple-50 via-white to-green-50 overflow-visible pt-8 pb-16 md:pb-24 lg:pb-32">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
             <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col lg:flex-row items-center">
                
                {/* 1. Doctor Image - Positioned Left */}
                <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-start">
                     {/* Desktop Image - Standing Tall */}
                     <img 
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" 
                        alt="Avishkar Doctor" 
                        className="relative z-10 max-h-[350px] md:max-h-[450px] object-contain drop-shadow-2xl filter brightness-105" 
                        loading="eager"
                     />
                     {/* Circle BG behind doctor */}
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-t from-primary/10 to-transparent rounded-full -z-10"></div>
                </div>

                {/* 2. Content & Action Strip */}
                <div className="w-full lg:w-7/12 mt-8 lg:mt-0 lg:pl-10">
                    
                    {/* Headline - Clean & Professional */}
                    <div className="text-center lg:text-left mb-8 md:mb-12">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary mb-4 border border-green-100 shadow-sm">
                            <ShieldCheck className="h-3.5 w-3.5" /> Trusted by 10 Lakh+ Patients
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
                           Precision Diagnostics<br/>
                           <span className="text-primary">You Can Trust</span>
                        </h1>
                        <p className="text-gray-500 text-lg">NABL Accredited Lab • 24/7 Service • Home Collection</p>
                    </div>

                    {/* 
                       THE ACTION STRIP - Like Reference Image 
                       [ Location (Orange) ] [ Search (White) ] [ Upload Rx (Beige) ]
                    */}
                    <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-stretch overflow-hidden border border-gray-100 max-w-3xl mx-auto lg:mx-0">
                        
                        {/* Segment 1: Location - Orange/Accent */}
                        <div className="bg-[#F39C12] text-white px-6 py-4 flex items-center gap-3 md:border-r border-white/20 cursor-pointer hover:bg-[#E67E22] transition-colors md:w-[240px] flex-shrink-0">
                            <MapPin className="h-5 w-5" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold opacity-90 tracking-wider">Location</span>
                                <div className="flex items-center gap-1 font-bold text-sm">
                                    Bank More <ChevronDown className="h-3 w-3" />
                                </div>
                            </div>
                        </div>

                        {/* Segment 2: Search - White */}
                        <div className="flex-grow bg-white px-6 py-4 flex items-center gap-3">
                            <Search className="h-5 w-5 text-gray-400" />
                            <input 
                                type="text"
                                value={heroSearch}
                                onChange={(e) => setHeroSearch(e.target.value)}
                                placeholder="Search for Tests & Packages..."
                                className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium"
                            />
                        </div>

                        {/* Segment 3: Upload Rx Button - Right Side - Beige/Light */}
                        <button 
                             onClick={() => setIsReportModalOpen(true)}
                             className="bg-[#FEF3C7] text-[#92400E] hover:bg-[#FDE68A] px-6 py-4 flex items-center justify-center gap-3 font-bold transition-colors md:w-auto"
                        >
                            <div className="bg-white/50 p-1.5 rounded-lg">
                                <FileText className="h-5 w-5" />
                            </div>
                            <span>Upload Prescription</span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
      </section>

      {/* Stats Section - Clean Strip */}
      <div className="bg-white border-t border-b border-gray-100 relative z-20 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 divide-x divide-gray-100 py-4">
                <div className="text-center px-2">
                    <p className="text-lg md:text-2xl font-bold text-gray-800">10L+</p>
                    <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Patients</p>
                </div>
                <div className="text-center px-2">
                    <p className="text-lg md:text-2xl font-bold text-gray-800">24/7</p>
                    <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Support</p>
                </div>
                <div className="text-center px-2">
                    <p className="text-lg md:text-2xl font-bold text-gray-800">500+</p>
                    <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Tests</p>
                </div>
            </div>
        </div>
      </div>

      <HealthConcerns onNavigate={onNavigate} />

      {/* Popular Packages */}
      <section className="py-20 bg-soft-blue" aria-labelledby="packages-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="packages-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">Best Selling Packages</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive health checkups tailored for every age and lifestyle in Dhanbad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {popularPackages.slice(0, 4).map(pkg => (
              <PackageCard 
                key={pkg.id} 
                pkg={pkg} 
                onBook={(id) => onNavigate(View.APPOINTMENT)} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <button 
              onClick={() => onNavigate(View.WELLNESS)}
              className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all text-lg shadow-sm"
            >
              View All Health Packages
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-block px-3 py-1 bg-green-100 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                 Testimonials
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Patient Success Stories</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here is what our patients from Dhanbad have to say.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm font-bold text-gray-500">
               <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /> 4.9/5 Rating</span>
               <span>•</span>
               <span>2000+ Google Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-green-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose <span className="text-secondary">Avishkar?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine technological excellence with a human touch right here in Dhanbad. Our rigorous quality control ensures that every report is accurate.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                    "NABL & CAP Accredited Laboratories",
                    "Home Sample Collection Available",
                    "Smart Reports with Historical Trends",
                    "Affordable & Transparent Pricing"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-white border border-green-200 flex items-center justify-center text-secondary flex-shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                            <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">{item}</span>
                    </li>
                ))}
              </ul>

              <button 
                onClick={() => onNavigate(View.ABOUT)}
                className="bg-primary hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-green-900/10 hover:shadow-green-900/20"
              >
                Learn More About Us
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto bg-gray-200">
                    <img 
                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000" 
                        alt="Dr. Rajesh Kumar at Avishkar Diagnostic Dhanbad" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-bold text-lg">Dr. Rajesh Kumar</p>
                        <p className="text-sm opacity-90">Senior Pathologist, Avishkar Diagnostic</p>
                    </div>
                </div>

                <div className="absolute top-10 -left-4 md:-left-12 bg-white p-4 rounded-xl shadow-lg border-l-4 border-secondary max-w-[160px] animate-bounce-slow">
                    <div className="flex items-center gap-3 mb-1">
                        <Users className="h-5 w-5 text-secondary" />
                        <span className="font-bold text-2xl text-primary">10L+</span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Happy Patients</p>
                </div>

                <div className="absolute bottom-20 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-lg border-l-4 border-primary max-w-[180px] animate-bounce-delayed">
                    <div className="flex items-center gap-3 mb-1">
                        <Activity className="h-5 w-5 text-primary" />
                        <span className="font-bold text-2xl text-primary">24hrs</span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Report Turnaround</p>
                </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
