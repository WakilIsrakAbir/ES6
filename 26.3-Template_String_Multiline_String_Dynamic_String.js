// 26.3-Template_String_Multiline_String_Dynamic_String.js

const firstName = "Wakil";
const lastName = 'Abir';

// template string
const aboutMe = `My name is ${firstName}`;
const giveMe = `give me money ${(10+20)*2+500}`
console.log(aboutMe);
console.log(giveMe);

function getCardHTML(name, price, description) {
    const div = `
        <div class="card">
            <h2> ${name.toUpperCase()} For Borolox</h2>
            <p> Price: ${price} </p>
            <p> ${description} </p>
        </div>
    `;
    console.log(div);
}

getCardHTML("iPhone", "100000", "this is the best camera phone ever");