from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile, Role

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ["id", "role_name"]

class UserSerializer(serializers.ModelSerializer):
    role = RoleSerializer()

    class Meta:
        model = User
        fields = ["id", "username", "password", "role"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        role_data = validated_data.pop('role')
        role = Role.objects.create(**role_data)
        user = User.objects.create_user(**validated_data)
        UserProfile.objects.create(user=user, role=role)
        return user
