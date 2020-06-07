"use strict"
        function Student(firstName, secondName, age, marks) {
            this.firstName = firstName;
            this.secondName = secondName;
            this.age = age;
            this.marks = marks;
            this.isPresent = new Array(25);
            this.score = 0;
        }


        Student.prototype = {

            constructor: Student,
            
            present : function() {
                if(this.score < this.isPresent.length) {
                    this.isPresent[this.score++] = true;
                }
            },
            abent : function() {
                if(this.score < this.isPresent.length) {
                    this.isPresent[this.score++] = false;
                }    
            },

            getAverageMarks : function() {
                return this.marks.reduce((acc, current) => {
                    return acc + current;
                }) / this.marks.length;
            },

            getAge : function() {
                return this.age;
            },

            getSummary : function() {
                let lesson = 0;
                let visit = 0;
                this.isPresent.forEach(elem => {
                    if(elem !== null) {
                        lesson++;
                        visit += elem;
                    }
                });
                
                let averageVisit = visit / lesson;
                let averageMark = this.getAverageMarks();
                if(averageVisit > 0.9 && averageMark > 90) {
                    return 'Молодец';
                } else if (averageVisit > 0.9 || averageMark > 90) {
                    return 'Норм';
                } else {
                    return 'Можешь лучше';
                }
            }
        }

        Student.prototype.constructor = Student;
                  

        let student1 = new Student('Vlad', 'Gorin', 65, [75, 70, 7]);
        let student2 = new Student('Ira', 'Drobyszava', 24, [90, 95, 97]);

        
        student1.present();
        student1.present();
        student1.present();
        student1.present();
        student1.abent();

        student2.present();
        student2.present();
        student2.present();
        
        console.log(student1.getSummary());
        console.log(student1.getAge());
        console.log(student2.getSummary());
        console.log(student2.getAge());



        
