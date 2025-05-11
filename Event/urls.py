from django.urls import path

from . import views

app_name = 'Event'
urlpatterns = [
    path('', views.index, name='index'),
    path('add-event', views.add_events, name="add-event"),
]
