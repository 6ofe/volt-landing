const ZAPIER_WEBHOOK = "https://hooks.zapier.com/hooks/catch/XXXXXXX/XXXXXXX";
const ZAPIER_UPDATE  = "https://hooks.zapier.com/hooks/catch/XXXXXXX/UPDATE";

export async function createOrder(payload){
  const res = await fetch(ZAPIER_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("Failed to create order");
  return true;
}

export async function updateOrderStatus({ id, status }){
  const res = await fetch(ZAPIER_UPDATE, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ id, status })
  });
  if (!res.ok) throw new Error("Failed to update status");
  return true;
}
