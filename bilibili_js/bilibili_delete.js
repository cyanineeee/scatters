async function pro(){
    await sleep(1000);

	return new Promise((resolve,reject) => {
	let s = `#page-dynamic > div.col-1 > div > div.bili-dyn-list__items > div:nth-child(15) > div > div > div.bili-dyn-item__header > div.bili-dyn-item__more > div > div > div.bili-dyn-more__menu > div:nth-child(2)`;
   	console.log(s);
	if(s){
    	let d = document.querySelector(s);
    	d.click();
        console.log("pro");
		resolve("成功");
	}else{
		reject("失败");
	}
})
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function selec(){
    await sleep(1000);
    console.log("selec1");
	return new Promise((resolve,reject) => {
        console.log("selec2");
        let confirm = document.querySelector("body > div.bili-modal__wrap > div.bili-modal > div.bili-modal__footer > button.bili-modal__button.confirm");
        console.log(confirm);
        resolve(confirm);
	})
}

async function clic(confirm){
    await sleep(1000);

	return new Promise((resolve,reject) => {
		confirm.click();
		console.log("成功删除！");
	})
}

function run(){
    	pro().then(selec)
    	.then(clic)
    	.catch((fail) => {
    		console.log("完成...");
    	})
}

setInterval(run,5000);