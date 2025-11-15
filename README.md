# UPCOIN - Landing Page

Landing page otimizada para venda do ebook "UPCOIN: O Segredo das Criptos".

## 🚀 Como rodar o projeto

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Rodar em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000)

3. **Gerar build para produção:**
   ```bash
   npm run build
   ```

4. **Rodar versão de produção:**
   ```bash
   npm start
   ```

## 📁 Estrutura de arquivos para deploy

Para hospedar na Hostinger, faça upload dos seguintes arquivos e pastas:
- `.next/` (pasta gerada após build)
- `public/` (contém favicon e outros assets)
- `package.json`
- `package-lock.json`
- `server.js`

## 🔧 Deploy na Hostinger

1. Execute `npm run build` localmente
2. Faça upload das pastas e arquivos mencionados acima
3. Configure o Node.js App na Hostinger apontando para o diretório correto
4. Defina o comando de inicialização como `npm start`
5. Instale as dependências com `npm ci --only=production`

## 🎯 Links importantes

- Link de checkout: https://pay.kiwify.com.br/vIpQ4tB?afid=sQ8RUc5h
- Favicon: /favicon.ico

## 🛠 Tecnologias utilizadas

- Next.js 14+
- React 18
- Tailwind CSS
- Framer Motion

## 📞 Suporte

Consulte os arquivos:
- `HOSTINGER-CONFIG.txt` para instruções detalhadas de configuração
- `DEPLOY.md` para guia completo de deploy
- `INSTRUCOES-FINAIS.txt` para passos rápidos