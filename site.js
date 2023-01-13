
      
      var morpion =  [];
      var nbcolonne = 3;
      var nbLigne = 3;
      var joueurEnCours = 1;
      var finJeu = false;
      var cases = document.querySelector("#grile div");
      const tour = document.querySelector("#tour");
      const alerte = document.querySelector(".alert");
      var counter = 0;
      console.log(alerte);
      /**
       * 
       * @param {*} nbLigne 
       * @param {*} nbcolonne 
       * @param {*} car 
       * @returns 
       */
      function initialiserTableauVide(nbLigne,nbcolonne,car=''){
                var tab =[];

                for(let i=0; i<nbLigne;i++){
                    var ligne =[];
                    for(let j=0; j<nbcolonne;j++){
                        ligne.push(car);
                    }
                    tab.push(ligne);
                }

            return tab;
        }

 
morpion = initialiserTableauVide(nbLigne,nbcolonne,0);

function jouerMorpion(id){
   var x = id.substr(0,1);
   var y = id.substr(2,1);
   var coup = document.getElementById(id);
 // console.log(morpion);
 // console.log("x"+x+" y"+y);
 //gererFin(morpion,joueurEnCours);
  

 if(!finJeu){
   
   
  if(joueurEnCours === 1){
    if(!morpion[x][y]){
      
    morpion[x][y]=1;
    counter++;
    if(checkWin(morpion,1)===1){
      console.log("joueur1 a gagné");
      gererFin();
    }
    var image ="<img src='./rond.png' style='width:100px;height:100px'/>";
    coup.innerHTML=image;
    joueurEnCours =2;
    tour.innerHTML="Tour du joueur 2";
    
    }
     
   }else {
    if(!morpion[x][y]){
     
      morpion[x][y]=2;
      counter++;
      if(checkWin(morpion,2)===1){
        console.log("joueur 2 a gagné");
        gererFin();
      }
      var image ="<img src='./croix.png' style='width:100px;height:100px'/>";
      coup.innerHTML=image;
      joueurEnCours =1;
      tour.innerHTML="Tour du joueur 1";
     
        }
    
    }
    if(counter===9){
      if(checkWin(morpion,1)===-1 || checkWin(morpion,2)===-1){
       
        gererFinNull();
      }
     }
    

   }


}

function  checkWin(morpion,player){

  for(let i=0;i<2;i++){
    if(morpion[i][0]===player && morpion[i][1]===player && morpion[i][2]===player){
      return 1;
    }
  }
  // Columns
  for (let i = 0; i < 3; i++) {
    if (morpion[0][i] === player && morpion[1][i]===player &&  morpion[2][i]===player) {
      return 1;
    }
  }

  if (morpion[0][0]=== player &&  morpion[1][1]===player &&  morpion[2][2] === player) {
    return 1;
  }
  if (morpion[0][2]=== player &&  morpion[1][1]===player && morpion[2][0]===player) {
    return 1;
  }


  return -1;
}


function gererFin(){
    var contentAlert ="Partie Terminée, le gagnant est Joueur " + joueurEnCours+"<br/>";
    contentAlert+='<button type="button" class="btn btn-secondary" onClick=reinitialiser()>Recommencez</button>' ;
    alerte.innerHTML=contentAlert;
    alerte.classList.remove("d-none");
    finJeu=true;
}
function gererFinNull(){
  var contentAlert ="Partie Terminée, Match Null!! "+"<br/>";
  contentAlert+='<button type="button" class="btn btn-secondary" onClick=reinitialiser()>Recommencez</button>' ;
  alerte.innerHTML=contentAlert;
  alerte.classList.remove("d-none");
  finJeu=true;
}



function reinitialiser(){

  var imgTags = document.getElementsByTagName("img");
  while (imgTags[0]) {
    imgTags[0].parentNode.removeChild(imgTags[0]);
  }

  tour.innerHTML="Tour du joueur 1";
  morpion = initialiserTableauVide(nbLigne,nbcolonne,0);
  counter=0;
  window.location.reload();

}


function removeAllImgTags() {
  var imgTags = document.getElementsByTagName("img");
  while (imgTags[0]) {
    imgTags[0].parentNode.removeChild(imgTags[0]);
  }
  
}

  



  
