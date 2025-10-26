# Configuração Google Sheets - Newsletter do Blog

Este guia explica como conectar o formulário de newsletter da página Blog à sua planilha do Google Sheets.

## Pré-requisitos

- Conta Google
- Planilha Google Sheets criada
- Link da planilha: https://docs.google.com/spreadsheets/d/1B6eAo8L8H5T5W620W3QQvDgMmndfq0KHxIpjW28bhmI/edit

## Passo 1: Preparar a Planilha

1. Acesse sua planilha do Google Sheets
2. Certifique-se de que a primeira linha contém os cabeçalhos:
   - Coluna A: `Timestamp`
   - Coluna B: `Email`

## Passo 2: Criar o Google Apps Script

1. Na planilha, clique em **Extensões** → **Apps Script**
2. Apague o código padrão e cole o seguinte:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Adicionar nova linha com timestamp e email
    sheet.appendRow([
      new Date(),
      data.email
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Clique no ícone **💾 Salvar** (ou Ctrl+S / Cmd+S)
4. Dê um nome ao projeto (ex: "Newsletter Blog API")

## Passo 3: Implantar como Web App

1. Clique em **Implantar** → **Nova implantação**
2. Clique no ícone de engrenagem ⚙️ ao lado de "Selecionar tipo"
3. Selecione **Aplicativo da Web**
4. Configure:
   - **Descrição**: Newsletter Blog Atlas Patrimonial
   - **Executar como**: Eu (seu@email.com)
   - **Quem tem acesso**: Qualquer pessoa
5. Clique em **Implantar**
6. **Autorize o acesso** quando solicitado:
   - Clique em "Autorizar acesso"
   - Selecione sua conta Google
   - Clique em "Avançado" → "Ir para [nome do projeto] (não seguro)"
   - Clique em "Permitir"
7. **Copie a URL da implantação** - ela se parece com:
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```

## Passo 4: Atualizar o Código do Site

1. Abra o arquivo `src/pages/Blog.tsx`
2. Localize a linha (aproximadamente linha 198):
   ```typescript
   const response = await fetch('https://script.google.com/macros/s/SEU_DEPLOYMENT_ID/exec', {
   ```
3. **Substitua** `SEU_DEPLOYMENT_ID` pela URL completa que você copiou no Passo 3

Exemplo:
```typescript
const response = await fetch('https://script.google.com/macros/s/AKfycbzYOUR_ACTUAL_DEPLOYMENT_ID_HERE/exec', {
```

## Passo 5: Testar a Integração

1. Acesse a página Blog do seu site
2. Role até a seção "Receba Conteúdo Exclusivo"
3. Insira um email de teste
4. Clique em "Assinar Newsletter"
5. Verifique se:
   - Aparece mensagem de sucesso no site
   - O email aparece na planilha com timestamp

## Solução de Problemas

### Erro: "Script function not found"
- Verifique se salvou o script antes de implantar
- Tente criar uma nova implantação

### Erro: "Authorization required"
- Repita o processo de autorização no Passo 3
- Certifique-se de permitir todos os acessos solicitados

### Email não aparece na planilha
- Verifique se a URL está correta no código
- Abra o Console do Apps Script (Executar → Ver execuções) para ver logs de erro
- Teste a URL diretamente no navegador - deve retornar `{"status":"API is running"}`

### Erro de CORS
- Isso é normal! O Google Apps Script funciona com `mode: 'no-cors'`
- A requisição é processada mesmo que o browser não consiga ler a resposta

## Formato dos Dados na Planilha

Cada inscrição cria uma nova linha com:

| Timestamp | Email |
|-----------|-------|
| 26/10/2025 15:30:22 | usuario@example.com |

## Próximos Passos (Opcional)

### Adicionar validação de email duplicado

No Apps Script, modifique a função `doPost`:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Verificar se email já existe
    const emails = sheet.getRange('B:B').getValues();
    const emailExists = emails.some(row => row[0] === data.email);
    
    if (emailExists) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Email já cadastrado' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Adicionar nova linha
    sheet.appendRow([new Date(), data.email]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Enviar email de confirmação automático

Adicione ao final de `doPost` (antes do return de sucesso):

```javascript
GmailApp.sendEmail(
  data.email,
  'Bem-vindo à Newsletter Atlas Patrimonial',
  'Obrigado por se inscrever! Você receberá conteúdos exclusivos sobre investimentos imobiliários.'
);
```

## Segurança

- ✅ O script só aceita requisições POST
- ✅ Os dados são validados antes de inserir
- ✅ A planilha não é acessível publicamente (apenas o script)
- ✅ Use `mode: 'no-cors'` para prevenir leitura não autorizada

## Suporte

Em caso de dúvidas:
1. Verifique os logs no Apps Script Console
2. Teste a URL manualmente no navegador
3. Consulte a documentação do Google Apps Script: https://developers.google.com/apps-script
