from re import U
from django.shortcuts import render
from .models import UploadImages
from .forms import ImageIdentify


def upload(request):
    tmpimg = ImageIdentify(request.POST,request.FILES)
    if tmpimg.is_valid():
        imgname = request.FILES['image'].name
        image = UploadImages(imagename=imgname,images=request.FILES['image'])
        image.save()
def display():
    content = UploadImages.objects.all()
    namelist = []
    for con in content:
        temp=con.get_img_name()
        namelist.append(temp)
    if namelist == []:
        return []
    else:
        return namelist


def index(request):
    if request.method == 'POST':
        upload(request)
    content = display()
    print(content)
    return render(request,'index.html',{'content':content})


