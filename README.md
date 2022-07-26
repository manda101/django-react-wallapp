# django-react-wallapp

### Built With

* [Django](https://www.djangoproject.com//)
* [Django REST Framework](https://www.django-rest-framework.org/)
* [React](https://reactjs.org/)


### Prerequisites

Make sure yarn and python are installed.
* yarn
  ```sh
  yarn --version
  ```
* python
  ```sh
  python3 --version
  ```

### Installation

1. Clone the repo and navigate to directory
   ```sh
   git clone https://github.com/manda101/django-react-wallapp.git
   cd django-react-wallapp-clone
   ```
2. Activate python virtual environment
   ```sh
   venv\Scripts\activate
   ```
3. Install pip packages
   ```sh
   pip install -r requirements.txt
   ```
4. Install yarn packages
   ```sh
   cd frontend
   yarn install
   ```
5. Django Init
   ```sh
   python manage.py makemigrations network
   python manage.py makemigrations
   python manage.py migrate
   python manage.py createsuperuser
   ```
6. Run Django Server
   ```sh
   python manage.py runserver
   ```
7. Run React App
   ```sh
   yarn start
   ```
