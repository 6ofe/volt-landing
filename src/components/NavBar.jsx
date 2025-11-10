import { Link, NavLink } from "react-router-dom";
import { PRODUCTS } from "../data";

export default function NavBar(){
  const featured = PRODUCTS.filter(p => p.featured).slice(0,6);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-black">⚡</div>
            <span className="text-white font-semibold tracking-wide group-hover:text-yellow-400 transition">VOLT</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <NavLink to="/category/all" className="hover:text-white">المنتجات</NavLink>
            <a href="/#offers" className="hover:text-white">العروض</a>
            <a href="/#why" className="hover:text-white">ليش Volt</a>
            <NavLink to="/admin" className="hover:text-white">لوحة التحكم</NavLink>
            <div className="relative group">
              <button className="hover:text-white">الأهم ▾</button>
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-neutral-900 border border-white/10 rounded-xl p-3 w-72">
                <div className="grid grid-cols-1 gap-2">
                  {featured.map(p => (
                    <Link key={p.id} to={`/product/${p.id}`} className="flex items-center gap-2 hover:bg-white/5 rounded-lg p-2">
                      <img src={p.image} alt={p.title} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="text-sm">
                        <div className="text-white/90 line-clamp-1">{p.title}</div>
                        <div className="text-yellow-400 font-bold">${p.price}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          <Link to="/category/all" className="px-3 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:brightness-90 transition">تسوق الآن</Link>
        </div>
      </div>
    </header>
  )
}
