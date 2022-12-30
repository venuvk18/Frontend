// Constructor
class Account{
    minBal=500;
    remBal=0;
    depositAmount(Amount){
        this.accBal=this.minBal+Amount;
    }
    constructor(a,b,c){
        this.id=a;
        this.name=b;
        this.age=c;

    }

}
let a1=new Account(1,'sai',20);
console.log(a1);
 let a2=new Account(2,'bye',30);
 console.log(a2);
 a1.depositAmount(100);
 console.log(a1);
 