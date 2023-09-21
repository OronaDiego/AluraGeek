 
 const btn = document.querySelector("[data-form-btn]")


 const createCard =  ()=>{
   const img = document.querySelector("[data-form-img]");
   const valueImg= img.value;
   img.value="";
   const name = document.querySelector("[data-form-name]");
   const valueName= name.value;
   name.value="";
   const precio= document.querySelector("[data-form-precio]");
   const valuePrecio= precio.value;
   precio.value="";
   const desc = document.querySelector("[data-form-desc]");
   const valueDesc= desc.value;
   desc.value="";

   const divv = document.querySelector("[data-card]")
   const nuevaCard= document.createElement("div")
   nuevaCard.classList.add("contProductos")
   const contenido= `<div >
                        <img src="${valueImg}" alt="">
                        <h1> ${valueName}</h1>
                        <h2>$ ${valuePrecio}</h2>
                        <h1>${valueDesc}</h1>
                     </div>`;

   nuevaCard.innerHTML=contenido;

   divv.appendChild(nuevaCard);
   alert("nuevo producto agregado");
 }
 
 btn.addEventListener("click", createCard);
 