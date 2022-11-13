//Weather-App 11
    // features to make it easier to work with objects (creating objects or accessing properties on an object)

    // Object Property shorthand
        const name = `Vansh`;
        const userAge = 19;

        const user = {
            // name: name,
            name, // when the name used for the property & value (i.e. variable_name used) are same, we can use this
            age: userAge,
            location: `Mumbai`
        }

        console.log(user);

    // Object destructuring
        // useful when you've an object and you're trying to access properties from it
        const product = {
            label: `NoteBook`,
            price: 100,
            stock: 2500,
            salePrice: undefined
        }

        // const label = product.label;
        // const stock = product.stock;

        // make a new const variable named exactly the same name as in property of the object
            // const {label, stock, rating} = product
            // console.log(label);
            // console.log(stock);
            // console.log(rating); // will give undefined, since we dont have a property called rating

        // make a new const variable named something different but taking a specific property (of different name) value from the object
            // const {label:productLabel, stock, rating} = product
            // console.log(productLabel);
            // console.log(stock);
        // helpful when we already have a "label" variable in the program & we can't use that down here, but we still wanna use destructuring

        // we can assign a value to the new variable made from destructuring if that variable is not defined in the object
            // const {label:productLabel, stock, rating = 5} = product
            // console.log(productLabel);
            // console.log(stock);
            // note: if the variable is defined in the object then it'll use that value, even if you try to give a new value to the variable here

        // how we can use the above methods within a function
            // 1)
            // const transaction = (type, myProduct) => {
            //     const {label, stock} = myProduct
            //     console.log( type, label, stock);
            // }
            
            // transaction(`order`,product)

            // 2) more efficient way
            // here we'll have access to just the values we choose to destructure
            const transaction = (type, {label, stock}) => {
                console.log( type, label, stock);
            }
            
            transaction(`order`,product)
        
        
