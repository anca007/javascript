export module Test{
    export class Sport{
        public afficher(){
            console.log("Salut c'est moi !");
        }
    }
}

let sport : Test.Sport = new Test.Sport();
sport.afficher()
