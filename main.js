let githubUser = window.prompt('Digite o seu usuario github', 'ex: Whoj01')
if (githubUser == null || githubUser == ` `) {
  githubUser = `Whoj01`
}

const linksSocialMedia = {
  github: githubUser,
  youtube: 'UC4cuG3KdcG3Fy8hNPVTocdg',
  facebook: 'josue.dias.92560281',
  instagram: 'jd_netoo',
  twitter: 'Whojosue'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })

  //
}

getGitHubProfileInfos()
