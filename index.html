<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Canasta Básica — Comparador de Precios</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#f7f7f5;--surface:#fff;--border:#e5e5e3;--text:#1a1a1a;--muted:#6b6b6b;
  --blue:#2563eb;--blue-light:#eff6ff;--green:#16a34a;--green-light:#f0fdf4;
  --red:#dc2626;--red-light:#fef2f2;--amber:#d97706;--amber-light:#fffbeb;
  --radius:10px;--radius-sm:6px;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:var(--bg);color:var(--text);min-height:100vh}

/* HEADER */
header{background:var(--surface);border-bottom:1px solid var(--border);padding:0 24px;height:56px;display:flex;align-items:center;gap:12px}
header svg{color:var(--blue)}
header h1{font-size:16px;font-weight:600;flex:1}
.source-badge{font-size:11px;background:var(--blue-light);color:var(--blue);padding:3px 10px;border-radius:20px;font-weight:500}

/* LAYOUT */
.layout{display:grid;grid-template-columns:280px 1fr;min-height:calc(100vh - 56px)}

/* SIDEBAR */
.sidebar{background:var(--surface);border-right:1px solid var(--border);padding:16px;overflow-y:auto}
.sidebar-title{font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px}
.category{margin-bottom:4px}
.cat-header{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-radius:var(--radius-sm);cursor:pointer;font-size:13px;font-weight:500;color:var(--text);transition:background .15s}
.cat-header:hover{background:var(--bg)}
.cat-header.open{background:var(--blue-light);color:var(--blue)}
.cat-count{font-size:11px;color:var(--muted);font-weight:400}
.cat-products{padding:2px 0 6px 12px;display:none}
.cat-products.open{display:block}
.prod-item{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:var(--radius-sm);cursor:pointer;font-size:13px;color:var(--muted);transition:all .15s}
.prod-item:hover{background:var(--bg);color:var(--text)}
.prod-item.active{color:var(--blue);font-weight:500}
.prod-item .dot{width:8px;height:8px;border-radius:50%;border:1.5px solid currentColor;flex-shrink:0;transition:background .15s}
.prod-item.active .dot{background:var(--blue);border-color:var(--blue)}

