from django.db import models

# Create your models here.
class UploadImages(models.Model):
    imagename = models.CharField(max_length=255)
    images = models.ImageField()
    def get_img_name(self):
        return self.imagename
