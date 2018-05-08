import records
countrydb = records.Database('sqlite:///country.db')

countryfile = open("cdata/country.csv", 'r')
headerline = countryfile.readline()
header = headerline.split('|')

countrydb.query('create table country (' +
    header[0] + " text," +
    header[1] + " text," +
    header[2] + " text," +
    header[3] + " text," +
    header[4] + " text," +
    header[5] + " text," +
    header[6] + " text," +
    header[7] + " text," +
    header[8] + " text," +
    header[9] + " text," +
    header[10] + " text," +
    header[11] + " text," +
    header[12] + " text," +
    header[13] + " text," +
    header[14].strip() + " text)"    
)

for line in countryfile:
    data = line.split('|')
    print(data)
    countrydb.query('insert into country values ("' +
        data[0] +'", "' +
        data[1] +'", "' +
        data[2] +'", "' +
        data[3] +'", "' +
        data[4] +'", "' +
        data[5] +'", "' +
        data[6] +'", "' +
        data[7] +'", "' +
        data[8] +'", "' +
        data[9] +'", "' +
        data[10] +'", "' +
        data[11] +'", "' +
        data[12] +'", "' +
        data[13] +'", "' +
        data[14].strip() +'")'
    )
countryfile.close()
