from django.db import models

# Create your models here.


class Student(models.Model):
    # Contact Info
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, blank=True, null=True)
    phonenumber = models.CharField(max_length=255, blank=True, null=True)
    mailAddress = models.CharField(max_length=255, blank=True, null=True)
    isContracted = models.CharField(max_length=255, blank=True, null=True)
    reason = models.TextField(blank=True, null=True)
    staffName = models.CharField(max_length=255)
    isEngaged = models.CharField(max_length=255, blank=True, null=True)
    isgrduateWJA = models.CharField(max_length=255, blank=True, null=True)
    graduateWJA = models.CharField(max_length=255, blank=True, null=True)
    sponsorName = models.CharField(max_length=255, blank=True, null=True)

    # High School Info
    isAttendHighSchool = models.CharField(max_length=255, blank=True, null=True)
    typeOfHighSchool = models.CharField(max_length=255, blank=True, null=True)
    isReceivedAid = models.CharField(max_length=255, blank=True, null=True)
    isGraduated = models.CharField(max_length=255, blank=True, null=True)
    highschool_name = models.CharField(max_length=255, blank=True, null=True)
    highschool_location = models.CharField(max_length=255, blank=True, null=True)

    # CollegeInfo

    isAttendCollege = models.CharField(max_length=255, blank=True, null=True)
    typeOfCollege = models.CharField(max_length=255, blank=True, null=True)
    isReceivedScholarship = models.CharField(max_length=255, blank=True, null=True)
    isGraduatedCollege = models.CharField(max_length=255, blank=True, null=True)
    fieldOfStudy = models.CharField(max_length=255, blank=True, null=True)
    nameOfCollege = models.CharField(max_length=255, blank=True, null=True)
    locationOfCollege = models.CharField(max_length=255, blank=True, null=True)

    # Military Info
    isEnlistMilitary = models.CharField(max_length=255, blank=True, null=True)
    branchOfMilitary = models.CharField(max_length=255, blank=True, null=True)

    # Employment Info
    isEmployed = models.CharField(max_length=255, blank=True, null=True)
    nameOfCompany = models.CharField(max_length=255, blank=True, null=True)
    jobTitle = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
