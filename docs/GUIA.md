# Guia da versão ampliada
## Estrutura
| Pasta ou arquivo | Função |
| --- | --- |
| index.html | Oficinas iniciais, digitação e quiz |
| paginas/laboratorio.html | Laboratório de pastas, arquivos, mensagens e download |
| assets/css/portal.css | Estilos responsivos, impressão, contraste e fonte |
| assets/js/laboratorio.js | Interações sem dependências |
| assets/img/aprender.svg | Ilustração vetorial de aprendizagem |
| assets/img/arquivos.svg | Ilustração vetorial de organização |
| materiais/exercicio.txt | Roteiro para baixar e praticar |
| docs/GUIA.md | Orientação técnica e pedagógica |

## Execução
Baixe o ZIP do repositório e extraia tudo. Abra index.html e siga o link para o laboratório. Preserve as pastas: mover apenas o HTML quebra os caminhos de CSS, JavaScript e imagens. Não exige npm, servidor, banco de dados nem internet após baixar.

## Aplicação
Mantenha as quatro oficinas do README. No encontro 2, use o simulador de mensagem; no encontro 4, use criação de pasta simulada e download. Reserve tempo para repetir no gerenciador real do dispositivo. A simulação nunca cria pastas reais.

## Personalização
Edite textos em paginas/laboratorio.html, cores em assets/css/portal.css e comportamentos em assets/js/laboratorio.js. Preserve os ids usados pelo JavaScript. As imagens SVG são desenhos em código próprios deste exemplo, sem fotos de participantes e sem fontes externas.

## Privacidade
Dados existem apenas na memória da página. Não há persistência, upload, envio de e-mail ou análise de uso. O download é iniciado pelo participante, e o arquivo permanece no dispositivo até ser removido por ele. Em computadores compartilhados, use dados fictícios e confira a pasta de downloads ao finalizar.

## Verificação no dispositivo da oficina
- Abra o laboratório e confira as duas imagens.
- Crie duas pastas simuladas e confirme que a página informa a simulação.
- Insira caracteres como < e > no nome: devem aparecer como texto.
- Escolha uma resposta errada e uma correta no exercício de extensão.
- Monte uma mensagem e confira assunto e corpo, sem envio.
- Baixe uma anotação, abra o TXT e confira acentos e quebras de linha.
- Teste os quatro marcadores, fonte ampliada, contraste e impressão.
- Recarregue e confirme que respostas e progresso foram limpos.
- Confira navegação por Tab e tela estreita.

## Limites
O progresso não é salvo. O simulador não opera o sistema de arquivos real. A opção de download em navegadores móveis pode abrir uma prévia em vez de salvar diretamente. Não há certificação automática.
