import React, { useState } from 'react';
import { X, Check, Calendar, Music, Send } from 'lucide-react';
import { downloadCalendarInvite } from '../../utils/calendar';
import { WEDDING_CONFIG } from '../../config/weddingConfig';

/**
 * Complete Functional RSVP Modal
 */
export function RsvpModal({ isOpen, onClose, onSuccess }) {
  const [form, setForm] = useState({
    fullName: '',
    guests: '2',
    attending: 'yes',
    events: { ceremony: true, reception: true, melse: true },
    meal: 'Traditional & Continental Mix',
    song: '',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName.trim()) return;
    setSubmitted(true);
    if (onSuccess) onSuccess(form.fullName);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F1D1B]/60 p-4 backdrop-blur-sm animate-fade-in"
      onClick={resetAndClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[#B89B72]/40 bg-[#FAF8F5] p-6 shadow-2xl sm:p-9"
      >
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close RSVP modal"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#1F1D1B]/10 text-[#1F1D1B]/70 transition hover:bg-[#F0ECE4] hover:text-[#1F1D1B]"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6E7B68]/15 text-[#6E7B68]">
              <Check className="h-8 w-8" />
            </div>
            <p className="mt-5 font-sans text-[11px] uppercase tracking-[0.3em] text-[#B89B72]">
              RSVP Confirmed
            </p>
            <h3 className="mt-2 font-serif text-3xl text-[#1F1D1B]">
              Thank You, {form.fullName}
            </h3>
            <p className="mx-auto mt-3 max-w-sm font-sans text-sm leading-relaxed text-[#5C554E]">
              {form.attending === 'yes'
                ? `We are overjoyed that you will celebrate ${WEDDING_CONFIG.couple.names} with us. Save the date to your calendar so you never miss a moment.`
                : 'Thank you for letting us know. You will be deeply missed and warmly held in our hearts on our special day.'}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              {form.attending === 'yes' && (
                <button
                  type="button"
                  onClick={downloadCalendarInvite}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B89B72] bg-white px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#8B6F42] transition hover:bg-[#F0ECE4]"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  Add to Calendar
                </button>
              )}
              <button
                type="button"
                onClick={resetAndClose}
                className="rounded-full bg-[#6E7B68] px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#5B6856]"
              >
                Return to Invitation
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center">
              <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-[#B89B72]">
                Kindly Reply By {WEDDING_CONFIG.date.rsvpDeadline}
              </p>
              <h3 className="mt-2 font-serif text-3xl text-[#1F1D1B] sm:text-4xl">
                Celebrate With Us
              </h3>
              <div className="mx-auto mt-3 h-px w-12 bg-[#B89B72]/50" />
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-[0.18em] text-[#5C554E]">
                  Full Name(s) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Dawit & Hanna Tadesse"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-[#1F1D1B]/15 bg-white px-4 py-3 font-sans text-sm text-[#1F1D1B] outline-none transition focus:border-[#B89B72]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, attending: 'yes' })}
                  className={`rounded-xl border px-3 py-3 font-sans text-xs font-medium transition ${
                    form.attending === 'yes'
                      ? 'border-[#6E7B68] bg-[#6E7B68] text-white shadow-sm'
                      : 'border-[#1F1D1B]/15 bg-white text-[#1F1D1B] hover:border-[#B89B72]'
                  }`}
                >
                  Joyfully Accepts
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, attending: 'no' })}
                  className={`rounded-xl border px-3 py-3 font-sans text-xs font-medium transition ${
                    form.attending === 'no'
                      ? 'border-[#1F1D1B] bg-[#1F1D1B] text-white shadow-sm'
                      : 'border-[#1F1D1B]/15 bg-white text-[#1F1D1B] hover:border-[#B89B72]'
                  }`}
                >
                  Regretfully Declines
                </button>
              </div>

              {form.attending === 'yes' && (
                <>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-[0.18em] text-[#5C554E]">
                        Party Size
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-[#1F1D1B]/15 bg-white px-3.5 py-3 font-sans text-sm text-[#1F1D1B] outline-none focus:border-[#B89B72]"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-[0.18em] text-[#5C554E]">
                        Meal Preference
                      </label>
                      <select
                        value={form.meal}
                        onChange={(e) => setForm({ ...form, meal: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-[#1F1D1B]/15 bg-white px-3.5 py-3 font-sans text-sm text-[#1F1D1B] outline-none focus:border-[#B89B72]"
                      >
                        <option>Traditional &amp; Continental Mix</option>
                        <option>Ethiopian Fasting / Vegan</option>
                        <option>Gluten-Free / Special Dietary</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-[0.18em] text-[#5C554E]">
                      Dance Floor Song Request
                    </label>
                    <div className="relative mt-1.5">
                      <Music className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#B89B72]" />
                      <input
                        type="text"
                        placeholder="What track gets you dancing?"
                        value={form.song}
                        onChange={(e) => setForm({ ...form, song: e.target.value })}
                        className="w-full rounded-xl border border-[#1F1D1B]/15 bg-white py-3 pl-10 pr-4 font-sans text-sm text-[#1F1D1B] outline-none transition focus:border-[#B89B72]"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block font-sans text-xs uppercase tracking-[0.18em] text-[#5C554E]">
                  Warm Wishes for {WEDDING_CONFIG.couple.names}
                </label>
                <textarea
                  rows={2}
                  placeholder="Leave a blessing or note..."
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="mt-1.5 w-full resize-none rounded-xl border border-[#1F1D1B]/15 bg-white px-4 py-2.5 font-sans text-sm text-[#1F1D1B] outline-none transition focus:border-[#B89B72]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6E7B68] py-3.5 font-sans text-xs font-medium uppercase tracking-[0.24em] text-white shadow-md transition hover:bg-[#5B6856]"
              >
                <Send className="h-3.5 w-3.5" />
                Confirm Attendance
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
