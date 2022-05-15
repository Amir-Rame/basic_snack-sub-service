const contact = `Contact us at:
    Tel: 933.232.4481
    Email: DrPicklesLittleTreats@drplt.com
    ZipCode: 351-699-420-8585

    CopyWrite reserved by 'Dr Pickle's little treats' Co
    Based in Colorado.`


export function renderContact(){
    const container = document.getElementById('container');
    let contactText = document.createElement('p');
    let section = document.createElement('div');
    contactText.innerText= contact;
    section.append(contactText);
    section.classList.add('contact');
    container.append(section);
}