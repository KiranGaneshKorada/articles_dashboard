from django.contrib import admin
from .models import Articles
from import_export import resources
from import_export.admin import ImportExportModelAdmin

# Register your models here.

class ArticlesResource(resources.ModelResource):
    class Meta:
        model=Articles

class ArticlesAdmin(ImportExportModelAdmin):
    resource_class=ArticlesResource

admin.site.register(Articles,ArticlesAdmin)
