import React from "react";

function ContactUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      {/* Contact Details */}
      <div className="bg-white p-10 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
        <p className="mb-4">
          Welcome to HomeHive, where finding your dream property is made easy.
          Our platform connects you directly with property owners, eliminating
          unnecessary brokerage fees. Explore our listings today!
        </p>
        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="mb-4">
            545 Mavis Island
            <br />
            Chicago, IL 99191
          </p>
          <h3 className="font-semibold mb-2">Telephone</h3>
          <p className="mb-4">+1 (555) 234-5678</p>
          <h3 className="font-semibold mb-2">Email</h3>
          <p>contact@homehive.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-10 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#FE6C4C] text-white px-4 py-2 rounded-lg hover:opacity-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