/* MAIN */
.main{padding:20px 24px;overflow-y:auto}
.loc-bar{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;margin-bottom:16px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.loc-bar label{font-size:13px;font-weight:500;color:var(--muted);white-space:nowrap}
.loc-bar input{width:160px;padding:6px 10px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;color:var(--text);outline:none}
.loc-bar input:focus{border-color:var(--blue)}
.btn{padding:7px 14px;border-radius:var(--radius-sm);border:none;cursor:pointer;font-size:13px;font-weight:500;transition:all .15s}
.btn-blue{background:var(--blue);color:#fff}.btn-blue:hover{background:#1d4ed8}
.btn-outline{background:#fff;border:1px solid var(--border);color:var(--text)}.btn-outline:hover{background:var(--bg)}
.btn:disabled{opacity:.5;cursor:default}

/* PRODUCT HEADER */
.prod-header{margin-bottom:16px}
.prod-header h2{font-size:18px;font-weight:600;margin-bottom:4px}
.prod-header p{font-size:13px;color:var(--muted)}

/* SUMMARY CARDS */
.summary{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px}
.sum-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px}
.sum-card .label{font-size:11px;color:var(--muted);font-weight:500;text-transform:uppercase;letter-spacing:.4px;margin-bottom:4px}
.sum-card .value{font-size:20px;font-weight:600}
.sum-card.green .value{color:var(--green)}
.sum-card.red .value{color:var(--red)}
.sum-card.blue .value{color:var(--blue)}

/* TABLE */
.table-wrap{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}
table{width:100%;border-collapse:collapse}
th{background:var(--bg);padding:10px 16px;text-align:left;font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;border-bottom:1px solid var(--border)}
td{padding:13px 16px;font-size:14px;border-bottom:1px solid var(--bg)}
tr:last-child td{border-bottom:none}
tr:hover td{background:#fcfcfb}
.cadena-tag{display:inline-block;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:500;background:var(--bg);color:var(--muted)}
.price-cell{font-weight:600;font-size:15px;white-space:nowrap}
.diff-tag{font-size:11px;padding:2px 6px;border-radius:4px;margin-left:6px;font-weight:500}
.diff-green{background:var(--green-light);color:var(--green)}
.diff-red{background:var(--red-light);color:var(--red)}
.rank{width:24px;height:24px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:600}
.rank-1{background:var(--amber-light);color:var(--amber)}
.rank-n{background:var(--bg);color:var(--muted)}

/* EMPTY */
.empty{text-align:center;padding:60px 20px;color:var(--muted)}
.empty svg{margin-bottom:12px;opacity:.3}
.empty p{font-size:14px}

/* STATUS */
.status{font-size:13px;padding:10px 14px;border-radius:var(--radius-sm);margin-bottom:14px}
.status.warn{background:var(--amber-light);color:var(--amber)}
.status.err{background:var(--red-light);color:var(--red)}
.status.ok{background:var(--green-light);color:var(--green)}
.spin{display:inline-block;width:13px;height:13px;border:2px solid #ccc;border-top-color:var(--blue);border-radius:50%;animation:spin .7s linear infinite;margin-right:6px;vertical-align:middle}
@keyframes spin{to{transform:rotate(360deg)}}

@media(max-width:640px){
  .layout{grid-template-columns:1fr}
  .sidebar{display:none}
  .summary{grid-template-columns:1fr 1fr}
}
</style>
</head>
<body>

<header>
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M7 2L4 6v13a2 2 0 002 2h10a2 2 0 002-2V6l-3-4H7z"/>
    <line x1="4" y1="6" x2="18" y2="6"/>
    <path d="M14.5 11a3.5 3.5 0 01-7 0"/>
  </svg>
  <h1>Comparador de canasta básica</h1>
  <span class="source-badge">Fuente: Precios Claros · SEPA</span>
</header>

<div class="layout">
  <aside class="sidebar">
    <div class="sidebar-title">Canasta básica</div>
    <div id="catList"></div>
  </aside>

  <main class="main">
    <div class="loc-bar">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="var(--muted)" stroke-width="1.5"><circle cx="7.5" cy="6" r="2.5"/><path d="M7.5 1C4.46 1 2 3.46 2 6.5c0 3.5 5.5 8.5 5.5 8.5s5.5-5 5.5-8.5C13 3.46 10.54 1 7.5 1z"/></svg>
      <label>Lat</label>
      <input type="number" id="lat" value="-34.6037" step="0.001">
      <label>Lng</label>
      <input type="number" id="lng" value="-58.3816" step="0.001">
      <button class="btn btn-outline" onclick="geolocate()">📍 Mi ubicación</button>
    </div>

    <div id="statusBar"></div>

    <div id="mainContent">
      <div class="empty">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 6L6 14v20l14 8 14-8V14L20 6z"/><path d="M6 14l14 8M20 22v22M34 14l-14 8"/></svg>
        <p>Seleccioná un producto del panel izquierdo para ver los precios comparados por sucursal.</p>
      </div>
    </div>
  </main>
</div>

<script>
const PROXY = '/api/precios';
const BASE_DEMO = 'demo';

const CANASTA = [
  {cat:'🥛 Lácteos', items:[
    {id:'7790070000001',nombre:'Leche entera 1L',marca:'La Serenísima'},
    {id:'7790070000002',nombre:'Leche entera 1L',marca:'Sancor'},
    {id:'7791290000001',nombre:'Yogur entero 190g',marca:'Danone'},
    {id:'7790040000001',nombre:'Queso cremoso 200g',marca:'La Paulina'},
  ]},
  {cat:'🍞 Panificados', items:[
    {id:'7790170000001',nombre:'Pan lactal blanco 500g',marca:'Bimbo'},
    {id:'7790170000002',nombre:'Pan lactal integral 500g',marca:'Fargo'},
    {id:'7791290000010',nombre:'Galletitas de agua 200g',marca:'Bagley'},
  ]},
  {cat:'🛢️ Aceites y grasas', items:[
    {id:'7790200000001',nombre:'Aceite de girasol 900ml',marca:'Cocinero'},
    {id:'7790200000002',nombre:'Aceite de girasol 900ml',marca:'Natura'},
    {id:'7790200000003',nombre:'Aceite de maíz 900ml',marca:'Mazola'},
  ]},
  {cat:'🌾 Harinas y arroz', items:[
    {id:'7790540000001',nombre:'Harina 000 1kg',marca:'Cañuelas'},
    {id:'7790540000002',nombre:'Arroz largo fino 1kg',marca:'Gallo'},
    {id:'7790540000003',nombre:'Fideos spaghetti 500g',marca:'Matarazzo'},
    {id:'7790540000004',nombre:'Polenta 500g',marca:'Presto Pronta'},
  ]},
  {cat:'☕ Infusiones', items:[
    {id:'7790110000001',nombre:'Yerba mate 1kg',marca:'Taragüi'},
    {id:'7790110000002',nombre:'Yerba mate 1kg',marca:'Playadito'},
    {id:'7790120000001',nombre:'Café molido 250g',marca:'La Virginia'},
    {id:'7790120000002',nombre:'Té negro x20',marca:'Lipton'},
  ]},
  {cat:'🍬 Azúcar y dulces', items:[
    {id:'7790620000001',nombre:'Azúcar común 1kg',marca:'Ledesma'},
    {id:'7790620000002',nombre:'Mermelada frutilla 454g',marca:'Arcor'},
  ]},
  {cat:'🧴 Higiene', items:[
    {id:'7791290000020',nombre:'Jabón tocador 125g',marca:'Dove'},
    {id:'7791290000021',nombre:'Papel higiénico x4',marca:'Elite'},
    {id:'7791290000022',nombre:'Pasta dental 90g',marca:'Colgate'},
  ]},
];

let sucursales=[], openCat=null, currentProd=null;

function buildSidebar(){
  const c=document.getElementById('catList');
  c.innerHTML=CANASTA.map((cat,ci)=>`
    <div class="category">
      <div class="cat-header" onclick="toggleCat(${ci})" id="cath-${ci}">
        <span>${cat.cat} <span class="cat-count">(${cat.items.length})</span></span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4.5l3 3 3-3"/></svg>
      </div>
      <div class="cat-products" id="catp-${ci}">
        ${cat.items.map((p,pi)=>`
          <div class="prod-item" onclick="selectProd(${ci},${pi})" id="prod-${ci}-${pi}">
            <span class="dot"></span>${p.nombre}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleCat(ci){
  const h=document.getElementById('cath-'+ci);
  const p=document.getElementById('catp-'+ci);
  const isOpen=p.classList.contains('open');
  document.querySelectorAll('.cat-header').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('.cat-products').forEach(x=>x.classList.remove('open'));
  if(!isOpen){h.classList.add('open');p.classList.add('open')}
}

function selectProd(ci,pi){
  document.querySelectorAll('.prod-item').forEach(x=>x.classList.remove('active'));
  document.getElementById('prod-'+ci+'-'+pi).classList.add('active');
  currentProd=CANASTA[ci].items[pi];
  cargar(currentProd);
}

function setStatus(msg,type=''){
  const el=document.getElementById('statusBar');
  el.innerHTML=msg?`<div class="status ${type}">${msg}</div>`:'';
}

function geolocate(){
  if(!navigator.geolocation)return;
  navigator.geolocation.getCurrentPosition(p=>{
    document.getElementById('lat').value=p.coords.latitude.toFixed(5);
    document.getElementById('lng').value=p.coords.longitude.toFixed(5);
    if(currentProd)cargar(currentProd);
  });
}

async function cargar(prod){
  setStatus('<span class="spin"></span>Buscando sucursales y precios...','');
  document.getElementById('mainContent').innerHTML='';
  const lat=document.getElementById('lat').value;
  const lng=document.getElementById('lng').value;

  try{
    // Intentar API real via proxy
    const r=await fetch(`${PROXY}?lat=${lat}&lng=${lng}&id=${prod.id}`,{signal:AbortSignal.timeout(5000)});
    if(!r.ok)throw new Error('proxy');
    const d=await r.json();
    setStatus('');
    renderTabla(prod,d.sucursales);
  }catch{
    setStatus('⚠️ Usando datos de demostración — para datos reales deploy con el backend Vercel incluido.','warn');
    renderDemo(prod);
  }
}

const CADENAS=['Carrefour','Coto','Día','La Anónima','Walmart','Jumbo','Disco','Vea','Changomas'];
const BARRIOS=['Palermo','Belgrano','Caballito','Flores','Almagro','Recoleta','Balvanera','Villa Crespo','Núñez'];
const CALLES=['Corrientes','Rivadavia','Cabildo','Santa Fe','Callao','Córdoba','Las Heras','Scalabrini Ortiz'];

function renderDemo(prod){
  const base=800+Math.round(Math.random()*1200);
  const rows=CADENAS.slice(0,6+Math.floor(Math.random()*3)).map(c=>({
    nombre:`${c} ${BARRIOS[Math.floor(Math.random()*BARRIOS.length)]}`,
    cadena:c,
    dir:`Av. ${CALLES[Math.floor(Math.random()*CALLES.length)]} ${Math.floor(Math.random()*3000+100)}`,
    precio:base+Math.floor((Math.random()-.25)*base*.4)
  })).sort((a,b)=>a.precio-b.precio);
  renderTabla(prod,rows);
}

function renderTabla(prod,rows){
  if(!rows||!rows.length){
    document.getElementById('mainContent').innerHTML='<div class="empty"><p>No se encontraron precios para este producto.</p></div>';
    return;
  }
  const min=rows[0].precio, max=rows[rows.length-1].precio;
  const ahorro=max-min;
  const prom=Math.round(rows.reduce((a,r)=>a+r.precio,0)/rows.length);

  document.getElementById('mainContent').innerHTML=`
    <div class="prod-header">
      <h2>${prod.nombre}</h2>
      <p>${prod.marca} · ${rows.length} sucursales encontradas</p>
    </div>
    <div class="summary">
      <div class="sum-card green">
        <div class="label">Precio más bajo</div>
        <div class="value">$${min.toLocaleString('es-AR')}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px">${rows[0].nombre}</div>
      </div>
      <div class="sum-card red">
        <div class="label">Precio más alto</div>
        <div class="value">$${max.toLocaleString('es-AR')}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px">${rows[rows.length-1].nombre}</div>
      </div>
      <div class="sum-card blue">
        <div class="label">Ahorro posible</div>
        <div class="value">$${ahorro.toLocaleString('es-AR')}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px">${Math.round(ahorro/max*100)}% de diferencia</div>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>#</th><th>Sucursal</th><th>Cadena</th><th>Dirección</th><th>Precio</th></tr></thead>
        <tbody>
          ${rows.map((r,i)=>{
            const diff=i===0?null:((r.precio-min)/min*100).toFixed(1);
            return `<tr>
              <td><span class="rank ${i===0?'rank-1':'rank-n'}">${i+1}</span></td>
              <td style="font-weight:500">${r.nombre||r.dir}</td>
              <td><span class="cadena-tag">${r.cadena||''}</span></td>
              <td style="color:var(--muted);font-size:13px">${r.dir||r.direccion||''}</td>
              <td class="price-cell" style="color:${i===0?'var(--green)':i===rows.length-1?'var(--red)':'var(--text)'}">
                $${r.precio.toLocaleString('es-AR')}
                ${diff?`<span class="diff-tag diff-red">+${diff}%</span>`:'<span class="diff-tag diff-green">mejor precio</span>'}
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

buildSidebar();
</script>
</body>
</html>
