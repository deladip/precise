import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4 text-white">PRECISE METHOD</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Tax, Business & Financial Services — Done Right, the First Time.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-accent">IRS Authorized ERO</p>
              <p className="text-sm font-medium text-accent">Certified Acceptance Agent</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-accent transition-colors text-sm">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-accent transition-colors text-sm">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/business-solutions">
                  <a className="text-gray-300 hover:text-accent transition-colors text-sm">Business Solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-accent transition-colors text-sm">About & Credentials</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Tax Preparation</li>
              <li className="text-gray-300 text-sm">Business Registration</li>
              <li className="text-gray-300 text-sm">Bookkeeping & Payroll</li>
              <li className="text-gray-300 text-sm">IRS Representation</li>
              <li className="text-gray-300 text-sm">ITIN Applications</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">833-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">info@precisemethod.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="text-gray-300 text-sm">
                  Virtual & In-Person<br />Consultations Available Nationwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            PRECISE METHOD © 2026 Tax, Business & Accounting Services.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-gray-400">IRS Authorized</span>
            <span className="text-xs text-gray-400">Secure</span>
            <span className="text-xs text-gray-400">Confidential</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
