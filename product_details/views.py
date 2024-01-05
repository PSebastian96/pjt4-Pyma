from django.shortcuts import render

# Create your views here.

def prod_details(request):
    """ A view to return the product details page """

    return render(request, 'product_details/prod_details.html')