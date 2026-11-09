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
 chair:'<path d="M7 18v3M17 18v3"/><path d="M5 11V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5"/><path d="M4 11h16v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"/>',
 coffee:'<path d="M10 2v2M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>',
 brush:'<path d="m14.6 2.6 6.8 6.8"/><path d="M18 6 9.5 14.5"/><path d="M9.5 14.5a3 3 0 0 0-4.2 0L3 17a2.8 2.8 0 0 0 4 4l2.5-2.3a3 3 0 0 0 0-4.2z"/>',
 map:'<path d="M14.1 6 8.9 3.4a2 2 0 0 0-1.8 0L3.6 5.2A1 1 0 0 0 3 6.1v13.3a1 1 0 0 0 1.4.9l3.6-1.8a2 2 0 0 1 1.8 0l5.2 2.6a2 2 0 0 0 1.8 0l3.6-1.8a1 1 0 0 0 .6-.9V5.1a1 1 0 0 0-1.4-.9L16 6a2 2 0 0 1-1.9 0z"/><path d="M15 5.8v15M9 3.2v15"/>',
 file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 13h4M10 17h6M8 9h2"/>',
 heart:'<path d="M19 14c1.5-1.4 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.1 3 5.5l7 7z"/>',
 camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
 star:'<path d="M11.5 2.3a.5.5 0 0 1 1 0l2.3 4.7a2 2 0 0 0 1.5 1.1l5.2.8a.5.5 0 0 1 .3.9l-3.8 3.7a2 2 0 0 0-.6 1.8l.9 5.2a.5.5 0 0 1-.8.6l-4.6-2.5a2 2 0 0 0-1.9 0l-4.6 2.5a.5.5 0 0 1-.8-.6l.9-5.2a2 2 0 0 0-.6-1.8L1.7 9.8a.5.5 0 0 1 .3-.9l5.2-.8A2 2 0 0 0 8.7 7z"/>',
 cap:'<path d="M21.4 10.9a1 1 0 0 0 0-1.8L12.8 5.2a2 2 0 0 0-1.7 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.7 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
 tree:'<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/>',
 home:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6a2 2 0 0 1 .7 1.5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
 castle:'<path d="M3 21V8h3v2h3V8h3v2h3V8h3v2h3V8h0v13"/><path d="M3 21h18"/><path d="M10 21v-4a2 2 0 0 1 4 0v4"/>',
 calendar:'<path d="M8 2v4M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/>',
 monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
 award:'<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>'
};
const ico=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]||''}</svg>`;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const hydrate=root=>root.querySelectorAll('[data-ico]').forEach(el=>{el.innerHTML=ico(el.dataset.ico)});
hydrate(document);


/* ---------- cover image placement ---------- */
const heroImg=$('#heroImg'),HR=1287/910,FX=0.70,FY=0.66;
function placeHero(){
  const box=heroImg.parentElement.getBoundingClientRect(),cw=box.width,ch=box.height;let w,h,l,t;
  const wide=cw>760&&cw>ch*1.15;document.documentElement.classList.toggle('cover-stack',!wide);
  if(wide){w=Math.max(cw,ch*HR);h=w/HR;l=Math.min(0,Math.max(cw-w,0.72*cw-FX*w));t=Math.min(0,Math.max(ch-h,0.52*ch-FY*h))}
  else{w=cw*(cw>600?1.35:1.75);h=w/HR;l=Math.min(0,Math.max(cw-w,0.5*cw-FX*w));t=Math.min(0,-(FY*h-0.62*h))-h*0.12;document.documentElement.style.setProperty('--heroH',Math.round(h*0.78)+'px')}
  Object.assign(heroImg.style,{width:w+'px',height:h+'px',left:l+'px',top:t+'px'});
}
placeHero();addEventListener('resize',placeHero);

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
 {k:'equip',t:'تجهيزات متنقلة',d:'كهرباء واتصال وإنارة وتكييف وتخزين، بحسب الإمكانات الفنية.',img:'ph-dstorage',x:42,y:72,i:'zap'},
 {k:'tents',t:'خيم ومظلات سريعة النصب',d:'تُحمل في المركبة، تُنصب أمامها عند الحاجة، ثم تُطوى وتعود إليها.',img:'ph-screen',x:64,y:72,i:'tent'},
 {k:'id',t:'شاشة دومينز',d:'شاشة خارجية تعرض هوية دومينز ورسائل الأنشطة ورموز التسجيل، أينما توقفت المركبة.',img:'ph-dscreen',x:10,y:45,i:'monitor'}
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

/* ---------- activities ---------- */
const GOALS=['بناء الوعي والمسؤولية المجتمعية','تمكين الشباب وإعداد قادة مجتمعيين','مبادرات لحل مشكلات المجتمع','إيصال الشباب إلى الفرص'];
const AX=[
 {t:'الإعلام والحوار المجتمعي',short:'الإعلام والحوار',img:'ph-open',c:'a1',acts:[
  {id:'podcast',n:'بودكاست الساحة',i:'headphones',ty:'p',f:'كل 15 يوماً',p:'الاستوديو الزجاجي',s:'لقاء مع شخصية عامة أو مؤثرة يُصوَّر أمام الناس.',
   h:['اختيار ضيف وموضوع الحلقة','تسجيل الحلقة في الاستوديو والجمهور يتابع من الخارج','نشر الحلقة كاملة ومقاطع قصيرة منها'],w:'جمهور الساحة ومتابعو المنصات',o:'حلقة كاملة ومقاطع قصيرة',g:0},
  {id:'voice',n:'صوت الناس',i:'mic',ty:'p',f:'كل 3 أيام',p:'حول السيارة في أي وقفة',s:'سؤال واحد للمارّة، وأجوبتهم في فيديو قصير.',
   h:['سؤال واحد مرتبط بموضوع الأيام الحالية','مذيع ومصوّر يسألان المارّة حول السيارة','اختيار الأجوبة الأكثر تنوعاً وتوليفها في فيديو قصير'],w:'المارّة ورواد المكان',o:'فيديو قصير ينقل رأي الناس بصوتهم ووجوههم',g:0},
  {id:'chair',n:'كرسي فضفضة',i:'chair',ty:'p',f:'في كل وقفة',p:'بجانب السيارة',s:'سؤال واضح على لوح، وكرسي لمن يريد أن يفضفض جوابه.',
   h:['لوح عليه سؤال واضح، وبجانبه كرسي ومايك قريب وكاميرا ثابتة','لافتة: «إذا حابب، اقعد وفضفض جوابك»','لا أحد بجانب الكرسي؛ متطوع من بعيد يشجّع المارّة على التجربة'],w:'أي شخص يمرّ',o:'أرشيف إجابات عفوية يُنشر أجملها',g:0},
  {id:'majlis',n:'مجلس الساحة',i:'landmark',ty:'p',f:'شهرياً',p:'الساحة',s:'حوار مفتوح مع مسؤول يديره ميسّر، بحضور 40–50 شاباً وشابة.',
   h:['حوار مفتوح مع مسؤول يديره ميسّر','فتح باب الترشّح لاختيار 40–50 شاباً وشابة يحضرون الجلسة ويحاورون المسؤول','تصوير الجلسة ونشر أبرز ما دار فيها'],w:'40–50 شاباً وشابة يُختارون بالترشّح',o:'جلسة مصوّرة وملخّص بالأسئلة والإجابات',g:1},
  {id:'lamma',n:'لمّة',i:'coffee',ty:'p',f:'شهرياً',p:'الاستوديو أو قعدة بجانب السيارة',s:'ضيوف من أجيال وخلفيات مختلفة يتحدثون عن تفاصيل يومهم.',
   h:['كل حلقة تجمع ضيوفاً مختلفين: جدّ وحفيد، أو أشخاص من مناطق وبيئات مختلفة','أسئلة يومية خفيفة وغير متوقعة: كيف تقضي يومك؟ ماذا تتابع؟','الحديث عن تفاصيل الحياة اليومية فقط، فيظهر المشترك بين الناس بشكل طبيعي'],w:'ضيوف من أجيال وخلفيات مختلفة',o:'حلقة تُظهر المشترك بين الناس',g:0}]},
 {t:'التطوع والمبادرات',short:'التطوع والمبادرات',img:'ph-tent',c:'a2',acts:[
  {id:'vbank',n:'بنك المتطوعين',i:'users',ty:'p',f:'في كل وقفة · ساعات محددة',p:'خيمة الاستقبال',s:'تسجيل المتطوعين وضمّهم إلى بنك المتطوعين.',
   h:['رمز QR على شاشة السيارة يفتح استمارة التسجيل','استمارة ورقية لمن يصعب عليه التسجيل الإلكتروني','نضمّ المسجّلين إلى بنك المتطوعين، ونستثمرهم لاحقاً في المبادرات والأنشطة'],w:'كل من يرغب بالتطوع',o:'قاعدة متطوعين تكبر مع كل وقفة',g:1},
  {id:'ibank',n:'بنك المبادرات',i:'bulb',ty:'p',f:'في كل وقفة · ساعات محددة',p:'خيمة الاستقبال',s:'استقبال أفكار ومبادرات الناس.',
   h:['رمز QR يفتح أسئلة محددة لتقديم المبادرة، أو استمارة ورقية','نضمّ الأفكار المقدّمة إلى بنك المبادرات','نستثمرها لاحقاً في مبادرات وأنشطة مع أصحابها'],w:'أصحاب الأفكار والمبادرات',o:'بنك مبادرات قابلة للتنفيذ',g:2},
  {id:'athar',n:'يوم الأثر',i:'brush',ty:'p',f:'أسبوعياً',p:'حديقة أو حي أو ساحة',s:'يوم تدخّل ميداني بعنوان واضح، نعمله مع أهل المكان.',
   h:['إعلان عنوان واضح لليوم: ماذا سنعمل وأين','تشجيع أهل المكان والمارّة على المشاركة معنا، فاليوم ليس لفريق دومينز وحده','التنفيذ خلال يوم: تنظيف، دهان أرصفة أو مقاعد، زراعة، تنظيم مدخل أو موقف أو مساحة','تصوير المكان قبل وبعد'],w:'فريق دومينز وأهل المكان والمارّة',o:'أثر ملموس ومحتوى «قبل وبعد»',g:2}]},
 {t:'التحديات المجتمعية والسلوك الحضاري',short:'التحديات المجتمعية',img:'ph-site',c:'a3',acts:[
  {id:'map',n:'خريطة حلب',i:'map',ty:'p',f:'أسبوعياً',p:'الساحة والوقفات',s:'خريطة للأحياء يغرس عليها الناس دبابيس حمراء حيث توجد مشكلة الأسبوع.',
   h:['موضوع خدمي واحد لكل أسبوع يُكتب أعلى اللوحة (مثلاً: الصرف الصحي)','خريطة كبيرة لحلب مقسّمة إلى أحياء بأسمائها، أمامها طاولة دبابيس حمراء وممر ينظّم الدور','كل زائر يغرس دبوساً أحمر على حيّه إن كانت المشكلة موجودة عنده','نهاية الأسبوع: نرى أين تتركّز الدبابيس، نكتب الحي الأكثر تأثراً، وننشر صورة اللوحة كما هي'],w:'سكان الأحياء وزوار الوقفات',o:'صورة واضحة لتوزّع المشكلة على أحياء حلب',g:2},
  {id:'bsat',n:'على بساط أحمدي',i:'msgs',ty:'p',f:'شهرياً',p:'الحي الأكثر تأثراً بالمشكلة',s:'جلسة نقاش في الحي للوصول إلى جذر المشكلة.',
   h:['اختيار الحي الذي ظهرت فيه المشكلة أكثر على الخريطة','مجموعة نقاش (Focus Group) تجمع الجهات المعنية وأهل الحي','الخروج بإجابة واضحة: ما المشكلة فعلاً؟ ما سببها؟ ما جذرها؟'],w:'الجهات المعنية وأهل الحي',o:'ملخّص بجذر المشكلة ومقترحات الحل',g:2},
  {id:'challenge',n:'تحدي السلوك الإيجابي',i:'trophy',ty:'p',f:'شهرياً · مدة التحدي 7–10 أيام',p:'مناطق محددة في حلب',s:'فرق تتنافس على تنظيم مكان محدد والحفاظ عليه وخلق وعي مجتمعي فيه.',
   h:['إعلان عنوان واضح للتحدي ومكانه: نظافة حدائق معينة، تنظيم السير في منطقة، الانضباط في مكان محدد','الفرق تنزل إلى المكان وتنظّمه وتحافظ عليه طوال 7–10 أيام','كل فريق يضع خطته الخاصة لخلق وعي مجتمعي عند الناس في هذا المكان','السيارة تجول في نهاية التحدي لتقييم النتائج وإعلان الفريق الفائز'],w:'فرق شبابية من دومينز والمجتمع',o:'مناطق أنظف وأكثر تنظيماً، وتكريم الفريق الفائز',g:0}]},
 {t:'المعرفة والترفيه الهادف',short:'المعرفة والترفيه',img:'ph-fountain',c:'a4',acts:[
  {id:'read',n:'نادي القراءة المفتوح',i:'book',ty:'p',f:'شهرياً',p:'الحدائق والساحة',s:'خيم للأطفال فيها كتب وجلسة أرضية مريحة.',
   h:['تجهيز خيم بكتب مناسبة وجلسة أرضية مرتّبة','الأطفال يقرؤون داخل الخيم بإشراف مناسب','الأهالي يتابعون من الخارج'],w:'الأطفال وأهاليهم',o:'عادة قراءة ومساحة آمنة للأطفال',g:0},
  {id:'lab',n:'مختبر الساحة',i:'flask',ty:'p',f:'شهرياً',p:'الساحة',s:'شخصية علمية مرحة تقدّم تجارب أمام الجمهور.',
   h:['مختص بشخصية فنية جذابة','تجارب علمية آمنة ومبهرة في الساحة','الجمهور يتابع ويتفاعل ويشارك'],w:'العائلات والأطفال والشباب',o:'عرض ممتع ومقاطع جذابة للنشر',g:0},
  {id:'quiz',n:'تحدي المعرفة',i:'help',ty:'p',f:'أسبوعياً',p:'الساحة',s:'أسئلة ثقافية بموضوع محدد كل أسبوع.',
   h:['موضوع جديد كل أسبوع','أسئلة وتحديات سريعة للجمهور','جوائز رمزية للفائزين'],w:'رواد الساحة',o:'تفاعل مباشر ومقاطع قصيرة',g:0},
  {id:'sahra',n:'سهرات الكارافان',i:'moon',ty:'p',f:'أسبوعياً · مساءً',p:'الساحة',s:'سهرة بعنوان مختلف كل أسبوع: موسيقى، شعر، حكايات.',
   h:['عنوان خاص لكل سهرة','مواهب شبابية وضيوف','جلسة حول السيارة مع خيم عند الحاجة'],w:'الشباب والعائلات',o:'أمسية تجمع الناس ومحتوى مسائي',g:1}]},
 {t:'المعارض والفرص',short:'المعارض والفرص',img:'ph-cart',c:'a5',acts:[
  {id:'cv',n:'CV Lab',i:'file',ty:'x',f:'في مواسم التخرّج والتوظيف',p:'جامعة حلب والساحة',s:'مراجعة السيرة الذاتية مع مختص.',
   h:['الشاب يحضر سيرته أو يبدأ من الصفر','جلسة قصيرة مع مختص','يخرج بسيرة ذاتية مصحّحة'],w:'الطلاب والخريجون الجدد',o:'سير ذاتية جاهزة للتقديم',g:3},
  {id:'youth',n:'معرض الشباب',i:'rocket',ty:'x',f:'كل فصل',p:'الساحة',s:'الشباب يعرضون منتجاتهم وخدماتهم ونماذجهم الأولية.',
   h:['فتح باب المشاركة واختيار العارضين','أجنحة في الخيم حول السيارة','الجمهور يتجوّل ويتعرّف على المشاريع'],w:'شباب أصحاب مشاريع وأفكار',o:'ظهور للمشاريع الشبابية وفرص تواصل',g:3},
  {id:'vexpo',n:'معرض التطوع',i:'heart',ty:'x',f:'مرتين في السنة',p:'الساحة',s:'الجمعيات تعرض مجالات عملها وحاجتها للمتطوعين.',
   h:['دعوة الجمعيات والفرق التطوعية','لكل جهة ركن تعرض فيه عملها واحتياجها','الزوار يسجّلون مباشرة مع الجهة المناسبة'],w:'الجمعيات والشباب الراغبون بالتطوع',o:'ربط مباشر بين المتطوعين والجهات',g:3},
  {id:'merchant',n:'التاجر الصغير',i:'store',ty:'x',f:'موسمي · قبل الأعياد',p:'الساحة',s:'أطفال يعرضون منتجاتهم بإشراف مناسب.',
   h:['تسجيل الأطفال ومنتجاتهم','أكشاك صغيرة بإشراف مناسب','تكريم المشاركين'],w:'الأطفال وأهاليهم',o:'تجربة أولى في العرض والتعامل مع الناس',g:1},
  {id:'photo',n:'مسابقة التصوير',i:'camera',ty:'x',f:'مرة في السنة',p:'الساحة',s:'مسابقة بموضوع واحد، وأفضل الصور تُعرض.',
   h:['إعلان موضوع المسابقة وشروطها','استقبال الصور وتقييمها من لجنة','معرض لأفضل الصور وتكريم الفائزين'],w:'المصورون الشباب والهواة',o:'معرض صور ومحتوى بصري عن المدينة',g:1}]}
];
const ACT={};AX.forEach((a,n)=>a.acts.forEach((x,k)=>{x.ax=n;x.k=k;ACT[x.id]=x}));
const TY={p:'دوري',x:'استثنائي'};
const total=Object.keys(ACT).length,nx=Object.values(ACT).filter(x=>x.ty==='x').length;
/* ---------- accordion rendering ---------- */
const TAG=['منصة يُسمع فيها صوت الناس','باب مفتوح للتطوع والمبادرة','نكتشف المشكلة ونقترب من جذرها','معرفة وفرح في قلب الساحة','طريق الشباب إلى الفرص'];
function accItem(x){
  const a=AX[x.ax];
  return `<div class="acc-i ${a.c}" data-act="${x.id}">
   <button class="acc-h" aria-expanded="false" aria-controls="acc-${x.id}" id="acch-${x.id}">
     <span class="ic">${ico(x.i)}</span>
     <span class="acc-t"><b>${x.n}</b><small>${x.s}</small></span>
     <em class="ty ${x.ty}">${x.f}</em><i class="chev" aria-hidden="true"></i>
   </button>
   <div class="acc-b" id="acc-${x.id}" role="region" aria-labelledby="acch-${x.id}"><div class="acc-in">
     <dl class="acc-meta">
       <div><dt>النظام</dt><dd>${TY[x.ty]}</dd></div>
       <div><dt>التكرار</dt><dd>${x.f}</dd></div>
       <div><dt>المكان</dt><dd>${x.p}</dd></div>
       <div><dt>الجمهور</dt><dd>${x.w}</dd></div>
     </dl>
     <h4>كيف يجري؟</h4>
     <ol class="acc-steps">${x.h.map(t=>`<li>${t}</li>`).join('')}</ol>
   </div></div>
  </div>`;
}
const PAX=AX.slice(0,4),PER=PAX.map(a=>a.acts),EXC=AX[4].acts;
const nP=PER.reduce((t,l)=>t+l.length,0);
$('#actCount').textContent=`4 محاور · ${nP} نشاطاً`;
$('#cntP').textContent=nP;$('#cntX').textContent=EXC.length;$('#cntX2').textContent=`${EXC.length} أنشطة`;
$('#axes').innerHTML=PAX.map((a,n)=>`<button class="axc rv ${a.c}" data-ax="${n}">
  <span class="axc-n">${n+1}</span><h3>${a.t}</h3>
  <ul>${PER[n].map(x=>`<li>${ico(x.i)}<span>${x.n}</span></li>`).join('')}</ul>
