from django.urls import path
from . import views

urlpatterns = [
    path('verses', views.verses, name='verses'),
]