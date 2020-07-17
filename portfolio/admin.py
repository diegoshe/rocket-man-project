from django.contrib import admin
from .models import Soundtrack


@admin.register(Soundtrack)
class Soundtrackadmin(admin.ModelAdmin):
    list_display = ('title', 'genre', 'description', 'date','songfile', 'image')
    list_filter = ('genre', 'date')
    search_fields = ('title', 'date')
