(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const i=document.getElementById("menu-opn-btn"),d=document.getElementById("menu-opn-btn-svg"),m=document.getElementById("menu-opn-btn-use"),a=document.getElementById("menu-cls-btn"),l=document.getElementById("menu-navigation"),f=l.querySelectorAll("li"),n=document.getElementById("mob-menu");i.addEventListener("click",function(){n.classList.add("is-open")});a.addEventListener("click",function(){n.classList.remove("is-open")});f.forEach(r=>{r.addEventListener("click",function(){n.classList.remove("is-open")})});document.addEventListener("click",function(){!l.contains(event.target)&&event.target!==i&&event.target!==d&&event.target!==m&&n.classList.remove("is-open")});