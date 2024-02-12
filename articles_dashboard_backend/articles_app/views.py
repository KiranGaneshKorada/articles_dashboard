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
 

@api_view(['GET'])
def get_sectors_count(request):
    articles = Articles.objects.all()

    Sectors = [
        "Aerospace & defence",
        "Automotive",
        "Construction",
        "Energy",
        "Environment",
        "Financial services",
        "Food & agriculture",
        "Government",
        "Healthcare",
        "Information Technology",
        "Manufacturing",
        "Media & entertainment",
        "Retail",
        "Security",
        "Support services",
        "Tourism & hospitality",
        "Transport",
        "Water",
    ]

    response=[]

    for sector in range(len(Sectors)):
        each_sector_count=articles.filter(sector=Sectors[sector]).count()
        response.append({"sector":Sectors[sector],"count":each_sector_count})

    return JsonResponse({"Data": response})



