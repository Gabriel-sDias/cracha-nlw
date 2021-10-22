let userLinks = {
  instagram: '_gabrieeldiias',
  facebook: 'none',
  twitter: 'bieeldiias_',
  github: 'Gabriel-sDias',
  youtube: 'none'
}

function changeUserLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/$
    {userLinks.[social] }`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
