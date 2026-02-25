
======== Npm install ========
Para instalar um pacote do npm, acessar o site www.npmjs.com e ao localizar e acessar o pacote desejado terá ao lado direito uma linha de instalação para ser digitado no terminal.

pacote de exemplo:
npm i nome-do-pacote
=============================

======== Npm uninstall ========
Para desinstalar um pacote do npm, basta digitar no terminal.

exemplo:
npm uninstall nome-do-pacote
=============================

======== .gitignore ========
O .gitignore é um arquivo usado no Git para dizer quais arquivos ou pastas não devem ser enviados para o repositório.

Dentro dele, pode especificar, por exemplo, que a pasta node_modules deve ser ignorada. Para isso, basta adicionar a seguinte linha no arquivo .gitignore:

node_modules/
=============================

======== package-lock.json ========
O package-lock.json é um arquivo criado automaticamente pelo npm para registrar as versões exatas das dependências instaladas no projeto.

Ele garante que, ao executar npm install, todas as pessoas (ou ambientes) instalem exatamente as mesmas versões de pacotes, evitando diferenças e possíveis erros entre máquinas.
=============================

======== restore ========
Para recuperar as dependências do projeto, basta executar no terminal o comando:

npm install

Esse comando irá instalar as dependências listadas no package.json e utilizar o package-lock.json para garantir que as versões exatas sejam instaladas, mantendo consistência no projeto.
=============================