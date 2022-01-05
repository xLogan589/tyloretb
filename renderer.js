
window.api.receive("fromMain", (data) => {
    console.log(`Received ${data} from main process`);
    if(data.remove==false){
        var element = document.getElementById("list-group");
        let div = document.createElement('a');
        div.classList.add("list-group-item")
      
        div.classList.add("flex-column")
        
        div.classList.add("align-items-start")
        
        div.href="#"
        div.innerHTML=`
      
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Trade with ${data.content.user}</h5>
            <small>${data.content.time}</small>
          </div>
          <h4>Items you will give:</h4>`
          data.content.give.forEach(x=>{
            div.innerHTML=div.innerHTML+`<p class="mb-1">${x}</p>`
          })
          div.innerHTML=div.innerHTML+`<h4>Items you will get:</h4>`
          data.content.get.forEach(x=>{
            div.innerHTML=div.innerHTML+`<p class="mb-1">${x}</p>`
          })
          div.innerHTML=div.innerHTML+`<img src="data:image/jpg;base64,${data.content.buffer}" style="
          max-width: 30%;
      ">`
 element.appendChild(div)
 var x = document.getElementById("list-group").firstElementChild
 x.classList.add("active")
    }else{
      var x = document.getElementById("list-group").
     x.removeChild(x.childNodes[0]);  
     var x = document.getElementById("list-group").firstElementChild
     x.classList.add("active")
    }
});