# ES6CitiesWithPopulation

## Description

The **ES6CitiesWithPopulation** package is designed to use import functions in ES6 to grab an array of cities. There are two sets of methods of retrieving cities, one called getCities() (for cities larger than 100,000 people) and one called getCitiesMedium() (for cities larger than 50,000 people)


## Example Data Structure
The exported data follows the structure of an array of city objects, where each object includes the following properties:

geoname_id: The unique ID of the city.
name: The name of the city.
country_code: The country code of the city.
cou_name_en: The English name of the country.
population: The population of the city.
admin1_code: The administrative code of the city.


## Note on admin1_code

Unfortuantely, I was not able to retrieve fips/etc code related to admin1_code so most subdivisions. I was only able to use U.S. states from this dataset, so no Canadian provinces, Russian oblasts or Brazilian states. My apologies for any inconveniences

## Requirements

This script does not have any external dependencies and should work in most modern JavaScript environments.

## License

This project is licensed under the MIT License.

## Source

### Dataset:

**Publisher**: GeoNames

**Reference**: https://download.geonames.org/export/dump/

**Attributions**: https://www.geonames.org/about.html

**Data valid as of**: 2023-08-09