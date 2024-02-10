from django.db import models

# Create your models here.

class Articles(models.Model):
    end_year=models.IntegerField(blank=True, null=True)
    intensity=models.IntegerField(blank=True, null=True)
    sector=models.CharField(max_length=100)
    topic = models.CharField(max_length=100)
    insight = models.TextField()
    url = models.TextField()
    region = models.CharField(max_length=100)
    start_year = models.IntegerField(blank=True, null=True)
    impact = models.TextField()
    added=models.DateTimeField(blank=True, null=True)
    published = models.DateTimeField(blank=True, null=True)
    country = models.CharField(max_length=100)
    relevance = models.IntegerField(blank=True, null=True)
    pestle = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    title = models.TextField(max_length=100)
    likelihood = models.IntegerField(blank=True, null=True)
