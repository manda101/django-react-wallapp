import json
from datetime import datetime
from urllib import request, response
from rest_framework import status, generics
from rest_framework.test import APIRequestFactory, APIClient, APITestCase, force_authenticate
from django.contrib.auth.models import User
from django.test import TestCase
from django.test.utils import override_settings
from django.urls import reverse
from .views import PostAdd
from .models import Post
from .serializer import PostSerializer

class UserTests(APITestCase):
    
    def setUp(self):
        self.email = 'testuser1@exampleemail.com'
        self.username = 'testuser1'
        self.password = 'testuser1password!'
        self.user = User.objects.create_user(
            self.username, self.email, self.password)

        self.data = {
            'username': self.username,
            'password': self.password
        }      

    def test_register_user(self):
        url = reverse('auth_register')
        data = {
            'username': 'testuser2',
            'email': 'testuser2@exampleemail.com', 
            'password': 'testuser2password!', 
            'confirm_password': 'testuser2password!'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_tokens(self):
        client = APIClient(enforce_csrf_checks=True)
        url = reverse('token_obtain_pair')
        response = client.post(url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    

class PostTests(APITestCase):
    def test_create_post(self):
        factory = APIRequestFactory()
        user = User.objects.create_user('testuser1', 'testuser1@exampleemail.com', 'testuser2password!')
        view = PostAdd.as_view()
        url = reverse('post_add')
        data = {
            'name': 'testuser1', 
            'body': 'This is a message from testuser1'
        }
        request = factory.post(url, data, format='json')
        force_authenticate(request, user=user, token=None)
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.count(), 1)
        self.assertEqual(Post.objects.get().name, 'testuser1')

    def test_get_posts(self):
        url = reverse('post_list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
