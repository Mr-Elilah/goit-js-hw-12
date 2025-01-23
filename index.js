import{i as m,S as w}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const p="https://pixabay.com/api/",h="48226781-c314bf294542f2e13595e23de";function y(e){const n=`${p}?key=${h}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;return fetch(n).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>r.hits).catch(r=>{throw new Error(r.message)})}function l(e){m.error({title:"Error",message:e})}function q(e){m.success({title:"Success",message:e})}function g(e){const n=document.querySelector(".gallery"),r=e.map(({webformatURL:s,largeImageURL:t,tags:o,likes:c,views:S,comments:b,downloads:v})=>`
        <li class="gallery-item">
          <a href="${t}">
            <img src="${s}" alt="${o}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes:</b> ${c}
              </p>
              <p class="info-item">
                <b>Views:</b> ${S}
              </p>
              <p class="info-item">
                <b>Comments:</b> ${b}
              </p>
              <p class="info-item">
                <b>Downloads:</b> ${v}
              </p>
            </div>
          </a>
        </li>
      `).join("");n.innerHTML=r}function L(){const e=document.querySelector(".loader");e?e.classList.add("show"):console.error("Loader not found!")}function u(){const e=document.querySelector(".loader");e?e.classList.remove("show"):console.error("Loader not found!")}let a=1;const d=12;function f(e,n){const r=`${p}?key=${h}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${d}`;L(),y(r).then(s=>{if(u(),s.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}g(s);const t=document.querySelector(".prev"),o=document.querySelector(".next");a>1?t.style.display="inline-block":t.style.display="none",s.length===d?o.style.display="inline-block":o.style.display="none"}).catch(s=>{u(),l("Oops, something went wrong. Please try again later.")})}function P(e){const n=document.querySelector(".prev"),r=document.querySelector(".next");n.addEventListener("click",()=>{a>1&&(a-=1,f(e,a))}),r.addEventListener("click",()=>{a+=1,f(e,a)})}const $=document.querySelector(".search-form"),E=document.querySelector(".search-input");$.addEventListener("submit",x);function x(e){e.preventDefault();const n=E.value.trim();if(n===""){l("Please enter a search query.");return}i.value="",localStorage.clear(),L(),y(n).then(r=>{if(u(),r.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}g(r),q("Images loaded successfully!"),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),P(n)}).catch(r=>{u(),l("Oops, something went wrong. Please try again later.")})}const i=document.querySelector(".search-input");i.addEventListener("input",()=>{i.value.trim()!==""?(i.classList.remove("empty"),i.classList.add("filled")):(i.classList.remove("filled"),i.classList.add("empty"))});
//# sourceMappingURL=index.js.map
