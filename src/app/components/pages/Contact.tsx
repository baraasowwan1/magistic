import { Phone, MapPin, Facebook, Instagram, Mail } from "lucide-react";

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 border-b-2 border-yellow-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-yellow-500">تواصل معنا</h2>
            <p className="text-xl text-gray-300">
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في تحقيق مشروعك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl text-center hover:shadow-xl transition-shadow border-t-4 border-yellow-600">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-full mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">اتصل بنا</h3>
              <a
                href="tel:+962799999999"
                className="text-xl text-yellow-700 hover:text-yellow-800 transition-colors block mb-2 font-bold"
                dir="ltr"
              >
                +962 79 999 9999
              </a>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl text-center hover:shadow-xl transition-shadow border-t-4 border-yellow-600">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-full mb-4">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">البريد الإلكتروني</h3>
              <a
                href="mailto:info@majestic-design.jo"
                className="text-lg text-yellow-700 hover:text-yellow-800 transition-colors block"
                dir="ltr"
              >
                info@majestic-design.jo
              </a>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl text-center hover:shadow-xl transition-shadow border-t-4 border-yellow-600">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-full mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">موقعنا</h3>
              <p className="text-gray-700">
                المملكة الأردنية الهاشمية
                <br />
                عمان
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white p-10 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">تابعنا على مواقع التواصل</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com/majestic.design.jo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-blue-600 text-white px-8 py-6 rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
              >
                <Facebook size={40} />
                <span className="font-bold">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/majestic.design.jo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-6 rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                <Instagram size={40} />
                <span className="font-bold">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">موقعنا على الخريطة</h3>
          <div className="bg-white p-4 rounded-xl shadow-lg max-w-5xl mx-auto">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.9845873144545!2d35.8558!3d31.9454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1c726ab1b95%3A0xd06912ff6db41111!2sAmman%2C%20Jordan!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع Majestic Interior Design على الخريطة"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-black text-white p-10 rounded-xl shadow-xl border-2 border-yellow-600">
            <h3 className="text-3xl font-bold text-center mb-8 text-yellow-500">ساعات العمل</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-yellow-600">
                <span className="text-xl">السبت - الخميس</span>
                <span className="text-xl font-bold text-yellow-500">9:00 ص - 6:00 م</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-yellow-600">
                <span className="text-xl">الجمعة</span>
                <span className="text-xl font-bold text-yellow-500">مغلق</span>
              </div>
            </div>
            <p className="text-center mt-8 text-gray-300">
              يمكنك التواصل معنا عبر الواتساب في أي وقت
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">مستعدون لبدء مشروعك؟</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك القادم
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+962799999999"
              className="bg-yellow-600 text-black px-10 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
            >
              <Phone size={20} />
              اتصل الآن
            </a>
            <a
              href="https://wa.me/962799999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
