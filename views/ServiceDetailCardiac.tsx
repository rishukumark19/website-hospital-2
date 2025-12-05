
import React from 'react';
import { View } from '../types';
import { Clock, ArrowLeft, Calendar, FileText, HeartPulse } from 'lucide-react';

interface Props {
  onNavigate: (view: View) => void;
}

const ServiceDetailCardiac: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="relative h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=2000" 
          alt="Heart Health" 
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Advanced Heart Care Profile</h1>
          <p className="text-xl text-green-200">Evaluate your heart health and cardiovascular risk factors.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">Protect Your Heart</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Cardiovascular disease is a leading cause of health issues globally. Our Advanced Heart Care profile goes beyond basic cholesterol checking. It assesses inflammation (hs-CRP), heart muscle stress, and detailed lipid fractions to give you a complete picture of your cardiac health.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Covered:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                    { name: "Lipid Profile Extended", desc: "Total Cholesterol, HDL, LDL, VLDL, Triglycerides" },
                    { name: "hs-CRP", desc: "High-sensitivity C-Reactive Protein (Inflammation marker)" },
                    { name: "Homocysteine", desc: "Marker for arterial damage risk" },
                    { name: "HbA1c", desc: "Average blood sugar (Diabetes is a major heart risk)" },
                    { name: "ECG (Resting)", desc: "Checks heart rhythm and electrical activity" },
                    { name: "Kidney Function", desc: "Urea, Creatinine (Kidney health affects blood pressure)" }
                 ].map((test, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <HeartPulse className="h-5 w-5 text-secondary mb-2" />
                        <h4 className="font-bold text-primary text-sm">{test.name}</h4>
                        <p className="text-xs text-gray-500">{test.desc}</p>
                    </div>
                 ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">Preparation</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Fasting:</strong> 12 hours of fasting is mandatory for accurate Lipid Profile results.</li>
                  <li><strong>Clothing:</strong> Wear a two-piece outfit for the ECG (chest area needs to be accessible).</li>
                  <li><strong>Avoid Caffeine:</strong> Do not drink coffee or tea before the test as it may affect heart rate.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-secondary sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Package Details</h3>
              <div className="space-y-4 mb-6">
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Clock className="h-4 w-4" /> Duration</span>
                    <span className="font-semibold text-primary">30 Minutes</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><FileText className="h-4 w-4" /> Report Time</span>
                    <span className="font-semibold text-primary">24 Hours</span>
                 </div>
                 <div className="flex items-center justify-between pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Calendar className="h-4 w-4" /> Center Visit</span>
                    <span className="font-semibold text-secondary">Recommended (for ECG)</span>
                 </div>
              </div>
              
              <div className="mb-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Package Price</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-primary">₹3,500</span>
                  <span className="text-sm text-gray-400 mb-1 line-through">₹4,900</span>
                </div>
              </div>

              <button 
                onClick={() => onNavigate(View.APPOINTMENT)}
                className="w-full bg-secondary hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
              >
                Book Heart Check
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCardiac;
