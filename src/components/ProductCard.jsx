import { Link } from "react-router-dom";

export default function ProductCard({ product }){
  return (
    <article className="group rounded-3xl overflow-hidden bg-black/60 border border-white/10 hover:border-yellow-400/40 transition">
      <div className="relative">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover group-hover:scale-[1.02] transition"/>
        {product.badge && (<div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">{product.badge}</div>)}
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold line-clamp-1">{product.title}</h3>
        <div className="flex items-center justify-between mt-3">
          <div className="text-yellow-400 font-extrabold text-lg">${product.price}</div>
          <div className="flex gap-2">
            <Link to={`/product/${product.id}`} className="px-3 py-2 rounded-lg border border-white/15 text-white text-sm hover:bg-white/5">تفاصيل</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
