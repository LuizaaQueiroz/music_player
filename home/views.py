from django.shortcuts import render
import requests

# Página inicial
def home(request):
    return render(request, 'base.html')

# Página de busca de músicas (via API Deezer)
def search_music(request):
    query = request.GET.get("q", "eminem")  # valor padrão caso o usuário não digite nada
    url = f"https://api.deezer.com/search?q={query}"
    response = requests.get(url)
    data = response.json()

    tracks = data.get("data", [])  # lista de músicas retornadas
    return render(request, "search.html", {"tracks": tracks, "query": query})
