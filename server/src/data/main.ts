// const distanceInWordsToNow = require("date-fns/distance_in_words_to_now");
// import distanceInWordsToNow from "date-fns/formatDistanceToNow";
const jobs = require("../resources/jobs.json");
const experties = require("../resources/experties.json");
import repos from "./github";
// import distanceInWordsToNow from "date-fns";

// const myDate = new Date('2019-04-04');
// const dob= distanceInWordsToNow(this.myDate, { addSuffix: true, includeSeconds: false });

export default class Main {
  //   private readonly dob = distanceInWordsToNow(new Date());
  Basic = {
    name: "Abhin",
    company: "Honeywell",
    email: "reach2abhin@gmail.com",
    age: "",
    twitter: "https://twitter.com/PaiAbhin",
    github: "https://github.com/abhinpai/",
    instagram: "https://www.instagram.com/abhinpaihere/",
    jobs,
    repos,
    experties,
  };

  private static instance: Main;

  public static getInstance(): Main {
    if (!Main.instance) {
      Main.instance = new Main();
    }
    return Main.instance;
  }
}
