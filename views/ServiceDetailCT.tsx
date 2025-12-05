
import React from 'react';
import { View } from '../types';
import { Clock, CheckCircle, AlertCircle, ArrowLeft, Calendar, FileText } from 'lucide-react';

interface Props {
  onNavigate: (view: View) => void;
}

const ServiceDetailCT: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen pb-12">
      {/* Hero */}
      <div className="relative h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516549882906-5a70006303f9?auto=format&fit=crop&q=80&w=2000" 
          alt="CT Scan Machine" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 container mx-auto max-w-7xl">
          <button 
            onClick={() => onNavigate(View.SERVICES)} 
            className="text-white/80 hover:text-white flex items-center gap-2 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Computed Tomography (CT) Scan</h1>
          <p className="text-xl text-green-200">Advanced high-resolution imaging for accurate diagnosis.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">What is a CT Scan?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A Computed Tomography (CT) scan combines a series of X-ray images taken from different angles around your body and uses computer processing to create cross-sectional images (slices) of the bones, blood vessels, and soft tissues inside your body. CT scan images provide more detailed information than plain X-rays.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">How is it performed?</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-600">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                  <p>You may be asked to change into a hospital gown and remove metal objects.</p>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                  <p>If contrast material is used, it may be swallowed, injected, or given as an enema.</p>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                  <p>You will lie on a narrow table that slides into the center of the CT scanner.</p>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                  <p>The table moves slowly through the scanner while X-rays rotate around you.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">Preparation Checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Wear comfortable, loose-fitting clothing.",
                  "Remove all metal objects (jewelry, glasses, dentures).",
                  "Fast for 4-6 hours if contrast dye is required.",
                  "Inform doctor about allergies, specifically to iodine.",
                  "Inform doctor if you are pregnant.",
                  "Bring previous X-ray or CT reports if available."
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                     <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                     <span className="text-sm text-gray-700">{item}</span>
                   </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex gap-4">
               <AlertCircle className="h-6 w-6 text-secondary flex-shrink-0" />
               <div>
                 <h3 className="font-bold text-primary text-lg mb-2">After the Test</h3>
                 <p className="text-gray-600 text-sm">
                   You can typically return to your normal activities immediately. If you were given contrast material, you may be asked to wait for a short time to ensure you feel well. Drinking plenty of fluids helps flush the contrast material from your body.
                 </p>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-secondary sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">At a Glance</h3>
              <div className="space-y-4 mb-6">
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Clock className="h-4 w-4" /> Duration</span>
                    <span className="font-semibold text-primary">15 - 30 Minutes</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><FileText className="h-4 w-4" /> Report Time</span>
                    <span className="font-semibold text-primary">Same Day / 24 hrs</span>
                 </div>
                 <div className="flex items-center justify-between pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Calendar className="h-4 w-4" /> Appointment</span>
                    <span className="font-semibold text-secondary">Required</span>
                 </div>
              </div>
              
              <div className="mb-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Starting from</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-primary">₹3,500</span>
                  <span className="text-sm text-gray-400 mb-1 line-through">₹4,500</span>
                </div>
              </div>

              <button 
                onClick={() => onNavigate(View.APPOINTMENT)}
                className="w-full bg-secondary hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
              >
                Book CT Scan Now
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                *Prices may vary based on specific body part and contrast requirement.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
               <h4 className="font-bold text-primary mb-2">Have Questions?</h4>
               <p className="text-sm text-gray-600 mb-4">Our radiology team is here to help you prepare.</p>
               <a href="tel:+91326230XXXX" className="text-secondary font-bold hover:underline">Call 0326-230-XXXX</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCT;
