 const observer = new IntersectionObserver((entries)=>{ 
  entries.forEach((entry)=>{
  if(entry.isIntersecting){
  entry.target.classList.add('show')
  console.log(entry.target)
   }
   else{
     entry.target.classList.remove('show')
   }
 })
 },{})
const cards = document.querySelectorAll('.card');
 cards.forEach(el => observer.observe(el));
 function changeclr() {
        document.body.classList.toggle("dark")
         
}
