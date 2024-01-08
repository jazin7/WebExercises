var vm = new Vue({
	el:"#app",
	data: {
		cryptoMenge: 0,
		cryptoModifikator: 1,
		botMinerKosten: 10,
		rtx3090Kosten: 50,
		botNetzwerkKosten: 100,
		serverraumKosten: 500,
		infotext: "",
		upgradeList:[
			{name: "Bot Miner",
				number: 0},
			{name: "RTX3090",
				number: 0},
			{name: "Bot Netzwerk",
				number: 0},
			{name: "Serverraum",
				number: 0}
			],

		options: false,
		darkmodeActive: false,
	},
	methods:{
		addCrypto: function(){
			this.cryptoMenge += 1 * this.cryptoModifikator;
			this.infotext = "";
		},
		increaseModifier: function(code){
			switch(code){
				case "botminer":
					if (this.cryptoMenge < this.botMinerKosten){
						this.infotext = "Nicht genügend Coins!"
					}  else{
						this.cryptoMenge -= this.botMinerKosten;
						this.cryptoModifikator += 1;
						this.infotext = "Gekauft!";
						this.upgradeList[0].number += 1;
					}
					return;
				case "rtx3090":
					if (this.cryptoMenge < this.rtx3090Kosten){
						this.infotext = "Nicht genügend Coins!"
					}  else{
						this.cryptoMenge -= this.rtx3090Kosten;
						this.cryptoModifikator += 5;
						this.infotext = "Gekauft!";
						this.upgradeList[1].number += 1;
					}
					return;
				case "netzwerk":
					if (this.cryptoMenge < this.botNetzwerkKosten){
						this.infotext = "Nicht genügend Coins!"
					}  else{
						this.cryptoMenge -= this.botNetzwerkKosten;
						this.cryptoModifikator += 10;
						this.infotext = "Gekauft!";
						this.upgradeList[2].number += 1;
					}
					return;
				case "serverraum":
					if (this.cryptoMenge < this.serverraumKosten){
						this.infotext = "Nicht genügend Coins!"
					}  else{
						this.cryptoMenge -= this.serverraumKosten;
						this.cryptoModifikator += 50;
						this.infotext = "Gekauft!";
						this.upgradeList[3].number += 1;
					}
					return;
				default:
					alert("Something went wrong");
					return;
			}
		},
		toggleOptions: function(){
			this.options = !this.options;
		},

		toggleDarkmode: function(){
			this.darkmodeActive = true;
		},
		toggleLightmode: function(){
			this.darkmodeActive = false;
		}
	}
});




