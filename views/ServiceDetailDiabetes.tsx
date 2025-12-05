
import React from 'react';
import { View } from '../types';
import { Clock, ArrowLeft, Calendar, FileText } from 'lucide-react';

interface Props {
  onNavigate: (view: View) => void;
}

const ServiceDetailDiabetes: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="relative h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1579684453423-f84349ca60df?auto=format&fit=crop&q=80&w=2000" 
          alt="Blood Test" 
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Comprehensive Diabetes Screening</h1>
          <p className="text-xl text-green-200">Monitor and manage blood sugar levels effectively.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">About Diabetes Screening</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Diabetes can often go undiagnosed for years. This screening package is designed to detect pre-diabetes and monitor glucose control in diagnosed diabetics. It looks at your average blood sugar over the last 3 months (HbA1c) as well as immediate fasting glucose levels.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tests Included:</h3>
              <ul className="space-y-3">
                  <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div>
                          <span className="font-bold text-gray-800 block">HbA1c (Glycosylated Hemoglobin)</span>
                          <span className="text-sm text-gray-500">Gold standard for long-term glucose monitoring (3-month avg).</span>
                      </div>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div>
                          <span className="font-bold text-gray-800 block">Fasting Plasma Glucose (FPG)</span>
                          <span className="text-sm text-gray-500">Measures blood sugar after an overnight fast.</span>
                      </div>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div>
                          <span className="font-bold text-gray-800 block">Urine Microalbumin</span>
                          <span className="text-sm text-gray-500">Checks for early signs of kidney damage caused by diabetes.</span>
                      </div>
                  </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4">Pre-Test Instructions</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Fasting:</strong> Strict fasting of 8-10 hours is required. Do not eat or drink anything except water.</li>
                  <li><strong>Medication:</strong> Do not take your diabetes medication before the fasting sample. Take it after providing the sample and eating breakfast, or as directed by your physician.</li>
                  <li><strong>Activity:</strong> Avoid strenuous exercise before the test.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-secondary sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Test Overview</h3>
              <div className="space-y-4 mb-6">
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Clock className="h-4 w-4" /> Sample Time</span>
                    <span className="font-semibold text-primary">5 Minutes</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><FileText className="h-4 w-4" /> Report Time</span>
                    <span className="font-semibold text-primary">6 Hours</span>
                 </div>
                 <div className="flex items-center justify-between pb-3">
                    <span className="flex items-center gap-2 text-gray-600 text-sm"><Calendar className="h-4 w-4" /> Home Collection</span>
                    <span className="font-semibold text-secondary">Available</span>
                 </div>
              </div>
              
              <div className="mb-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Package Price</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-primary">₹1,500</span>
                  <span className="text-sm text-gray-400 mb-1 line-through">₹2,200</span>
                </div>
              </div>

              <button 
                onClick={() => onNavigate(View.APPOINTMENT)}
                className="w-full bg-secondary hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
              >
                Book Screening
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailDiabetes;
