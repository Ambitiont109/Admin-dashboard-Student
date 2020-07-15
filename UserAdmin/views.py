from django.shortcuts import render, redirect, get_object_or_404
from .forms import UserAddForm, UserUpdateForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import User
# Create your views here.



@login_required
def list_user(request):
    users = User.objects.exclude(is_superuser=True)
    return render(request, 'UserAdmin/list_user.html', {'users': users})

@login_required
def add_user(request):
    if request.method == 'POST':
        form = UserAddForm(request.POST)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'User Added Successfully')
            return redirect('UserAdmin:list_user')
        print(form.errors)
        return render(request, 'UserAdmin/add_user.html', {'form': form})
    if request.method == 'GET':
        form = UserAddForm()
        return render(request, 'UserAdmin/add_user.html', {'form': form})

@login_required
def detail_user(request, pk):
    user = get_object_or_404(User.objects.exclude(is_superuser=True), pk=pk)
    form = UserUpdateForm(instance=user)
    if request.method == 'POST':
        form = UserUpdateForm(request.POST, instance=user)
        print("==========")
        print(form)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'User updated Successfully')
            return redirect('UserAdmin:list_user')
    print(form)
    return render(request, 'UserAdmin/detail_user.html', {'form': form})

@login_required
def delete_user(request, pk):
    if request.method == 'POST':
        user = get_object_or_404(User.objects.exclude(is_superuser=True), pk=pk)
        user.delete()
        messages.add_message(request, messages.SUCCESS, 'User Deleted Successfully')
        return redirect('UserAdmin:list_user')

@login_required
def set_password(request, pk):
    if(request.method == 'POST'):
        password = request.POST['password']
        user = get_object_or_404(User.objects.exclude(is_superuser=True), pk=pk)
        user.set_password(password)
        user.save()
        messages.add_message(request, messages.SUCCESS, 'Change Password Successfully')
        return redirect('UserAdmin:detail_user', pk=pk)
