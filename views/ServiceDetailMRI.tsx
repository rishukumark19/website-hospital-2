
import React from 'react';
import { View } from '../types';
import { Clock, CheckCircle, AlertCircle, ArrowLeft, Calendar, FileText } from 'lucide-react';

interface Props {
  onNavigate: (view: View) => void;
}

const ServiceDetailMRI: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="relative h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
          alt="MRI Machine" 
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">High-Definition MRI</h1>
          <p className="text-xl text-green-200">Magnetic Resonance Imaging for detailed soft tissue analysis.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">What is an MRI?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Magnetic Resonance Imaging (MRI) is a non-invasive imaging technology that produces three-dimensional detailed anatomical images. It is often used for disease detection, diagnosis, and treatment monitoring. Unlike CT scans or X-rays, MRI does not use ionizing radiation.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Common uses of MRI:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {["Brain and Spinal Cord anomalies", "Tumors, cysts, and other anomalies", "Breast cancer screening", "Injuries to joints (knee, back)", "Heart problems", "Liver and other abdominal organs"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> {item}
                    </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">Safety & Preparation</h2>
              <p className="text-gray-600 mb-4">Because MRI uses strong magnets, it is critical to inform us if you have:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "Pacemaker or artificial heart valves",
                  "Metal implants, pins, or screws",
                  "Cochlear implants",
                  "Any metallic fragments in your body",
                  "Claustrophobia (fear of enclosed spaces)",
                  "Pregnancy (especially first trimester)"
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                     <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                     <span className="text-sm text-gray-800 font-medium">{item}</span>
                   </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">
                  *Please wear loose cotton clothing without metal zippers or buttons.
              </p>
            </div>

             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">Procedure Steps</h2>
               <div className="space-y-4">
                  <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                          <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                      </div>
                      <div className="pb-6">
                          <h4 className="font-bold text-gray-800">Check-in</h4>
                          <p className="text-sm text-gray-600">Complete safety questionnaire and change into a gown.</p>
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                          <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                      </div>
                      <div className="pb-6">
                          <h4 className="font-bold text-gray-800">Scan</h4>
                          <p className="text-sm text-gray-600">You lie on a table that slides into the magnet. You must stay very still. The machine makes loud tapping noises (earplugs provided).</p>
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                      </div>
                      <div>
                          <h4 className="font-bold text-gray-800">Completion</h4>
                          <p className="text-sm text-gray-600">Technician reviews images for quality. You can leave and resume normal diet/activity.</p>
                      </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-secondary sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Test Details</h3>
              <div className="space-y-4 mb-6">
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Clock className="h-4 w-4" /> Duration</span>
                    <span className="font-semibold text-primary">30 - 60 Minutes</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><FileText className="h-4 w-4" /> Report Time</span>
                    <span className="font-semibold text-primary">24 - 48 hrs</span>
                 </div>
                 <div className="flex items-center justify-between pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Calendar className="h-4 w-4" /> Appointment</span>
                    <span className="font-semibold text-secondary">Required</span>
                 </div>
              </div>
              
              <div className="mb-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Starting from</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-primary">₹6,000</span>
                  <span className="text-sm text-gray-400 mb-1 line-through">₹7,500</span>
                </div>
              </div>

              <button 
                onClick={() => onNavigate(View.APPOINTMENT)}
                className="w-full bg-secondary hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
              >
                Book MRI Scan
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailMRI;
