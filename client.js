$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function addPurchase(){
  // get user imput create new Object
  let newPurchase = {
    name: $( '#purchaseNameIn' ).val(),
    price: $ ( '#purchasePriceIn' ).val()
  }
  //push new purchase into the array
  purchases.push( newPurchase );
  //empty inputs
  $( '#purchaseNameIn' ).val( '' );
  $ ( '#purchasePriceIn' ).val( '' );
  //calculate remaingBudget
} // end addPurchase

function readyNow(){
  // display budgetOut
  //target budgetOut by id
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  // handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase );
}//end readyNow
