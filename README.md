# Github-Actions-engenharia-de-software

## Sobre o Projeto

Este trabalho foi desenvolvido com o objetivo de estudar e compreender o funcionamento do GitHub Actions, uma ferramenta de automação integrada ao GitHub amplamente utilizada em práticas DevOps. A proposta da atividade consistiu em explorar seus principais recursos, entender seu funcionamento e aplicar seus conceitos em um projeto prático.

Para a demonstração, utilizamos uma calculadora desenvolvida com HTML, CSS e JavaScript. O foco do projeto não foi a complexidade da aplicação, mas sim compreender como o GitHub Actions pode automatizar tarefas dentro de um repositório, permitindo a execução de processos sempre que determinados eventos ocorrerem.

Durante o desenvolvimento, buscamos entender conceitos fundamentais como workflows, eventos, jobs, steps e integração contínua (CI), observando na prática como a automação pode contribuir para tornar o desenvolvimento de software mais organizado, eficiente e confiável.

### Integrantes
- Arthur Garcez de Moraes Carvalho​
- Felipe Martins Sudré
- João Victor Olivera dos Santos
- Lucas Cardos Marinho
- Mateus Santana Machado
- Márcio Ribeiro da Costa Junior
- Pedro Arthur Souza Napp
---


## Como surgiu o GitHub Actions
O GitHub Actions é uma ferramenta desenvolvida pelo GitHub para automatizar tarefas relacionadas ao desenvolvimento de software. Ela foi anunciada em versão beta em outubro de 2018 e disponibilizada oficialmente para todos os usuários da plataforma em novembro de 2019.
Seu surgimento ocorreu devido à crescente necessidade de integrar práticas DevOps diretamente aos repositórios GitHub, permitindo que desenvolvedores automatizassem processos como compilação, testes e deploy sem depender de ferramentas externas.
Atualmente, o GitHub Actions é uma das principais ferramentas de CI/CD do mercado, sendo amplamente utilizado em projetos de diferentes portes.





### O que é GitHub Actions?

O GitHub Actions é a plataforma de automação e integração contínua (CI/CD) do GitHub. Ele permite automatizar tarefas dentro do ciclo de desenvolvimento de software diretamente no repositório.

Com ele, é possível criar fluxos de trabalho (workflows) que são executados automaticamente a partir de eventos como:

- push (envio de código)
- pull requests
- releases
- execução manual ou agendada



###  Como ele funciona

O GitHub Actions funciona através de arquivos YAML localizados no repositório:

```
.github/workflows/
```

Esses arquivos definem:
- quando a automação será executada
- o que será executado
- em qual ambiente será executado



##  Exemplo pratico

Quando ocorre um `push` no repositório, o GitHub Actions pode automaticamente:

- executar testes
- validar o código
- gerar builds
- executar outras automações configuradas

---

##  Principais Componentes do GitHub Actions

O GitHub Actions é formado por alguns elementos principais que juntos compõem a automação.



###  Workflow (Fluxo de trabalho)

É o processo automatizado criado dentro do GitHub Actions.

Ele é definido em arquivos YAML dentro da pasta:

```
.github/workflows/
```

O workflow define:
- quando ele vai rodar  
- o que ele vai executar  



###  Events (Eventos)

São ações que iniciam o workflow.

Exemplos:
- `push`
- `pull_request`
- `workflow_dispatch`

Exemplo:

```yaml
on:
  push:
    branches:
      - main
```

 O workflow executa sempre que houver um push na branch main.



###  Jobs (Trabalhos)

São blocos de tarefas dentro do workflow.

Exemplos:
- build
- testes

Podem rodar:
- em paralelo
- ou em sequência  



###  Steps (Passos)

São as tarefas dentro de um job.

Exemplos:
- baixar código
- instalar dependências
- rodar testes  



###  Actions (Ações)

São comandos prontos criados pela comunidade ou pelo GitHub.

Exemplo:

```yaml
uses: actions/checkout@v4
```

Baixa o código do repositório automaticamente.



###  Runners (Executores)

São as máquinas que executam os workflows.

O GitHub fornece ambientes como:
- Ubuntu
- Windows
- macOS

Também é possível configurar runners próprios (Self-hosted Runners).



##  Execução do Projeto 

###  Execução Local
O projeto não requer instalação de dependências.

Basta abrir o arquivo `index.html` no navegador.



##  Integração com GitHub Actions

O GitHub Actions foi utilizado para automatizar tarefas dentro do repositório.

Sempre que ocorre um `push` na branch main, o workflow é executado automaticamente.

