import"./foregroundImageFade.DjuWcd9p.js";import{S as l}from"./hoisted.B3Ruf_-H.js";import"./Disclosure.astro_astro_type_script_index_0_lang.Bf0YraWX.js";import"./FooterCTA.astro_astro_type_script_index_0_lang.DYTQE9I1.js";import"./FAQ.astro_astro_type_script_index_0_lang.UnXkag5t.js";import{g as e}from"./index.DjKJqAo0.js";import"./tracking.DJvrO3Xg.js";const t=document.querySelector(".tabs");e.registerPlugin(l);let m=e.matchMedia(),p=0;m.add({isDesktop:`(min-width: ${p}px)`},s=>{const i=e.timeline({scrollTrigger:{trigger:".steps",start:s.conditions.isDesktop?"top 60%":"top 30%",end:"max"}}).to(".steps__grid",{autoAlpha:1,stagger:8}).to(".steps__numbers",{color:"black",fontWeight:700,stagger:8},"=").to(".bar",{width:"100%",duration:24,ease:"none"},"=").repeat(-1),n=i.duration(),a=Math.ceil(n/t.childElementCount),r=c=>{const o=c.target.getAttribute("data-step");o&&i.seek(a*Number(o-1)+1)};return t.addEventListener("click",r),()=>{t.removeEventListener("click",r)}});