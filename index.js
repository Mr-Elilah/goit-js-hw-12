import{a as p,i as u,S as y}from"./assets/vendor-D0cagnvz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",h="48226781-c314bf294542f2e13595e23de";async function L(t,o=1,s=15){try{return(await p.get(g,{params:{key:h,q:t,page:o,per_page:s}})).data}catch{throw new Error("Failed to fetch images")}}function c(t){u.error({title:"Error",message:t})}function b(t){u.success({title:"Success",message:t})}function S(t){const o=document.querySelector(".gallery"),s=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:d,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${a}" alt="${r}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes:</b> ${i}
              </p>
              <p class="info-item">
                <b>Views:</b> ${d}
              </p>
              <p class="info-item">
                <b>Comments:</b> ${f}
              </p>
              <p class="info-item">
                <b>Downloads:</b> ${m}
              </p>
            </div>
          </a>
        </li>
      `).join("");o.innerHTML=s}function w(){const t=document.querySelector(".loader");t?t.classList.add("show"):console.error("Loader not found!")}function l(){const t=document.querySelector(".loader");t?t.classList.remove("show"):console.error("Loader not found!")}const v=new y(".gallery a",{captionsData:"alt",captionDelay:250}),q=document.querySelector(".search-form"),P=document.querySelector(".search-input");document.querySelector(".js-load-more-btn");let E=1;q.addEventListener("submit",I);async function I(t){t.preventDefault();const o=P.value.trim();if(o===""){c("Please enter a search query.");return}n.value="",localStorage.clear(),w();try{const{hits:s,totalHits:a}=await L(o,E);if(l(),s.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}S(s),b("Images loaded successfully!"),v.refresh(),setPaginationButtons(o,a)}catch{l(),c("Oops, something went wrong. Please try again later.")}}const n=document.querySelector(".search-input");n.addEventListener("input",()=>{n.value.trim()!==""?(n.classList.remove("empty"),n.classList.add("filled")):(n.classList.remove("filled"),n.classList.add("empty"))});
//# sourceMappingURL=index.js.map
