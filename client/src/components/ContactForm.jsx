import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ref, isVisible] = useFadeInOnScroll();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      ...form,
      appointment: selectedDate,
    };

    const startTime = Date.now();

    try {
      const baseUrl =
        process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';

      const res = await fetch(`${baseUrl}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const elapsed = Date.now() - startTime;
      const waitTime = Math.max(3000 - elapsed, 0);

      setTimeout(() => {
        toast.success('Appointment request sent!');
        setForm({ name: '', email: '', phone: '', message: '' });
        setSelectedDate(null);
        setLoading(false);
      }, waitTime);
    } catch (err) {
      toast.error('Error sending appointment');
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <section
        id="team"
        ref={ref}
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone (e.g., +1 555-555-5555)"
            value={form.phone}
            onChange={handleChange}
            pattern="^\+?[0-9\s\-]{7,20}$"
            required
          />
          <textarea
            name="message"
            placeholder="Describe what you need"
            value={form.message}
            onChange={handleChange}
            required
          />

          <label>Select Date & Time</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Click to select date & time"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? <div className="spinner"></div> : 'Book Appointment'}
          </button>
        </form>

        {/* Toast Message Container */}
        <ToastContainer position="bottom-right" autoClose={4000} />
      </section>
    </section>
  );
};

export default ContactForm;
