from django.shortcuts import render
from datetime import datetime

# Create your views here.

def subscriptions(request):
    """ A view to subscriptions page """
    present_year = datetime.now().year
    return render(request, 'subscriptions/subscriptions.html', {'present_year': present_year})