# django-react-wallapp

### Built With

* [Django](https://www.djangoproject.com//)
* [Django REST Framework](https://www.django-rest-framework.org/)
* [React](https://reactjs.org/)


### Prerequisites

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
   cd django-react-wallapp
   ```
2. Activate python virtual environment
   ```sh
   python3 -m venv testVenv
   testVenv\Scripts\activate
   ```
3. Install pip packages
   ```sh
   cd backend
   pip install -r requirements.txt
   ```
4. Django Init (if needed)
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   python manage.py createsuperuser
   ```
5. Run Django Server (in a separate window)
   ```sh
   python manage.py runserver
   ```
   development server at http://127.0.0.1:8000/
   API admin http://localhost:8000/admin/
6. Install yarn packages
   ```sh
   cd frontend
   yarn install
   ```
8. Run React App
   ```sh
   yarn start
   ```
   http://localhost:3000
