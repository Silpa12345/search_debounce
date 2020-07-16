//the result takes 3.59 seconds to be dispalyed
const debounce = (func, delay) => {
     let debounceTimer;
     return function (...args) {
          //   const context = this;
          //   const args = arguments;
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
               //    console.log(debounce);
               //    func.apply(context, args);
               func(...args);
          }, delay);
     };
};

var search = debounce(function () {
     const x = [1, 2, 3, 4, 5];
     if (1 in x) {
          console.log('Search successfull');
     } else {
          console.log('Search unsuccessfull');
     }
}, 3000);

//console.log(myfun());
search();
search();
search();
