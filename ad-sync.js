import { db } from "./firebase-config.js";
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

(() => {
    "use strict";
    const root = document.getElementById("khAdRoot");
    if (!root) return;
    let countdownTimer = null;
    const safeUrl = (value = "") => { try { const u = new URL(value, location.href); return ["http:","https:"].includes(u.protocol) ? u.href : ""; } catch { return ""; } };
    const countdown = (target) => { const ms = new Date(target).getTime()-Date.now(); if (!Number.isFinite(ms)) return "—"; if(ms<=0)return "LIVE NOW"; const t=Math.floor(ms/1000),d=Math.floor(t/86400),h=Math.floor(t%86400/3600),m=Math.floor(t%3600/60),s=t%60; return `${d}d ${String(h).padStart(2,"0")}h ${String(m).padStart(2,"0")}m ${String(s).padStart(2,"0")}s`; };
    function render(data){
        clearInterval(countdownTimer); root.innerHTML="";
        if(!data?.enabled || !Array.isArray(data.rows) || !data.rows.length) return;
        const overlay=document.createElement("div"); overlay.className="kh-ad-overlay"; overlay.setAttribute("role","dialog"); overlay.setAttribute("aria-modal","true"); overlay.setAttribute("aria-label","Advertisement");
        const card=document.createElement("div"); card.className="kh-ad-card";
        const close=document.createElement("button"); close.className="kh-ad-close"; close.type="button"; close.setAttribute("aria-label","Close advertisement"); close.textContent="×";
        const content=document.createElement("div"); content.className="kh-ad-content";
        const url=safeUrl(data.link); const inner=url?document.createElement("a"):document.createElement("div");
        if(url){inner.href=url;inner.target="_blank";inner.rel="noopener noreferrer";} inner.style.cssText="display:block;color:inherit;text-decoration:none";
        const timers=[];
        data.rows.forEach(row=>{ if(!Array.isArray(row)||!row.length)return; const rowEl=document.createElement("div"); rowEl.className="kh-ad-row"; row.forEach(b=>{
            if(!b?.type)return; const block=document.createElement("div"); block.className=`kh-ad-block ${b.width||"w100"}`; block.style.textAlign=b.align||"left";
            if(b.type==="image"&&b.src){const img=document.createElement("img");img.className="kh-ad-image";img.src=b.src;img.alt=b.alt||"Advertisement";block.appendChild(img);}
            else if(b.type==="countdown"){const wrap=document.createElement("div");wrap.className="kh-ad-countdown";const lab=document.createElement("div");lab.className="kh-ad-countdown-label";lab.textContent=b.label||"Countdown";const val=document.createElement("div");val.className="kh-ad-countdown-value";val.textContent=countdown(b.target);wrap.append(lab,val);block.appendChild(wrap);timers.push({val,target:b.target});}
            else if(b.type==="text"){const tag=b.variant==="title"?"h2":b.variant==="subtitle"?"h3":"p";const el=document.createElement(tag);el.className=`kh-ad-text kh-ad-${b.variant||"paragraph"}`;el.textContent=b.text||"";if(b.color==="theme")el.classList.add("kh-ad-theme-gradient");else if(b.color)el.style.color=b.color;if(b.font)el.style.fontFamily=b.font;el.style.fontWeight=b.bold?"800":"";el.style.fontStyle=b.italic?"italic":"";el.style.textDecoration=b.underline?"underline":"";block.appendChild(el);}
            rowEl.appendChild(block);
        }); if(rowEl.children.length)inner.appendChild(rowEl); });
        content.appendChild(inner); card.append(close,content); overlay.appendChild(card); root.appendChild(overlay);
        const float=document.createElement("button");float.className="kh-ad-float";float.type="button";float.setAttribute("aria-label","Open advertisement");float.innerHTML='<span class="kh-ad-float-icon">✦</span><span class="kh-ad-float-dot"></span>';root.appendChild(float);
        const position=()=>{const top=document.getElementById("backToTop");float.style.bottom=top?.classList.contains("visible")?(innerWidth<=700?"76px":"84px"):(innerWidth<=700?"18px":"28px");};
        const showFloat=()=>{position();float.classList.add("visible");};
        close.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();overlay.classList.add("is-closing");setTimeout(()=>{overlay.style.display="none";showFloat();},390);});
        float.addEventListener("click",()=>{overlay.style.display="flex";requestAnimationFrame(()=>overlay.classList.remove("is-closing"));float.classList.remove("visible");});
        window.addEventListener("scroll",position,{passive:true});window.addEventListener("resize",position);
        const top=document.getElementById("backToTop");if(top)new MutationObserver(position).observe(top,{attributes:true,attributeFilter:["class"]});
        if(data.showOnLoad!==false)position();else{overlay.style.display="none";showFloat();}
        if(timers.length)countdownTimer=setInterval(()=>timers.forEach(x=>x.val.textContent=countdown(x.target)),1000);
    }
    onSnapshot(doc(db,"advertisements","main"),snap=>render(snap.exists()?snap.data():{enabled:false}),err=>{console.error("[ad-sync]",err);render({enabled:false});});
})();
