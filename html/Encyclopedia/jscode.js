/*
	Function that builds the list of factions from the database.
	Make any changes to formating of factions in this script.
*/
function buildFactionList(pageNum){

	//determines number of factions per page
	var factionsPerPage = 5;
	
	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "getFactionData.php";
	var asynchronous = true;

	ajax.open(method, url, asynchronous);
	//send request
	ajax.send();

	//recieve response from php file
	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//convert JSON to array
			var data = JSON.parse(this.responseText);
			console.log(data); //only used for debugging

			//get head elelment to attach faction list to
			var factionList = document.getElementById("factionList");
			var elementUL = document.createElement("ul");
			factionList.appendChild(elementUL);

			//loop through the array and build an entry for every faction
			for(var i = 0; i < factionsPerPage; i++){
				var x = (pageNum * factionsPerPage) + i;
				if(x >= data.length){
					break;
				}
				//build a faction entry
				var elementLI = document.createElement("li");
				elementUL.appendChild(elementLI);
				
				var elementDiv_1 = document.createElement("div");
				elementDiv_1.setAttribute("class", "factionList faction");
				elementLI.appendChild(elementDiv_1);
				
				var elementDiv_2 = document.createElement("div");
				elementDiv_2.setAttribute("class", "faction-image");
				elementDiv_1.appendChild(elementDiv_2);
				
				var elementImg = document.createElement("img");
				elementImg.setAttribute("src", "images/factions/" + data[x].InsigniaImageName);
				elementImg.setAttribute("alt", "failed to load image");
				elementDiv_2.appendChild(elementImg);
				
				var elementDiv_3 = document.createElement("div");
				elementDiv_3.setAttribute("class", "faction-header");
				elementDiv_1.appendChild(elementDiv_3);
				
				var elementH3 = document.createElement("h3");
				elementH3.setAttribute("class", "faction-header-title");
				elementDiv_3.appendChild(elementH3);
				
				var text_H = document.createTextNode(data[x].Name);
				elementH3.appendChild(text_H);
				
				var elementDiv_4 = document.createElement("div");
				elementDiv_4.setAttribute("class", "faction-body");
				elementDiv_1.appendChild(elementDiv_4);
				
				var elementDiv_5 = document.createElement("div");
				elementDiv_5.setAttribute("class", "faction-body-description");
				elementDiv_4.appendChild(elementDiv_5);
				
				var elementP = document.createElement("p");
				elementDiv_5.appendChild(elementP);
				
				var text_B = document.createTextNode(data[i].Description);
				elementP.appendChild(text_B);
				
				var elementDiv_6 = document.createElement("div");
				elementDiv_6.setAttribute("class", "faction-learnMore");
				elementDiv_1.appendChild(elementDiv_6);
				
				var elementA = document.createElement("a");
				elementA.setAttribute("href", "FactionsDetailed.htm?faction=" + data[x].Name);
				elementDiv_6.appendChild(elementA);
				
				var text_L = document.createTextNode("Learn More");
				elementA.appendChild(text_L);
			}

			var navigationAnchor = document.getElementById("factionListNavigationTable");

			var eleTr = document.createElement("tr");
			navigationAnchor.appendChild(eleTr);



			if(pageNum != 0){
				//link to previous page
				var eleTd = document.createElement("td");
				eleTr.appendChild(eleTd);

				var eleA = document.createElement("a");
				eleA.setAttribute("href", "Factions.htm?page=" + (pageNum - 1))
				eleTd.appendChild(eleA);

				var eleText = document.createTextNode("<< Prev");
				eleA.appendChild(eleText); 

			}

			if(((pageNum) * factionsPerPage) < data.length){
				//link to next page
				var eleTd3 = document.createElement("td");
				eleTr.appendChild(eleTd3);

				var eleA = document.createElement("a");
				eleA.setAttribute("href", "Factions.htm?page=" + (++pageNum))
				eleTd3.appendChild(eleA);

				var eleText = document.createTextNode("Next >>");
				eleA.appendChild(eleText);
			}
		}
	}
}

