import { Award, Users, Target, Heart } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 border-b-2 border-yellow-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-yellow-500">من نحن</h2>
            <p className="text-xl text-gray-300">
              رواد في عالم التصميم الداخلي والديكور الفاخر
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">قصتنا</h3>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  نحن في Majestic Interior Design نفخر بكوننا من الرواد في مجال التصميم الداخلي والديكور في المنطقة. بدأت رحلتنا بشغف كبير لتحويل المساحات العادية إلى تحف فنية تعكس شخصية وذوق أصحابها.
                </p>
                <p>
                  نتخصص في مجموعة واسعة من الخدمات تشمل التصميم الداخلي الفاخر، أعمال الجبس بورد بأحدث التقنيات، تركيب المدافئ الحجرية والغازية، وديكورات الحدائق من شلالات وأرضيات وديكورات داخلية متنوعة من الخشب وبدائل الرخام.
                </p>
                <p>
                  فريقنا من المصممين والحرفيين المهرة ملتزم بتقديم أعلى مستويات الجودة والاحترافية في كل مشروع نقوم به.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600"
                  alt="تصميم داخلي"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 bg-gray-200 rounded-xl overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"
                  alt="ديكور فاخر"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">قيمنا</h3>
            <p className="text-xl text-gray-600">المبادئ التي نؤمن بها وتوجه عملنا</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-yellow-600">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Award className="text-yellow-600" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">التميز</h4>
              <p className="text-gray-600">
                نسعى دائماً لتحقيق أعلى معايير الجودة والإتقان في كل مشروع
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-yellow-600">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Users className="text-yellow-600" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">العمل الجماعي</h4>
              <p className="text-gray-600">
                نؤمن بقوة التعاون بين فريقنا وعملائنا لتحقيق النتائج المثالية
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-yellow-600">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Target className="text-yellow-600" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">الابتكار</h4>
              <p className="text-gray-600">
                نواكب أحدث الاتجاهات ونبتكر حلولاً تصميمية فريدة ومميزة
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-yellow-600">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Heart className="text-yellow-600" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">الشغف</h4>
              <p className="text-gray-600">
                نحب ما نقوم به ونضع قلوبنا في كل تفصيلة من تفاصيل عملنا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">خبراتنا</h3>
            <p className="text-xl text-gray-600">مجالات تخصصنا المتنوعة</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border-l-4 border-yellow-600">
              <h4 className="text-2xl font-bold mb-4 text-gray-900">التصميم الداخلي</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>تصميم المساحات السكنية والتجارية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>اختيار الألوان والمواد</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>تخطيط الأثاث والإضاءة</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border-l-4 border-yellow-600">
              <h4 className="text-2xl font-bold mb-4 text-gray-900">جبس بورد ومدافئ</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>أسقف جبس بورد معلقة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>مدافئ حجرية كلاسيكية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>مدافئ غازية عصرية</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border-l-4 border-yellow-600">
              <h4 className="text-2xl font-bold mb-4 text-gray-900">ديكور الحدائق</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>شلالات وممرات مائية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>أرضيات خارجية متنوعة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>ديكورات حدائق مميزة</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border-l-4 border-yellow-600">
              <h4 className="text-2xl font-bold mb-4 text-gray-900">ديكورات داخلية</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>ديكورات خشبية فاخرة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>بدائل الرخام الحديثة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>تفاصيل ديكورية راقية</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black text-white border-t-2 border-yellow-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-yellow-500">500+</div>
              <div className="text-xl text-gray-300">مشروع منجز</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-yellow-500">300+</div>
              <div className="text-xl text-gray-300">عميل سعيد</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-yellow-500">15+</div>
              <div className="text-xl text-gray-300">سنة خبرة</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-yellow-500">98%</div>
              <div className="text-xl text-gray-300">نسبة الرضا</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
