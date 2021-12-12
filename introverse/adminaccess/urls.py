from django.urls import path
from . import views

urlpatterns = [
    path('adminaccess', views.adminaccess, name='adminaccess'),
]