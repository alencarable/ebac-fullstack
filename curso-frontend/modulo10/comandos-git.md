## Commits

Informação de alteração
- após testado todo seu código
- git add * (adicionar todos os arquivos criados/alterados)
- git commit -m "mensagem"
- git push (enviar alterações para o repositório GitHub)
- git pull (puxar / trazer alterações do repositório para a máquina)

## GitFlow
Fluxo do Git

### Branchs
são ramificações / versões paralelas

- main / master (vai para produção, quando o projeto é publicado)
- develop (apenas para atividades de desenvolvimento, testes)
- DOD Definition of Done: critérios de aceite
- versionamento 0.1.10

git checkout -b dev (cria uma branch)
git checkout master (mudar de branch)


### Merge
Mescla de branchs
Você pode precisar resolver conflitos manualmente

git merge main

### Pull Requests
Mescla de branchs no repositório
Permite code review
O repositório resolve os conflitos automaticamente


### configuração do GitFlow

git flow init
git flow feature start {nome-da-feature}