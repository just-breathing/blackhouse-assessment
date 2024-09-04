"""
URL configuration for chartapi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from charts import views
from django.conf import settings

handler404 = views.bad_request if not settings.DEBUG else 'django.views.defaults.page_not_found'



urlpatterns = [
    path('api/v1/candlestick-chart-data', views.candlestick_data, name='candle_stick_data'),
    path('api/v1/line-chart-data', views.line_chart_data, name='line_chart_data'),
    path('api/v1/bar-chart-data', views.bar_chart_data, name='bar_chart_data'),
    path('api/v1/pie-chart-data', views.pie_chart_data, name='pie_chart_data'),
]
