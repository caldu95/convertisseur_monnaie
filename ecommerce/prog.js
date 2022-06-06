const deviseNombre=document.body.querySelectorAll('input[type="text"]');
let selecteurGauche=document.getElementById("selecteur_gauche");
let selecteurDroit=document.getElementById("selecteur_droit");
let deviseDepart=document.getElementById("devise_depart");
let deviseArrive=document.getElementById("devise_arrive");
function convertValue(){
	let montantDepart=parseFloat(deviseDepart.value);
	let montantArrive=parseFloat(deviseArrive.value);
	let monnaieGauche=selecteurGauche.value;
	let monnaieDroite=selecteurDroit.value;
	let argentDepart,argentArrive;
	let euro=document.getElementsByClassName("euro");
		let dollar=document.getElementsByClassName("dollar");
		let yen=document.getElementsByClassName("yen");
		let fcfa=document.getElementsByClassName("fcfa");
		let naira=document.getElementsByClassName("naira");
		let roupie=document.getElementsByClassName("roupie");
	if ((monnaieGauche=euro & monnaieDroite=euro) | (monnaieGauche=dollar & monnaieDroite=dollar) |
(monnaieGauche=yen & monnaieDroite=yen) | (monnaieGauche=fcfa & monnaieDroite=fcfa) | 
(monnaieGauche=naira & monnaieDroite=naira) | (monnaieGauche=roupie &monnaieDroite=roupie)) {
		argentDepart=argentArrive=montantDepart=montantArrive;
return;}
	else{
		
		if (monnaieGauche=euro & monnaieDroite=dollar) {
			argentDepart=montantArrive*1.07;
			argentArrive=montantDepart*0.93;
			return;
		}
		else if(monnaieGauche=dollar & monnaieDroite=euro){
			argentDepart=montantArrive*0.93;
			argentArrive=montantDepart*1.07;
			return;
		}
		else if(monnaieGauche=euro & monnaieDroite=yen){
			argentDepart=montantArrive*140.68;
			argentArrive=montantDepart*0.0071;
			return;
		}
		else if(monnaieGauche=yen & monnaieDroite=euro){
			argentDepart=montantArrive*0.0071;
			argentArrive=montantDepart*140.68;
			return;
		}
		else if(monnaieGauche=euro & monnaieDroite=fcfa){
			argentDepart=montantArrive*657.66;
			argentArrive=montantDepart*0.0015;
			return;
		}
		else if(monnaieGauche=fcfa & monnaieDroite=euro){
			argentDepart=montantArrive*0.0015;
			argentArrive=montantDepart*657.66;
			return;
		}
		else if(monnaieGauche=euro & monnaieDroite=naira){
			argentDepart=montantArrive*445.01;
			argentArrive=montantDepart*0.0022;
			return;
		}
		else if(monnaieGauche=naira & monnaieDroite=euro){
			argentDepart=montantArrive*0.0022;
			argentArrive=montantDepart*445.01;
			return;
		}
		else if(monnaieGauche=euro & monnaieDroite=roupie){
			argentDepart=montantArrive*83.29;
			argentArrive=montantDepart*0.012;
			return;
		}
		else if(monnaieGauche=roupie & monnaieDroite=euro){
			argentDepart=montantArrive*0.012;
			argentArrive=montantDepart*83.29;
			return;
		}
		else if(monnaieGauche=dollar & monnaieDroite=yen){
			argentDepart=montantArrive*130.83;
			argentArrive=montantDepart*0.0076;
			return;
		}
		else if(monnaieGauche=yen & monnaieDroite=dollar){
			argentDepart=montantArrive*0.0076;
			argentArrive=montantDepart*130.83;
			return;
		}
		else if(monnaieGauche=dollar & monnaieDroite=fcfa){
			argentDepart=montantArrive*613.5;
			argentArrive=montantDepart*0.0016;
			return;
		}
		else if(monnaieGauche=fcfa & monnaieDroite=dollar){
			argentDepart=montantArrive*0.0016;
			argentArrive=montantDepart*613.5;
			return;
		}
		else if(monnaieGauche=dollar & monnaieDroite=naira){
			argentDepart=montantArrive*415.12;
			argentArrive=montantDepart*0.0024;
			return;
		}
		else if(monnaieGauche=naira & monnaieDroite=dollar){
			argentDepart=montantArrive*0.0024;
			argentArrive=montantDepart*415.12;
			return;
		}
		else if(monnaieGauche=dollar & monnaieDroite=roupie){
			argentDepart=montantArrive*77.69;
			argentArrive=montantDepart*0.013;
			return;
		}
		else if(monnaieGauche=roupie & monnaieDroite=dollar){
			argentDepart=montantArrive*0.013;
			argentArrive=montantDepart*77.69;
			return;
		}
		else if(monnaieGauche=yen & monnaieDroite=fcfa){
			argentDepart=montantArrive*4.67;
			argentArrive=montantDepart*0.21;
			return;
		}
		else if(monnaieGauche=fcfa & monnaieDroite=yen){
			argentDepart=montantArrive*0.21;
			argentArrive=montantDepart*4.67;
			return;
		}
		else if(monnaieGauche=yen & monnaieDroite=naira){
			argentDepart=montantArrive*3.17;
			argentArrive=montantDepart*0.32;
			return;
		}
		else if(monnaieGauche=naira & monnaieDroite=yen){
			argentDepart=montantArrive*0.32;
			argentArrive=montantDepart*3.17;
			return;
		}
		else if(monnaieGauche=yen & monnaieDroite=roupie){
			argentDepart=montantArrive*0.59;
			argentArrive=montantDepart*1.69;
			return;
		}
		else if(monnaieGauche=roupie & monnaieDroite=yen){
			argentDepart=montantArrive*1.69;
			argentArrive=montantDepart*0.59;
			return;
		}
		else if(monnaieGauche=fcfa & monnaieDroite=naira){
			argentDepart=montantArrive*0.68;
			argentArrive=montantDepart*1.47;
			return;
		}
		else if(monnaieGauche=naira & monnaieDroite=fcfa){
			argentDepart=montantArrive*1.47;
			argentArrive=montantDepart*0.68;
			return;
		}
		else if(monnaieGauche=fcfa & monnaieDroite=roupie){
			argentDepart=montantArrive*0.13;
			argentArrive=montantDepart*7.86;
			return;
		}
		else if(monnaieGauche=roupie & monnaieDroite=fcfa){
			argentDepart=montantArrive*7.86;
			argentArrive=montantDepart*0.13;
			return;
		}
		else if(monnaieGauche=naira & monnaieDroite=roupie){
			argentDepart=montantArrive*0.19;
			argentArrive=montantDepart*5.34;
			return;
		}
		else if(monnaieGauche=roupie & monnaieDroite=naira){
			argentDepart=montantArrive*5.34;
			argentArrive=montantDepart*0.19;
			return;
		}
		
	}
}
selecteurGauche.addEventListener("input",convertValue());

selecteurDroit.addEventListener("input",convertValue());
