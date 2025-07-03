"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.phone) newErrors.phone = "Phone is required.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required.";
    if (!form.message) newErrors.message = "Please tell us what brings you here.";
    if (!form.preferredTime) newErrors.preferredTime = "Preferred time is required.";
    if (!form.consent) newErrors.consent = "You must agree to be contacted.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", form);
    alert("Form submitted!");
    setErrors({});
  };

  return (
<section id="contact" className="bg-[#f6f7f8] py-16 px-4">
      <div className="max-w-2xl mx-auto border rounded-lg shadow-lg p-8 border-green-900">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-4">Get In Touch</h2>
        <p className="text-center text-lg text-gray-800 mb-8">
          Simply fill out the brief fields below and we’ll be in touch within one business day.
          This form is safe, private, and completely free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-lg text-green-900 mb-1">Name</label>
            <input
              name="name"
              type="text"
              className="w-full border border-green-900 rounded-lg px-4 py-2"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-medium text-lg text-green-900 mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border border-green-900 rounded-lg px-4 py-2"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium text-lg text-green-900 mb-1">Phone</label>
            <input
              name="phone"
              type="tel"
              className="w-full border border-green-900 rounded-lg px-4 py-2"
              value={form.phone}
              onChange={handleChange}
              placeholder="(555) 234-5678"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block font-medium text-lg text-green-900 mb-1">What brings you here?</label>
            <textarea
              name="message"
              rows="3"
              className="w-full border border-green-900 rounded-lg px-4 py-2"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>


          <div>
            <label className="block font-medium text-lg text-green-900 mb-1">Preferred time to reach you</label>
            <input
              name="preferredTime"
              type="text"
              className="w-full border border-green-900 rounded-lg px-4 py-2"
              value={form.preferredTime}
              onChange={handleChange}
              placeholder="Mornings, Afternoons, Evenings"
            />
            {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>}
            <p className="text-sm text-green-900 mt-1">
              Let us know when you're typically available for a call or consultation
            </p>
          </div>

          <div className="flex items-start space-x-2">
            <input
              name="consent"
              type="checkbox"
              className="mt-1"
              checked={form.consent}
              onChange={handleChange}
            />
            <label className="text-green-900 text-sm">
              I agree to be contacted and receive emails or texts from Dr. Serena Blake
            </label>
          </div>
          {errors.consent && <p className="text-red-600 text-sm mt-1">{errors.consent}</p>}


          <div>
            <button
              type="submit"
              className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
