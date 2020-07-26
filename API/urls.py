from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views as token_views
from . import views

app_name = 'API'

router = DefaultRouter()
router.register(r'students', views.StudentViewSet, basename='student')



urlpatterns = [
    path('', include(router.urls)),
    path('login/', token_views.obtain_auth_token),
    path('test/', views.findVin)
]
