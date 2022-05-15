
import elon from './assets/elon.jpg'
import jeff from './assets/jeff.jpg'
import bill from './assets/bill.jpg'

const articles = {
    article1:{
        name:'Elon Tusk',
        pic:elon,
        opinion:'Pickle\'s little treats is one of a kind weekly snack delivery service. snacks are hand selected from a wide variety of delicacies from many countries around the world. each snack box has a theme such as seasons, regions, events or even people and so they would never get boring'
    },
    article2:{
        name:'Jeff Blows',
        pic:jeff,
        opinion:'All i need to preserve my sanity over the maddening pandemic was Pickle\'s little treats. i cant believe how they elevated my emotional atmosphere. each snack comes with a detailed story and guide book about the snack and its origins. they even have a vegetarian plan which suits my taste the best. You\'ll never regret your subscription'
    },
    article3:{
        name:'Bill Walls',
        pic:bill,
        opinion:'How to fix a sad rainy friday? You gotta get your own Pickle\'s little treat box. A top-notch gathering of high-quality snacks delivered to your doorstep weekly! They offer multiple subscription plans with easy cancellation process. You can even rate your snack boxes and it would adapt the snacks to be more likely to your likings. no puns intended XD'
    }
}

export function renderHome(){
    const container = document.getElementById('container');
    for(let item in articles){
        let section = document.createElement('div');
        section.classList.add('opinion');
        let context = document.createElement('div');
        let picture = document.createElement('img');
        picture.src= articles[item].pic;
        let name = document.createElement('h3');
        name.innerText=articles[item].name + ' :';
        let opinion = document.createElement('p');
        opinion.innerText= articles[item].opinion;
        context.append(name,opinion)
        section.append(picture,context);
        container.append(section);
    }
}



























