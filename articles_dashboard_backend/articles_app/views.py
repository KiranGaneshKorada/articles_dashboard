from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Articles

# Create your views here.

@api_view(['GET'])
def get_articles_count(request):
    records_count=Articles.objects.all().count()
    articles = Articles.objects.all()
    articles=articles.filter(
        sector="Energy").count()
    print(articles)

    return JsonResponse({"Data":{"records_count":records_count}})
 

