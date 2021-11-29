let DiscordID = "550013353171484682",
    userStatus = document.getElementById("aside__user--status"),
    userAvatar = document.getElementById("aside__user--image");


const DiscordConnection = async () =>
{
    try
    {
        const response = await axios.get('https://persian-discord-api.herokuapp.com/user?id=' + DiscordID + '&json=true');


        userAvatar.src = response.data.userAvatar;

        if (response.data.userPresence === 'dnd')
        {
            userStatus.classList.add('bg-red');
        }
        else if (response.data.userPresence === 'online')
        {
            userStatus.classList.add('bg-green');
        }
        else if (response.data.userPresence === 'offline')
        {
            userStatus.classList.add('bg-gray');
        }
    }
    catch (error)
    {
        console.error(error);
    }
}

DiscordConnection().then(() => { console.log('Discord Connection Function !') })
setInterval(() => { DiscordConnection().then(() => { console.log('Discord Connection Function !') }) }, 1000 * 60 * 10);
