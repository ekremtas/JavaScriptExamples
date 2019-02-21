const name = "Ekrem";
const Surname = "Taş";
const Age = 20;

const a = "Ad: " + name + "\nSoyad: " + Surname + "\nYaş: " + Age ; 

console.log(a);

console.log("\n");
const b =`Ad:${name}\nSoyad:${Surname}\nYaş${Age}`;

console.log(b);

const html =    "<ul>" +
                    "<li>"+name+"</li>" +
                    "<li>"+Surname+"</li>" +
                    "<li>"+Age+"</li>" +
                "</ul>"
                ;

document.body.innerHTML = html;

function ekrem() {
    console.log(1453);
    return "İstanbulun fethi";
    
};

const html_template_literal =   `<ul>
                                        <li>${name}</li>
                                        <li>${Surname}</li>
                                        <li>${Age}</li>
                                        <li>${10/4}</li>
                                        <li>${ekrem()}</li>


                                </ul>`;

document.body.innerHTML = html_template_literal;