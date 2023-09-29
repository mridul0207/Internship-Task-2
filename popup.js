const profiles = [
                        'https://www.linkedin.com/in/alakh-pandey-4baaa8227/',
                        'https://www.linkedin.com/in/devesh-mishra-2aa711105/',
                        'https://www.linkedin.com/in/abhishek-mishra-5412a5241/'
                  ]

const button = document.getElementById("button")
const para = document.getElementById("para")
button.addEventListener("click", async() => {
for(const profile of profiles){
  const tab = await chrome.tabs.create({ url: profile, active: false });
  await new Promise(resolve => setTimeout(resolve, 10000));
  await chrome.tabs.sendMessage(tab.id, {action : 'fetch-detail'}, 
  async(response) => 
    {
      para.innerText += `${response.name}'s data posted to db\n`
      await fetch("http://localhost:4000/",{
      method:"POST",
      mode:"no-cors",
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:JSON.stringify({
        name:await response.name,
        url:profile,
        text:await response.text,
        location:await response.location,
        followers:await response.followers,
        connections:await response.connections
      })
    })
    }
  )
  await chrome.tabs.remove(tab.id);
}
});