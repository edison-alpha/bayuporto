import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:bayumuktywibowo02@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-blue-500 font-mono mb-4 text-lg">// Contact</h3>
          <h2 className="text-4xl md:text-6xl font-outfit font-black text-white tracking-tighter mb-6">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="Bayu"
              />
            </div>
            <div>
              <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="bayu@example.com"
              />
            </div>
          </div>

          <div>
            <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
              placeholder="Project Inquiry"
            />
          </div>

          <div>
            <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-500 text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
