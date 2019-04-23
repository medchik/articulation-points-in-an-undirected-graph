//==================================================================
//==================== input data that must given by user =======================
var matrix = [];
var nb_nodes ;
//===================================================================
//======================== var globales ============================

var marquer = new Array();
var marquer1 = new Array();
var marquer2 = new Array();
var ensemble = new Set();
//==================================================================


//=========================== initialisation ========================
function initialiser(){
  for(var i=0; i<nb_nodes; i++) {
      ensemble.add(i);
  }
}

//========================== DFS ======================
function dfs(i) {
   marquer.push(i);
  for (var j=0 ; j<nb_nodes ; j++)
  {
    if(matrix[j][i]==1 && marquer.includes(j)==false && ensemble.has(j))
    {
      dfs(j);
    }
  }

}
//=============================== checks equality between 2 Sets =============
function eqSet(as, bs) {
    if (as.length !== bs.length) return false;
    for(var i =0 ; i< as.length ; i++){
      if(as[i]!=bs[i]) return false;
    }
    return true;
}

//============================== solution function ====================
function sol(){


  var resultat = new Set();

  for(var i=0 ; i<nb_nodes ; i++) // complexity O(n^3)
  {
    initialiser();
    marquer = new Array();
    marquer1= new Array();
    marquer2= new Array();
    dfs(i);
    marquer1 = marquer.splice(0,marquer.length);      // copy marquer in marquer 1
    marquer1.splice(0,1);                             // because dfs make marquer.add(i)
    ensemble.delete(i);                               // we remove the node
    marquer = new Array();
    dfs(marquer1[0]);
    marquer2 = marquer.splice(0,marquer.length);     // copy marquer in marquer 2
    if(!eqSet(marquer1 , marquer2)) // complexity O(n)
    {

        resultat.add(i);

    }

  }
  return resultat;
}

//============================= TEST ==========================================
nb_nodes =14 ;
matrix = [
  [0,1,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,0,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,0,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,1,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,0],

]

var res = sol();
console.log("the articulation points are : ");
console.log(res);
