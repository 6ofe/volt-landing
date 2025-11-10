import { useState } from "react";
import { updateOrderStatus } from "../services/orders";

const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS || "volt_admin_123";

export default function Admin(){
  const [pass, setPass] = useState("");
  const [ok, setOk] = useState(false);
  const [id, setId] = useState("");
  const [status, setStatus] = useState("قيد المعالجة");
  const [msg, setMsg] = useState("");

  const login = (e) => {
    e.preventDefault();
    setOk(pass === ADMIN_PASS);
    if (pass !== ADMIN_PASS) setMsg("كلمة المرور خاطئة");
  };

  const submit = async (e) => {
    e.preventDefault();
    try{
      await updateOrderStatus({ id, status });
      setMsg("تم التحديث بنجاح");
    }catch(e){
      setMsg("فشل التحديث: تأكد من Zapier UPDATE webhook");
    }
  };

  if (!ok){
    return (
      <section className="py-20 bg-black min-h-[60vh]">
        <div className="mx-auto max-w-md px-4">
          <h1 className="text-2xl font-black text-white mb-4">لوحة التحكم</h1>
          <form onSubmit={login} className="grid gap-3">
            <input className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white" placeholder="كلمة المرور" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
            <button className="px-4 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:brightness-90">دخول</button>
            <div className="text-red-300 text-sm">{msg}</div>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black min-h-[60vh]">
      <div className="mx-auto max-w-md px-4">
        <h1 className="text-2xl font-black text-white mb-4">تحديث حالة الطلب</h1>
        <form onSubmit={submit} className="grid gap-3">
          <input className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white" placeholder="رقم الطلب (VOLT-XXXXXX)" value={id} onChange={e=>setId(e.target.value)} />
          <select className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white" value={status} onChange={e=>setStatus(e.target.value)}>
            <option>قيد المعالجة</option>
            <option>قيد الشحن</option>
            <option>تم التسليم</option>
            <option>ملغي</option>
          </select>
          <button className="px-4 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:brightness-90">تحديث</button>
          <div className="text-white/70 text-sm">{msg}</div>
        </form>
      </div>
    </section>
  )
}
