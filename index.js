const k=document.querySelector('.name')
console.log(k);

k.addEventListener('keyup',function(){
    console.log('Key up');
});

const j = document.querySelector('#keyd');
console.log(j);

j.addEventListener("keydown", function() {
	console.log('KEY DOWN!');
});

const s = document.querySelector('#keyp');
console.log(s);

s.addEventListener("keypress", function() {
	console.log('KEY press!');
});


const list=document.querySelector('#list');
const p =document.querySelector('#items');
list.addEventListener('keypress',function(list){
    if(list.key==="Enter"){
        if(!this.value) return;

        const item=this.value;
        const newItem =document.createElement('li');
        newItem.innerHTML=item;
        p.appendChild(newItem);
        this.value='';
    }
})