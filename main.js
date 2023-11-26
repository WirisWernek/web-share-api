const shareData = {
	title: "MDN",
	text: "Learn web development on MDN!",
	url: "https://developer.mozilla.org",
  };
  
  const resultPara = document.querySelector(".result");
  
  // Share must be triggered by "user activation"
  async function compartilhar(){
	try {
	  await navigator.share(shareData);
	  resultPara.textContent = "MDN shared successfully";
	} catch (err) {
	  resultPara.textContent = `Error: ${err}`;
	}
  };
  