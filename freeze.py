"""standard freeze script"""

from flask_frozen import Freezer

from data import country

@freezer.register_generator
def country():
    for item in country:
        yield { 'id': item['id'] }
# instead of "filename," below, use the name of the file that
# runs YOUR Flask app - omit .py from the filename
from country import app

app.config['FREEZER_RELATIVE_URLS'] = True

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze();
