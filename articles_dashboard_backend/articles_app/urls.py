from django.urls import path
from .views import get_topic_count, get_sectors_count, get_numeric_analysis, get_published_records_per_year, get_countries_count


urlpatterns = [
    path('get_sectors_count/', get_sectors_count, name='get_sectors_count'),
    path('get_topic_count/', get_topic_count, name='get_topic_count'),
    path('get_numeric_analysis/', get_numeric_analysis,
         name='get_numeric_analysis'),
    path('get_published_records_per_year/', get_published_records_per_year, name='get_published_records_per_year'),
    path('get_countries_count/', get_countries_count, name='get_countries_count'),

]