### Exemplo:
```yaml
on:
  push:
    branches:
      - main
```

---

##  Workflow Implementado

O workflow foi criado para validar automaticamente a estrutura do projeto sempre que ocorre um push na branch `main`.

A seguir estão as etapas principais do workflow:



###  Download do código do repositório

```yaml
- name: Baixar código do repositório
  uses: actions/checkout@v4

```
Esse passo utiliza a action oficial actions/checkout@v4, responsável por baixar uma cópia do repositório para a máquina virtual do GitHub Actions, permitindo que as próximas etapas tenham acesso aos arquivos do projeto.

### Instalação do Node.js
```yaml
- name: Instalar Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 22
```
Essa etapa instala e configura o ambiente Node.js na versão 22, possibilitando a execução de comandos JavaScript durante o workflow.

### Verificação dos arquivos do projeto
```yaml
- name: Verificar index.html
  run: |
    if [ -f index.html ]; then
      echo "✓ index.html encontrado"
    else
      echo "❌ ERRO: O arquivo index.html não foi encontrado."
      exit 1
    fi
```
Esse trecho verifica se o arquivo index.html está presente no repositório. Caso o arquivo não seja encontrado, o workflow é interrompido e uma mensagem de erro é exibida. O mesmo processo é realizado para os arquivos style.css e script.js.

### Validação da sintaxe JavaScript
```yaml
- name: Verificar sintaxe do JavaScript
  run: node --check script.js
```

O comando node --check analisa o arquivo script.js em busca de erros de sintaxe, garantindo que o código JavaScript esteja estruturado corretamente.

### Exibição dos resultados

Durante toda a execução, o GitHub Actions gera logs automáticos contendo mensagens de sucesso ou falha para cada etapa do workflow, auxiliando na identificação de erros e no monitoramento da execução.

## Logs e Outputs

O GitHub Actions gera logs automáticos contendo:

- etapas executadas  
- status dos jobs  
- erros (caso existam)  
- tempo de execução  

Esses logs podem ser visualizados na aba **Actions** do GitHub.

---

##  Configuração Básica

O workflow foi configurado na pasta:

```
.github/workflows/
```

Ele define:
- eventos de disparo  
- jobs  
- steps  



##  Integração com Outros Serviços

O GitHub Actions pode ser integrado com:

- Vercel  
- Netlify  
- APIs externas  
- ferramentas de CI/CD  



## Dificuldades Enfrentadas

- poucos membros tinham experiência com GitHub Actions  
- dificuldade com estrutura YAML  
- entendimento de workflows e jobs  
- organização do repositório  
- diferenças no nível de participação e interesse entre os integrantes da equipe, o que exigiu maior comunicação e coordenação do grupo.


## Limitações do GitHub Actions

Apesar de ser uma ferramenta poderosa para automação e CI/CD, o GitHub Actions possui algumas limitações, como:

- Dependência da infraestrutura do GitHub para execução dos workflows;
- Limitações de tempo e recursos em runners hospedados;
- Necessidade de configuração adicional para pipelines mais complexos;
- Possíveis dificuldades de debug em workflows mais extensos;
- Não substitui completamente testes locais ou ambientes de staging dedicados.

Essas limitações mostram que, apesar de eficiente, o GitHub Actions deve ser utilizado de forma complementar dentro de uma arquitetura de desenvolvimento de software.

##  Conclusão

O GitHub Actions é ideal para:

- automação de processos  
- integração contínua (CI)  
- testes automáticos  
- deploy automatizado  

Ele é mais indicado para projetos colaborativos e sistemas que precisam de automação frequente no desenvolvimento.

---

## Referencias

### Documentação oficial
- GitHub Actions: https://docs.github.com/actions  

### Materiais do projeto
- Guia de uso do GitHub Actions (grupo): https://docs.google.com/document/d/1iBW1Y3v_JfQ8uyOvIQyD9j4DTzrVnPD9E7LJ937Cr9U/edit?usp=sharing  

### Ferramentas de apoio
- ChatGPT (OpenAI), utilizado como apoio para estudo, revisão e esclarecimento de dúvidas durante o desenvolvimento do projeto.

### Estrutura e organização
- Guia utilizado como referência para estruturação de README em projetos DevOps: https://github.com/Guia-Devops-Iniciante/Readme

## Links Úteis
### Demonstração do Projeto
- Slides da apresentação: https://1drv.ms/p/c/346abb8970c57c4d/IQB0jxHCvkTFQ6e_7CS706nXARK2n5TgCMCqq_5IcZZyhsQ?e=VttpW7
---

