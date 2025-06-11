import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0b3d66] text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Library Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">JUBI Library</h3>
            <p className="text-gray-300 text-sm">
              Providing knowledge and resources to our community.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-md font-medium mb-4">Opening Hours</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Mon-Fri: 9am - 8pm</li>
              <li>Saturday: 10am - 6pm</li>
              <li>Sunday: 12pm - 5pm</li>
            </ul>
          </div>

         

          {/* Contact */}
          <div>
            <h4 className="text-md font-medium mb-4">Contact Us</h4>
            <address className="text-gray-300 text-sm not-italic">
              <p>Buro, Osu Close </p>
              <p>Plot No. 7, Accra</p>
              <p className="mt-2">info@jubilibrary.gmail.com</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jubi Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer