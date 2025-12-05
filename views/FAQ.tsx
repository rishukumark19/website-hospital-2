
import React, { useState } from 'react';
import { Plus, Minus, FileText, Home, Info, Download, Search, Clock, ShieldCheck } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      title: "Before Your Test",
      icon: Info,
      items: [
        {
          id: 'prep1',
          question: "Do I need to fast before a blood test?",
          answer: "For certain tests like Lipid Profile, Fasting Blood Sugar, and Thyroid profiles, fasting for 10-12 hours is recommended. However, for tests like CBC or HbA1c, fasting is usually not required. Please check the specific test instructions."
        },
        {
          id: 'prep2',
          question: "Can I drink water during fasting?",
          answer: "Yes, you can drink plain water in moderation. Avoid tea, coffee, milk, or any other beverages."
        },
        {
          id: 'prep3',
          question: "Should I take my medicines before the test?",
          answer: "Generally, you should continue your daily medication unless your doctor advises otherwise. However, for thyroid tests or diabetes monitoring, specific instructions may apply."
        }
      ]
    },
    {
      title: "During Your Test",
      icon: Clock,
      items: [
        {
          id: 'dur1',
          question: "How long does a blood collection take?",
          answer: "The process is very quick, usually taking less than 5 minutes. Our phlebotomists are trained to make it as painless as possible."
        },
        {
          id: 'dur2',
          question: "Is the MRI procedure painful?",
          answer: "No, an MRI is a painless, non-invasive procedure. You will just hear some loud tapping noises from the machine."
        },
        {
          id: 'dur3',
          question: "Do I need to remove jewelry?",
          answer: "Yes, for X-rays, CT Scans, and MRI, you will be asked to remove all metallic objects including jewelry, watches, and glasses."
        }
      ]
    },
    {
      title: "Reports & Results",
      icon: FileText,
      items: [
        {
          id: 'rep1',
          question: "When will I get my reports?",
          answer: "Most routine reports are available within 24 hours. Specialized tests may take 2-4 days. You will receive an SMS notification."
        },
        {
          id: 'rep2',
          question: "Can I download my reports online?",
          answer: "Yes! Use the 'Download Report' feature on our website header. Enter your Patient ID or mobile number to access PDF reports."
        }
      ]
    },
    {
      title: "General",
      icon: ShieldCheck,
      items: [
        {
          id: 'gen1',
          question: "Is Avishkar Diagnostic NABL accredited?",
          answer: "Yes, we are NABL accredited (ISO 15189:2012) ensuring the highest quality standards for our laboratory services."
        },
        {
          id: 'gen2',
          question: "Do you offer home collection?",
          answer: "Yes, we offer home sample collection across Dhanbad. You can book a visit via our website or by calling us."
        }
      ]
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const matchesSearch = (text: string) => text.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Patient Information & FAQ</h1>
          <p className="text-gray-600 text-lg">Find answers to common questions about your visit and tests.</p>
        </div>

        {/* Search */}
        <div className="relative max-w-lg mx-auto mb-16">
           <input 
             type="text" 
             placeholder="Search questions (e.g., fasting, report)..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-lg"
           />
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  <Info className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Preparation</h3>
              <p className="text-sm text-gray-500">Guidelines on fasting and medication before tests.</p>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  <Home className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Home Visit</h3>
              <p className="text-sm text-gray-500">How to schedule and prepare for home collection.</p>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  <Download className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Reports</h3>
              <p className="text-sm text-gray-500">Accessing and understanding your digital reports.</p>
           </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-10">
          {sections.map((section, idx) => {
             const filteredItems = section.items.filter(item => 
                 !searchTerm || matchesSearch(item.question) || matchesSearch(item.answer)
             );

             if (filteredItems.length === 0) return null;

             return (
               <div key={idx}>
                  <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-2">
                      <section.icon className="h-5 w-5 text-secondary" />
                      <h2 className="text-xl font-bold text-primary">{section.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {filteredItems.map((faq) => (
                        <div 
                        key={faq.id} 
                        className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 ${
                            openIndex === faq.id ? 'border-primary shadow-md' : 'border-gray-100 hover:border-green-200'
                        }`}
                        >
                        <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <span className={`font-bold text-lg ${openIndex === faq.id ? 'text-primary' : 'text-gray-700'}`}>
                            {faq.question}
                            </span>
                            {openIndex === faq.id ? (
                            <Minus className="h-5 w-5 text-secondary flex-shrink-0" />
                            ) : (
                            <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            )}
                        </button>
                        
                        <div 
                            className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ${
                            openIndex === faq.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            {faq.answer}
                        </div>
                        </div>
                    ))}
                  </div>
               </div>
             )
          })}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
