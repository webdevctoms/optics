const data = ["QUADRO-S* Fusion Thermal Sight Multi Channel Monocular 60 mK, IP66","PBS14 Tactical Night Vision Monocular: Gen 2+, Gen 3, XR5, 4G","PVS-14C Tactical Night Vision Monocular: Gen 2+, Gen 3, XR5, 4G","PVS-31C-MOD Dual-Tube Tactical NV Goggles: Gen 2+, Gen 3, XR5, 4G","HM-714LP-SR Low Profile, Fully Adjustable","PVS-31C Dual-Tube Tactical NV Goggles: Gen 2+", "WOLFHOUND-38 Weapon Sight TI System","TWS-3100-64 Elite Grade Tactical Weapon Sight TI System","CTS-275-64 Elite Grade Tactical Clip-On Weapon Sight TI System","UNITEC-G64 Goggles TI System","TLR-7150M Ultra Long Range Monocular TI System","HMD-800 Head Mounted Mini-Display TI System Accessory","PVS-7 Tactical NV Goggles: Gen 2+, Gen 3, XR5, 4G"];

function checkTitle(){
	//console.log(document.title);
	console.log("window.location.href ");
	const currentUrl = window.location.href;
	const urlArr = currentUrl.split("/");
	console.log(urlArr);

	$(".item-link").each(function(i){
		console.log($(this).text());
		for(let i = 0; i < data.length; i++){
			if($(this).text() === data[i]){
				console.log("found one");
				$(this).siblings(".price-area").children(".price").hide();
			}
		}
		
	});
	for(let i = 0;i < urlArr.length;i++){
		if(urlArr[i] === "Optics"){
			$(".price").hide();
			break;
		}
	}
	if(document.title === "Optics"){
		//console.log("optics page");
		$(".price").hide();
	}
}


$(checkTitle);