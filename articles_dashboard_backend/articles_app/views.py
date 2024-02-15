from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Articles
from django.db.models import Min, Avg, Max



@api_view(['GET'])
def get_field_count(request):
    articles = Articles.objects.all()

    filter_field=request.query_params.get("field")


    field_list=articles.values_list(f"{filter_field}",flat=True).distinct()

    field_list=list(field_list)

    if("" in field_list):
        field_list.remove("")

    response=[[filter_field,"number of articles"],]
    

    for each_item in field_list:
        print(each_item,filter_field)
        each_count=articles.filter(**{filter_field:each_item}).count()
        response.append([each_item,each_count])

    return JsonResponse({'Data':response})


@api_view(['GET'])
def get_numeric_analysis(request):
    articles = Articles.objects.all()
    response = []

    Sectors = articles.values_list("sector", flat=True).distinct()

    Sectors = list(Sectors)

    if ("" in Sectors):
        Sectors.remove("")

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
def get_numeric_analysis_buble(request):
    articles = Articles.objects.all()
    response = [["ID",{"intensity__avg": "Intensity", "impact__avg": "Impact","likelihood__avg": "Likelihood"}],]

    topics = Articles.objects.values_list('topic', flat=True).distinct()

    topics = list(topics)

    if ("" in topics):
        topics.remove("")

    for topic in topics:
        each_topic = articles.filter(topic=topic).aggregate(
            Avg('intensity'), Avg('impact'), Avg('likelihood'))
        
        response.append([topic,each_topic])

   

    return JsonResponse({"Data": response})


@api_view(['GET'])
def get_intensity_vs_region(request):
    articles = Articles.objects.all()
    response = [["Region",{"intensity__avg":"Intensity"}],]

    regions = Articles.objects.values_list('region', flat=True).distinct()

    regions = list(regions)

    if ("" in regions):
        regions.remove("")

    for region in regions:
        each_topic = articles.filter(region=region).aggregate(
            Avg('intensity'))

        response.append([region, each_topic])

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
