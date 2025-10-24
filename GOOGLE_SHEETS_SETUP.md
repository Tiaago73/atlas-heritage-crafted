# Configuração Google Sheets Integration

## Passo 1: Preparar o Google Apps Script

1. Acesse sua planilha: https://docs.google.com/spreadsheets/d/1phYgCelhhdg581n2_f20yhUoRsIbTC3N6Ae2rQdCRvk/edit
2. Clique em **Extensões** > **Apps Script**
3. Cole o código abaixo e substitua `YOUR_SHEET_ID` pelo ID da sua planilha:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1phYgCelhhdg581n2_f20yhUoRsIbTC3N6Ae2rQdCRvk').getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Adicionar os dados na planilha
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.city,
      data.objective,
      data.income,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Dados salvos com sucesso'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Passo 2: Implantar como Web App

1. No Apps Script, clique em **Implantar** > **Nova implantação**
2. Selecione o tipo: **Aplicativo da Web**
3. Configure:
   - **Executar como**: Sua conta
   - **Quem tem acesso**: Qualquer pessoa
4. Clique em **Implantar**
5. **COPIE A URL DE IMPLANTAÇÃO** (será algo como: `https://script.google.com/macros/s/AKfycby.../exec`)

## Passo 3: Atualizar o Código do Site

No arquivo `src/pages/Contato.tsx`, linha 39, substitua:

```typescript
const response = await fetch('https://script.google.com/macros/s/AKfycbzYOUR_DEPLOYMENT_ID/exec', {
```

Por:

```typescript
const response = await fetch('SUA_URL_DE_IMPLANTACAO_AQUI', {
```

## Verificar Headers da Planilha

Certifique-se de que sua planilha tem os seguintes headers na primeira linha:

| Timestamp | Nome | Email | Telefone | Cidade | Objetivo | Renda | Mensagem |
|-----------|------|-------|----------|--------|----------|-------|----------|

## Testar

1. Acesse a página de contato do site
2. Preencha o formulário
3. Envie
4. Verifique se os dados aparecem na planilha

## Troubleshooting

- Se não funcionar, verifique as permissões do Apps Script
- Certifique-se de que "Qualquer pessoa" pode acessar o Web App
- Verifique se o ID da planilha está correto no código do Apps Script
