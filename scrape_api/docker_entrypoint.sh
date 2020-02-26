#!/bin/bash

gunicorn --bind 0.0.0.0:6050 wsgi:app
