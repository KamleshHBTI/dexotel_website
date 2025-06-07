import { ContactFormProps } from '../types';

const ContactForm = ({ formData, errors, handleChange, handleSubmit }: ContactFormProps) => (
  <div className="md:w-1/2">
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 9999999999"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default ContactForm; 