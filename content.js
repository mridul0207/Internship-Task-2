chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if(request.action == 'fetch-detail')
    {
        const name =document.getElementsByClassName('text-heading-xlarge inline t-24 v-align-middle break-words');
        const text =document.getElementsByClassName('text-body-medium break-words');
        const location =document.getElementsByClassName('text-body-small inline t-black--light break-words');
        const followers = document.getElementsByClassName('t-bold');
        const compName =await name[0].innerText;
        const compText =await text[0].innerText;
        const compLocation = await location[0].innerText;
        const compFollowers = await followers[0].innerText;
        var compConnections = await followers[1]?.innerText;
        if(!compConnections)
        compConnections = 0;
        console.log(name,text);
        const data = {name:compName,text:compText,location:compLocation,followers:compFollowers,connections:
        compConnections};
        sendResponse(data);
    }
});