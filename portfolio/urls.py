from django.contrib import admin
from django.urls import path, include
from .views import * 

urlpatterns = [
    path('', index, name='main-page'),
    path('main-page/', index, name='main-page'),
    path('portfolio/', songs_list, name='portfolio'),
    path('contacts/', contacts, name='contacts'),
]