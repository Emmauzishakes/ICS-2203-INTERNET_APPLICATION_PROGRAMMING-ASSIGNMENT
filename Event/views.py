from django.shortcuts import render, redirect
from django.utils import timezone

from .models import Event
from .forms import EventForm

# Create your views here.

def index(request):
    events = Event.objects.all()
    return render(request, "Event/index.html", {
        'events': events
    })

def add_events(request):
    if request.method == 'POST':
        form = EventForm(request.POST)
        if form.is_valid():
            event = form.save(commit=False)
            event.user = request.user
            event.save()
            return redirect('Event:index')
    else:
        form = EventForm()
    return render(request, "Event/add_event.html", {
        'form': form
    })