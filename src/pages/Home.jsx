import { Link } from "react-router-dom";
import { PRODUCTS } from "../data";

function Container({ children }){ return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>; }

function Hero(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-neutral-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"/> جديدنا
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              التقنية بطابع <span className="text-yellow-400">Volt</span> ⚡
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-prose">
              إلكترونيات مختارة بعناية — أداء قوي، تصميم عصري، وتجربة شراء سريعة.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/category/all" className="px-4 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:brightness-90 transition">اكتشف المنتجات</Link>
              <a href="https://www.instagram.com/volt.iiq" target="_blank" className="px-4 py-3 rounded-xl border border-white/15 text-white hover:bg:white/5 transition">تسوق إنستغرام</a>
            </div>
            <div className="flex items-center gap-4 pt-2 text-white/60 text-sm">
              <div className="flex items-center gap-2"><span className="text-yellow-400">★</span> رضا العملاء</div>
              <div className="flex items-center gap-2"><span className="text-yellow-400">⏱</span> توصيل 1–3 أيام</div>
              <div className="flex items-center gap-2"><span className="text-yellow-400">🛡</span> دفع عند الاستلام</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-yellow-500/10 to-transparent border border-white/10 p-2">
              <div className="w-full h-full rounded-2xl bg-[radial-gradient(circle_at_70%_30%,rgba(250,204,21,.25),transparent_40%)] flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 p-3 w-full">
                  {PRODUCTS.slice(0,4).map((p) => (
                    <div key={p.id} className="group relative overflow-hidden rounded-2xl bg-black/60 border border:white/10">
                      <img src={p.image} alt={p.title} className="h-32 w-full object-cover opacity-90 group-hover:opacity-100 transition"/>
                      <div className="absolute top-2 left-2 text-[10px] bg-yellow-400 text-black px-2 py-1 rounded-full font-bold">{p.badge}</div>
                      <div className="p-3">
                        <div className="text-white text-xs font-semibold truncate">{p.title}</div>
                        <div className="text-yellow-400 font-bold">${p.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Section({ title, children, id }){
  return (
    <section id={id} className="py-12 bg-neutral-950 border-t border-white/10">
      <Container>
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">{title}</h3>
        {children}
      </Container>
    </section>
  )
}

export default function Home(){
  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      <Hero />
      <Section id="offers" title="⚡ عروض Volt">
        <p className="text-white/70">خصومات حقيقية على منتجات مختارة لفترة محدودة. لا تفوّت الفرصة!</p>
      </Section>
      <Section id="why" title="ليش تختار Volt؟">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <li className="rounded-3xl bg-black/60 border border-white/10 p-5">⚡ توصيل سريع</li>
          <li className="rounded-3xl bg-black/60 border border-white/10 p-5">⚡ دفع عند الاستلام</li>
          <li className="rounded-3xl bg-black/60 border border-white/10 p-5">⚡ منتجات أصلية</li>
        </ul>
      </Section>
      <Section id="faq" title="الأسئلة الشائعة">
        <div className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4 text-white/80">
            <div className="text-white font-semibold">كم يستغرق التوصيل؟</div>
            <div className="text-sm mt-1">عادة 1-3 أيام داخل العراق.</div>
          </div>
        </div>
      </Section>
    </div>
  )
}
