const burger=document.getElementById("burger");
const menu=document.getElementById("menu");
burger.addEventListener('click',()=>{
menu.classList.toggle("is-active");
})

const tabs=document.querySelectorAll(".tabs li");
const tabbox=document.querySelectorAll("#tab-content > div");

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=> {
        tabs.forEach((item)=>item.classList.remove("is-active"))
        tab.classList.add("is-active");
        const target=tab.dataset.target;
        tabbox.forEach(box=>{
           if(box.getAttribute('id')===target)
           {
               box.classList.remove("is-hidden");
           }
           else{
               box.classList.add("is-hidden");
           }
        });
})
})

const b=document.getElementById("bbtn");
const mod=document.getElementById("mod");
const modbg=document.getElementById("modbg");
b.addEventListener('click',()=>{
    mod.classList.add("is-active");
})

modbg.addEventListener('click',()=>{
    mod.classList.remove('is-active');
})
