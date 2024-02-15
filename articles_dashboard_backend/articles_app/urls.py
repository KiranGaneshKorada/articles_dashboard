from django.urls import path
from .views import get_numeric_analysis, get_published_records_per_year, get_countries_count, get_numeric_analysis_buble, get_intensity_vs_region, get_field_count


urlpatterns = [
    path('get_field_count/', get_field_count, name='get_field_count'),

    path('get_numeric_analysis/', get_numeric_analysis,
         name='get_numeric_analysis'),

    path('get_published_records_per_year/', get_published_records_per_year,
         name='get_published_records_per_year'),

    path('get_countries_count/', get_countries_count, name='get_countries_count'),

    path('get_numeric_analysis_buble/',
         get_numeric_analysis_buble, name='get_numeric_analysis_buble'),

    path('get_intensity_vs_region/',
         get_intensity_vs_region, name='get_intensity_vs_region'),

    

]
