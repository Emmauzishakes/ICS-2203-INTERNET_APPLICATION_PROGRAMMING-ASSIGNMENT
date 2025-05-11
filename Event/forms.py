from django import forms

from .models import Event

INPUT_CLASSES = 'w-full py-4 px-6 rounded-xl border'

class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ('name', 'description', 'event_date')
        widget = {
            'name': forms.TextInput(attrs={'class': INPUT_CLASSES}),
            'description': forms.Textarea(attrs={'class': INPUT_CLASSES}),
            'event_date': forms.DateTimeField(
                widget=forms.DateTimeInput(
                    attrs={
                        'type': 'datetime-local',
                        'placeholder': '2000-01-20T12:30',  # datetime-local expects both date and time
                        'class': 'text-red-500'
                    }
                ),
                input_formats=['%Y-%m-%dT%H:%M']  # this matches the datetime-local input format
            )

        }