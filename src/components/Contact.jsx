import { useState } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'error' | 'success'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!name || !emailValid || !subject || !message) {
      setStatus('error')
      return
    }
    // Connect this handler to a service like Formspree, Getform, or your own
    // backend endpoint to actually receive submissions.
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <Reveal className="max-w-xl mb-14">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] tracking-widest uppercase text-accent mb-4">
            <span className="w-5 h-px bg-accent" />
            Contact
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-3">
            Have a project, opportunity, or collaboration in mind?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-[16.5px]">I'd love to hear from you.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-14">
          <Reveal>
            <form onSubmit={handleSubmit} noValidate>
              <Field label="Name" name="name" value={form.name} onChange={handleChange} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
              <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
              <div className="mb-5">
                <label htmlFor="message" className="block text-[13px] text-slate-500 dark:text-slate-400 font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel focus:outline-none focus:border-accent transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3.5 rounded-xl font-semibold text-[14.5px] text-white bg-gradient-to-br from-accent to-signal shadow-lg shadow-accent/30 hover:-translate-y-0.5 transition-transform"
              >
                Send Message
              </button>
              {status && (
                <p
                  role="status"
                  className={`text-xs mt-2.5 ${status === 'error' ? 'text-red-500' : 'text-accent'}`}
                >
                  {status === 'error'
                    ? 'Please fill in all fields with a valid email.'
                    : "Thanks — your message has been noted. (Connect this form to a backend to actually receive it.)"}
                </p>
              )}
            </form>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel p-7">
              <p className="text-slate-500 dark:text-slate-400 text-[15px] mb-6">
                Whether it's a full custom website, a web application, or something in between — reach out and let's talk about it.
              </p>
              <InfoRow icon={<Mail size={17} />} text="zubair.ali@example.com" first />
              <InfoRow icon={<Linkedin size={17} />} text="linkedin.com/in/zubair-ali" />
              <InfoRow icon={<Github size={17} />} text="github.com/zubair-ali" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text' }) {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-[13px] text-slate-500 dark:text-slate-400 font-medium mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3.5 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-light-panel dark:bg-ink-panel focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  )
}

function InfoRow({ icon, text, first }) {
  return (
    <div className={`flex items-center gap-3 py-3 text-sm ${!first ? 'border-t border-black/10 dark:border-white/10' : ''}`}>
      <span className="text-accent">{icon}</span>
      <span>{text}</span>
    </div>
  )
}
