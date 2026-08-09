import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { RevealImage } from './RevealImage';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedBodyText } from './AnimatedBodyText';

export const InquireSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Full-Service Interior Design',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: 'Full-Service Interior Design',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="inquire" className="w-full bg-[#FAF7F2] py-12 lg:py-20 scroll-mt-20 overflow-hidden">
      <div className="w-full pl-6 sm:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+3rem))] pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Column: Form Fields (Inner Width Aligned) */}
          <div className="lg:col-span-7 pr-6 sm:pr-8 lg:pr-12 flex flex-col justify-between py-2">
            <div>
              {/* Section Header */}
              <div className="mb-8">
                <ScrollReveal direction="up" delay={0.1}>
                  <span className="text-[10px] tracking-[0.3em] text-[#8C7355] uppercase font-semibold block mb-2">
                    INQUIRE WITH ELVARA
                  </span>
                </ScrollReveal>
                <AnimatedHeading
                  text="Begin Your Interior Transformation"
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight leading-tight mb-4"
                />
                <AnimatedBodyText
                  text="Whether you are planning a comprehensive residential overhaul, custom architectural joinery, or bespoke curation, our studio is dedicated to crafting spaces that endure."
                  className="text-[#524E48] text-sm sm:text-base font-light leading-relaxed max-w-xl"
                />
              </div>

              {/* Success Banner */}
              {isSuccess ? (
                <div className="bg-[#18181B] text-[#FAF7F2] p-8 border border-[#9A6A42] mb-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C4AD93]" />
                    <h3 className="font-serif text-xl font-semibold text-white">Inquiry Received</h3>
                  </div>
                  <p className="text-[#D4C8B8] text-sm font-light leading-relaxed mb-6">
                    Thank you for reaching out to Elvara Living. Our principal design consultants will review your details and contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-[#FAF7F2] text-[#18181B] text-xs uppercase tracking-widest font-semibold hover:bg-[#E8E2D9] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Inquiry Form */
                <ScrollReveal direction="up" delay={0.25}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#18181B] mb-2">
                          Full Name <span className="text-[#8C7355]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Eleanor Vance"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F3EFE6] border border-[#E8E2D9] text-[#18181B] text-sm focus:outline-none focus:border-[#18181B] transition-colors placeholder:text-[#9A958E]"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#18181B] mb-2">
                          Email Address <span className="text-[#8C7355]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="eleanor@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F3EFE6] border border-[#E8E2D9] text-[#18181B] text-sm focus:outline-none focus:border-[#18181B] transition-colors placeholder:text-[#9A958E]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#18181B] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 019-2834"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F3EFE6] border border-[#E8E2D9] text-[#18181B] text-sm focus:outline-none focus:border-[#18181B] transition-colors placeholder:text-[#9A958E]"
                        />
                      </div>

                      {/* Service Interested In */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#18181B] mb-2">
                          Service Interest
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F3EFE6] border border-[#E8E2D9] text-[#18181B] text-sm focus:outline-none focus:border-[#18181B] transition-colors"
                        >
                          <option value="Full-Service Interior Design">Full-Service Interior Design</option>
                          <option value="Architectural Curation">Architectural Curation</option>
                          <option value="Custom Joinery & Millwork">Custom Joinery & Millwork</option>
                          <option value="Private Residence Procurement">Private Residence Procurement</option>
                          <option value="General Consultation">General Consultation</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#18181B] mb-2">
                        Project Details & Vision <span className="text-[#8C7355]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your property location, estimated timeline, and design aspirations..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F3EFE6] border border-[#E8E2D9] text-[#18181B] text-sm focus:outline-none focus:border-[#18181B] transition-colors placeholder:text-[#9A958E] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-4 bg-[#18181B] text-[#FAF7F2] text-xs font-semibold uppercase tracking-widest hover:bg-[#333333] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-sm disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span>Submitting Inquiry...</span>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <Send className="w-4 h-4 text-[#C4AD93]" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </ScrollReveal>
              )}
            </div>

            {/* Quick Contact Micro details */}
            <ScrollReveal direction="up" delay={0.35}>
              <div className="pt-8 mt-8 border-t border-[#E8E2D9] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#524E48]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8C7355]" />
                  <span>+1 (800) 482-9102</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#8C7355]" />
                  <span>studio@elvaraliving.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8C7355]" />
                  <span>Mayfair, London</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Architectural Image Flush to Right Edge */}
          <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[580px] overflow-hidden group">
            <RevealImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
              alt="Elvara Living Studio Consultation Space"
              direction="right"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
