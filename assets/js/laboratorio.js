'use strict';
// Cada atividade altera apenas o conteúdo desta página.
const byId = id => document.getElementById(id);
const announce = (id, message) => { byId(id).textContent = message; };
byId('font').addEventListener('click', e => {
  const active = document.body.classList.toggle('large');
  e.currentTarget.setAttribute('aria-pressed', String(active));
});
byId('contrast').addEventListener('click', e => {
  const active = document.body.classList.toggle('contrast');
  e.currentTarget.setAttribute('aria-pressed', String(active));
});
const steps = [...document.querySelectorAll('[data-step]')];
steps.forEach(step => step.addEventListener('change', () => {
  const count = steps.filter(item => item.checked).length;
  byId('progress').value = count;
  announce('progress-text', count + ' de ' + steps.length + ' desafios concluídos. Progresso temporário.');
}));
byId('folders').addEventListener('submit', e => {
  e.preventDefault();
  const name = byId('folder-name').value.trim();
  if (!name || name.length > 40) {
    announce('folder-status', 'Use um nome de 1 a 40 caracteres.');
    return;
  }
  const item = document.createElement('li');
  item.className = 'folder';
  item.textContent = 'Pasta: ' + name + ' — vazia (simulação)';
  byId('folder-list').append(item);
  byId('folder-name').value = '';
  announce('folder-status', 'Pasta simulada criada. Nenhuma pasta foi criada no seu dispositivo.');
});
byId('file-type').addEventListener('submit', e => {
  e.preventDefault();
  announce('type-status', byId('type-answer').value === 'imagem'
    ? 'Correto! .svg é um formato de imagem vetorial. .txt é texto e .html é uma página web.'
    : 'Tente novamente: procure o arquivo com extensão .svg.');
});
byId('message').addEventListener('submit', e => {
  e.preventDefault();
  const subject = byId('subject').value.trim();
  const body = byId('body').value.trim();
  if (!subject || !body) {
    announce('message-status', 'Preencha assunto e mensagem com exemplos fictícios.');
    return;
  }
  byId('message-preview').textContent = 'Para: oficina@example.org\nAssunto: ' + subject + '\n\n' + body;
  announce('message-status', 'Prévia criada. Esta mensagem não foi enviada.');
});
byId('download').addEventListener('click', () => {
  const text = byId('notes').value.trim();
  if (!text) { announce('download-status', 'Escreva uma anotação fictícia antes de baixar.'); return; }
  const url = URL.createObjectURL(new Blob([text], {type:'text/plain;charset=utf-8'}));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'minha-anotacao.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  announce('download-status', 'Download solicitado. Procure minha-anotacao.txt na pasta de downloads do navegador.');
});
byId('print').addEventListener('click', () => window.print());
