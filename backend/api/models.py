from django.db import models
from django.contrib.auth.models import User

class Role(models.TextChoices):
    USER = 'user'
    SURGEON = 'surgeon'
    RADIOLOGIST = 'radiologist'
    TELERADIOLOGIST = 'teleradiologist'

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=Role.choices, default=Role.USER)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'app_user'
