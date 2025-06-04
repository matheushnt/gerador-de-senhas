const clipboard = new ClipboardJS('#copiar-senha');

clipboard.on('success', function (e) {
  alert('Senha copiada com sucesso!');
  e.clearSelection();
});

clipboard.on('error', function (e) {
  alert('Erro ao copiar a senha.');
});
