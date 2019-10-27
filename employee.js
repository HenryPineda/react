

    // const employee = {

    //     name: 'Max'
    // }

    class Humano {

        constructor(gender){
    
            this.gender = gender
        }
    
        printGender() {
    
            console.log(this.gender)
        }
    }
    
    
    class Persona extends Humano {
    
        constructor(name, gender){
    
            super(gender)
    
            this.name =name
        }
    
        printName() {
            
            console.log(this.name)
        }
    }
export default Persona