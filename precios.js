export default async function handler(req, res) {
  const { lat, lng, id } = req.query;
  const base = 'https://d3e6htiiul5ek9.cloudfront.net/prod';

  const sucRes = await fetch(`${base}/sucursales?lat=${lat}&lng=${lng}&limit=20`);
  const sucData = await sucRes.json();
  const ids = sucData.sucursales.map(s => s.id).join(',');

  const precRes = await fetch(`${base}/producto?limit=30&id_producto=${id}&array_sucursales=${ids}`);
  const precData = await precRes.json();

  const rows = (precData.sucursales || [])
    .filter(s => s.precio)
    .map(s => ({
      nombre: s.nombre || s.razonSocial,
      cadena: s.cadena,
      dir: s.direccion,
      precio: parseFloat(s.precio)
    }))
    .sort((a, b) => a.precio - b.precio);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ sucursales: rows });
}