$( document ).ready( readyNow );

const budget = 25000;

function readyNow(){
  // display budgetOut
  //target budgetOut by id
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
}//end readyNow