/*
	Function that builds the list of dieties from the database.
	Make any changes to formating of dieties in this script.
*/
function buildDietiesList(){
	
	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "getDietiesData.php";
	var asynchronous = true;

	ajax.open(method, url, asynchronous);
	//send request
	ajax.send();

	//recieve response from php file
	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//convert JSON to array
			var data = JSON.parse(this.responseText);
			console.log(data); //only used for debugging

			//get head elelment to attach dieties list to
			var dietiesList = document.getElementById("dietiesList");
			var elementUL = document.createElement("ul");
			dietiesList.appendChild(elementUL);

			//loop through the array and build an entry for every Dietie
			for(var i = 0; i < data.length; i++){
				//build a Diety entry
				var elementLI = document.createElement("li");
				elementUL.appendChild(elementLI);
				
				var elementDiv_1 = document.createElement("div");
				elementDiv_1.setAttribute("class", "dietiesList dieties");
				elementLI.appendChild(elementDiv_1);
				
				var elementDiv_2 = document.createElement("div");
				elementDiv_2.setAttribute("class", "dieties-image");
				elementDiv_1.appendChild(elementDiv_2);
				
				var elementImg = document.createElement("img");
				elementImg.setAttribute("src", "images/dieties/" + data[i].Name + ".png");
				elementImg.setAttribute("alt", "failed to load image");
				elementDiv_2.appendChild(elementImg);
				
				var elementDiv_3 = document.createElement("div");
				elementDiv_3.setAttribute("class", "dieties-header");
				elementDiv_1.appendChild(elementDiv_3);
				
				var elementH3 = document.createElement("h3");
				elementH3.setAttribute("class", "dieties-header-title");
				elementDiv_3.appendChild(elementH3);
				
				var text_Name = document.createTextNode(data[i].Name);
				elementH3.appendChild(text_Name);
				
				var elementDiv_4 = document.createElement("div");
				elementDiv_4.setAttribute("class", "dieties-body");
				elementDiv_1.appendChild(elementDiv_4);
				
				var elementDiv_5 = document.createElement("div");
				elementDiv_5.setAttribute("class", "dieties-body-description");
				elementDiv_4.appendChild(elementDiv_5);
				
				var elelmentAliases = document.createElement("p");
				elementDiv_5.appendChild(elelmentAliases);

				var text_Aliases = document.createTextNode("Aliases: " + data[i].Aliases);
				elelmentAliases.appendChild(text_Aliases);

				var elementDomain = document.createElement("p");
				elementDiv_5.appendChild(elementDomain);

				var text_Domain = document.createTextNode("Domain: " + data[i].Domains);
				elementDomain.appendChild(text_Domain);

				var elementInfo = document.createElement("p");
				elementDiv_5.appendChild(elementInfo);
				
				var text_Info = document.createTextNode(data[i].Info);
				elementInfo.appendChild(text_Info);
			}
		}
	}
}

/*
	Function that builds the list of races from the database.
	Make any changes to formating of races in this script.
*/
function buildRaceList(){
	
	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "getRaceData.php";
	var asynchronous = true;

	ajax.open(method, url, asynchronous);
	//send request
	ajax.send();

	//recieve response from php file
	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//convert JSON to array
			var data = JSON.parse(this.responseText);
			console.log(data); //only used for debugging

			//get head elelment to attach faction list to
			var raceList = document.getElementById("RaceList");
			var elementUL = document.createElement("ul");
			raceList.appendChild(elementUL);

			//loop through the array and build an entry for every faction
			for(var i = 0; i < data.length; i++){
				//build a faction entry
				var elementLI = document.createElement("li");
				elementUL.appendChild(elementLI);
				
				var elementDiv_1 = document.createElement("div");
				elementDiv_1.setAttribute("class", "RaceList Race");
				elementLI.appendChild(elementDiv_1);
				
				var elementDiv_2 = document.createElement("div");
				elementDiv_2.setAttribute("class", "race-image");
				elementDiv_1.appendChild(elementDiv_2);
				
				var elementImg = document.createElement("img");
				elementImg.setAttribute("src", "images/races/" + data[i].Race + ".png"); //update with correct data
				elementImg.setAttribute("alt", "failed to load image");
				elementDiv_2.appendChild(elementImg);
				
				var elementDiv_3 = document.createElement("div");
				elementDiv_3.setAttribute("class", "race-header");
				elementDiv_1.appendChild(elementDiv_3);
				
				var elementH3 = document.createElement("h3");
				elementH3.setAttribute("class", "race-header-title");
				elementDiv_3.appendChild(elementH3);
				
				var text_Head = document.createTextNode(data[i].Race); //make sure data is correct
				elementH3.appendChild(text_Head);
				
				var elementDiv_4 = document.createElement("div");
				elementDiv_4.setAttribute("class", "race-body");
				elementDiv_1.appendChild(elementDiv_4);
				
				var elementDiv_5 = document.createElement("div");
				elementDiv_5.setAttribute("class", "race-body-description");
				elementDiv_4.appendChild(elementDiv_5);
				
				var elementRarity = document.createElement("p");
				elementDiv_5.appendChild(elementRarity);
				
				var text_Rarity = document.createTextNode("Rarity: " + data[i].Rarity);
				elementRarity.appendChild(text_Rarity);
				
				var elementDescription = document.createElement("p");
				elementDiv_5.appendChild(elementDescription);
				
				var text_Description = document.createTextNode("Description: " + data[i].Description);
				elementDescription.appendChild(text_Description);

				var elementAttributes = document.createElement("p");
				elementDiv_5.appendChild(elementAttributes);

				var text_Attributes = document.createTextNode("Attributes: " + data[i].Attributes);
				elementAttributes.appendChild(text_Attributes);
			}
		}
	}
}