</button>`).join('');
$('#axisScreens').outerHTML=PAX.map((a,n)=>`
<section class="screen axis ${a.c}" id="ax-${n+1}" data-title="${a.short}">
  <div class="wrap ax2">
    <header class="ax2-side rv">
      <span class="ax2-n">${n+1}</span>
      <p class="eyebrow">المحور ${n+1}</p>
      <h2>${a.t}</h2>
      <p class="ax2-tag">${TAG[n]}</p>
      <span class="ty p">${PER[n].length} أنشطة</span>
    </header>
    <div class="acc rv">${PER[n].map(accItem).join('')}</div>
  </div>
</section>`).join('');
$('#accX').innerHTML=EXC.map(accItem).join('');
function toggleAcc(item,open){
  const b=item.querySelector('.acc-h');open=open??b.getAttribute('aria-expanded')!=='true';
  if(open)item.parentElement.querySelectorAll('.acc-i.open').forEach(o=>{if(o!==item){o.classList.remove('open');o.querySelector('.acc-h').setAttribute('aria-expanded','false')}});
  item.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open));
}
$$('.acc').forEach(acc=>{const f=acc.querySelector('.acc-i');if(f)toggleAcc(f,true)});
document.addEventListener('click',e=>{const h=e.target.closest('.acc-h');if(h)toggleAcc(h.closest('.acc-i'))});
$$('.axc').forEach(b=>b.addEventListener('click',()=>$('#ax-'+(+b.dataset.ax+1)).scrollIntoView({behavior:'smooth'})));

/* ---------- month calendar (sample: Dec 2026) ---------- */
const LOC={sq:['الساحة','pin'],uni:['جامعة حلب','cap'],park:['حديقة','tree'],hood:['حي','home'],castle:['محيط القلعة','castle']};
const XD={};
const NOTE={sahra:{3:'سهرة شعر',10:'طرب حلبي',17:'حكايات حلبية',24:'موسيقى شبابية',31:'ختام السنة'},map:{1:'موضوع: الإنارة',5:'موضوع: الصرف الصحي',12:'موضوع: النظافة',19:'موضوع: إدارة الشوارع',26:'موضوع: الحدائق'},challenge:{12:'إطلاق «حلب نظيفة»',21:'جولة النتائج'}};
const DAYS=[null,
 ['sq',['voice','map']],['uni',['quiz']],['sq',['sahra']],['castle',['voice']],['sq',['map']],['sq',['podcast']],['hood',['athar','voice']],
 ['sq',['lamma']],['uni',['quiz']],['sq',['voice','sahra']],['castle',['lab']],['sq',['map','challenge']],['sq',['voice']],['park',['athar']],
 ['sq',[]],['uni',['quiz','voice']],['sq',['majlis','sahra']],['castle',[]],['sq',['map','read','voice']],['sq',['podcast']],['hood',['athar','challenge']],
 ['sq',['voice']],['uni',['quiz']],['sq',['sahra']],['castle',['voice']],['sq',['map']],['sq',[]],['hood',['bsat','athar','voice']],
 ['sq',[]],['uni',['quiz']],['sq',['voice','sahra']]];
const WK=['السبت','الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة'];
const START=3; // 1 Dec 2026 is Tuesday; week starts Saturday
const CH=[12,21];
let calFilter='all',calDay=5;
function noteOf(id,d){return (NOTE[id]&&NOTE[id][d])||''}
function renderCal(){
  const g=$('#calGrid');let h=WK.map(w=>`<div class="cal-wk">${w}</div>`).join('');
  for(let i=0;i<START;i++)h+='<div class="cal-pad"></div>';
  for(let d=1;d<=31;d++){
    const [loc,ids]=DAYS[d],L=LOC[loc];
    const vis=ids.filter(id=>calFilter==='all'||String(ACT[id].ax)===calFilter);
    const dim=calFilter!=='all'&&!vis.length;
    const onCh=d>=CH[0]&&d<=CH[1];
    h+=`<button class="cal-d loc-${loc}${XD[d]?' xd':''}${d===calDay?' on':''}${dim?' dim':''}${onCh?' ch':''}" data-d="${d}" aria-label="${d} كانون الأول، ${L[0]}">
      <span class="cal-top"><b>${d}</b><i class="cal-loc">${ico(L[1])}<span>${L[0]}</span></i></span>
      ${XD[d]?`<span class="cal-x">${ico('star')}<span>${XD[d]}</span></span>`:''}
      <span class="cal-pills">${vis.map(id=>`<span class="pill ${AX[ACT[id].ax].c}${ACT[id].ty==='x'?' px':''}">${ACT[id].n}</span>`).join('')}</span>
      <span class="cal-dots">${vis.map(id=>`<i class="${AX[ACT[id].ax].c}"></i>`).join('')}</span>
    </button>`;
  }
  g.innerHTML=h;
  $$('.cal-d').forEach(b=>b.onclick=()=>{calDay=+b.dataset.d;renderCal();if(innerWidth<1100)$('#calDay').scrollIntoView({behavior:'smooth',block:'nearest'})});
  renderDay();
}
function renderDay(){
  const d=calDay,[loc,ids]=DAYS[d],L=LOC[loc],wd=WK[(START+d-1)%7];
  $('#calDay').innerHTML=`
   <div class="cd-head"><small>${wd}</small><b>${d} كانون الأول</b><span class="cd-loc loc-${loc}">${ico(L[1])}${L[0]}</span></div>
   ${XD[d]?`<p class="cd-x">${ico('star')} مناسبة: ${XD[d]}</p>`:''}
   ${d>=CH[0]&&d<=CH[1]&&!ids.includes('challenge')?`<p class="cd-ch">تحدي «حلب نظيفة» جارٍ (12–21)</p>`:''}
   <div class="cd-list">${ids.length?ids.map(id=>{const x=ACT[id],n=noteOf(id,d);return `<div class="cal-act ${AX[x.ax].c}"><span class="ic">${ico(x.i)}</span><span><b>${x.n}</b><small>${n||x.f}</small></span>${x.ty==='x'?'<em class="ty x">استثنائي</em>':''}</div>`}).join(''):'<p class="cd-empty">يوم خفيف: الأنشطة الثابتة فقط</p>'}</div>
   <p class="cd-fixed"><b>في كل وقفة:</b> كرسي فضفضة · بنك المتطوعين · بنك المبادرات</p>`;
}
$('#calFilters').innerHTML=`<button data-f="all" class="on">الكل</button>`+AX.slice(0,4).map((a,n)=>`<button data-f="${n}" class="${a.c}"><i></i>${a.short}</button>`).join('');
$$('#calFilters button').forEach(b=>b.onclick=()=>{calFilter=b.dataset.f;$$('#calFilters button').forEach(x=>x.classList.toggle('on',x===b));renderCal()});
(function(){const c={sq:0,uni:0,park:0,hood:0,castle:0};let n=0;for(let d=1;d<=31;d++){c[DAYS[d][0]]++;n+=DAYS[d][1].length}
 $('#calStats').innerHTML=`<span><b>${c.sq}</b> يوماً في الساحة</span><span><b>${31-c.sq}</b> يوماً متنقلاً</span><span><b>${n}</b> نشاطاً دورياً</span>`})();
renderCal();

/* ---------- exceptional / world days ---------- */
const WD=[
 ['16','تشرين الثاني','اليوم الدولي للتسامح','lamma'],
 ['20','تشرين الثاني','اليوم العالمي للطفل','read'],
 ['5','كانون الأول','اليوم الدولي للمتطوعين','vexpo'],
 ['18','كانون الأول','اليوم العالمي للغة العربية','quiz'],
 ['23','نيسان','اليوم العالمي للكتاب','read'],
 ['5','حزيران','اليوم العالمي للبيئة','athar'],
 ['12','آب','اليوم الدولي للشباب','youth'],
 ['19','آب','اليوم العالمي للتصوير','photo'],
 ['21','أيلول','اليوم الدولي للسلام','sahra']];
$('#wdays').innerHTML=WD.map(w=>{const x=ACT[w[3]];return `<div class="wd ${AX[x.ax].c}"><span class="wd-date"><b>${w[0]}</b>${w[1]}</span><span class="wd-name">${w[2]}</span><span class="wd-act">${ico(x.i)}${x.n}</span></div>`}).join('');
const SEAS=[['moon','رمضان','سهرات رمضانية بعد الإفطار'],['store','الأعياد','التاجر الصغير وأجواء العيد'],['cap','بداية العام الدراسي','CV Lab ونادي القراءة'],['tree','الصيف','أنشطة مسائية أطول في الحدائق']];
$('#seasons').innerHTML=SEAS.map(s=>`<div class="season"><span class="ic">${ico(s[0])}</span><div><b>${s[1]}</b><span>${s[2]}</span></div></div>`).join('');

/* ---------- finance ---------- */
const FIN=[
 ['المركبة','truck',[['مازوت التنقل',150],['صيانة السيارة',300],['صيانة الكراسي والخيام والمعدات',100],['كهرباء الشحن من الشبكة',50]]],
 ['الفريق','users',[['السائق الأول',400],['السائق الثاني',400],['مدير الكارافان',700],['المصوّر',500],['المونتير',500]]],
 ['مستلزمات عامة','store',[['ضيافة',250],['إنترنت قوي',150],['طباعة استمارات ولوحات وQR',100],['مستهلكات ونظافة',100]]]];
const fmt=n=>'$'+n.toLocaleString('en-US');
const subs=FIN.map(g=>g[2].reduce((t,r)=>t+r[1],0)),base=subs.reduce((a,b)=>a+b,0),res=Math.round(base*0.1),tot=base+res;
$('#finTable').innerHTML=FIN.map((g,k)=>`<div class="fg fg${k}">
  <div class="fg-h"><span class="ic">${ico(g[1])}</span><b>${g[0]}</b><span class="num" dir="ltr">${fmt(subs[k])}</span></div>
  ${g[2].map(r=>`<div class="fr"><span>${r[0]}</span><span class="num" dir="ltr">${fmt(r[1])}</span></div>`).join('')}
