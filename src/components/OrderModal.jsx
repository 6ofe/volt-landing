import { useState } from "react";
import { SOCIAL_LINKS } from "../data";
import { createOrder } from "../services/orders";

const newOrderId = () => `VOLT-${Date.now().toString().slice(-8)}`;

export default function OrderModal({ product, onClose }){
  const [name, setName] = useState(""); const [phone, setPhone] = useState("");
  const [address, setAddress] = useState(""); const [note, setNote] = useState("");
  const [createdId, setCreatedId] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const id = newOrderId();
    const payload = { id, productId: product.id, productTitle: product.title, price: product.price, name, phone, address, note, status: "قيد المعالجة", createdAt: Date.now() };
    try { await createOrder(payload); setCreatedId(id); }
    catch { alert("فشل إنشاء الطلب. تأكد من Zapier Webhook"); }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur flex items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-2xl bg-neutral-950 border border-white/10 p-5">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-bold">طلب منتج: <span className="text-yellow-400">{product.title}</span></h4>
          <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
        </div>
        {createdId ? (
          <div className="space-y-3 text-white/80">
            <div className="text-white">تم إنشاء الطلب ✅</div>
            <div>رقم التتبّع: <span className="font-mono font-bold text-yellow-400">{createdId}</span></div>
            <div className="pt-2 flex gap-2">
              <a href={`${SOCIAL_LINKS.whatsappBase}${encodeURIComponent(`طلب جديد رقم ${createdId} — ${product.title} — الاسم: ${name} — الهاتف: ${phone} — العنوان: ${address} — ملاحظة: ${note}`)}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:brightness-90">إرسال التفاصيل على واتساب</a>
              <button onClick={onClose} className="px-4 py-2 rounded-xl border border-white/15 text-white hover:bg-white/5">إغلاق</button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="grid grid-cols-1 gap-3">
            <input value={name} onChange={e=>setName(e.target.value)} className="rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-yellow-400/60" placeholder="الاسم الكامل" required />
            <input value={phone} onChange={e=>setPhone(e.target.value)} className="rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-yellow-400/60" placeholder="رقم الهاتف" required />
            <input value={address} onChange={e=>setAddress(e.target.value)} className="rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-yellow-400/60" placeholder="العنوان" required />
            <textarea value={note} onChange={e=>setNote(e.target.value)} className="rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-yellow-400/60" rows={3} placeholder="ملاحظة (اختياري)" />
            <button className="px-4 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:brightness-90">تأكيد الطلب</button>
          </form>
        )}
      </div>
    </div>
  )
}
