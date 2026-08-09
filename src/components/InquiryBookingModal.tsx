import React, { useState } from 'react';
import { Property, InquiryFormData } from '../types';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, Sparkles, Building } from 'lucide-react';

interface InquiryBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  properties: Property[];
  selectedProperty?: Property | null;
}

export const InquiryBookingModal: React.FC<InquiryBookingModalProps> = ({
  isOpen,
  onClose,
  properties,
  selectedProperty,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredPropertyId: selectedProperty?.id || properties[0]?.id || '',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: '14:00',
    guestsCount: 2,
    message: '',
    newsletterOptIn: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a luxury confirmation code
    const code = 'ELV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] rounded-none max-w-2xl w-full overflow-hidden border border-[#E8E2D9] relative flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#18181B] text-[#FAF7F2] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C4AD93] uppercase tracking-widest mb-1">
              <Calendar className="w-4 h-4" />
              <span>Private Walkthrough Concierge</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Schedule Private Viewing
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#18181B] text-[#C4AD93] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-[#9A6A42]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#9A6A42] font-semibold block mb-2">
                  VIEWING CONFIRMED
                </span>
                <h4 className="font-serif text-3xl font-bold text-[#18181B] mb-3">
                  Your Private Appointment is Set
                </h4>
                <p className="text-sm text-[#666055] max-w-md mx-auto leading-relaxed">
                  Our private client advisory team has received your appointment request. You will receive an encrypted itinerary via email shortly.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D9] max-w-md mx-auto space-y-2 text-left">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#8C7355] uppercase tracking-wider font-semibold">
                    Appointment Reference:
                  </span>
                  <span className="font-mono font-bold text-[#18181B]">{bookingCode}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#8C7355] uppercase tracking-wider font-semibold">
                    Date & Time:
                  </span>
                  <span className="font-medium text-[#18181B]">
                    {formData.preferredDate} at {formData.preferredTime}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#8C7355] uppercase tracking-wider font-semibold">
                    Guest Name:
                  </span>
                  <span className="font-medium text-[#18181B]">{formData.fullName}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-[#18181B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#333] transition-colors cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Preferred Property */}
              <div>
                <label className="block text-xs uppercase font-semibold text-[#18181B] tracking-wider mb-2">
                  Select Preferred Residence:
                </label>
                <div className="relative">
                  <select
                    value={formData.preferredPropertyId}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredPropertyId: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D9] text-sm text-[#18181B] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#9A6A42]"
                  >
                    {properties.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.location}) — {p.priceDisplay}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#18181B] tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#9A6A42]" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D9] text-sm text-[#18181B] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#9A6A42]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#18181B] tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#9A6A42]" /> Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D9] text-sm text-[#18181B] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#9A6A42]"
                  >
                    <option value="10:00">10:00 AM (Morning Natural Light)</option>
                    <option value="14:00">02:00 PM (Afternoon Sunset)</option>
                    <option value="17:00">05:00 PM (Twilight Lighting Tour)</option>
                  </select>
                </div>
              </div>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#18181B] tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#9A6A42]" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D9] text-sm text-[#18181B] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#9A6A42]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#18181B] tracking-wider mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#9A6A42]" /> Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@vance.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D9] text-sm text-[#18181B] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#9A6A42]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs uppercase font-semibold text-[#18181B] tracking-wider mb-2">
                  Special Customization Requests or Notes:
                </label>
                <textarea
                  rows={3}
                  placeholder="Inquire about custom floorplan alterations, interior material palettes, or helicopter transfer..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D9] text-sm text-[#18181B] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#9A6A42]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-8 rounded-none bg-[#18181B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#333] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Confirm Private Tour Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
