from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Articles
from django.db.models import Min, Avg, Max

# Create your views here.

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

Topics= ["3D", "administration", "agriculture", "aquaculture", "artificial intelligence", "asylum", "automaker", "bank", "battery", "biofuel", "brexit", "building", "business", "capital", "car", "carbon", "change", "city", "climate", "climatechange", "clothing", "coal", "communication", "consumer", "consumption", "crisis", "data", "debt", "demand", "economic", "economic growth", "economy", "election", "electricity", "emission", "energy", "export", "factory", "farm", "finance", "food", "fossil fuel", "fracking", "gamification", "gas", "gasoline", "gdp", "government",
         "greenhouse gas", "growth", "ice", "industry", "inflation", "information", "infrastructure", "interest rate", "investment", "market", "material", "money", "nuclear", "oil", "peak oil", "plastic", "policy", "politics", "pollution", "population", "power", "production", "resource", "revenue", "risk", "robot", "security", "shale gas", "shortage", "software", "storm", "strategy", "tax", "technology", "tension", "terrorism", "tourist", "trade", "transport", "transportation", "unemployment", "vehicle", "war", "Washington", "water", "wealth", "work", "worker", "workforce"]



@api_view(['GET'])
def get_sectors_count(request):
    articles = Articles.objects.all()

    response = []

    for sector in range(len(Sectors)):
        each_sector_count = articles.filter(sector=Sectors[sector]).count()
        response.append(
            {"sector": Sectors[sector], "count": each_sector_count})

    return JsonResponse({"Data": response})


@api_view(['GET'])
def get_topic_count(request):
    articles = Articles.objects.all()

    response = [['Topic','Count']]

    for topic in range(len(Topics)):
        each_topic_count = articles.filter(topic=Topics[topic]).count()
        response.append(
            [ Topics[topic], each_topic_count])

    return JsonResponse({"Data": response})


@api_view(['GET'])
def get_numeric_analysis(request):
    articles = Articles.objects.all()
    response = []

    for sector in range(len(Sectors)):
        # each_sector_count = articles.filter(sector=Sectors[sector]).values_list('intensity','impact','relevance','likelihood')
        each_sector_count = articles.filter(
            sector=Sectors[sector]).aggregate(
                Max('intensity'),
                Avg('intensity'),
                Min('intensity'),
                Max('impact'),
                Avg('impact'),
                Min('impact'),
                Max('relevance'),
                Avg('relevance'),
                Min('relevance'),
                Max('likelihood'),
                Avg('likelihood'),
                Min('likelihood'))
        # each_sector_count = list(each_sector_count)
        response.append(
            {"sector": Sectors[sector], "count": each_sector_count})

    return JsonResponse({"Data": response})


@api_view(['GET'])
def get_published_records_per_year(request):
    articles = Articles.objects.all().dates('published','year')

    year_count=[["Year","News"],]

    for years in articles:
        count=Articles.objects.filter(published__year=years.year).count()
        year_count.append([str(years.year),count])

    print(year_count)

    return JsonResponse({"Data": year_count})


@api_view(['GET'])
def get_countries_count(request):
    countries = Articles.objects.values_list('country',flat=True).distinct()


    countries=list(countries)

    if("" in countries):
        countries.remove("")

    response = [["Country","news"],]

    for country in range(len(countries)):
        each_countries_count = Articles.objects.filter(
            country=countries[country]).count()
        response.append(
            [countries[country], each_countries_count])

    return JsonResponse({"Data": response})
