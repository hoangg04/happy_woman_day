const box = document.querySelector(".box");
const paragraph = document.querySelector(".paragraph");
const content = document.querySelector(".content");
box.addEventListener("click", function (e) {
	content.classList.toggle("open");
});
function myFunction() {
	let person = prompt("Please enter your name", "Hoang Trong");
	if (person != null) {
		paragraph.innerHTML = ` Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc những dòng tin nhắn này. Chúc ${person} luôn vui vẻ,mình chúc bạn luôn trẻ trung, tiền nhiều như kẹo, tình bền chặt như keo, dẻo dai như mèo và mịn màng trắng trẻo. Chúc bạn thật hạnh phúc và ý nghĩa trong ngày 20/10 nhé!`;
	}
}
setTimeout(()=>{
  myFunction();
},1000)
