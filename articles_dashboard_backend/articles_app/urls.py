from django.urls import include, path
from .views import get_topic_count, get_sectors_count, get_numeric_analysis


urlpatterns = [
    path('get_sectors_count/', get_sectors_count, name='get_sectors_count'),
    path('get_topic_count/', get_topic_count, name='get_topic_count'),
    path('get_numeric_analysis/', get_numeric_analysis,
         name='get_numeric_analysis')
]
