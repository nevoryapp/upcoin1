# Instruções de Deploy para Hostinger

## 📋 Arquivos Necessários para Deploy

Para fazer o deploy na Hostinger, você precisa fazer upload dos seguintes arquivos e pastas:

```
upcoin/
├── .next/                 # Pasta gerada após build (MUITO IMPORTANTE)
├── public/                # Contém favicon e outros assets
├── package.json          # Arquivo de configuração do Node.js
├── package-lock.json     # Arquivo de lock das dependências
```

## 🚀 Passo a Passo para Deploy

### 1. Build Localmente
Antes de fazer o upload, execute os seguintes comandos no seu computador:

```bash
# Instalar dependências (se ainda não tiver feito)
npm install

# Gerar build para produção
npm run build
```

### 2. Upload para Hostinger
1. Acesse o Painel de Controle da Hostinger
2. Vá para "Website" > "Gerenciador de Arquivos"
3. Faça upload das seguintes pastas e arquivos:
   - Pasta `.next/` (gerada após o build)
   - Pasta `public/`
   - Arquivo `package.json`
   - Arquivo `package-lock.json`

### 3. Configurar Node.js App na Hostinger
1. No Painel de Controle da Hostinger, vá para "Website" > "Configurações"
2. Encontre a seção "Node.js App"
3. Configure:
   - **Diretório de Aplicação**: `/public_html` (ou o diretório onde você fez upload dos arquivos)
   - **Domínio de Aplicação**: Seu domínio
   - **Comando de Inicialização**: `npm start`
4. Clique em "Criar Aplicação"

### 4. Reiniciar Aplicação
Após a configuração, reinicie a aplicação Node.js para aplicar as mudanças.

## 🔄 Atualizações Futuras

Para atualizar o site:
1. Faça as alterações localmente
2. Execute `npm run build` novamente
3. Faça upload apenas da pasta `.next/` (substituindo a existente)
4. Reinicie a aplicação Node.js na Hostinger

## 🎯 Links Importantes

- **Link de Checkout**: https://pay.kiwify.com.br/vIpQ4tB?afid=sQ8RUc5h
- **Favicon**: Já incluído na pasta `public/`

## ❓ Problemas Comuns

### Site não aparece após deploy
1. Verifique se todos os arquivos foram enviados corretamente
2. Certifique-se de que a pasta `.next/` está presente
3. Reinicie a aplicação Node.js
4. Verifique os logs de erro no Painel de Controle da Hostinger

### Erros de dependência
1. Certifique-se de que `package.json` e `package-lock.json` foram enviados
2. Reinicie a aplicação para forçar reinstalação de dependências

## 📞 Suporte

Se tiver problemas com o deploy, entre em contato com o suporte da Hostinger ou verifique a documentação oficial:
https://www.hostinger.com.br/tutoriais/nodejs-hostinger