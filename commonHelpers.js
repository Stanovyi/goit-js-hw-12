import{a as L,S as w,i}from"./assets/vendor-f736e62a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const b="43416172-86a986f8fd379e5189cb30c8e",v="https://pixabay.com/api/";async function h(r,e){try{const o=await L.get(v,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});if(!o.data.hits.length)throw new Error("No images found");return o.data}catch(o){throw new Error(o.message)}}const p=document.querySelector(".loader");function m(r){return r.map(e=>`<li class="list-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}">
        </a>

        <div class="list-item-info">
          <p><strong>Likes</strong> <span>${e.likes}</span></p>
          <p><strong>Views</strong> <span>${e.views}</span></p>
          <p><strong>Comments</strong> <span>${e.comments}</span></p>
          <p><strong>Downloads</strong> <span>${e.downloads}</span></p>
        </div>
      </li>`).join("")}function g(){p.classList.remove("is-hidden")}function f(){p.classList.add("is-hidden")}let a=1;const y=new w(".images-list a");let n=null;const S=document.querySelector(".search-form"),P=document.querySelector(".search-form-input");document.querySelector(".search-form-button");const c=document.querySelector(".images-list"),l=document.querySelector(".button-load");S.addEventListener("submit",q);l.addEventListener("click",R);async function q(r){if(r.preventDefault(),g(),l.classList.add("is-hidden"),c.innerHTML="",a=1,n=r.currentTarget.elements.search.value.trim(),!n){i.warning({position:"topRight",message:"Please write something! "});return}try{if(!n)return i.error({position:"topRight",message:"Please write something! "});const e=await h(n,a);if(e.hits.length===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});c.innerHTML=m(e.hits),y.refresh(),e.totalHits>15&&l.classList.remove("is-hidden")}catch(e){console.log(e)}finally{f()}P.value=""}async function R(){if(g(),!n)return f(),i.error({position:"topRight",message:"Please enter a search query first!"});a++;try{const{hits:r,totalHits:e}=await h(n,a);c.insertAdjacentHTML("beforeend",m(r)),y.refresh();const{height:o}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),Math.ceil(e/15)===a&&(l.classList.add("is-hidden"),i.info({position:"topRight",message:"We're sorry, but you've reached the end of results",maxWidth:"432"}))}catch(r){console.log(r)}finally{f()}}
//# sourceMappingURL=commonHelpers.js.map