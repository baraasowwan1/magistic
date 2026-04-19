import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "جميع الأعمال" },
    { id: "interior", label: "تصميم داخلي" },
    { id: "gypsum", label: "جبس بورد" },
    { id: "fireplace", label: "مدافئ" },
    { id: "garden", label: "ديكور حدائق" },
  ];

  const projects = [
    {
      id: 1,
      category: "interior",
      title: "صالة معيشة فاخرة",
      description: "تصميم عصري يجمع بين الفخامة والراحة",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
    },
    {
      id: 2,
      category: "interior",
      title: "غرفة نوم كلاسيكية",
      description: "تصميم أنيق بلمسات كلاسيكية راقية",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
    },
    {
      id: 3,
      category: "gypsum",
      title: "سقف جبس بورد مميز",
      description: "تصميم هندسي حديث بإضاءة مدمجة",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
    },
    {
      id: 4,
      category: "fireplace",
      title: "مدفأة حجرية فاخرة",
      description: "مدفأة كلاسيكية بحجر طبيعي",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    },
    {
      id: 5,
      category: "interior",
      title: "مطبخ عصري",
      description: "تصميم عملي وأنيق بألوان متناسقة",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
    },
    {
      id: 6,
      category: "garden",
      title: "شلال حديقة",
      description: "شلال صناعي مع تنسيق حجري طبيعي",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    },
    {
      id: 7,
      category: "interior",
      title: "مكتب منزلي",
      description: "مساحة عمل مريحة ومنتجة",
      image: "https://images.unsplash.com/photo-1600494603989-9650cf6dcc55?w=800",
    },
    {
      id: 8,
      category: "fireplace",
      title: "مدفأة غازية حديثة",
      description: "تصميم عصري بتقنية متطورة",
      image: "https://images.unsplash.com/photo-1549488549-74d929e19ac4?w=800",
    },
    {
      id: 9,
      category: "gypsum",
      title: "جبس بورد للصالة",
      description: "تصميم فني مع إضاءة خفية",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    },
    {
      id: 10,
      category: "garden",
      title: "أرضية حديقة",
      description: "أرضية خشبية طبيعية للحديقة",
      image: "https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=800",
    },
    {
      id: 11,
      category: "interior",
      title: "صالة استقبال",
      description: "تصميم فاخر يترك انطباعاً مميزاً",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
    },
    {
      id: 12,
      category: "interior",
      title: "حمام فاخر",
      description: "تصميم عصري ببدائل رخام راقية",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 border-b-2 border-yellow-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-yellow-500">معرض أعمالنا</h2>
            <p className="text-xl text-gray-300">
              استكشف مجموعة مختارة من مشاريعنا المنجزة بنجاح
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 sticky top-[72px] z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  selectedCategory === category.id
                    ? "bg-yellow-600 text-black shadow-lg"
                    : "bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 border-t-4 border-yellow-600"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">لا توجد مشاريع في هذه الفئة</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white border-t-2 border-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6 text-yellow-500">هل أعجبتك أعمالنا؟</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            دعنا نحول مساحتك إلى تحفة فنية تعكس شخصيتك وذوقك الرفيع
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-600 text-black px-10 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
          >
            تواصل معنا الآن
          </a>
        </div>
      </section>
    </div>
  );
}
