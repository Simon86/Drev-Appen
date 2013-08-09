document.addEventListener("deviceready", onDeviceReady, false);
// Väntar att Cordova aka Phonegap ska laddas.

function onDeviceReady() {
  // Nu är Cordova laddat.

}

function berakna() {
	
	var hastighet = $("#hastighet").val(); 
	var framdrev = $("#framdrev").val(); 
	var bakdrev = $("#bakdrev").val(); 
	var ny_framdrev = $("#ny_framdrev").val(); 
	var ny_bakdrev = $("#ny_bakdrev").val(); 
	
	var procent = (((bakdrev/framdrev)-(ny_bakdrev/ny_framdrev))/(bakdrev/framdrev))*100;
	var ny_hastighet = ((((bakdrev/framdrev)-(ny_bakdrev/ny_framdrev))/(bakdrev/framdrev))+1)*hastighet;
	
	// Avrundar svaren till två decimaler 
	var avrund_procent = Math.round(procent * 100) / 100;
	var avrund_ny_hastighet = Math.round(ny_hastighet * 100) / 100;

	$("#out_procent").html("Föränding i Procent: "+ avrund_procent + " %");
	$("#out_ny_hastighet").html("Beräknad ny hastighet: "+ avrund_ny_hastighet + " km/h");

}	
