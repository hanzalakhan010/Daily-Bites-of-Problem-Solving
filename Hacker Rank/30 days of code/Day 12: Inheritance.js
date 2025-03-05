
class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}
class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, identification,scores){
        super()
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
        this.scores = scores
        this.grade =''
    }
    calculate(){
        let sum = 0
        for (let ele of this.scores){sum+=ele}
        let average = sum/this.scores.length
        switch (true){
            case ((average<=100) && (average>=90)):return 'O'
            case ((average<=90) && (average>=80)):return 'E'
            case ((average<=80) && (average>=70)):return 'A'
            case ((average<=70) && (average>=55)):return 'P'
            case ((average<=55) && (average>=40)):return 'D'
            case (average<=40):return 'T'
        }
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
}