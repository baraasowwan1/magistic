import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp number and default message
  const phoneNumber = "962799999999"; // Your WhatsApp number
  const message = "مرحباً، أود الاستفسار عن خدمات Majestic Interior Design";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="تواصل معنا عبر الواتساب"
    >
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <span className="text-sm font-bold">تواصل معنا عبر واتساب</span>
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-black"></div>
        </div>

        {/* WhatsApp Button */}
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce">
          <MessageCircle size={32} fill="white" />
        </div>

        {/* Notification Dot */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
        </span>
      </div>
    </a>
  );
}
