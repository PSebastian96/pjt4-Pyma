from django.shortcuts import render
from datetime import datetime

# Create your views here.

def index(request):
    """ A view to return the index page with current date """
    present_year = datetime.now().year
    return render(request, 'home/index.html', {'present_year': present_year})