from django.test import TestCase
from django.urls import reverse
from django.http import JsonResponse
from django.test import TestCase
from django.urls import reverse
import json

class ChartAPITests(TestCase):
    def test_candlestick_data(self):
        print(f'====  Starting {self.__class__.__name__}.test_candlestick_data  ====\n')
        response = self.client.get(reverse('candle_stick_data'))
        self.assertEqual(response.status_code, 200)
        candlestick_data = json.loads(response.content)
        self.assertIsInstance(candlestick_data, dict)
        self.assertIn('data', candlestick_data)
        self.assertIsInstance(candlestick_data['data'], list)
        self.assertGreater(len(candlestick_data['data']), 0)
        data = candlestick_data['data'][0]
        self.assertIsInstance(data, dict)
        self.assertIn('x', data)
        self.assertIn('open', data)
        self.assertIn('close', data)
        self.assertIn('high', data)
        self.assertIn('low', data)
        print(f'====  {self.__class__.__name__}.test_candlestick_data {"successfully passed" if response.status_code == 200 else "failed"}  ====\n')

    def test_line_chart_data(self):
        print(f'====  Starting {self.__class__.__name__}.test_line_chart_data  ====\n')
        response = self.client.get(reverse('line_chart_data'))
        self.assertEqual(response.status_code, 200)
        line_chart_data = json.loads(response.content)
        self.assertIsInstance(line_chart_data, dict)
        self.assertIn('labels', line_chart_data)
        self.assertIsInstance(line_chart_data['labels'], list)
        self.assertIn('data', line_chart_data)
        self.assertIsInstance(line_chart_data['data'], list)
        self.assertGreater(len(line_chart_data['labels']), 0)
        self.assertGreater(len(line_chart_data['data']), 0)
        print(f'====  {self.__class__.__name__}.test_line_chart_data {"successfully passed" if response.status_code == 200 else "failed"}  ====\n')

    def test_bar_chart_data(self):
        print(f'====  Starting {self.__class__.__name__}.test_bar_chart_data  ====\n')
        response = self.client.get(reverse('bar_chart_data'))
        self.assertEqual(response.status_code, 200)
        bar_chart_data = json.loads(response.content)
        self.assertIsInstance(bar_chart_data, dict)
        self.assertIn('labels', bar_chart_data)
        self.assertIsInstance(bar_chart_data['labels'], list)
        self.assertIn('data', bar_chart_data)
        self.assertIsInstance(bar_chart_data['data'], list)
        self.assertGreater(len(bar_chart_data['labels']), 0)
        self.assertGreater(len(bar_chart_data['data']), 0)
        print(f'====  {self.__class__.__name__}.test_bar_chart_data {"successfully passed" if response.status_code == 200 else "failed"}  ====\n')

    def test_pie_chart_data(self):
        print(f'====  Starting {self.__class__.__name__}.test_pie_chart_data  ====\n')
        response = self.client.get(reverse('pie_chart_data'))
        self.assertEqual(response.status_code, 200)
        pie_chart_data = json.loads(response.content)
        self.assertIsInstance(pie_chart_data, dict)
        self.assertIn('labels', pie_chart_data)
        self.assertIsInstance(pie_chart_data['labels'], list)
        self.assertIn('data', pie_chart_data)
        self.assertIsInstance(pie_chart_data['data'], list)
        self.assertGreater(len(pie_chart_data['labels']), 0)
        self.assertGreater(len(pie_chart_data['data']), 0)
        print(f'====  {self.__class__.__name__}.test_pie_chart_data {"successfully passed" if response.status_code == 200 else "failed"}  ====\n')

