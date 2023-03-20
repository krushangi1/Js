const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			}
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const btn = document.querySelector('button');
// moveX(btn, 100, 1000)
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.catch(({ bodyBoundary, amount, elRight }) => {
// 		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
// 		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
// 	});


	//async and await
	//async return promise
	//await run after promise resolve

	let s;
	async function sum(x,y){
		 s=x+y;
		return s;
	}

	sum().then( (data) =>{
		console.log(`sum is ${data}`);
	})


	async function getData (){
		const d= await axios.get('https://github.com/krushangi1/Js:/8080');
		console.log(d.data);
	}

	getData().catch( (err)=>
	{
		console.log('error catch');
		console.log(err);
	} );


//moveX using async and await
	async function newMove(el,amt){
		await moveX(el,amt,1000);
		await moveX(el,amt,1000);
		await moveX(el,amt,1000);
		await moveX(el,amt,1000);
		await moveX(el,amt,1000);
		await moveX(el,amt,1000);
		await moveX(el,amt,1000);
		await moveX(el,amt,1000);
		await moveX(el,amt,1000);
	}

	// newMove(btn).catch( (err)=>{
	// 	console.log("DONE!!!");
	// } );

		newMove(btn,100).catch( (err)=>{
			console.log("DONE!!!");
			newMove(btn,-100);
		} );

		//PROTYPE

		let arr=["kru","ros"];
		let obj={
			name:"ban",
			city:"ahm"
		}
		