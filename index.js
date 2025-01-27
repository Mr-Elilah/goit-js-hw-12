import{a as S,i as f,S as v}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const q="https://pixabay.com/api/",P="48226781-c314bf294542f2e13595e23de",m=15;async function g(e,t=1){try{return(await S.get(q,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",page:t,per_page:m}})).data}catch{throw new Error("Failed to fetch images")}}const E=document.querySelector(".search-form"),I=document.querySelector(".search-input"),l=document.querySelector(".js-load-more-btn"),h=document.querySelector(".js-gallery"),O=document.querySelector(".search-input");function i(e){f.error({title:"Error",message:e})}function M(e){f.success({title:"Success",message:e})}function p(e){const t=e.map(({webformatURL:s,largeImageURL:n,tags:r,likes:o,views:a,comments:w,downloads:b})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${s}" alt="${r}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes:</b> ${o}
              </p>
              <p class="info-item">
                <b>Views:</b> ${a}
              </p>
              <p class="info-item">
                <b>Comments:</b> ${w}
              </p>
              <p class="info-item">
                <b>Downloads:</b> ${b}
              </p>
            </div>
          </a>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",t)}function y(){const e=document.querySelector(".loader");e?e.classList.add("show"):console.error("Loader not found!")}function u(){const e=document.querySelector(".loader");e?e.classList.remove("show"):console.error("Loader not found!")}const L=new v(".gallery a",{captionsData:"alt",captionDelay:250});function $(){const e=document.querySelector(".gallery-item");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}async function H(e,t){y();try{const{hits:s,totalHits:n}=await g(e,t),r=Math.ceil(n/m);if(p(s),L.refresh(),$(),t>=r){l.classList.add("is-hidden");return}}catch{i("Oops, something went wrong. Please try again later.")}finally{u()}}function T(e){const t=e.currentTarget;t.value.trim()!==""?(t.classList.remove("empty"),t.classList.add("filled")):(t.classList.remove("filled"),t.classList.add("empty"))}let d=1,c="";l.addEventListener("click",e=>{d+=1,H(c,d)});E.addEventListener("submit",j);async function j(e){e.preventDefault();const t=e.currentTarget;if(h.innerHTML="",c=I.value.trim(),c===""){i("Please enter a search query.");return}d=1,localStorage.clear(),y();try{const{hits:s}=await g(c,d);if(u(),s.length===0){l.classList.add("is-hidden"),i("Sorry, there are no images matching your search query. Please try again!");return}p(s),M("Images loaded successfully!"),l.classList.remove("is-hidden"),L.refresh()}catch{u(),i("Oops, something went wrong. Please try again later.")}finally{t.reset()}}O.addEventListener("input",T);
//# sourceMappingURL=index.js.map
