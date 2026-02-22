import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json"
const date = moment().format();

// const markCommit = (x,y) => {
//     const date = moment()
//     .subtract(1, "y")
//     .add(1, "d")
//     .add(x, "w")
//     .add(y, "d")
//     .format();
// };
const git = simpleGit()
const makeCommit = (n) => {
    if(n==0) return git.push();
    const x = random.int(0, 54);
    const y = random.int(0, 6);
    const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format()


    const data = {
        date: date,
    };

    console.log(date);
    jsonfile.writeFile(path, data,()=>{
        git.add([path]).commit(date,{'--date':date}, makeCommit.bind(this, --n));
    });
};
makeCommit(700);