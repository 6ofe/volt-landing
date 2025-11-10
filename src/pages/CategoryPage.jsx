import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { CATEGORIES, PRODUCTS } from "../data";
import ProductCard from "../components/ProductCard";

export default function CategoryPage(){
  const { slug } = useParams();
  const [query, setQuery] = useState("");
  const category = CATEGORIES.find(c => c.slug === slug) || CATEGORIES[0];

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p =>
      (slug === "all" || p.category === slug) &&
      p.title.includes(query)
    );
  }, [slug, query]);

  return (
    <section className="py-14 bg-neutral-950 min-h-[60vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">{category.name}</h1>
            <p className="text-white/60 mt-1">فلتر حسب الفئة أو ابحث بالاسم.</p>
          </div>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ابحث..." className="w-64 rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-yellow-400/60"/>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          {filtered.length === 0 && <div className="col-span-full text-center text-white/60">ماكو منتجات هنا.</div>}
        </div>
      </div>
    </section>
  )
}
