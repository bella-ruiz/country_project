from flask import Flask, render_template
from modules import convert_to_dict
from flask_bootstrap import Bootstrap

app = Flask(__name__)
application = app
#make a dictionary here how to loop over a dictionary
country_list = convert_to_dict("countries.csv")

pairs_list = []
for p in country_list:
    pairs_list.append( (p['ID'], p['Name']) )

@app.route('/')
def index():
    return render_template('index.html', pairs=pairs_list, the_title="Top Causes of Death Among the Top Ten Fastest Developing Countries")

@app.route('/country/<num>')
def detail(num):
    try:
        country_dict = country_list[int(num) - 1]
    except:
        return f"<h1>Invalid value for Country: {num} </h1>"
    return render_template('country.html', country=country_dict, the_title=country_dict['Name'])

if __name__ == '__main__':
    app.run(debug=True)
