
import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, MapPin, TestTube, AlertCircle, Loader2 } from 'lucide-react';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    testType: '',
    collectionType: 'Home Visit',
    date: '',
    time: 'Morning (9AM - 12PM)',
    notes: '',
    agreed: false
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.phone.trim()) {
       newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
       newErrors.phone = 'Please enter a valid 10-digit number';
    }
    if (!formData.email.trim()) {
       newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
       newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.testType) newErrors.testType = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.agreed) newErrors.agreed = 'You must agree to the privacy policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = {...prev};
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-green-500 animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Request Sent!</h2>
          <p className="text-gray-500 mb-8">
            Thank you for choosing Avishkar Diagnostic. Our team will contact you shortly at <strong>{formData.phone}</strong> to confirm your appointment details.
          </p>
          <button 
            onClick={() => { 
              setSubmitted(false); 
              setFormData({
                firstName: '', lastName: '', phone: '', email: '', 
                testType: '', collectionType: 'Home Visit', date: '', 
                time: 'Morning (9AM - 12PM)', notes: '', agreed: false
              }); 
            }}
            className="text-primary font-bold hover:underline"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
           <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">Schedule Your Visit</h1>
           <p className="text-gray-600">Book a home collection or a center visit in just a few clicks.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-primary text-white rounded-2xl p-8 shadow-lg h-full relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                 <div className="space-y-6">
                    <div>
                      <p className="text-green-200 text-sm font-medium uppercase tracking-wide mb-1">Address</p>
                      <p className="flex items-start gap-2"><MapPin className="h-5 w-5 opacity-80" /> Bank More, Dhanbad,<br/>Jharkhand 826001</p>
                    </div>
                    <div>
                      <p className="text-green-200 text-sm font-medium uppercase tracking-wide mb-1">Phone</p>
                      <p className="text-lg font-semibold flex items-center gap-2"><Phone className="h-5 w-5 opacity-80" /> +91 326 230 XXXX</p>
                    </div>
                    <div>
                      <p className="text-green-200 text-sm font-medium uppercase tracking-wide mb-1">Email</p>
                      <p className="flex items-center gap-2"><Mail className="h-5 w-5 opacity-80" /> info@avishkardiagnostic.com</p>
                    </div>
                 </div>
                 
                 <div className="mt-8 bg-white/10 p-4 rounded-xl border border-white/20">
                    <p className="font-bold mb-1 flex items-center gap-2"><Clock className="h-4 w-4" /> Working Hours</p>
                    <p className="text-sm opacity-90">Mon - Sun: 7:00 AM - 9:00 PM</p>
                 </div>
               </div>
               <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {Object.keys(errors).length > 0 && (
                   <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl flex items-center gap-2 text-sm font-medium">
                      <AlertCircle className="h-5 w-5" /> Please fix the highlighted errors below.
                   </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`} 
                        placeholder="John" 
                      />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`} 
                        placeholder="9876543210" 
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`} 
                        placeholder="john@example.com" 
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Select Service <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <TestTube className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select 
                        name="testType"
                        value={formData.testType}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.testType ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all appearance-none`}
                      >
                        <option value="">Select a Service...</option>
                        <optgroup label="Popular Packages">
                            <option>Full Body Checkup</option>
                            <option>Diabetes Screening</option>
                            <option>Advanced Heart Care</option>
                            <option>Senior Citizen Package</option>
                        </optgroup>
                        <optgroup label="Radiology">
                            <option>MRI Scan</option>
                            <option>CT Scan</option>
                            <option>Ultrasound / Sonography</option>
                            <option>Digital X-Ray</option>
                        </optgroup>
                        <optgroup label="Pathology">
                            <option>Blood Test (Routine)</option>
                            <option>Thyroid Profile</option>
                            <option>Lipid Profile</option>
                            <option>Vitamin Profile</option>
                            <option>Other (Specify in notes)</option>
                        </optgroup>
                      </select>
                    </div>
                    {errors.testType && <p className="text-red-500 text-xs mt-1 ml-1">{errors.testType}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Collection Type</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select 
                        name="collectionType"
                        value={formData.collectionType}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all appearance-none"
                      >
                        <option>Home Visit</option>
                        <option>Lab Visit (Walk-in)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.date ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`} 
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-xs mt-1 ml-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select 
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all appearance-none"
                      >
                        <option>Morning (7AM - 11AM)</option>
                        <option>Mid-Day (11AM - 2PM)</option>
                        <option>Afternoon (2PM - 5PM)</option>
                        <option>Evening (5PM - 8PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Special Requirements / Symptoms</label>
                   <div className="relative">
                      <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea 
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all h-28 resize-none" 
                        placeholder="e.g., Fasting since last night, need wheelchair access, specific doctor referral..."
                      ></textarea>
                   </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-start gap-2">
                        <input 
                            type="checkbox" 
                            id="agree" 
                            checked={formData.agreed}
                            onChange={(e) => {
                                setFormData(prev => ({...prev, agreed: e.target.checked}));
                                if(e.target.checked && errors.agreed) {
                                    setErrors(prev => {const n = {...prev}; delete n.agreed; return n;});
                                }
                            }}
                            className="mt-1 w-4 h-4 text-secondary rounded focus:ring-secondary border-gray-300" 
                        />
                        <label htmlFor="agree" className="text-sm text-gray-600 leading-tight">
                            I agree to the <span className="text-primary font-semibold cursor-pointer">Privacy Policy</span> and consent to receive calls/SMS regarding my appointment.
                        </label>
                    </div>
                    {errors.agreed && <p className="text-red-500 text-xs ml-6">{errors.agreed}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Confirm Booking'}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
