export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/volt.iiq",
  whatsappBase: "https://wa.me/9647XXXXXXXXX?text=", // غيّر الرقم
  tiktok: "#",
  phone: "+964-000-000-0000",
  email: "support@volt-iiq.com"
};

export const CATEGORIES = [
  { slug: "all", name: "الكل" },
  { slug: "headphones", name: "سماعات" },
  { slug: "chargers", name: "شواحن" },
  { slug: "keyboards", name: "لوحات مفاتيح" },
  { slug: "watches", name: "ساعات" },
  { slug: "powerbanks", name: "باوربانكات" },
  { slug: "cables", name: "كيابل" }
];

export const PRODUCTS = [
  { id:"p1", title:"سماعات لاسلكية Volt Air", price:29.99, image:"https://images.unsplash.com/photo-1518441902110-995d9d0f0a19?q=80&w=1200&auto=format&fit=crop", badge:"الأكثر مبيعًا", specs:["بلوتوث 5.3","عزل ضوضاء","شحن سريع"], category:"headphones", featured:true, description:"صوت نقي بعزل ضوضاء وشحن سريع." },
  { id:"p2", title:"شاحن مغناطيسي سريع 30W", price:19.99, image:"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop", badge:"عرض اليوم", specs:["MagSafe","كابل نايلون","حماية ذكية"], category:"chargers", featured:true, description:"شحن آمن وسريع بتوافق واسع." },
  { id:"p3", title:"كيبورد ميكانيكي RGB", price:49.99, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop", badge:"جديد", specs:["Switch Blue","RGB","تصميم مدمج"], category:"keyboards", featured:false, description:"كتابة ممتعة وإضاءة مبهرة." },
  { id:"p4", title:"ساعة ذكية Volt Fit", price:39.99, image:"https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop", badge:"خصم 20%", specs:["قياس نبض","مقاومة ماء","تنبيهات ذكية"], category:"watches", featured:true, description:"صحتك بين يديك بتصميم أنيق." }
];
