from django.shortcuts import render
from datetime import datetime

# Create your views here.

def prod_details(request):
    """ A view to return the product details page """
    present_year = datetime.now().year
    return render(request, 'product_details/prod_details.html', {'present_year': present_year})