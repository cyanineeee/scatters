from django import forms

class ImageIdentify(forms.Form):
    image = forms.ImageField()