/*
	Function that builds the page to display detailed information about a faction.
	Make any changes to formating in faction details page here.
*/
function buildFactionDetailedPage(factionName){
	
	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "getFactionData.php";
	var asynchronous = true;

	ajax.open(method, url, asynchronous);
	//send request
	ajax.send();

	//recieve response from php file
	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//convert JSON to array
			var data = JSON.parse(this.responseText);
			console.log(data); //only used for debugging

			//get head elelment to attach details to
			var factionDetails = document.getElementById("factionDetails");

			//loop through the array and build an entry for every faction
			for(var i = 0; i < data.length; i++){
				if(data[i].Name == factionName){
					var elementImg = document.createElement("img");
					elementImg.setAttribute("src", "images/factions/" + data[i].InsigniaImageName);
					elementImg.setAttribute("alt", "failed to load image");
					factionDetails.appendChild(elementImg);

					var elementHeader = document.createElement("h3");
					factionDetails.appendChild(elementHeader);

					var textHead = document.createTextNode(data[i].Name);
					elementHeader.appendChild(textHead);

					var elementAliases = document.createElement("h2")
					factionDetails.appendChild(elementAliases);

					var textAliases = document.createTextNode("Aliases: " + data[i].Aliases);
					elementAliases.appendChild(textAliases);

					var elementClasification = document.createElement("h2")
					factionDetails.appendChild(elementClasification);

					var textClassification = document.createTextNode("Classification: " + data[i].Classification);
					elementClasification.appendChild(textClassification);

					var elementLocation = document.createElement("h2")
					factionDetails.appendChild(elementLocation);

					var textLocation = document.createTextNode("Primary Location: " + data[i].PrimaryLocation);
					elementLocation.appendChild(textLocation);

					var elementRace = document.createElement("h2")
					factionDetails.appendChild(elementRace);

					var textRace = document.createTextNode("Dominant Race: " + data[i].DominantRace);
					elementRace.appendChild(textRace);

					var elementDescription = document.createElement("p")
					factionDetails.appendChild(elementDescription);

					var textDescription = document.createTextNode("Description: " + data[i].Description);
					elementDescription.appendChild(textDescription);

					var elementGoals = document.createElement("p")
					factionDetails.appendChild(elementGoals);

					var textGoals = document.createTextNode("Goals: " + data[i].Goals);
					elementGoals.appendChild(textGoals);

					var elementHistory = document.createElement("p")
					factionDetails.appendChild(elementHistory);

					var textHistory = document.createTextNode("History: " + data[i].HistoryOf);
					elementHistory.appendChild(textHistory);


				}
			}
		}
	}
}

