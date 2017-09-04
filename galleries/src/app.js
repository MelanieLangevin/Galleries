// export interface IQuote {
//   quote: string;
//   author: string;
// }

export class App {
  // quotes: IQuote[];

  constructor() {
    this.message = "Jean Racine";

    this.alan1 = {
      quote: "Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
      author: "Alan Turing"};
    const louisXVI = {
      quote: "Le peuple veut pas seulement du pain, il veut aussi le pouvoir.",
      author: "Louis XVI de France"};
    const alan2 = {
      quote: "Those who can imagine anything, can create the impossible",
      author: "Alan Turing"};
    const vendetta1 = {
      quote: "People shouldn't be afraid of their government. Governments should be afraid of their people.",
      author: "Alan Moore, V for Vendetta"};
    const vendetta2 = {
      quote: "Behind this mask there is more than just flesh. Beneath this mask there is an idea... and ideas are bulletproof.",
      author: "Alan Moore, V for Vendetta"};
    const vendetta3 = {
      quote: "Love your rage, not your cage.",
      author: "Alan Moore, V for Vendetta"};
    const vendetta4 = {
      quote: "The past can t hurt you anymore, not unless you let it.",
      author: "Alan Moore, V for Vendetta"};
    const vendetta5 = {
      quote: "My mother said I broke her heart...but it was my integrity that was important. Is that so selfish? It sells for so little, but it\'s all we have left in this place. It is the very last inch of us...but within that inch we are free.",
      author: "Alan Moore, V for Vendetta"};
    this.quotes = [this.alan1, alan2, louisXVI, vendetta1,vendetta2,vendetta3,vendetta4, vendetta5];
  }
}