</div>`).join('')+`<div class="fg fg-r"><div class="fr"><span>احتياط 10%</span><span class="num" dir="ltr">${fmt(res)}</span></div></div>`;
const parts=[[FIN[1][0],subs[1],'fg1'],[FIN[0][0],subs[0],'fg0'],[FIN[2][0],subs[2],'fg2'],['احتياط',res,'fg-r']];
$('#finSum').innerHTML=`
  <small>المجموع الشهري</small>
  <b class="big num" dir="ltr">${fmt(tot)}</b>
  <span class="yr">سنوياً ≈ <span class="num" dir="ltr">${fmt(tot*12)}</span></span>
  <div class="bar">${parts.map(p=>`<i class="${p[2]}" style="flex:${p[1]}"></i>`).join('')}</div>
  <ul class="bar-l">${parts.map(p=>`<li><i class="${p[2]}"></i>${p[0]}<span class="num" dir="ltr">${Math.round(p[1]/tot*100)}%</span></li>`).join('')}</ul>
  <p class="fnote">كل نشاط له كلفته الخاصة، وتُضاف عند اعتماده.</p>
  <p class="fnote">الكاميرات والمعدات تُحدَّد مع مواصفات الكارافان.</p>`;

/* ---------- tabs, rail, keys ---------- */
const decks={caravan:$('#caravan'),activities:$('#activities'),calendar:$('#calendar'),special:$('#special'),finance:$('#finance')};
const ORDER=['caravan','activities','calendar','special','finance'];
const GROUP={caravan:'caravan',activities:'activities',calendar:'activities',special:'activities',finance:'finance'};
let cur='caravan';
const ink=$('.tab-ink');
function placeInk(){const b=$(`.tabs [data-tab="${GROUP[cur]}"]`);ink.style.left=b.offsetLeft+'px';ink.style.width=b.offsetWidth+'px'}
function screens(){return [...decks[cur].querySelectorAll('.screen')]}
function buildRail(){
  const r=$('#rail');r.innerHTML='';
  screens().forEach((s,k)=>{const b=document.createElement('button');b.innerHTML=`<span>${s.dataset.title}</span>`;b.setAttribute('aria-label',s.dataset.title);b.onclick=()=>s.scrollIntoView({behavior:'smooth'});r.appendChild(b)});
}
function setTab(t,{scroll=true}={}){
  if(!decks[t])t='caravan';
  cur=t;const g=GROUP[t];
  Object.entries(decks).forEach(([k,d])=>d.hidden=k!==t);
  $$('.tabs [data-tab]').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===g));
  document.documentElement.classList.toggle('has-sub',g==='activities');
  $$('#subnav [data-sub]').forEach(b=>b.setAttribute('aria-current',b.dataset.sub===t?'page':'false'));
  placeInk();buildRail();
  if(location.hash!=='#'+t){try{history.replaceState(null,'','#'+t)}catch(e){}}
  if(scroll){const prev=document.documentElement.style.scrollBehavior;document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,0);document.documentElement.style.scrollBehavior=prev}
  onScroll();
}
$$('.tabs [data-tab]').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
$$('#subnav [data-sub]').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.sub)));
document.addEventListener('click',e=>{const a=e.target.closest('[data-go-tab]');if(a){e.preventDefault();setTab(a.dataset.goTab)}});
$('.brand').addEventListener('click',e=>{e.preventDefault();setTab('caravan')});
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(decks[h]&&h!==cur)setTab(h)});

function topEdge(){const sn=$('#subnav');return document.documentElement.classList.contains('has-sub')?sn.getBoundingClientRect().bottom:$('.top').getBoundingClientRect().bottom}
function curIndex(){
  const hh=topEdge();let best=0,bd=1e9;
  screens().forEach((s,k)=>{const d=Math.abs(s.getBoundingClientRect().top-hh);if(d<bd){bd=d;best=k}});return best;
}
function onScroll(){
  const i=curIndex();$$('#rail button').forEach((b,k)=>b.classList.toggle('on',k===i));
  const max=document.documentElement.scrollHeight-innerHeight;$('#prog').style.width=(max>0?Math.min(100,scrollY/max*100):0)+'%';
}
let raf;addEventListener('scroll',()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(onScroll)},{passive:true});
addEventListener('resize',()=>{placeInk();onScroll()});

function go(d){
  const sc=screens(),i=curIndex(),j=i+d,o=ORDER.indexOf(cur);
  if(j>=sc.length&&o<ORDER.length-1){setTab(ORDER[o+1]);return}
  if(j<0&&o>0){setTab(ORDER[o-1],{scroll:false});const s=screens();s[s.length-1].scrollIntoView();return}
  if(sc[j])sc[j].scrollIntoView({behavior:'smooth'});
}
addEventListener('keydown',e=>{
  if(e.altKey||e.ctrlKey||e.metaKey)return;
  const tag=(e.target.tagName||'').toLowerCase();if(tag==='input'||tag==='textarea')return;
  const sc=screens()[curIndex()],title=sc&&sc.dataset.title;
  if(e.key==='1'){setTab('caravan');return}
  if(e.key==='2'){setTab('activities');return}
  if(e.key==='3'){setTab('finance');return}
  if(['ArrowDown','PageDown'].includes(e.key)||(e.key===' '&&tag!=='button')){e.preventDefault();go(1);return}
  if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();go(-1);return}
  if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
    const d=e.key==='ArrowLeft'?1:-1; // RTL: left = next
    if(title==='أوضاع التشغيل'){setMode(modeN+d);e.preventDefault()}
    else if(title==='المكوّنات'){setComp(compN+d);e.preventDefault()}
    else if(title==='الفكرة'){const i=stops.findIndex(b=>b.classList.contains('on'));setStop(Math.max(0,Math.min(3,i+d)));e.preventDefault()}
    else if(title==='رزنامة الشهر'){calDay=Math.max(1,Math.min(31,calDay+d));renderCal();e.preventDefault()}
    else if(sc){const items=[...sc.querySelectorAll('.acc-i')];if(items.length){const k=items.findIndex(x=>x.classList.contains('open'));toggleAcc(items[(k+d+items.length)%items.length],true);e.preventDefault()}}
  }
});

const start=location.hash.slice(1);
setTab(decks[start]?start:'caravan',{scroll:false});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(placeInk);
})();
