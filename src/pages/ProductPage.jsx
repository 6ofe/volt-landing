import { useParams } from "react-router-dom";
import { PRODUCTS, SOCIAL_LINKS } from "../data";
import { useState } from "react";
import OrderModal from "../components/OrderModal";

export default function ProductPage(){
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [open, setOpen] = useState(false);
  if (!product) return <div className="text-white p-8">المنتج غير موجود.</div>;

  return (
    <section className="py-14 bg-black min-h-[60vh]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
        <img src={product.image} alt={product.title} className="rounded-3xl border border-white/10 object-cover w-full h-[360px]"/>
        <div>
          <h1 className="text-3xl font-black text-white">{product.title}</h1>
          <div className="text-yellow-400 font-extrabold text-2xl mt-2">${product.price}</div>
          <p className="text-white/70 mt-3">{product.description}</p>
          <ul className="text-white/60 text-sm mt-4 space-y-1">{product.specs.map((s,i)=>(<li key={i}>• {s}</li>))}</ul>
          <div className="flex gap-3 mt-6">
            <a href={`${SOCIAL_LINKS.whatsappBase}أريد%20${encodeURIComponent(product.title)}`} target="_blank" rel="noreferrer" className="px-4 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:brightness-90">تواصل واتساب</a>
            <button onClick={()=>setOpen(true)} className="px-4 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5">أضف للسلة / اطلب</button>
          </div>
        </div>
      </div>
      {open && <OrderModal product={product} onClose={()=>setOpen(false)} />}
    </section>
  )
}