/*
	Function that builds the the Navbar with links
*/
function buildNavbar(){

	var navAnchor = document.getElementById("navBar1");
	var elementUL = document.createElement("ul");
	navAnchor.appendChild(elementUL);

	var elementList1 = document.createElement("li");
	elementUL.appendChild(elementList1);
	var homeLink = document.createElement("a");
	homeLink.setAttribute("href", "../Home.htm")
	var textNode = document.createTextNode("Home");
	homeLink.appendChild(textNode);
	elementList1.appendChild(homeLink);

	var elementList2 = document.createElement("li");
	elementUL.appendChild(elementList2);
	var EncyclopediaLink = document.createElement("a");
	EncyclopediaLink.setAttribute("href", "Home.htm")
	var textNode = document.createTextNode("Encyclopedia");
	EncyclopediaLink.appendChild(textNode);
	elementList1.appendChild(EncyclopediaLink);

	var elementList3 = document.createElement("li");
	elementUL.appendChild(elementList3);
	var RecapsLink = document.createElement("a");
	RecapsLink.setAttribute("href", "../Recaps.htm")
	var textNode = document.createTextNode("Recaps");
	RecapsLink.appendChild(textNode);
	elementList3.appendChild(RecapsLink);
}

function buildSidebar(){
	var sideAnchor = document.getElementsByClassName("sideleft");
	var elementTable = document.createElement("table");
	sideAnchor[0].appendChild(elementTable);

	//build table
	var eleTr1 = document.createElement("tr");
	elementTable.appendChild(eleTr1);

	var eleTr2 = document.createElement("tr");
	elementTable.appendChild(eleTr2);

	var eleTr3 = document.createElement("tr");
	elementTable.appendChild(eleTr3);

	var eleTr4 = document.createElement("tr");
	elementTable.appendChild(eleTr4);

	var td1 = document.createElement("td");
	eleTr1.appendChild(td1);

	var td2 = document.createElement("td");
	eleTr2.appendChild(td2);

	var td3 = document.createElement("td");
	eleTr3.appendChild(td3);

	var td4 = document.createElement("td");
	eleTr4.appendChild(td4);

	//build links to be put in table on sidebar
	var racesLink = document.createElement("a");
	racesLink.setAttribute("href", "Races.htm");
	var racesText = document.createTextNode("Races");
	racesLink.appendChild(racesText);

	td1.appendChild(racesLink);

	var deitiesLink = document.createElement("a");
	deitiesLink.setAttribute("href", "Deities.htm");
	var deitiesText = document.createTextNode("Deities");
	deitiesLink.appendChild(deitiesText);

	td2.appendChild(deitiesLink);

	var factionsLink = document.createElement("a");
	factionsLink.setAttribute("href", "Factions.htm?page=0");
	var factionsText = document.createTextNode("Factions");
	factionsLink.appendChild(factionsText);

	td3.appendChild(factionsLink);

	var cartographerLink = document.createElement("a");
	cartographerLink.setAttribute("href", "Cartographer.htm?map=World");
	var cartographerText = document.createTextNode("Cartographer");
	cartographerLink.appendChild(cartographerText);

	td4.appendChild(cartographerLink);


}

function buildCartographer(mapName){
	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "getMapInfo.php";
	var asynchronous = true;

	ajax.open(method, url, asynchronous);
	//send request
	ajax.send();

	//recieve response from php file
	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//convert JSON to array
			var data = JSON.parse(this.responseText);
			console.log(data); //only used for debugging

			//get anchors
			var imageAnchor = document.getElementById("cartographerImage");
			var linksAnchor = document.getElementById("mapsLink");

			//build img element
			elementImg = document.createElement("img");
			elementImg.setAttribute("src", "images/maps/" + mapName);
			elementImg.setAttribute("alt", "failed to load image");
			imageAnchor.appendChild(elementImg);

			var c = 0;

			for(var i = 0; i < data.length; i++){
				if(data[i].Parent == mapName){
					if(c == 0){
						var eleTr = document.createElement("tr");
						linksAnchor.appendChild(eleTr);
						c++;
					}
					else if (c > 4){
						c = 0;
					}
					else{
						c++;
					}

					var eleTd = document.createElement("td");
					eleTr.appendChild(eleTd);

					var eleA = document.createElement("a");
					eleA.setAttribute("href", "" + data[i].LinkText);
					eleTd.appendChild(eleA);

					var eleText = document.createTextNode(data[i].Name);
					eleA.appendChild(eleText);

				}
			}
		}
	}



}

/*
	Helper function for extracting data from urls
*/
function getParameterByName(name, url_string){
	var url = new URL(url_string);
	var parameter = url.searchParams.get(name);
	console.log(parameter); //for debugging purposes

	return parameter;
}