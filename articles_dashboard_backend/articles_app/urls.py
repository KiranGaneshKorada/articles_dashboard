from django.urls import include, path
from .views import get_articles_count, get_sectors_count, get_numeric_analysis


urlpatterns = [
    path('get_articles_count/', get_articles_count, name='get_articles_count'),
    path('get_sectors_count/', get_sectors_count, name='get_sectors_count'),
    path('get_numeric_analysis/', get_numeric_analysis,
         name='get_numeric_analysis')
]
