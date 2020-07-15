import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEBUG = True
ALLOWED_HOSTS = ['wja.gradata.org']
# ALLOWED_HOSTS = ['192.232.213.37', 'standomsports.com']
STATIC_URL = '/static/'
# STATIC_ROOT = '/var/www/html/standom/static'
# MEDIA_ROOT = '/var/www/html/standom/upload'
STATIC_ROOT = '/var/www/html/gradata/static'
MEDIA_ROOT = os.path.join(BASE_DIR, 'upload')
MEDIA_URL = '/media/'
print("Debug:", DEBUG)
