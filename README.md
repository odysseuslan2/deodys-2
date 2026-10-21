# Conecta Digital
Modelo simples e prático de projeto de inclusão digital.

## Proposta
Promover autonomia no uso de celulares e computadores por meio de quatro oficinas presenciais de 60 minutos. Público: iniciantes, jovens, adultos e idosos. Turma piloto sugerida: 10 participantes, com um facilitador e um monitor.

## Justificativa
Dificuldades com dispositivos, arquivos e segurança podem limitar a comunicação e o acesso a oportunidades. O projeto oferece um primeiro contato acolhedor, com tarefas úteis e repetição orientada.

## Objetivos
- Reconhecer funções básicas do dispositivo e do navegador.
- Digitar e organizar uma mensagem simples.
- Identificar pedidos suspeitos de senha e conferir informações.
- Criar, salvar e localizar um arquivo.
- Fortalecer a confiança para continuar aprendendo.

## Como usar o código
1. Na página do repositório, clique em **Code → Download ZIP**.
2. Extraia o arquivo ZIP.
3. Abra **index.html** em um navegador atualizado.
4. Pratique! Não é necessário instalar bibliotecas, criar conta ou configurar servidor.

O GitHub exibe o código do HTML; para usar os botões, abra o arquivo baixado no navegador. A página funciona offline depois de baixada. A atividade com editor de texto depende de um editor disponível no dispositivo.

## O que a página oferece
- Quatro etapas com barra de progresso.
- Exercício de digitação com conferência da frase.
- Quiz de três perguntas sobre segurança com resultado e orientação.
- Tarefa de criação e localização de arquivo.
- Botão de impressão e guia do facilitador.
- Layout adaptável a celular, rótulos nos campos e navegação por teclado.

## Plano dos encontros
| Encontro | Tema | Atividade prática | Resultado esperado |
| --- | --- | --- | --- |
| 1 | Conhecer o dispositivo | Abrir navegador, ajustar volume e praticar toque ou mouse | Executar ações básicas |
| 2 | Digitação e comunicação | Copiar a frase e escrever uma mensagem fictícia com saudação, assunto e despedida | Produzir texto simples |
| 3 | Segurança digital | Responder ao quiz e discutir mensagens suspeitas | Explicar como proteger a conta |
| 4 | Organização de arquivos | Criar lista de compras, salvar, fechar e localizar | Encontrar o próprio arquivo |

Em cada encontro: acolhida (10 min), demonstração (15 min), prática (25 min) e revisão (10 min). Nas atividades de e-mail, use exemplos fictícios; não é necessário enviar mensagens nem criar contas.

## Recursos e custo
- Espaço com cadeiras, mesas e energia.
- Um dispositivo por participante ou dupla.
- Facilitador e monitor voluntários.
- Internet opcional para demonstrações externas; exercícios da página são offline.
- Papel e impressão opcionais.

O software não exige contratação de hospedagem ou serviços. Equipamentos, conexão, transporte e impressão devem ser orçados conforme a realidade local; este modelo não pressupõe que esses recursos sejam gratuitos.

## Acompanhamento
No início, pergunte quais tarefas cada pessoa já realiza. No final, registre de forma agregada:
- Quantos participaram dos quatro encontros.
- Quantos conseguiram digitar a frase.
- Quantos identificaram as três condutas seguras.
- Quantos salvaram e localizaram um arquivo.

Para cada tarefa, use: **sozinho / com ajuda / precisa praticar**. Meta piloto sugerida: pelo menos 8 dos 10 participantes concluírem três das quatro tarefas, com ou sem ajuda. A meta é proposta, não resultado já alcançado.

## Orientações de acolhimento
Use linguagem simples, respeite o ritmo de cada pessoa e permita repetição. Ajuste o zoom do navegador quando necessário. Demonstre, mas deixe o participante operar. Ofereça alternativas orais e apoio individual conforme as necessidades.

## Estrutura e personalização
Todo o projeto está em **index.html**:
- HTML: textos, formulários e atividades.
- CSS: cores, tamanho de fonte, layout e impressão.
- JavaScript: progresso, conferência e pontuação.

Para personalizar, edite os textos e as quatro etapas. Ao mudar a frase, mantenha o elemento com id `frase`; o JavaScript usa seu conteúdo como resposta. Ao mudar o quiz, mantenha os nomes `q1`, `q2` e `q3`, ou ajuste também a lista no código. A alternativa correta usa `value="certo"`.

## Privacidade e limites
Não há cadastro, envio de dados, rastreadores, banco de dados ou dependências externas. As respostas e o progresso permanecem apenas na página e são perdidos ao recarregar ou fechar. Não use senhas reais, CPF ou outros dados pessoais nos exercícios. O modelo não emite certificado nem substitui acompanhamento pedagógico.

## Verificação manual
1. Marque as quatro etapas: a barra deve chegar a 4 de 4.
2. Desmarque uma etapa: deve voltar a 3 de 4.
3. Digite a frase exata: deve aparecer a mensagem de acerto.
4. Digite outra frase: deve aparecer uma orientação para tentar novamente.
5. Responda o quiz com todas corretas e depois todas erradas: espere 3 de 3 e 0 de 3.
6. Tente enviar o quiz incompleto: o navegador deve solicitar as respostas.
7. Use Tab para percorrer os controles e confira a visualização de impressão.

Este roteiro permite validar o funcionamento no dispositivo usado nas oficinas.
