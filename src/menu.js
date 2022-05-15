import one from './assets/1.jpg'
import two from './assets/2.jpg'
import three from './assets/3.jpg'

const plans = {
    plan1:{
        name:'Morning Plan',
        pic:three,
        description:'A light, delicious and nutritious package to satisfy your gourmet taste. You can expect cakes, drinks, cookies, dried fruits, sugared fruits, flavored butter and etc...',
        price:'11.99$/month'
    },
    plan2:{
        name:'Noon Plan',
        pic:two,
        description:'An energizing, healthy and fat free package mostly consisting of dried fruits and vegetables, chocolate, rare processed sweats and cakes from all over the world and more.',
        price:'21.99$/month'
    },
    plan3:{
        name:'Night Plan',
        pic:one,
        description:'A fulfilling snack to keep your company. You can expect top quality snacks from rare drinks to traditional sweats, dried fruits and meat, mixtures, shakes and ice creams and more',
        price:'45.99$/month'
    }
}


export function renderMenu(){
    const container = document.getElementById('container');
    let planBox = document.createElement('div');
    planBox.classList.add('planBox');
    for(let item in plans){
        let section = document.createElement('div');
        section.classList.add('plan');
        let context = document.createElement('div');
        let picture = document.createElement('img');
        picture.src= plans[item].pic;
        let name = document.createElement('h3');
        name.innerText=plans[item].name;
        let description = document.createElement('p');
        description.innerText= plans[item].description;
        let pricing = document.createElement('h3');
        pricing.classList.add('pricing')
        pricing.innerText=plans[item].price + `
        Order now  ➤`;
        context.append(name,description)
        section.append(picture,context,pricing);
        planBox.append(section);
    }
    container.append(planBox);
}









