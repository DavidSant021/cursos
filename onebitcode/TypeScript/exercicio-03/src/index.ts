interface GithubUserResponse {
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    message?: "Not Found"
}

interface GithubRepoResponse {
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}

const users: GithubUserResponse[] = []

async function fetchUser(userName: string) {
    const respose = await fetch(`https://api.github.com/users/${userName}`)
    const user = await respose.json()

    if(user.message) {
        alert('Usuário não encontrado!')
    } else {
        users.push(user)
    }

    alert(
        `O usuário ${user.login} foi salvo.\n` +
        `\nid: ${user.id}` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}`
    )
}

async function showUser(userName: string) {
    const user = users.find((user) => user.login === userName)

    if(typeof user === 'undefined') {
        alert('Usuário não encontrado!');
    } else {
        const respose = await fetch(user.repos_url)
        const repos: GithubRepoResponse[] = await respose.json()

        let message = `id: ${user.id}\n` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}\n`

        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
            `\nDescrição: ${repo.description}` +
            `\nEstrelas: ${repo.stargazers_count}` +
            `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
        })

        alert(message)
    }
}

function showAllUsers() {
    let message = 'Usuários:\n'

    users.forEach(user => {
        message += `\n- ${user.login}`
    })

    alert(message)
}

function showReposTotal() {
    const reposTotal = users.reduce((accum, user) => ( accum + user.public_repos ), 0)
    alert(`O grupo possui um total de ${reposTotal} repositórios públicos!`)
}

function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)
  
    let message = 'Top 5 usuários com mais repositórios públicos:\n'
  
    topFive.forEach((user, index) => {
      message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`
    })
  
    alert(message)
}

async function main() {
    await fetchUser('isaacpontes')
    await fetchUser('julianaconde')
    await fetchUser('pcaldass')
    await fetchUser('lucasqueirogaa')
    await fetchUser('frans203')
    await fetchUser('LeDragoX')
  
    await showUser('isaacpontes')
    await showUser('julianaconde')
  
    showAllUsers()
    showReposTotal()
    showTopFive()
}
  
main()