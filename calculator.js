/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 var calculatorModule = function(){


    var memory = 0;
    var total = 0;

    return{

      load: function(n){

        if(typeof n !== 'number'){

          return 'Error';
        }
        total = n;
        return total;

      },

      getTotal: function(){
        return total;

      },

      add: function(n){
        
        total = this.getTotal() + n;
        memory = total;
        return total;

      },

      subtract: function(n){

          if(typeof n !== 'number'){

          return 'Error';
        }
        total = this.getTotal() - n;
        memory = total;
        return total;
      },

      multiply: function(n){

          if(typeof n !== 'number'){

          return 'Error';
        }
        
        total = this.getTotal() * n;
        memory = total;
        return total;

      },

      divide: function(n){
          if(typeof n !== 'number'){

          return 'Error';
        }
        total = this.getTotal() / n;
        memory = total;
        return total;

      },

      recallMemory: function(){

        return memory;

      },

      saveMemory: function(n){

        memory = total;
        return n;


      },

      clearMemory: function(){

        memory = 0;
      }






    };




 }



  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

