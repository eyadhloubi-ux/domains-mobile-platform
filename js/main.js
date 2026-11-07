(function(){
const I={
 truck:'<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
 x:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m9 9 6 6M15 9l-6 6"/>',
 radio:'<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
 pin:'<path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
 arrow:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
 video:'<path d="m16 13 5.2 3.5a.5.5 0 0 0 .8-.4V7.9a.5.5 0 0 0-.8-.4L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
 zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
 tent:'<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/>',
 mark:'<path d="M5.5 4v3a6.5 6.5 0 0 0 13 0V4"/><path d="M6 20a6 6 0 0 1 12 0"/>',
 headphones:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
 mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
 msgq:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
 landmark:'<path d="M3 22h18"/><path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7"/><path d="M12 2 20 7H4z"/>',
 globe:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
 bulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
 trophy:'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.7V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22"/><path d="M14 14.7V17c0 .6.5 1 1 1.2 1.2.6 2 2 2 3.8"/><path d="M18 2H6v7a6 6 0 0 0 12 0z"/>',
 leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12"/>',
 msgs:'<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
 moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
 book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
 smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>',
 flask:'<path d="M10 2v7.5a2 2 0 0 1-.2.9L4.7 20.6a1 1 0 0 0 .9 1.4h12.8a1 1 0 0 0 .9-1.4l-5.1-10.2a2 2 0 0 1-.2-.9V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
 help:'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
 palette:'<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1a1.6 1.6 0 0 1 1.7-1.7h2c3 0 5.5-2.5 5.5-5.5C22 6 17.5 2 12 2z"/>',
 store:'<path d="m2 7 4.4-4.4A2 2 0 0 1 7.8 2h8.4a2 2 0 0 1 1.4.6L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-2-1 2.7 2.7 0 0 1-4 0 2.7 2.7 0 0 1-4 0 2.7 2.7 0 0 1-4 0 2.7 2.7 0 0 1-2 1 2 2 0 0 1-2-2z"/>',
 rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0"/><path d="M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
 award:'<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>'
};
const ico=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]||''}</svg>`;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const hydrate=root=>root.querySelectorAll('[data-ico]').forEach(el=>{el.innerHTML=ico(el.dataset.ico)});
hydrate(document);

/* ---------- route ---------- */
const stops=$$('#stops button');
function setStop(i){
  stops.forEach((b,k)=>b.classList.toggle('on',k===i));
  $('#truck').style.insetInlineStart=`calc(12.5% + ${i*25}%)`;
  $('#routeFill').style.width=`${i*25}%`;
}
stops.forEach(b=>b.addEventListener('click',()=>setStop(+b.dataset.i)));


/* ---------- components ---------- */
const COMP=[
 {k:'studio',t:'استوديو زجاجي',d:'لقاءات وبودكاست تُرى من الخارج، بتجهيزات تصوير وصوت وبث.',img:'ph-dstudio',x:53,y:42,i:'video'},
 {k:'team',t:'مساحة المتطوعين',d:'جزء معتم أو شبه معتم للفريق والتنسيق وحفظ المستلزمات.',img:'ph-dteam',x:21,y:42,i:'users'},
 {k:'equip',t:'تجهيزات متنقلة',d:'كهرباء واتصال وإنارة وتكييف وتخزين، بحسب الإمكانات الفنية.',img:'ph-dstorage',x:47,y:18,i:'zap'},
 {k:'tents',t:'خيم ومظلات سريعة النصب',d:'تُحمل في المركبة، تُنصب أمامها عند الحاجة، ثم تُطوى وتعود إليها.',img:'ph-screen',x:62,y:72,i:'tent'},
 {k:'id',t:'هوية واضحة',d:'حضور معروف ومميز لدومينز أينما توقفت المركبة.',img:'ph-brand',x:10,y:50,i:'mark'}
];
const compImg=$('#compImg'),chipsEl=$('#compChips');
COMP.forEach((c,n)=>{
  const h=document.createElement('button');h.className='hot';h.style.left=c.x+'%';h.style.top=c.y+'%';h.innerHTML='<span></span>';h.setAttribute('aria-label',c.t);h.dataset.n=n;compImg.appendChild(h);
  const ch=document.createElement('button');ch.className='chip';ch.innerHTML=ico(c.i)+c.t;ch.dataset.n=n;chipsEl.appendChild(ch);
});
let compN=0;
function setComp(n){
  compN=(n+COMP.length)%COMP.length;const c=COMP[compN];
  $$('.hot').forEach((h,k)=>h.classList.toggle('on',k===compN));
  $$('.chip').forEach((h,k)=>h.classList.toggle('on',k===compN));
  const p=$('#compPhoto');p.className='comp-photo ph '+c.img+' fade';
  const b=$('#compBody');b.innerHTML=`<span class="ic">${ico(c.i)}</span><h3>${c.t}</h3><p>${c.d}</p>`;b.classList.remove('fade');void b.offsetWidth;b.classList.add('fade');
  p.classList.remove('fade');void p.offsetWidth;p.classList.add('fade');
}
$$('.hot,.chip').forEach(b=>b.addEventListener('click',()=>setComp(+b.dataset.n)));
setComp(0);

/* ---------- modes ---------- */
const MODES=[
 {t:'الكارافان وحده',u:'مقابلات · تسجيل · بودكاست · لقاءات محدودة',img:'ph-fountain',tents:0,ppl:4,zone:false},
 {t:'الكارافان + خيمة واحدة',u:'نقطة استقبال · جلسة · نشاط صغير',img:'ph-screen',tents:1,ppl:10,zone:false},
 {t:'الكارافان + عدة خيام',u:'فعاليات متزامنة · معارض · تجارب',img:'ph-screen',mosaic:['ph-screen','ph-tent','ph-cart']},
 {t:'محيط الكارافان المفتوح',u:'أنشطة جماعية · مبادرات · تفاعل مباشر',img:'ph-site',tents:0,ppl:40,zone:true}
];
const pick=$('#modePick');
MODES.forEach((m,n)=>{const b=document.createElement('button');b.setAttribute('role','tab');b.dataset.n=n;b.innerHTML=`<span class="mn">${n+1}</span><b>${m.t}</b><small>${m.u}</small>`;pick.appendChild(b)});
const ml=$('#mlayers');
ml.innerHTML=MODES.map((m,n)=>`<div class="mlayer${m.mosaic?' mosaic':''}" data-n="${n}">${(m.mosaic||[m.img]).map(c=>`<span class="ph ${c}" role="img" aria-label="${m.t}"></span>`).join('')}<span class="mcap">${n+1} · ${m.t}</span></div>`).join('');
let modeN=0;
function setMode(n){
  modeN=(n+4)%4;const m=MODES[modeN];
  $$('#modePick button').forEach((b,k)=>{b.classList.toggle('on',k===modeN);b.setAttribute('aria-selected',k===modeN)});
  $$('.mlayer').forEach((l,k)=>l.classList.toggle('on',k===modeN));
  $('#meter').style.width=((modeN+1)*25)+'%';$('#meterTxt').textContent=(modeN+1)+' / 4';
}
$$('#modePick button').forEach(b=>b.addEventListener('click',()=>setMode(+b.dataset.n)));
setMode(0);

/* ---------- phase 1 alternatives ---------- */
const ALTS=[['جناح قابل للفك','ph-pavilion'],['استوديو مفتوح','ph-open'],['خيمة عصرية','ph-tent'],['عربة صغيرة','ph-cart']];
$('#alts').innerHTML=ALTS.map((a,n)=>`<button class="alt" data-n="${n}"><span class="ph ${a[1]}" role="img" aria-label="${a[0]}"></span>${a[0]}</button>`).join('');
const lb=$('#lb');let lastFocus=null;
const GAL=[...ALTS.map(a=>[a[0],a[1],'المرحلة 1']),['الكارافان المتنقل','ph-caravan','المرحلة 2']];
let gi=0;
$('#lbDots').innerHTML=GAL.map((g,k)=>`<button aria-label="${g[0]}" data-k="${k}"></button>`).join('');
$('#lbPrev').innerHTML=ico('arrow');$('#lbNext').innerHTML=ico('arrow');
function showLB(k,dir){
  gi=(k+GAL.length)%GAL.length;const g=GAL[gi],im=$('#lbImg');
  im.className='ph '+g[1]+(dir?(dir>0?' slide-l':' slide-r'):'');
  $('#lbTitle').textContent=g[0];$('#lbCount').textContent=`${g[2]} · ${gi+1} من ${GAL.length}`;
  $$('#lbDots button').forEach((b,j)=>b.classList.toggle('on',j===gi));
}
function openLB(k){lastFocus=document.activeElement;showLB(k,0);lb.hidden=false;$('#lbX').focus()}
$('#lbNext').addEventListener('click',()=>showLB(gi+1,1));
$('#lbPrev').addEventListener('click',()=>showLB(gi-1,-1));
$$('#lbDots button').forEach(b=>b.addEventListener('click',()=>{const k=+b.dataset.k;showLB(k,k>gi?1:-1)}));
let tx=null;const st=$('.lb-stage');
st.addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
st.addEventListener('touchend',e=>{if(tx===null)return;const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>40)showLB(gi+(d>0?1:-1),d>0?1:-1);tx=null});
$('#p2img').addEventListener('click',()=>openLB(GAL.length-1));
function closeLB(){lb.hidden=true;lastFocus&&lastFocus.focus()}
$$('.alt').forEach(b=>b.addEventListener('click',()=>openLB(+b.dataset.n)));
$('#lbX').addEventListener('click',closeLB);
lb.addEventListener('click',e=>{if(e.target===lb)closeLB()});

/* ---------- activities ---------- */
const AX=[
 {t:'الإعلام والحوار المجتمعي',short:'الإعلام والحوار',img:'ph-open',ideas:[
  ['بودكاست الساحة','لقاءات مع شخصيات عامة ومؤثرة','headphones'],
  ['صوت الناس','مقابلات قصيرة مع رواد الساحة','mic'],
  ['سؤال الأسبوع','سؤال مجتمعي واحد وإجابات متنوعة','msgq'],
  ['لقاء مع مسؤول','حوار مباشر حول قضايا الناس','landmark'],
  ['من الساحة إلى العالم','لقاءات عن بُعد مع شخصيات سورية ومغتربين','globe']]},
 {t:'التطوع والمبادرات المجتمعية',short:'التطوع والمبادرات',img:'ph-tent',ideas:[
  ['بنك المتطوعين','استقبال المتطوعين وربطهم بالفرص','users'],
  ['أصحاب المبادرات','استقبال الأفكار المجتمعية وإبراز أصحابها','bulb'],
  ['تحديات مجتمعية','فرق تتنافس لإنجاز أثر إيجابي ملموس','trophy']]},
 {t:'التوعية والسلوك الحضاري',short:'التوعية والسلوك',img:'ph-pavilion',ideas:[
  ['تحدي السلوك الإيجابي','تحدٍّ أسبوعي لنظافة مكان أو تنظيمه أو العناية به','leaf'],
  ['حوارات التنوع','لقاءات محترمة بين مكونات وخلفيات مختلفة','msgs'],
  ['جلسات الساحة المسائية','حوار هادئ حول الكارافان، مع خيم عند الحاجة','moon']]},
 {t:'المعرفة والترفيه الهادف',short:'المعرفة والترفيه',img:'ph-fountain',ideas:[
  ['نادي القراءة المفتوح','لقاءات مبسطة تشجع القراءة','book'],
  ['يوم الأطفال والقراءة','مساحة آمنة بإشراف، يتابعها الأهالي من الخارج','smile'],
  ['التجارب العلمية الممتعة','تجارب آمنة يقدّمها مختص بشخصية علمية جذابة','flask'],
  ['المسابقات الثقافية','منافسات معرفية، منها «مين بيعرف حلب؟»','help']]},
 {t:'المعارض والهوية والإبداع',short:'المعارض والإبداع',img:'ph-cart',ideas:[
  ['معارض فنية','أعمال وإبداعات من المجتمع المحلي','palette'],
  ['التاجر الصغير','أطفال يعرضون منتجاتهم وتجاربهم بإشراف مناسب','store'],
  ['معرض أفكار الشباب','مشاريع شبابية تحتاج فرصة للظهور','rocket'],
  ['شكراً لأنك ساعدت','تقدير أشخاص قدّموا مساهمات إيجابية','award']]}
];
$('#axes').innerHTML=AX.map((a,n)=>`<button class="axis-tile rv" data-ax="${n}"><span class="ph ${a.img}"></span><span class="an">${n+1}</span><span><h3>${a.t}</h3><span class="cnt">${a.ideas.length} أفكار</span><span class="ics">${a.ideas.map(i=>ico(i[2])).join('')}</span></span></button>`).join('');
$('#axisScreens').outerHTML=AX.map((a,n)=>`
<section class="screen axis" id="ax-${n+1}" data-title="${a.short}">
  <div class="wrap ax">
    <figure class="ax-photo rv"><span class="ph ${a.img}" role="img" aria-label="${a.t}"></span>
      <div class="ax-cap"><span class="ax-n">${n+1}</span><h2>${a.t}</h2><div class="spot" aria-live="polite"></div></div>
    </figure>
    <div class="ax-cards">${a.ideas.map((i,k)=>`<button class="idea rv${(a.ideas.length%2&&k===a.ideas.length-1)?' wide':''}" data-ax="${n}" data-k="${k}"><span class="ic">${ico(i[2])}</span><div><b>${i[0]}</b><span>${i[1]}</span></div></button>`).join('')}</div>
  </div>
