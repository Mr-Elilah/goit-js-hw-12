import{i as f,S as v}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const w="https://pixabay.com/api/",P="48226781-c314bf294542f2e13595e23de";function m(e,s=1){const o=`${w}?key=${P}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${s}`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>r).catch(r=>{throw new Error(r.message)})}function c(e){f.error({title:"Error",message:e})}function q(e){f.success({title:"Success",message:e})}function p(e){const s=document.querySelector(".gallery"),o=e.map(({webformatURL:r,largeImageURL:t,tags:n,likes:a,views:L,comments:S,downloads:b})=>`
        <li class="gallery-item">
          <a href="${t}">
            <img src="${r}" alt="${n}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes:</b> ${a}
              </p>
              <p class="info-item">
                <b>Views:</b> ${L}
              </p>
              <p class="info-item">
                <b>Comments:</b> ${S}
              </p>
              <p class="info-item">
                <b>Downloads:</b> ${b}
              </p>
            </div>
          </a>
        </li>
      `).join("");s.innerHTML=o}function h(){const e=document.querySelector(".loader");e?e.classList.add("show"):console.error("Loader not found!")}function u(){const e=document.querySelector(".loader");e?e.classList.remove("show"):console.error("Loader not found!")}const y=new v(".gallery a",{captionsData:"alt",captionDelay:250});let l=1;const g=12;function d(e,s){console.log(e),h(),m(e,l).then(({hits:o,totalHits:r})=>{if(u(),o.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}p(o),y.refresh();const t=document.querySelector(".prev"),n=document.querySelector(".next");l>1?t.style.display="inline-block":t.style.display="none",o.length===g?n.style.display="inline-block":n.style.display="none"}).catch(o=>{u(),c("Oops, something went wrong. Please try again later.")})}function E(e,s){if(s<=g)return;const o=document.querySelector(".prev"),r=document.querySelector(".next");r.style.display="inline-block",o.addEventListener("click",()=>{l>1&&(l-=1,d(e))}),r.addEventListener("click",()=>{l+=1,d(e)})}const $=document.querySelector(".search-form"),I=document.querySelector(".search-input");$.addEventListener("submit",O);function O(e){e.preventDefault();const s=I.value.trim();if(s===""){c("Please enter a search query.");return}i.value="",localStorage.clear(),h(),m(s).then(({hits:o,totalHits:r})=>{if(u(),o.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}p(o),q("Images loaded successfully!"),y.refresh(),E(s,r)}).catch(o=>{u(),c("Oops, something went wrong. Please try again later.")})}const i=document.querySelector(".search-input");i.addEventListener("input",()=>{i.value.trim()!==""?(i.classList.remove("empty"),i.classList.add("filled")):(i.classList.remove("filled"),i.classList.add("empty"))});
//# sourceMappingURL=index.js.map
