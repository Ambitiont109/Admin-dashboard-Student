from django.forms import ModelForm
from .models import User


class UserAddForm(ModelForm):

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'password')

    def save(self, commit=True):
        user = super(UserAddForm, self).save(commit=False)
        user.set_password(self.cleaned_data['password'])
        # do custom stuff
        if commit:
            user.save()
        return user


class UserUpdateForm(ModelForm):

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name')
