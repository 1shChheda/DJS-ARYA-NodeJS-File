    /* const square = function(x){
        return x*x;
    } */

// Use of Arrow Function
    /* const square = (x) => {
        return x*x;
    } */

    /* const square = (x) => x*x; // when the function has only one code statement inside it

    console.log(square(3)); */

// Arrow Functions as Properties on an Object

    const event = {
        name: `Birthday Party`,
        guestList: [`Vansh`,`Saurin`,`Harsh`,`Darshil`,`Kimaya`],
        printGuestList: function(){
            console.log(`Guest List for ` + this.name); // we have access to this Object vis `this` binding {i.e. `this` means this Object along with everything inside it}
            this.guestList.forEach((guest) => {
                console.log(guest + ` is attending ` + this.name); // standard functions are going to have their own `this` bindings (that's why undefined & that's why we use arrow functions)
            })
        }
        /* printGuestList: () => {
            console.log(`Guest List for ` + this.name); // arrow functions avoid `this` binding (OUTPUT:  Guest List for undefined)
        } */
    }
    // so, Arrow Functions aren't well suited for methods, properties that are functions when we want to access 'this'

    event.printGuestList();



