from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest

# The 404 error handler
def bad_request(request, exception):
    return HttpResponse('No route exists', status=404, content_type='text/plain')
def candlestick_data(request):
    if request.method != 'GET':
        return HttpResponseBadRequest('Only GET is supported for this route')

    try:
        data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            ]
        }
        return JsonResponse(data,status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def line_chart_data(request):
    if request.method != 'GET':
        return HttpResponseBadRequest('Only GET is supported for this route')

    try:
        data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
        return JsonResponse(data,status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def bar_chart_data(request):
    if request.method != 'GET':
        return HttpResponseBadRequest('Only GET is supported for this route')

    try:
        data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
        return JsonResponse(data,status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def pie_chart_data(request):
    if request.method != 'GET':
        return HttpResponseBadRequest('Only GET is supported for this route')

    try:
        data = {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
        return JsonResponse(data,status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

