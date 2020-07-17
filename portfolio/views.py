from django.shortcuts import render

from .models import Soundtrack


def index(request):
    return render(request, 'base.html')


def songs_list(request):
    songs = Soundtrack.objects.all()
    return render(request, 'portfolio/portfolio.html', {'songs': songs})


def contacts(request):
    songs = Soundtrack.objects.all()
    return render(request, 'portfolio/player.html', {'songs': songs})