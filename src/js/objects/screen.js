const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome'}</h1>
                                            <p>${user.bio ?? 'Não possui uma biografia'}</p>                                        
                                            <ul class="user-follow">
                                                <li>Seguidores<br>${user.followers}</li>
                                                <li>Seguindo<br>${user.following}</li>
                                            </ul>
                                        </div>
                                      </div>`

        let repositoriesItens = ''

        user.repositories.forEach(repo => repositoriesItens += `<div class="repository-box">
                                                                    <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
                                                                    <div class="repository-info">
                                                                        <div class="repository-stat">
                                                                            <i class="fas fa-code-fork"></i>
                                                                            ${repo.forks_count}
                                                                        </div>

                                                                        <div class="repository-stat">
                                                                            <i class="fas fa-star"></i>
                                                                            ${repo.stargazers_count}
                                                                        </div>

                                                                        <div class="repository-stat">
                                                                            <i class="far fa-eye"></i>
                                                                            ${repo.watchers_count}
                                                                        </div>

                                                                        <div class="repository-stat">
                                                                            <i class="fas fa-code"></i>
                                                                            ${repo.language}
                                                                        </div>                                                                    
                                                                    </div>
                                                                </div>`)



        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += ` <div class="repositories section"> 
                                                <div class="repositories-title">
                                                    <h2>Repositórios</h2>
                                                </div>
                                                <ul class="repositories-content">
                                                    ${repositoriesItens}
                                                </ul>
                                            </div>`
        }

        if (user.events.length > 0) {
            let eventItens = ''
            user.events.forEach(event => {

                if (event.type === "PushEvent") {
                    eventItens += `<li><strong>${event.repo.name}</strong> - ${event.payload.commits[0].message}</li>`
                } else if (event.type === "CreateEvent") {
                    eventItens += `<li><strong>${event.repo.name}</strong> - Sem mensagem de
                    commit</li>`
                }

            })
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                           </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}



export { screen }