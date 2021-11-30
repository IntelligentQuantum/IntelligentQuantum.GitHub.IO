// DiscordConnection

const DiscordID = "550013353171484682";
const URL = `https://persian-discord-api.herokuapp.com/user?id=${DiscordID}&json=true`;
const container = document.querySelector(".container");
const userAvatar = document.querySelector(".aside__user--image");
const userStatus = document.querySelector(".aside__user--status");

const DiscordConnection = async () => {
    try {
        const response = await axios.get(URL);

        userAvatar.src = response.data.userAvatar;
        userAvatar.alt = response.data.userName;

        switch (response.data.userPresence) {
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
    } catch (error) {
        console.error(error);
    }
}

DiscordConnection().then(() => {
    console.log('Discord Connection Function !')
});
setInterval(() => {
    DiscordConnection().then(() => {
        console.log('Discord Connection Function !')
    })
}, 1000 * 60 * 10);


// NavBar

const nav = document.querySelector(".nav");
const navHamburger = document.querySelector(".nav__hamburger");

navHamburger.addEventListener("click", () => {
    container.classList.toggle('navbarOpen');
    nav.classList.toggle('open');
    navHamburger.classList.toggle('open');
});
