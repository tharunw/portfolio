const P = window.PORTFOLIO;
const $ = (s, root=document) => root.querySelector(s);
const esc = (s="") => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const link = (url,label) => url ? `<a href="${esc(url)}" target="_blank" rel="noreferrer">${label} ↗</a>` : "";
const revealObserver = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add("visible");revealObserver.unobserve(e.target)} }), {threshold:.12});
function observeReveals(){document.querySelectorAll(".reveal:not(.visible)").forEach(el=>revealObserver.observe(el))}
function renderSocial(){
  const items=[link(P.github,"GitHub"),link(P.linkedin,"LinkedIn"),P.email?`<a href="mailto:${esc(P.email)}">Email ↗</a>`:""];
  $("#heroSocial").innerHTML=items.filter(Boolean).join("");
  $("#contactLinks").innerHTML=items.filter(Boolean).join("") || `<span class="muted-note">Add your GitHub, LinkedIn and email in config.js to activate contact links.</span>`;
}
function renderSkills(){
  $("#skillsGrid").innerHTML=P.skills.map((s,i)=>`<article class="skill-card reveal"><span class="skill-number">0${i+1} / TOOLKIT</span><h3>${esc(s.category)}</h3><div class="skill-tags">${s.items.map(x=>`<span class="skill-tag">${esc(x)}</span>`).join("")}</div></article>`).join("");
}
function projectMetrics(p){return p.results.slice(0,3).map(x=>`<span class="metric-pill">${esc(x)}</span>`).join("")}
function renderProjects(filter="All"){
  const list=P.projects.filter(p=>filter==="All"||p.category===filter);
  $("#projectGrid").innerHTML=list.map(p=>`<article class="project-card reveal"><div class="project-top"><span class="project-category">${esc(p.category)}</span><span class="project-num">${esc(p.number)} / 04</span></div><h3>${esc(p.title)}</h3><span class="project-subtitle">${esc(p.subtitle)}</span><p>${esc(p.description)}</p><div class="project-metrics">${projectMetrics(p)}</div><div class="project-bottom"><span class="project-tools">${esc(p.tools.join(" · "))}</span><button class="text-button" data-project="${esc(p.id)}">View details ↗</button></div></article>`).join("");
  observeReveals();
}
function renderAcademic(){
  $("#academicGrid").innerHTML=P.academicProjects.map(p=>`<article class="academic-card reveal"><span class="project-category">ACADEMIC PROJECT / ${esc(p.number)}</span><h3>${esc(p.title)}</h3><span class="project-subtitle">${esc(p.subtitle)}</span><p>${esc(p.description)}</p><div class="academic-meta">${p.tools.map(esc).join(" · ")} <button class="text-button" data-academic="${esc(p.id)}" style="float:right">Explore ↗</button></div></article>`).join("");
  observeReveals();
}
function renderCerts(){
  $("#certGrid").innerHTML=P.certifications.map(c=>`<article class="cert-card reveal"><div class="cert-icon">◇</div><div><h3>${esc(c.title)}</h3><p>${esc(c.issuer)} · ${esc(c.date)}</p>${c.url?`<a class="text-button" href="${esc(c.url)}" target="_blank" rel="noreferrer">Verify ↗</a>`:`<small>Credential details can be added when available.</small>`}</div></article>`).join("");
}
function renderAchievements(){
  $("#achievementGrid").innerHTML=P.achievements.map(a=>`<article class="achievement-card reveal"><div class="achievement-icon">✦</div><div><small>${esc(a.year)}</small><h3>${esc(a.title)}</h3><p>${esc(a.detail)}</p></div></article>`).join("");
}
function modalProject(p,academic=false){
  const list=(title,items)=>`<div class="modal-section"><h3>${title}</h3><ul>${items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`;
  $("#modalContent").innerHTML=`<span class="modal-kicker">${academic?"ACADEMIC PROJECT":"PROJECT / "+esc(p.category.toUpperCase())}</span><h2 id="modalTitle">${esc(p.title)}</h2><p>${esc(p.description)}</p>${academic?`<div class="modal-section"><h3>Research objective</h3><p>${esc(p.objective)}</p></div>${list("Methodology / details",p.methodology)}`:`${list("Dataset",p.dataset)}<div class="modal-section"><h3>Problem statement</h3><p>${esc(p.problem)}</p></div>${list("Approach & methodology",p.approach)}${list("Results & key findings",p.results)}${p.note?`<p class="modal-note">${esc(p.note)}</p>`:""}`}<div class="modal-section"><h3>Technologies used</h3><div class="modal-tags">${p.tools.map(t=>`<span>${esc(t)}</span>`).join("")}</div></div>${!academic?`<div class="modal-section">${p.github?link(p.github,"GitHub repository"):`<span class="muted-note">Repository link can be added in config.js.</span>`} ${p.demo?link(p.demo,"Live demo"):""}</div>`:""}${academic&&p.note?`<p class="modal-note">${esc(p.note)}</p>`:""}`;
  $("#projectModal").classList.add("open");$("#projectModal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";$("#modalClose").focus();
}
function closeModal(){ $("#projectModal").classList.remove("open");$("#projectModal").setAttribute("aria-hidden","true");document.body.style.overflow=""; }
function setupResume(){
  const path=P.resumePath;const req=$("#downloadResume"),view=$("#viewResume"),status=$("#resumeStatus");
  fetch(path,{method:"HEAD"}).then(r=>{if(r.ok){[req,view].forEach(a=>{a.href=path;a.classList.remove("disabled-link");a.removeAttribute("aria-disabled")});status.textContent="Your resume PDF is available."}else throw Error()}).catch(()=>{status.textContent="Resume PDF not added yet. Place your real PDF at "+path+" to activate these buttons."});
}
function setupContact(){
  $("#contactForm").addEventListener("submit",e=>{e.preventDefault();const f=e.currentTarget; if(!f.reportValidity())return;
    if(!P.email){$("#formFeedback").textContent="Please add your email address in config.js first. The form has not sent or stored your message.";return}
    const d=new FormData(f),subject=encodeURIComponent(d.get("subject")),body=encodeURIComponent(`Name: ${d.get("name")}\nReply email: ${d.get("email")}\n\n${d.get("message")}`);
    $("#formFeedback").textContent="Opening your email application with the message prepared. Nothing is sent by this website.";
    window.location.href=`mailto:${P.email}?subject=${subject}&body=${body}`;
  });
}
function setupNav(){
  const nav=$("#mainNav"),toggle=$("#menuToggle");
  toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
  const sections=[...document.querySelectorAll("main section[id]")];
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll(".nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}}),{rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(s=>io.observe(s));
}
function setupParticles(){
  const canvas=$("#particles"),ctx=canvas.getContext("2d");let w,h,pts=[],raf;
  const resize=()=>{w=canvas.width=innerWidth*devicePixelRatio;h=canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";pts=Array.from({length:Math.min(65,Math.floor(innerWidth/20))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.18*devicePixelRatio,vy:(Math.random()-.5)*.18*devicePixelRatio}))};
  const draw=()=>{ctx.clearRect(0,0,w,h);for(let i=0;i<pts.length;i++){let p=pts[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;ctx.fillStyle="rgba(130,164,245,.45)";ctx.fillRect(p.x,p.y,1.5*devicePixelRatio,1.5*devicePixelRatio);for(let j=i+1;j<pts.length;j++){let q=pts[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<125*devicePixelRatio){ctx.strokeStyle=`rgba(94,132,214,${(1-d/(125*devicePixelRatio))*.10})`;ctx.lineWidth=devicePixelRatio;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}}raf=requestAnimationFrame(draw)};
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;resize();draw();addEventListener("resize",()=>{cancelAnimationFrame(raf);resize();draw()});
}
function setupFilters(){
  $("#projectFilters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;$("#projectFilters").querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProjects(b.dataset.filter)});
}
function setupModals(){
  document.addEventListener("click",e=>{const p=e.target.closest("[data-project]");if(p){const item=P.projects.find(x=>x.id===p.dataset.project);if(item)modalProject(item);return}const a=e.target.closest("[data-academic]");if(a){const item=P.academicProjects.find(x=>x.id===a.dataset.academic);if(item)modalProject(item,true)}});
  $("#modalClose").addEventListener("click",closeModal);$("#projectModal").addEventListener("click",e=>{if(e.target===$("#projectModal"))closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
}
function rotateTitles(){const el=$("#rotatingTitle");let i=0;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;setInterval(()=>{i=(i+1)%P.titles.length;el.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-7px)"}],{duration:180}).onfinish=()=>{el.textContent=P.titles[i];el.animate([{opacity:0,transform:"translateY(7px)"},{opacity:1,transform:"translateY(0)"}],{duration:220})}},2600)}
$("#year").textContent=new Date().getFullYear();
renderSocial();renderSkills();renderProjects();renderAcademic();renderCerts();renderAchievements();setupResume();setupContact();setupNav();setupFilters();setupModals();setupParticles();rotateTitles();observeReveals();