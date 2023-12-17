# txt2xml

Transform a txt file into a xml file.

## technical process

1. input doc from local by fs module Promise API
2. store data in Buffer in binary format, as fsPromises.readFile don't support big-5 encoding of which my input doc is
3. detect data(binary) encoding by chardet package
4. decode data(binary) into string by iconv-lite package, automation with error handle
5. replace invalid character for xml2js package
6. parse string into object
   - expect string being two-dimensional structure, each section with name/title being the first element
7. parse object into string in XML format by xml2js package
8. output xml file by fs module Promise API

## about data.txt

data.txt added to .gitignore due to privacy.
the content look like below:  

- Google mail  
  - accout  
  - password  

- Riot game  
  - related to google account

## dependency

- chardet package: detect encoding
- iconv-lite package: decoding
- xml2js package: parse object into xml string
