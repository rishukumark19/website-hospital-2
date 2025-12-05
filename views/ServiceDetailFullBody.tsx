
import React from 'react';
import { View } from '../types';
import { Clock, CheckCircle, ArrowLeft, Calendar, FileText, Activity } from 'lucide-react';

interface Props {
  onNavigate: (view: View) => void;
}

const ServiceDetailFullBody: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="relative h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=2000" 
          alt="Doctor Consultation" 
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Comprehensive Full Body Checkup</h1>
          <p className="text-xl text-green-200">A complete health assessment to ensure your well-being.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">Why do you need this?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Regular full body checkups are essential for detecting silent health issues like high blood pressure, diabetes, cholesterol, and nutritional deficiencies before they become serious. This package provides a holistic view of your vital organs' health.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included (60+ Tests):</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-100 rounded-xl p-4">
                      <h4 className="font-bold text-secondary mb-2 flex items-center gap-2"><Activity className="h-4 w-4" /> Blood & Diabetes</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Complete Blood Count (CBC)</li>
                          <li>• Fasting Blood Sugar</li>
                          <li>• HbA1c</li>
                      </ul>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-4">
                      <h4 className="font-bold text-secondary mb-2 flex items-center gap-2"><Activity className="h-4 w-4" /> Heart & Lipid</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Cholesterol (Total, HDL, LDL)</li>
                          <li>• Triglycerides</li>
                      </ul>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-4">
                      <h4 className="font-bold text-secondary mb-2 flex items-center gap-2"><Activity className="h-4 w-4" /> Liver Function</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                          <li>• SGOT / SGPT</li>
                          <li>• Bilirubin</li>
                          <li>• Protein & Albumin</li>
                      </ul>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-4">
                      <h4 className="font-bold text-secondary mb-2 flex items-center gap-2"><Activity className="h-4 w-4" /> Kidney & Urine</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Creatinine</li>
                          <li>• Urea & Uric Acid</li>
                          <li>• Urine Routine</li>
                      </ul>
                  </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">Preparation Instructions</h2>
              <div className="space-y-4">
                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                          <h4 className="font-bold text-gray-800">Fasting Required</h4>
                          <p className="text-sm text-gray-600">Please fast for 10-12 hours before sample collection. You can drink water.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                          <h4 className="font-bold text-gray-800">Medication</h4>
                          <p className="text-sm text-gray-600">Take your regular morning medicines only after giving the blood sample, unless advised otherwise by your doctor.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                          <h4 className="font-bold text-gray-800">Avoid Alcohol</h4>
                          <p className="text-sm text-gray-600">Do not consume alcohol 24 hours prior to the test as it may affect liver enzyme readings.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-secondary sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Package Summary</h3>
              <div className="space-y-4 mb-6">
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Clock className="h-4 w-4" /> Sample Time</span>
                    <span className="font-semibold text-primary">10 Minutes</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><FileText className="h-4 w-4" /> Report Time</span>
                    <span className="font-semibold text-primary">24 Hours</span>
                 </div>
                 <div className="flex items-center justify-between pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Calendar className="h-4 w-4" /> Home Collection</span>
                    <span className="font-semibold text-secondary">Available</span>
                 </div>
              </div>
              
              <div className="mb-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Special Offer</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-primary">₹2,000</span>
                  <span className="text-sm text-gray-400 mb-1 line-through">₹4,000</span>
                </div>
              </div>

              <button 
                onClick={() => onNavigate(View.APPOINTMENT)}
                className="w-full bg-secondary hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
              >
                Book Package
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailFullBody;
