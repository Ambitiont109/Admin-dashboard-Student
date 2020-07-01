# from django.shortcuts import render
from rest_framework import viewsets, pagination
from rest_framework.permissions import IsAuthenticated
from .models import Student
from .serializers import StudentSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class StudentViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = StudentSerializer
    pagination_class = pagination.LimitOffsetPagination
    queryset = Student.objects.all()


@api_view(['POST','GET'])
def findVin(request):
    if request.method == 'POST':
        return Response({'status': 'POST'})
    if request.method == 'GET':
        return Response({'status': 'GET'})
