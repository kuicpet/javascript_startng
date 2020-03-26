           const name = "Kingsley Umujeyan";
           console.log(name);
           let myCourses = ["Html","CSS","JavaScript","NodeJS"];
           console.log(myCourses);
           document.getElementById("name").innerHTML = name;
           document.getElementById("courses").innerHTML = myCourses;
           
           function even(){
                for( let i = 1;i <= 200;i++){
                    if(i % 2 === 0){
                   document.write(i + ' ');       
                    }
                };    
            };
            function odd(){
                for( let i = 1;i <= 200;i++){
                    if(i % 2 !== 0){
                    document.write(i + ' ');       
                    }
                };    
            };

            if(myCourses.length % 2 === 0){
                even();
            }else{
                 odd();
            };