</section>`).join('');
function setIdea(n,k){
  const a=AX[n],i=a.ideas[k],sec=$('#ax-'+(n+1));
  sec.querySelectorAll('.idea').forEach((b,j)=>b.classList.toggle('on',j===k));
  const sp=sec.querySelector('.spot');sp.innerHTML=`<span class="ic">${ico(i[2])}</span><span><b>${i[0]}</b><small>${k+1} من ${a.ideas.length}</small></span>`;sp.classList.remove('fade');void sp.offsetWidth;sp.classList.add('fade');
  sec.dataset.k=k;
}
AX.forEach((a,n)=>setIdea(n,0));
$$('.idea').forEach(b=>b.addEventListener('click',()=>setIdea(+b.dataset.ax,+b.dataset.k)));
$$('.axis-tile').forEach(b=>b.addEventListener('click',()=>$('#ax-'+(+b.dataset.ax+1)).scrollIntoView({behavior:'smooth'})));

/* ---------- tabs, rail, keys ---------- */
const decks={caravan:$('#caravan'),activities:$('#activities')};
let cur='caravan';
const ink=$('.tab-ink');
function placeInk(){const b=$(`.tabs [data-tab="${cur}"]`);ink.style.left=b.offsetLeft+'px';ink.style.width=b.offsetWidth+'px'}
function screens(){return [...decks[cur].querySelectorAll('.screen')]}
function buildRail(){
  const r=$('#rail');r.innerHTML='';
  screens().forEach((s,k)=>{const b=document.createElement('button');b.innerHTML=`<span>${s.dataset.title}</span>`;b.setAttribute('aria-label',s.dataset.title);b.onclick=()=>s.scrollIntoView({behavior:'smooth'});r.appendChild(b)});
}
function setTab(t,{scroll=true}={}){
  if(!decks[t])t='caravan';
  cur=t;
  Object.entries(decks).forEach(([k,d])=>d.hidden=k!==t);
  $$('.tabs [data-tab]').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===t));
  placeInk();buildRail();
  if(location.hash!=='#'+t){try{history.replaceState(null,'','#'+t)}catch(e){}}
  if(scroll){const prev=document.documentElement.style.scrollBehavior;document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,0);document.documentElement.style.scrollBehavior=prev}
  onScroll();
}
$$('.tabs [data-tab]').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
$$('[data-go-tab]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();setTab(a.dataset.goTab)}));
$('.brand').addEventListener('click',e=>{e.preventDefault();setTab('caravan')});
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(decks[h]&&h!==cur)setTab(h)});

function curIndex(){
  const hh=$('.top').getBoundingClientRect().bottom;let best=0,bd=1e9;
  screens().forEach((s,k)=>{const d=Math.abs(s.getBoundingClientRect().top-hh);if(d<bd){bd=d;best=k}});return best;
}
function onScroll(){
  const i=curIndex();$$('#rail button').forEach((b,k)=>b.classList.toggle('on',k===i));
  const max=document.documentElement.scrollHeight-innerHeight;$('#prog').style.width=(max>0?Math.min(100,scrollY/max*100):0)+'%';
}
let raf;addEventListener('scroll',()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(onScroll)},{passive:true});
addEventListener('resize',()=>{placeInk();onScroll()});

function go(d){
  const sc=screens(),i=curIndex(),j=i+d;
  if(j>=sc.length&&cur==='caravan'){setTab('activities');return}
  if(j<0&&cur==='activities'){setTab('caravan',{scroll:false});const s=screens();s[s.length-1].scrollIntoView();return}
  if(sc[j])sc[j].scrollIntoView({behavior:'smooth'});
}
addEventListener('keydown',e=>{
  if(e.altKey||e.ctrlKey||e.metaKey)return;
  if(!lb.hidden){if(e.key==='Escape')closeLB();else if(e.key==='ArrowLeft'){showLB(gi+1,1);e.preventDefault()}else if(e.key==='ArrowRight'){showLB(gi-1,-1);e.preventDefault()}return}
  const tag=(e.target.tagName||'').toLowerCase();if(tag==='input'||tag==='textarea')return;
  const sc=screens()[curIndex()],title=sc&&sc.dataset.title;
  if(e.key==='1'){setTab('caravan');return}
  if(e.key==='2'){setTab('activities');return}
  if(['ArrowDown','PageDown'].includes(e.key)||(e.key===' '&&tag!=='button')){e.preventDefault();go(1);return}
  if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();go(-1);return}
  if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
    const d=e.key==='ArrowLeft'?1:-1; // RTL: left = next
    if(title==='أوضاع التشغيل'){setMode(modeN+d);e.preventDefault()}
    else if(title==='المكوّنات'){setComp(compN+d);e.preventDefault()}
    else if(title==='الفكرة'){const i=stops.findIndex(b=>b.classList.contains('on'));setStop(Math.max(0,Math.min(3,i+d)));e.preventDefault()}
    else if(sc&&sc.classList.contains('axis')){const n=+sc.id.split('-')[1]-1,L=AX[n].ideas.length;setIdea(n,((+sc.dataset.k||0)+d+L)%L);e.preventDefault()}
  }
});

const start=location.hash.slice(1);
setTab(decks[start]?start:'caravan',{scroll:false});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(placeInk);
})();
