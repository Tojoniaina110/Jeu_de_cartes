

function playcard(){
    const prompt=require("prompt-sync")();
    let cartes =["eau","feux","plante"];
    let tour =3;
    let pointdujoueur=0;
    let poindurobot =0;

    for (let i=1;i<=tour;i++){
    let joueur =prompt("posez votre carte(feux,eau,plante):");
    let robot = cartes[(Math.floor(Math.random()*cartes.length))];
    console.log(joueur+" VS "+robot);

  if(joueur==robot){console.log("Match nul ")
  console.log('██╗░░░██╗██████╗░██████╗░')
  console.log('██║░░░██║██╔══██╗██╔══██╗')
  console.log('╚██╗░██╔╝██║░░██║██║░░██║')
  console.log('░╚████╔╝░██║░░██║██║░░██║')
  console.log('░░╚██╔╝░░██████╔╝██████╔╝')
  console.log('░░░╚═╝░░░╚═════╝░╚═════╝░');}
  
  if(joueur=="feux"&& robot=="plante" || joueur=="eau" && robot=="feux "|| joueur=="plante "&& robot=="eau"){console.log("vous avez gagner de la partie")
  pointdujoueur++;
  console.log('██╗░░░██╗███████╗░█████╗░')
  console.log('██║░░░██║██╔════╝██╔══██╗')
  console.log('╚██╗░██╔╝█████╗░░██║░░██║')
  console.log('░╚████╔╝░██╔══╝░░██║░░██║')
  console.log('░░╚██╔╝░░███████╗╚█████╔╝')
  console.log('░░░╚═╝░░░╚══════╝░╚════╝░') ;}

 
  if(joueur=="plante"&&robot=="feux"|| joueur=="feux"&&robot=="eau"||joueur=="eau"&&robot=="plante"){console.log("Vous avez perdu!")
  poindurobot++;
  console.log('██╗░░░██╗██████╗░░█████╗░')
  console.log('╚██╗░██╔╝██╔══██╗██╔══██╗')
  console.log('░╚████╔╝░██████╔╝██║░░██║')
  console.log('░░╚██╔╝░░██╔═══╝░██║░░██║')
  console.log('░░░██║░░░██║░░░░░╚█████╔╝')
  console.log('░░░╚═╝░░░╚═╝░░░░░░╚════╝░');}

  console.log("Resulat :"+pointdujoueur+"--"+poindurobot);}

  if (pointdujoueur > poindurobot) {
    console.log("Félicitations ! Vous avez gagné !");
  } else if (pointdujoueur < poindurobot) {
    console.log("Désolé, vous avez perdu. Meilleure chance la prochaine fois !");
  } else {
    console.log("Le match est nul !");


 }}
playcard();
