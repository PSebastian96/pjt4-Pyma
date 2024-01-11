from django.shortcuts import render
from datetime import datetime
# Create your views here.

from django.shortcuts import render

def about_us(request):
    """ A view to return the about us page """
    present_year = datetime.now().year
    return render(request, 'about/about_us.html', {'present_year': present_year})