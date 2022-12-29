 const head = document.querySelector('.head');
 const page= document.querySelector('div');
 const details = document.querySelector('.details')
 


 async function pagination(){

        const res = await fetch(`https://gist.githubusercontent.com/techieeycamp/85884f4327effa2cb7677d3d15964104/raw/465fda01beaeff7170aae3327c4c61e1a09bc16d`)
        const data = await res.json();
        alldata = data;
       pagenum(alldata)
 }

let alldata = [];
pagination()

function pagenum(){
       let start = 0;
       let end = alldata.length/10;
       for(let i=0; i<end; i++){
              let buttons=document.createElement('button')
              buttons.innerHTML = `${i+1}`
              console.log(i);
              buttons.onclick = ()=>{
                     start = i;
              
       

       details.innerHTML = ``
       let table = alldata.slice(start*10,(start+1)*10)
       table.forEach((alldata)=>{
          let tr = document.createElement('tr')
          tr.innerHTML = `<td>${alldata.id}</td>
         <td>${alldata.name}</td> 
         <td>${alldata.email}</td>` 
         details.append(tr);    
       });
      
       }; 
       page.append(buttons)
       };
       
}
