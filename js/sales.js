
dailyCookiePush = [];
function removr(){
var removeX = document.getElementsByTagName('span')[0];
var containerX = removeX.parentNode;
containerX.removeChild(removeX);
var addr = document.createElement('span');
};


var hours =['10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var shops =[];

function CookieShop(name, minCustomer, maxCustomer, avgCustomer) {
   this.name = name;
   this.minCustomer= minCustomer;
   this.maxCustomer=maxCustomer;
   this.avgCustomer=avgCustomer;
   this.hourlyCookies=[];
   this.dailyCookies = 0;
   shops.push(this);
   this.generateHourly();

};

CookieShop.prototype.generateRandom = function(min, max){
  return Math.random() * (max - min) + min;
};

CookieShop.prototype.generateHourly = function() {
  for (var i =0; i< hours.length; i++) {
    var cookie = Math.floor(this.avgCustomer *
    this.generateRandom(this.minCustomer, this.maxCustomer));
    this.hourlyCookies.push(cookie);
      }

     this.dailyCookies = this.hourlyCookies[0] + this.hourlyCookies[1] + this.hourlyCookies[2] + this.hourlyCookies[3] + this.hourlyCookies[4] + this.hourlyCookies[5] + this.hourlyCookies[6] + this.hourlyCookies[7];
     dailyCookiePush.push(this.dailyCookies);
     console.log(dailyCookiePush);

};



var pikePlace = new CookieShop('Pike Place', 17, 88, 5.2);
var seaTac = new CookieShop('SeaTac', 6, 44, 1.2);
var southLakeUnion = new CookieShop('South Lake Union', 11, 38, 1.9);
var bellevue = new CookieShop('Bellevue', 20, 48, 3.3);
var alki = new CookieShop('Alki', 3, 24, 2.6);



function tablr(){

  var tbl = document.createElement('table');
  var trXone = document.createElement('tr');
  var thXone = document.createElement('th');
  thXone.textContent = 'Location/Hours';
  trXone.appendChild(thXone);

  for (var i = 0; i<hours.length; i++) {
    var thXtwo = document.createElement('th');
    trXone.appendChild(thXtwo);
  }

      var thXthree = document.createElement('th');
      thXthree.textContent= 'Totals';
      trXone.appendChild(thXthree);


      tbl.appendChild(trXone);

  for (var i = 0; i<shops.length; i++) {
      var trXtwo = document.createElement('tr');
      var thXfour = document.createElement('th');
      thXfour.textContent = shops[i].name;
      trXtwo.appendChild(thXfour);

      for (var j = 0; j< hours.length; j++) {
       var tdXone = document.createElement('td');
       tdXone.textContent = shops[i].hourlyCookies[j];
       trXtwo.appendChild(tdXone);
      }

      var tdXtwo = document.createElement('td');
        tdXtwo.textContent = dailyCookiePush[i];
      trXtwo.appendChild(tdXtwo);
          for (var j = 0; j< hours.length; j++) {

      tbl.appendChild(trXtwo);

    document.getElementsByTagName('span')[0].appendChild(tbl);

  } }} ;

var handleCommentSubmit = function(event) {
  console.log(event);
  event.preventDefault();
  newShopList =[];
  userInput =[];

  userInput.unshift(event.target.name.value);
  userInput.unshift(parseInt(event.target.minCustomer.value));
  userInput.unshift(parseInt(event.target.maxCustomer.value));
  userInput.unshift(parseInt(event.target.avgCustomer.value));

console.log(userInput);
newShopList.unshift(userInput[4]);

userInput.reverse();
console.log(userInput);

var newShop = new CookieShop(userInput[0], userInput[1], userInput[2], userInput[3]);

console.log(newShop.avgCustomer);
console.log(newShop);
console.log(newShop.name);
console.log(newShop.hourlyCookies);
console.log(newShop.hourlyCookies[0]);

console.table(shops);

removr();
tablr();

event.target.name.value = null;
event.target.minCustomer.value = null;
event.target.maxCustomer.value = null;
event.target.avgCustomer.value = null

};

infoForm.addEventListener("submit", handleCommentSubmit);

tablr();
