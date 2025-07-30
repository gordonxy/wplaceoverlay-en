# Wplace Overlay Script

Um script de usuário (Tampermonkey/Greasemonkey) que aprimora a experiência no site `wplace.live`, permitindo a sobreposição de uma imagem personalizada na tela. Com este script, você pode carregar um modelo (template), ajustar sua posição, tamanho, opacidade e modo de mesclagem, facilitando a criação de artes em conjunto.

Todas as configurações, incluindo a imagem, são salvas localmente no seu navegador, para que você não precise reconfigurar tudo a cada visita.

![Exemplo da interface do script na tela do wplace.live](https://i.imgur.com/DaCfs9Q.png)

## ✨ Funcionalidades

- **Escolher Imagem Local**: Carregue qualquer imagem do seu computador para ser usada como overlay.
- **Opacidade Ajustável**: Controle a transparência da imagem com um slider preciso (de 0% a 100%).
- **Mover e Redimensionar**: Arraste a imagem para qualquer lugar da tela e redimensione-a livremente puxando pelas bordas.
- **Controle de Tamanho Fino**:
    - Defina a largura e a altura em pixels.
    - Aplique uma escala (ex: 1.5x, 2x) para manter a proporção original.
    - Restaure o tamanho original da imagem com um clique.
- **Modos de Mesclagem**: Alterne entre diferentes modos (`mix-blend-mode`) para melhor visualização sobre a arte, incluindo "Normal", "Overlay", "Difference" e "Exclusion".
- **Fixar Posição/Tamanho**: Trave o overlay no lugar para evitar movimentos e redimensionamentos acidentais enquanto desenha.
- **Centralização Rápida**: Posicione o overlay exatamente no centro da tela.
- **Persistência de Dados**: Todas as suas configurações (imagem, posição, tamanho, opacidade, modo e estado de fixação) são salvas automaticamente no `localStorage` do navegador.
- **Resetar Tudo**: Limpe todas as configurações e remova o overlay para começar do zero.

## 🚀 Instalação

Para usar este script, você precisa primeiro de um gerenciador de scripts de usuário instalado no seu navegador.

1.  **Instale um Gerenciador de Scripts**:
    -   [Tampermonkey](https://www.tampermonkey.net/) (recomendado para Chrome, Firefox, Edge, Safari, Opera)
    -   [Violentmonkey](https://violentmonkey.github.io/) (alternativa popular)
    -   [Greasemonkey](https://www.greasespot.net/) (para Firefox)

2.  **Instale o Wplace Overlay Script**:
    -   Vá para a [página do script](https://greasyfork.org/pt-BR/scripts/544135-wplace-overlay).
    -   O seu gerenciador de scripts detectará o arquivo e abrirá uma nova aba.
    -   Clique no botão **"Instalar"**.

Pronto! O script será ativado automaticamente quando você visitar o site `wplace.live`.

## 📖 Como Usar

1.  Acesse **[https://wplace.live/](https://wplace.live/)**.
2.  Um painel de controle aparecerá no lado direito da tela.
3.  **Escolher Imagem**: Clique neste botão para abrir a janela de seleção e carregar sua imagem de referência.
4.  **Modo**: Alterne entre os modos de mesclagem para encontrar a melhor visualização.
5.  **Slider de Opacidade**: Arraste para deixar a imagem mais ou menos transparente.
6.  **Bloqueado/Editável**:
    -   **🔓 Editável**: Você pode mover a imagem (clicando e arrastando) e redimensioná-la (puxando pelas bordas).
    -   **🔒 Bloqueado**: A imagem fica fixa, impedindo cliques e movimentos acidentais.
7.  **Controles de Tamanho**:
    -   **Px**: Insira valores de largura/altura e clique em "Aplicar" para um tamanho exato.
    -   **Escala**: Insira um fator (ex: `0.5` para metade, `2` para o dobro) e clique em "Aplicar" para redimensionar mantendo a proporção.
    -   **Tamanho Original**: Restaura as dimensões originais da imagem.
8.  **Centralizar na tela**: Alinha o overlay ao centro da janela do navegador.
9.  **Redefinir Overlay**: Remove a imagem e apaga todas as configurações salvas. A página será recarregada.

## ✍️ Autor

-   **FrodoCompacto** - [GitHub](https://github.com/FrodoCompacto)

## 📜 Licença

Este projeto é de código aberto e distribuído sob a Licença MIT.
