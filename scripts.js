var calctax = new Vue({
  el: '#app',
  data: {
    minSalary:4173,
    taxESV:22,
    taxDFL:18,
    rateEN:20,
    revenue:500000,
    exmargin:20,
    realSalary:8000,
    employee:1,
    // taxEN:834.6,
    salaryX:4173,
    picked:'trade',
    rent:1000,
    otherExpenses:0,
    marginMess:[
      'это опт?',
      'розница',
      'базар',
      'спекулянт!',
      'вы торгуете наркотиками?'
    ],
    items: [
      { worker: '' }
    ]
    
  },
  methods:{
    profit: function() {
      if(this.picked === 'trade'){
        var a = this.revenue
        var b = this.exmargin
        var x = 1 + b/100
        return (a - a/x).toFixed(2)
      }
      else {
        return this.revenue
      }
      

    },
    marginMessage: function() {
      if(this.exmargin <= 19){return this.marginMess[0]}
        else if(this.exmargin <= 50){return this.marginMess[1]}
          else if(this.exmargin <= 100){return this.marginMess[2]}
            else if(this.exmargin <= 150){return this.marginMess[3]}
              else {return this.marginMess[4]}
    },
  expensesMonth: function() {
    var rent = +this.rent;
    var esv = +this.esv;
    var otherExpenses = +this.otherExpenses;
    var realSalary = +this.realSalary;
    var employee = +this.employee;
    var dfl = +this.dfl;
    var salary = +this.salary;
    var rent = +this.rent;
    var taxEN = +this.taxEN;
    var exp = rent + esv + otherExpenses + realSalary*employee + dfl + taxEN;
     // console.log(dfl )
     return exp.toFixed(2)
  },
  toggleWorker: function() {
      console.log(this.employee)
        // var input = document.getElementById('itemForm');
      var length =  this.items.length
      var newLength = this.employee
      console.log(length)
      if(newLength > length){
        this.items.push({
          worker:this.employee
        })
      }
      else if (newLength < length) {
        this.items.pop({
          worker:''
        })
      }
        
        
     
      
  }

  },
  computed: {

    salary:{
      get:function() {
        salaryX = this.minSalary
      return this.salaryX 
      },
      set:function(newValue) {
        // console.log(newValue)
        // console.log(this.salarySet)
      this.salaryX = newValue
      }, 
    }, 

   
    esv: function() {
      if (this.salary > this.minSalary) 
      return (this.employee*this.salary*this.taxESV/100).toFixed(2)
    else return (this.employee*this.minSalary*this.taxESV/100).toFixed(2)
    },
    esvFlp: function() {
      return (this.minSalary*this.taxESV/100).toFixed(2)
    },

    dfl: function() {
      if (this.salary > this.minSalary) 
      return (this.employee*this.salary*this.taxDFL/100).toFixed(2)
    else return (this.employee*this.minSalary*this.taxDFL/100).toFixed(2)
    },
    taxEN: function() {
      return this.minSalary*this.rateEN/100
    },
    expensesYear: function() {
      return (this.expensesMonth()*12).toFixed(2)
    },


    clearSum: function(){
      return (this.profit() - this.expensesYear).toFixed(0)
    },
    clearSumMonth: function(){
      return (this.clearSum/12).toFixed(0)
    }


  } 
}) 

// console.log('calctax = ' + calctax.picked)
// (salary*22/100*employee).toFixed(2)