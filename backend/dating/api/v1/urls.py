from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DislikeViewSet,
    InboxViewSet,
    LikeViewSet,
    MatchViewSet,
    ProfileViewSet,
    SettingViewSet,
    UserPhotoViewSet,
)

router = DefaultRouter()
router.register("match", MatchViewSet)
router.register("dislike", DislikeViewSet)
router.register("profile", ProfileViewSet)
router.register("inbox", InboxViewSet)
router.register("userphoto", UserPhotoViewSet)
router.register("setting", SettingViewSet)
router.register("like", LikeViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
