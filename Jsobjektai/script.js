let restoranas = {
    name : "restoranas",
    seatTotal : 100,
    reserved : 0,
    reserveSeat: function(){
        if(this.seatTotal>this.reserved){
           restoranas.reserved=restoranas.reserved+1;
        }else{
            console.log("no more seats");
        }
        
    },
    reserveUndo: function(){
        if(this.reserved>0){
            restoranas.reserved=restoranas.reserved-1;
        }else{
            console.log("No reservation");
        }
        
    }
};
function Restoranas(name,seatTotal,reserved){
    this.name = name,
    this.seatTotal = seatTotal,
    this.reserved = reserved;
    this.reserveSeat = function () {
        if(this.seatTotal>this.reserved){
            restoranas.reserved=restoranas.reserved+1;
         }else{
             console.log("no more seats");
         }
    }
    this.reserveUndo = function () {
        if(this.reserved>0){
            restoranas.reserved=restoranas.reserved-1;
        }else{
            console.log("No reservation");
        }
    }
}

var restoranas1 = new Restoranas("Kebai",100,1);

