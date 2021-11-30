// DiscordConnection
const DiscordID = "550013353171484682";
const URL = `https://persian-discord-api.herokuapp.com/user?id=${DiscordID}&json=true`;
const container = document.querySelector(".container");
const userAvatar = document.querySelector(".aside__user--image");
const userStatus = document.querySelector(".aside__user--status");

const DiscordConnection = async () =>
{
    try
    {
        const response = await axios.get(URL);

        userAvatar.src = response.data.userAvatar;
        userAvatar.alt = response.data.userName;

        switch (response.data.userPresence)
        {
            case 'dnd':
                userStatus.classList.add('bg-red');
                break;
            case 'online':
                userStatus.classList.add('bg-green');
                break;
            case 'idle':
                userStatus.classList.add('bg-yellow');
                break;
            case 'offline':
                userStatus.classList.add('bg-gray');
                break;
            default:
                userStatus.classList.add('bg-gray');
        }
    }
    catch (error)
    {
        console.error(error);
    }
}

DiscordConnection().then(() =>
{
    console.log('Discord Connection Function !')
});
setInterval(() =>
{
    DiscordConnection().then(() =>
    {
        console.log('Discord Connection Function !')
    })
}, 1000 * 60 * 10);

// NavBar
const nav = document.querySelector(".nav");
const navHamburger = document.querySelector(".nav__hamburger");

navHamburger.addEventListener("click", () =>
{
    container.classList.toggle('navbar-open');
    nav.classList.toggle('open');
    navHamburger.classList.toggle('open');
});

// Auto write
class TypeWriter
{
    constructor(textElement, words, wait = 3000)
    {
        this.textElement = textElement;
        this.words = words;
        this.text = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type()
    {
        // Current index of word
        const current = this.wordIndex % this.words.length;

        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting)
        {
            // Remove character
            this.text = fullTxt.substring(0, this.text.length - 1);
        }
        else
        {
            // Add character
            this.text = fullTxt.substring(0, this.text.length + 1);
        }

        // Insert text into element
        this.textElement.innerHTML = `<span class="build__cursor">${this.text}</span>`;

        // Initial Type Speed
        let typeSpeed = 150;

        if (this.isDeleting)
            typeSpeed /= 3;

        // If word is complete
        if (!this.isDeleting && this.text === fullTxt)
        {
            // Make pause at end
            typeSpeed = this.wait;

            this.isDeleting = true;

            // Pause before start typing
            typeSpeed = 500;
        }
        else if (this.isDeleting && this.text === '')
        {
            this.isDeleting = false;

            // Move to next word
            this.wordIndex++;

            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init()
{
    const textElement = document.querySelector('.build');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');

    new TypeWriter(textElement, words, wait);
}
