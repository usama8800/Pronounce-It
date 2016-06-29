chrome.contextMenus.create({"title":"Pronounce '%s'", "contexts":["selection"], "id":"pronounceItContext"});

chrome.contextMenus.onClicked.addListener(function(info){
	if (info.menuItemId == "pronounceItContext") {
		new Audio("http://www.howjsay.com/mp3/"+info.selectionText.toLowerCase().trim()+".mp3").play();
	}
});