# txt2csv

Transform a txt file which contents in fixed format into a csv file.

## technical process

1. input doc from local using fs module Promise API
2. store data in Buffer which is nodejs built-in object in binary format
3. detect data(binary) encoding using chardet package
4. decode data(binary) into string using iconv-lite package, automation with error handle
5. parse string into object
   - expect string being two-dimensional structure, each section with name/title being the first element

## about data.txt

Data.txt added to .gitignore due to privacy.
the content look like below:  

- Google mail  
  - accout  
  - password  

- Riot game  
  - related to google account

## reference

[to-xml](https://www.npmjs.com/package/to-xml) which is a package from npm that transform json to xml.
