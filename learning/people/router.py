from .views import PersonViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('person', PersonViewSet)