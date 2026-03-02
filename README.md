#  Music Player

Aplicação web que consome a API pública da Deezer para buscar músicas em
tempo real e reproduzir previews diretamente no navegador.

Este projeto foi desenvolvido com foco em aprendizado de consumo de APIs
REST, manipulação de dados JSON e integração entre frontend e backend.

------------------------------------------------------------------------

##  Funcionalidades

-    Busca de músicas por nome do artista ou faixa
-    Reprodução de preview (30 segundos)
-    Exibição da capa do álbum
-    Exibição do nome do artista
-    Resultados dinâmicos via API

------------------------------------------------------------------------

##  API Utilizada

API pública da Deezer:

-   Endpoint de busca: `https://api.deezer.com/search?q={query}`

A resposta da API inclui:

-   Nome da música
-   Nome do artista
-   Álbum
-   Capa do álbum
-   Link para preview da música

Documentação oficial: https://developers.deezer.com/api

------------------------------------------------------------------------

##  Tecnologias Utilizadas

-   Python
-   Django
-   HTML5
-   CSS3
-   JavaScript
-   Consumo de API REST
-   JSON

------------------------------------------------------------------------

##  Como Executar o Projeto

### 1️⃣ Clone o repositório

``` bash
git clone https://github.com/LuizaaQueiroz/music_player.git
cd music_player
```

### 2️⃣ Crie o ambiente virtual

``` bash
py -m venv .venv
```

Ative no Windows:

``` bash
.\.venv\Scriptsctivate
```

### 3️⃣ Instale as dependências

``` bash
py -m pip install -r requirements.txt
```

### 4️⃣ Execute o servidor

``` bash
python manage.py runserver
```

Acesse no navegador:

http://127.0.0.1:8000

.
