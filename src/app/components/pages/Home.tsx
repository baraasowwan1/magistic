import { Link } from "react-router";
import { ArrowLeft, Sparkles, Home as HomeIcon, Trees, Frame } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: <HomeIcon size={40} />,
      title: "التصميم الداخلي",
      description: "تصاميم داخلية عصرية وفاخرة تناسب جميع الأذواق",
    },
    {
      icon: <Frame size={40} />,
      title: "جبس بورد",
      description: "أعمال الجبس بورد بأحدث التصاميم والتقنيات",
    },
    {
      icon: <Sparkles size={40} />,
      title: "مدافئ حجرية وغازية",
      description: "مدافئ فاخرة بتصاميم كلاسيكية وعصرية",
    },
    {
      icon: <Trees size={40} />,
      title: "ديكور الحدائق",
      description: "شلالات وأرضيات وديكورات خارجية مميزة",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-transparent to-yellow-600/10"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-yellow-500">
              نحول أحلامك إلى واقع
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              تصاميم داخلية فاخرة وديكورات استثنائية تعكس ذوقك الرفيع
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/portfolio"
                className="bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
              >
                استكشف أعمالنا
                <ArrowLeft size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-yellow-600 text-yellow-500 px-8 py-4 rounded-lg font-bold hover:bg-yellow-600/10 transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا</h3>
            <p className="text-xl text-gray-600">نقدم مجموعة متكاملة من خدمات التصميم والديكور</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 border-t-4 border-yellow-600"
              >
                <div className="text-yellow-600 mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">من أعمالنا</h3>
            <p className="text-xl text-gray-600">نماذج من مشاريعنا المتميزة</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"
                alt="تصميم داخلي فاخر"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-xl">صالة معيشة عصرية</p>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800"
                alt="ديكور جبس بورد"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-xl">أسقف جبس بورد</p>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                alt="مدفأة حجرية"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-xl">مدافئ فاخرة</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              عرض جميع الأعمال
              <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">لماذا نحن؟</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">تصاميم مبتكرة</h4>
              <p className="text-gray-600">نقدم تصاميم فريدة تجمع بين الأصالة والحداثة</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">جودة عالية</h4>
              <p className="text-gray-600">نستخدم أفضل المواد والتقنيات في التنفيذ</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">خدمة متميزة</h4>
              <p className="text-gray-600">فريق محترف ملتزم بإرضاء العملاء</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
