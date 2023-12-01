
from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


# similarly i have to create for 
# Doctor profile
# patient appointment profile

# products

# still yet to design the functions i ll do them as soon as i do them 
